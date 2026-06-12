"use client";

import { LiveRiskGraph } from "@/components/risk-calculator/LiveRiskGraph";
import { ModuleCard } from "@/components/risk-calculator/ModuleCard";
import { QuestionPanel } from "@/components/risk-calculator/QuestionPanel";
import { RiskSpeedometer } from "@/components/risk-calculator/RiskSpeedometer";
import {
  RISK_CALCULATOR_UI,
  RISK_MODULES,
  getRiskModule,
  getRiskSuggestions,
  type RiskModuleId,
} from "@/data/risk-calculator";
import {
  computeVulnerabilityScore,
  scoreFromAnswer,
  type RiskAnswer,
  type RiskAnswerValue,
} from "@/lib/risk-calculator/scoring";
import { riskLeadSchema } from "@/lib/risk-calculator/schema";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Loader2, X } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";

type Phase = "idle" | "picker" | "wizard" | "analyzing" | "results" | "leadGate" | "complete";

export function RiskCalculatorExperience() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeModuleId, setActiveModuleId] = useState<RiskModuleId | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [answers, setAnswers] = useState<RiskAnswer[]>([]);
  const [currentValue, setCurrentValue] = useState<RiskAnswerValue | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [leadErrors, setLeadErrors] = useState<Record<string, string>>({});

  const activeModule = activeModuleId ? getRiskModule(activeModuleId) : null;
  const currentQuestion = activeModule?.questions[questionIndex];

  const liveScore = useMemo(() => {
    if (phase === "results" || phase === "leadGate" || phase === "complete") return finalScore;
    const partial = [...answers];
    if (currentValue !== null && currentQuestion) {
      partial.push({
        questionId: currentQuestion.id,
        value: currentValue,
        score: scoreFromAnswer(currentQuestion, currentValue),
      });
    }
    return computeVulnerabilityScore(partial);
  }, [answers, currentQuestion, currentValue, finalScore, phase]);

  const suggestions =
    activeModuleId && (phase === "results" || phase === "leadGate" || phase === "complete")
      ? getRiskSuggestions(activeModuleId, finalScore)
      : null;

  const scrollToPanel = useCallback(() => {
    requestAnimationFrame(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const primeFirstQuestion = useCallback((moduleId: RiskModuleId) => {
    const mod = getRiskModule(moduleId);
    const first = mod.questions[0];
    if (first?.type === "slider" && first.slider) {
      const defaultValue = first.slider.defaultValue;
      setCurrentValue(defaultValue);
      setAnswers([
        {
          questionId: first.id,
          value: defaultValue,
          score: scoreFromAnswer(first, defaultValue),
        },
      ]);
      return;
    }
    setCurrentValue(null);
    setAnswers([]);
  }, []);

  const startModule = useCallback(
    (moduleId: RiskModuleId) => {
      setActiveModuleId(moduleId);
      setQuestionIndex(0);
      setSlideDirection(1);
      setFinalScore(0);
      setLead({ name: "", email: "", phone: "" });
      setLeadErrors({});
      primeFirstQuestion(moduleId);
      setPhase("wizard");
      scrollToPanel();
    },
    [primeFirstQuestion, scrollToPanel],
  );

  const openPicker = useCallback(() => {
    setPhase("picker");
    setActiveModuleId(null);
    scrollToPanel();
  }, [scrollToPanel]);

  const closePanel = useCallback(() => {
    setPhase("idle");
    setActiveModuleId(null);
    setQuestionIndex(0);
    setAnswers([]);
    setCurrentValue(null);
    setFinalScore(0);
    setLead({ name: "", email: "", phone: "" });
    setLeadErrors({});
  }, []);

  const handleAnswerChange = useCallback(
    (value: RiskAnswerValue, score: number) => {
      setCurrentValue(value);
      if (!currentQuestion) return;
      setAnswers((prev) => {
        const filtered = prev.filter((a) => a.questionId !== currentQuestion.id);
        return [...filtered, { questionId: currentQuestion.id, value, score }];
      });
    },
    [currentQuestion],
  );

  const goNext = useCallback(async () => {
    if (!activeModule || !currentQuestion || currentValue === null) return;

    if (questionIndex < activeModule.questions.length - 1) {
      setSlideDirection(1);
      const nextIndex = questionIndex + 1;
      setQuestionIndex(nextIndex);
      const nextQ = activeModule.questions[nextIndex];
      const existing = answers.find((a) => a.questionId === nextQ.id);
      if (existing) {
        setCurrentValue(existing.value);
      } else if (nextQ.type === "slider" && nextQ.slider) {
        setCurrentValue(nextQ.slider.defaultValue);
        handleAnswerChange(
          nextQ.slider.defaultValue,
          scoreFromAnswer(nextQ, nextQ.slider.defaultValue),
        );
      } else {
        setCurrentValue(null);
      }
      return;
    }

    setPhase("analyzing");
    scrollToPanel();
    await new Promise((r) => setTimeout(r, 1500));
    const score = computeVulnerabilityScore(answers);
    setFinalScore(score);
    setPhase("results");
    scrollToPanel();
  }, [
    activeModule,
    answers,
    currentQuestion,
    currentValue,
    handleAnswerChange,
    questionIndex,
    scrollToPanel,
  ]);

  const goBack = useCallback(() => {
    if (!activeModule) return;
    if (questionIndex === 0) {
      closePanel();
      return;
    }
    setSlideDirection(-1);
    const prevIndex = questionIndex - 1;
    setQuestionIndex(prevIndex);
    const prevQ = activeModule.questions[prevIndex];
    const existing = answers.find((a) => a.questionId === prevQ.id);
    setCurrentValue(existing?.value ?? null);
  }, [activeModule, answers, closePanel, questionIndex]);

  const submitLead = useCallback(async () => {
    const parsed = riskLeadSchema.safeParse(lead);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        fieldErrors[key] = issue.message;
      }
      setLeadErrors(fieldErrors);
      return;
    }
    setLeadErrors({});
    await new Promise((r) => setTimeout(r, 800));
    setPhase("complete");
  }, [lead]);

  const panelOpen = phase !== "idle";
  const graphActive = panelOpen && phase !== "picker";

  return (
    <>
      <div className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
          {RISK_CALCULATOR_UI.pageEyebrow}
        </p>
        <h1 className="font-poppins text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
          {RISK_CALCULATOR_UI.pageTitle}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
          {RISK_CALCULATOR_UI.pageSubtitle}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={openPicker}
            className="risk-calc-cta inline-flex min-h-[52px] items-center justify-center rounded-xl bg-brand-gold px-8 text-base font-bold text-brand-navy transition-all duration-300 hover:bg-brand-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
          >
            {RISK_CALCULATOR_UI.entryCta}
          </button>
          <span className="text-sm text-brand-muted">{RISK_CALCULATOR_UI.entryCtaSub}</span>
        </div>
      </div>

      <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-8">
        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
          {RISK_MODULES.map((module, index) => (
            <div
              key={module.id}
              className={cn(
                activeModuleId === module.id && panelOpen && "rounded-2xl ring-2 ring-brand-teal/40",
              )}
            >
              <ModuleCard
                module={module}
                index={index}
                compact
                onAction={() => startModule(module.id)}
              />
            </div>
          ))}
        </div>

        <div className="min-h-[320px] sm:min-h-0">
          <LiveRiskGraph
            score={liveScore}
            isActive={graphActive || liveScore > 0}
            className="h-full min-h-[320px]"
          />
        </div>
      </div>

      <div ref={panelRef} className="scroll-mt-28">
        <AnimatePresence mode="wait">
          {panelOpen ? (
            <motion.section
              key="inline-panel"
              initial={{ opacity: 0, y: 24, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 16, height: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="mt-10 overflow-hidden rounded-2xl border border-brand-navy/8 bg-white shadow-[0_24px_56px_-28px_rgba(10,22,40,0.18)]"
            >
              <div className="flex items-center justify-between border-b border-brand-navy/8 bg-brand-cream/60 px-5 py-4 sm:px-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">
                    {activeModule?.focus ?? "Risk Assessment"}
                  </p>
                  <h2 className="font-poppins text-xl font-bold text-brand-navy sm:text-2xl">
                    {activeModule?.title ?? RISK_CALCULATOR_UI.dashboardTitle}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closePanel}
                  aria-label="Close assessment panel"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-brand-navy/10 bg-white text-brand-muted transition hover:border-brand-teal/40 hover:text-brand-navy"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5 sm:p-8">
                <AnimatePresence mode="wait">
                  {phase === "picker" ? (
                    <motion.div
                      key="picker"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="mb-6 text-sm text-brand-muted sm:text-base">
                        {RISK_CALCULATOR_UI.dashboardSubtitle}
                      </p>
                      <div className="grid gap-5 sm:grid-cols-2">
                        {RISK_MODULES.map((module, index) => (
                          <ModuleCard
                            key={module.id}
                            module={module}
                            index={index}
                            onAction={() => startModule(module.id)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ) : null}

                  {phase === "wizard" && activeModule && currentQuestion ? (
                    <motion.div
                      key="wizard"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="min-h-[360px]"
                    >
                      <QuestionPanel
                        question={currentQuestion}
                        questionIndex={questionIndex}
                        totalQuestions={activeModule.questions.length}
                        value={currentValue}
                        direction={slideDirection}
                        onChange={handleAnswerChange}
                        onBack={goBack}
                        onNext={goNext}
                        isLast={questionIndex === activeModule.questions.length - 1}
                      />
                    </motion.div>
                  ) : null}

                  {phase === "analyzing" ? (
                    <motion.div
                      key="analyzing"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-[320px] flex-col items-center justify-center py-8 text-center"
                    >
                      <Loader2 className="h-12 w-12 animate-spin text-brand-teal" />
                      <p className="mt-6 font-poppins text-2xl font-bold text-brand-navy">
                        {RISK_CALCULATOR_UI.analyzingLabel}
                      </p>
                      <p className="mt-2 text-sm text-brand-muted">{RISK_CALCULATOR_UI.analyzingSub}</p>
                    </motion.div>
                  ) : null}

                  {(phase === "results" || phase === "leadGate" || phase === "complete") &&
                  activeModule &&
                  suggestions ? (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-8"
                    >
                      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                        <RiskSpeedometer
                          score={finalScore}
                          title="Risk Exposure"
                          subtitle={activeModule.subtitle}
                        />
                        <LiveRiskGraph score={finalScore} isActive className="min-h-[280px]" />
                      </div>

                      <div className="rounded-2xl border border-brand-teal/15 bg-brand-teal/5 p-5 sm:p-6">
                        <h3 className="font-poppins text-xl font-bold text-brand-navy">
                          {suggestions.headline}
                        </h3>
                        <p className="mt-2 text-sm text-brand-muted">
                          Personalized recommendations based on your {activeModule.title} responses:
                        </p>
                        <ul className="mt-4 space-y-3">
                          {suggestions.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-relaxed text-brand-navy"
                            >
                              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {phase === "results" ? (
                        <div className="text-center">
                          <button
                            type="button"
                            onClick={() => setPhase("leadGate")}
                            className="risk-calc-cta inline-flex min-h-[48px] items-center justify-center rounded-xl bg-brand-gold px-8 text-sm font-bold text-brand-navy transition hover:bg-brand-gold-light"
                          >
                            Unlock Full Risk Roadmap PDF
                          </button>
                        </div>
                      ) : null}

                      {phase === "leadGate" ? (
                        <div className="mx-auto max-w-md">
                          <h3 className="font-poppins text-xl font-bold text-brand-navy">
                            {RISK_CALCULATOR_UI.leadTitle}
                          </h3>
                          <p className="mt-2 text-sm text-brand-muted">
                            {RISK_CALCULATOR_UI.leadSubtitle}
                          </p>
                          <form
                            className="mt-6 space-y-4"
                            onSubmit={(e) => {
                              e.preventDefault();
                              void submitLead();
                            }}
                            noValidate
                          >
                            {(["name", "email", "phone"] as const).map((field) => (
                              <div key={field}>
                                <label
                                  htmlFor={`risk-lead-${field}`}
                                  className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-brand-muted"
                                >
                                  {field === "phone"
                                    ? "Phone Number"
                                    : field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                  id={`risk-lead-${field}`}
                                  type={
                                    field === "email" ? "email" : field === "phone" ? "tel" : "text"
                                  }
                                  value={lead[field]}
                                  onChange={(e) =>
                                    setLead((prev) => ({ ...prev, [field]: e.target.value }))
                                  }
                                  className={cn(
                                    "risk-calc-input w-full min-h-[48px] rounded-xl border bg-brand-cream/50 px-4 text-base text-brand-navy placeholder:text-brand-muted/60",
                                    leadErrors[field]
                                      ? "border-red-400/60"
                                      : "border-brand-navy/10 focus:border-brand-teal",
                                  )}
                                />
                                {leadErrors[field] ? (
                                  <p className="mt-1 text-sm text-red-600" role="alert">
                                    {leadErrors[field]}
                                  </p>
                                ) : null}
                              </div>
                            ))}
                            <button
                              type="submit"
                              className="risk-calc-cta inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-brand-gold text-base font-bold text-brand-navy transition hover:bg-brand-gold-light"
                            >
                              {RISK_CALCULATOR_UI.leadCta}
                            </button>
                          </form>
                        </div>
                      ) : null}

                      {phase === "complete" ? (
                        <div className="flex flex-col items-center py-4 text-center">
                          <CheckCircle2 className="h-14 w-14 text-brand-teal" />
                          <p className="mt-4 max-w-md text-lg font-semibold text-brand-navy">
                            {RISK_CALCULATOR_UI.leadSuccess}
                          </p>
                        </div>
                      ) : null}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>

      <p className="mt-12 text-center text-xs leading-relaxed text-brand-muted">
        {RISK_CALCULATOR_UI.disclaimer}
      </p>
    </>
  );
}
