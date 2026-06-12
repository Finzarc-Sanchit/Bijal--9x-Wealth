"use client";

import { WellnessHeroBridge } from "@/components/motion/WellnessHeroBridge";
import { WellnessPremiumBackground } from "@/components/motion/WellnessPremiumBackground";
import { QuizAnalyzingPanel } from "@/components/sections/QuizAnalyzingPanel";
import { QuizResultPanel } from "@/components/sections/QuizResultPanel";
import { WellnessFocusWinsRow } from "@/components/sections/WellnessFocusWinsRow";
import {
  FINANCIAL_HEALTH_QUESTIONS,
  QUIZ_UI,
  TIER_RESULTS,
} from "@/data/financial-health-quiz";
import { quizLeadSchema } from "@/lib/assessment/schema";
import { resolveTier } from "@/lib/assessment/scoring";
import type { AssessmentTier, AssessmentWeight, QuizAnswer } from "@/lib/assessment/types";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";

type Phase = "intro" | "questions" | "leadGate" | "analyzing" | "result";

const TOTAL = FINANCIAL_HEALTH_QUESTIONS.length;

const sectionReveal = {
  hidden: { opacity: 0, y: 72 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function FinancialHealthQuiz() {
  const sectionRef = useRef<HTMLElement>(null);
  const quizPanelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isSectionVisible = useInView(sectionRef, { once: true, amount: 0.12 });

  const [phase, setPhase] = useState<Phase>("intro");
  const [isLaunching, setIsLaunching] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedWeight, setSelectedWeight] = useState<AssessmentWeight | null>(null);
  const [tier, setTier] = useState<AssessmentTier | null>(null);
  const [lead, setLead] = useState({ name: "", mobile: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentQuestion = FINANCIAL_HEALTH_QUESTIONS[questionIndex];
  const resultCopy = tier ? TIER_RESULTS[tier] : null;
  const quizActive = phase !== "intro";
  const showQuizPanel = quizActive || isLaunching;

  const startCheckup = useCallback(() => {
    setIsLaunching(true);

    window.setTimeout(() => {
      setPhase("questions");
      setQuestionIndex(0);
      setSelectedWeight(null);
      setIsLaunching(false);
      quizPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, reduceMotion ? 80 : 720);
  }, [reduceMotion]);

  const goNext = () => {
    if (!selectedWeight || !currentQuestion) return;
    const nextAnswers = [
      ...answers.filter((a) => a.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, weight: selectedWeight },
    ];
    setAnswers(nextAnswers);
    if (questionIndex < TOTAL - 1) {
      setQuestionIndex((i) => i + 1);
      setSelectedWeight(null);
      return;
    }
    setPhase("leadGate");
  };

  const goBack = () => {
    if (phase === "leadGate") {
      setPhase("questions");
      setQuestionIndex(TOTAL - 1);
      const last = answers.find((a) => a.questionId === TOTAL);
      setSelectedWeight(last?.weight ?? null);
      return;
    }
    if (questionIndex > 0) {
      const prev = questionIndex - 1;
      setQuestionIndex(prev);
      const prevAnswer = answers.find(
        (a) => a.questionId === FINANCIAL_HEALTH_QUESTIONS[prev].id,
      );
      setSelectedWeight(prevAnswer?.weight ?? null);
    }
  };

  const submitLead = useCallback(async () => {
    const parsed = quizLeadSchema.safeParse(lead);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setPhase("analyzing");
    await new Promise((r) => setTimeout(r, 1600));
    setTier(resolveTier(answers));
    setPhase("result");
  }, [answers, lead]);

  const resetQuiz = () => {
    setPhase("intro");
    setQuestionIndex(0);
    setAnswers([]);
    setSelectedWeight(null);
    setTier(null);
    setLead({ name: "", mobile: "", email: "" });
    setErrors({});
    setIsLaunching(false);
  };

  const progressPct =
    phase === "intro"
      ? 0
      : phase === "result"
        ? 100
        : ((phase === "questions" ? questionIndex + 1 : TOTAL) / TOTAL) * 100;

  return (
    <section
      ref={sectionRef}
      id="financial-health-check"
      className="relative scroll-mt-8 overflow-hidden bg-brand-cream w-full"
    >
      {/* <WellnessHeroBridge /> */}

      <div className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14 w-full">
        {/* <WellnessPremiumBackground /> */}

        <LayoutGroup id="wellness-quiz">
          {/* Expanded layout wrapper configuration from max-w-6xl to edge-to-edge layout bounds */}
          <motion.div
            className="relative z-10 w-full max-w-full px-4 md:px-12 lg:px-16"
            initial="hidden"
            animate={isSectionVisible ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={sectionReveal} className="mx-auto max-w-4xl text-center">
              <motion.p
                variants={fadeUp}
                className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold sm:text-sm"
              >
                {QUIZ_UI.sectionEyebrow}
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-poppins text-4xl font-normal leading-[1.08] tracking-tight text-brand-navy sm:text-5xl md:text-[3.5rem]"
              >
                <span className="block">{QUIZ_UI.sectionTitleBlack}</span>
                <span className="mt-1 block bg-gradient-to-r from-brand-teal via-[#1a6b7a] to-brand-navy bg-clip-text text-transparent">
                  {QUIZ_UI.sectionTitleBlue}
                </span>
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="wellness-title-rule mx-auto mt-6 h-px w-full max-w-xl origin-center"
              />

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-brand-muted sm:text-lg"
              >
                {QUIZ_UI.sectionSubtitle}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <AnimatePresence mode="wait">
                  {!quizActive && (
                    <motion.button
                      key="start-cta"
                      layoutId="wellness-quiz-launcher"
                      type="button"
                      onClick={startCheckup}
                      disabled={isLaunching}
                      initial={{ opacity: 1, scale: 1 }}
                      exit={
                        reduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 0.92, y: 12, filter: "blur(4px)" }
                      }
                      animate={
                        isLaunching
                          ? { scale: 0.96, opacity: 0.85 }
                          : { scale: 1, opacity: 1 }
                      }
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="wellness-cta-shimmer group relative inline-flex min-h-[52px] items-center gap-2.5 overflow-hidden rounded-full bg-brand-navy px-9 py-3.5 text-base font-semibold text-white shadow-[0_16px_40px_-14px_rgba(10,22,40,0.45)] ring-1 ring-brand-navy/10 transition hover:bg-brand-navy-light disabled:pointer-events-none"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <ClipboardCheck className="h-5 w-5 text-brand-gold" />
                        {QUIZ_UI.startCta}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </motion.button>
                  )}
                </AnimatePresence>
                {!quizActive && (
                  <motion.span
                    variants={fadeUp}
                    className="text-sm font-medium text-brand-muted"
                  >
                    {QUIZ_UI.startCtaSub}
                  </motion.span>
                )}
              </motion.div>
            </motion.div>

            {/* Layout bounds matched to full screen width dimensions */}
            <motion.div variants={fadeUp} className="mt-14 lg:mt-16 w-full max-w-full">
              <WellnessFocusWinsRow />
            </motion.div>

            <AnimatePresence>
              {showQuizPanel && (
                <motion.div
                  ref={quizPanelRef}
                  id="quiz-panel"
                  variants={fadeUp}
                  initial={{ opacity: 0, y: 32, height: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    height: "auto",
                    scale: isLaunching ? 0.985 : 1,
                  }}
                  exit={{ opacity: 0, y: 16, height: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  layout
                  className="mt-12 overflow-hidden md:mt-14 w-full max-w-full"
                >
                  <motion.div
                    layout
                    className={cn(
                      "overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-28px_rgba(10,22,40,0.18)] ring-1 transition-shadow duration-500 w-full",
                      "ring-brand-teal/25 shadow-[0_32px_80px_-24px_rgba(26,107,122,0.22)]",
                      isLaunching && "wellness-quiz-launch-glow",
                    )}
                  >
                    <div className="border-b border-brand-navy/5 bg-gradient-to-r from-brand-cream via-white to-brand-cream/80 px-6 py-5 md:px-8">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2.5">
                          <motion.div
                            layoutId="wellness-quiz-launcher"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/10"
                          >
                            <Sparkles className="h-4 w-4 text-brand-teal" />
                          </motion.div>
                          <p className="text-sm font-semibold text-brand-navy md:text-base">
                            {QUIZ_UI.progressLabel(
                              phase === "questions" ? questionIndex + 1 : TOTAL,
                              TOTAL,
                            )}
                          </p>
                        </div>
                        <span className="hidden text-xs font-semibold uppercase tracking-wider text-brand-muted sm:block">
                          {Math.round(progressPct)}% complete
                        </span>
                      </div>

                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-brand-cream">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-brand-teal via-brand-teal to-brand-gold"
                          initial={{ width: "0%" }}
                          animate={{ width: `${progressPct}%` }}
                          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>

                    <div className="p-6 md:p-8 w-full">
                      <AnimatePresence mode="wait">
                        {phase === "questions" && currentQuestion && (
                          <motion.div
                            key={`q-${questionIndex}`}
                            initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={reduceMotion ? undefined : { opacity: 0, y: -24, filter: "blur(4px)" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full"
                          >
                            <motion.p
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.08 }}
                              className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-teal"
                            >
                              Question {questionIndex + 1}
                            </motion.p>
                            <h3 className="mb-7 text-xl font-semibold leading-snug text-brand-navy md:text-2xl lg:text-3xl">
                              {currentQuestion.questionText}
                            </h3>
                            <ul className="space-y-3 w-full" role="listbox" aria-label="Answer options">
                              {currentQuestion.options.map((option, i) => (
                                <motion.li
                                  key={option.text}
                                  initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.12 + i * 0.07,
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  className="w-full"
                                >
                                  <button
                                    type="button"
                                    role="option"
                                    aria-selected={selectedWeight === option.weight}
                                    onClick={() => setSelectedWeight(option.weight)}
                                    className={cn(
                                      "group min-h-[48px] w-full rounded-2xl px-4 py-3.5 text-left text-base transition-all duration-300",
                                      selectedWeight === option.weight
                                        ? "scale-[1.01] bg-brand-navy text-white shadow-lg ring-2 ring-brand-teal/40"
                                        : "bg-brand-cream text-brand-navy ring-1 ring-brand-navy/10 hover:bg-white hover:shadow-md hover:ring-brand-teal/30",
                                    )}
                                  >
                                    <span className="flex items-start gap-3">
                                      <span
                                        className={cn(
                                          "mt-1 flex h-4 w-4 shrink-0 rounded-full border-2 transition-colors",
                                          selectedWeight === option.weight
                                            ? "border-brand-gold bg-brand-gold"
                                            : "border-brand-navy/20 group-hover:border-brand-teal",
                                        )}
                                      />
                                      {option.text}
                                    </span>
                                  </button>
                                </motion.li>
                              ))}
                            </ul>
                            <motion.div
                              initial={{ opacity: 0, y: 16 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.35 }}
                              className="mt-8 flex flex-wrap gap-3"
                            >
                              {questionIndex > 0 && (
                                <button
                                  type="button"
                                  onClick={goBack}
                                  className="min-h-[44px] rounded-full px-5 py-2.5 text-sm font-medium text-brand-muted ring-1 ring-brand-navy/10 hover:text-brand-navy"
                                >
                                  {QUIZ_UI.backButton}
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={goNext}
                                disabled={!selectedWeight}
                                className="min-h-[44px] flex-1 rounded-full bg-brand-teal px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#155966] disabled:cursor-not-allowed disabled:opacity-45 sm:flex-none"
                              >
                                {QUIZ_UI.nextButton}
                              </button>
                            </motion.div>
                          </motion.div>
                        )}

                        {phase === "leadGate" && (
                          <motion.div
                            key="lead-gate"
                            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.45 }}
                            className="w-full"
                          >
                            <h3 className="mb-2 text-xl font-semibold text-brand-navy md:text-2xl">
                              {QUIZ_UI.leadGateTitle}
                            </h3>
                            <p className="mb-6 text-base text-brand-muted">{QUIZ_UI.leadGateSubtitle}</p>
                            <div className="grid gap-4 sm:grid-cols-2 w-full">
                              <div className="sm:col-span-2">
                                <label htmlFor="quiz-name" className="mb-1 block text-sm font-medium text-brand-navy">
                                  Full Name
                                </label>
                                <input
                                  id="quiz-name"
                                  type="text"
                                  value={lead.name}
                                  onChange={(e) => setLead({ ...lead, name: e.target.value })}
                                  className="min-h-[44px] w-full rounded-xl border border-brand-navy/10 bg-white px-4 text-base focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                              </div>
                              <div>
                                <label htmlFor="quiz-mobile" className="mb-1 block text-sm font-medium text-brand-navy">
                                  WhatsApp Mobile
                                </label>
                                <input
                                  id="quiz-mobile"
                                  type="tel"
                                  inputMode="numeric"
                                  maxLength={10}
                                  value={lead.mobile}
                                  onChange={(e) =>
                                    setLead({ ...lead, mobile: e.target.value.replace(/\D/g, "") })
                                  }
                                  className="min-h-[44px] w-full rounded-xl border border-brand-navy/10 bg-white px-4 text-base focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                                />
                                {errors.mobile && (
                                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="quiz-email" className="mb-1 block text-sm font-medium text-brand-navy">
                                  Email Address
                                </label>
                                <input
                                  id="quiz-email"
                                  type="email"
                                  value={lead.email}
                                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                                  className="min-h-[44px] w-full rounded-xl border border-brand-navy/10 bg-white px-4 text-base focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                                />
                                {errors.email && (
                                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                              </div>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-3">
                              <button
                                type="button"
                                onClick={goBack}
                                className="min-h-[44px] rounded-full px-5 py-2.5 text-sm font-medium text-brand-muted ring-1 ring-brand-navy/10"
                              >
                                {QUIZ_UI.backButton}
                              </button>
                              <button
                                type="button"
                                onClick={submitLead}
                                className="wellness-cta-shimmer min-h-[44px] flex-1 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-light sm:flex-none"
                              >
                                {QUIZ_UI.leadGateCta}
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {phase === "analyzing" && (
                          <motion.div
                            key="analyzing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full"
                          >
                            <QuizAnalyzingPanel answers={answers} />
                          </motion.div>
                        )}

                        {phase === "result" && tier && resultCopy && (
                          <motion.div
                            key="result"
                            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full"
                          >
                            <QuizResultPanel answers={answers} tier={tier} onRetake={resetQuiz} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-center text-xs leading-relaxed text-brand-muted"
                  >
                    {QUIZ_UI.disclaimer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}