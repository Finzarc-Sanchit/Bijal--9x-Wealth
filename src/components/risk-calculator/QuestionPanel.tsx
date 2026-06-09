"use client";

import type { RiskQuestion } from "@/data/risk-calculator";
import {
  formatSliderValue,
  scoreFromAnswer,
  type RiskAnswerValue,
} from "@/lib/risk-calculator/scoring";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

type QuestionPanelProps = {
  question: RiskQuestion;
  questionIndex: number;
  totalQuestions: number;
  value: RiskAnswerValue | null;
  direction: number;
  onChange: (value: RiskAnswerValue, score: number) => void;
  onBack: () => void;
  onNext: () => void;
  isLast: boolean;
};

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 72 : -72, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -72 : 72, opacity: 0 }),
};

export function QuestionPanel({
  question,
  questionIndex,
  totalQuestions,
  value,
  direction,
  onChange,
  onBack,
  onNext,
  isLast,
}: QuestionPanelProps) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;
  const canProceed = value !== null;

  return (
    <div className="flex h-full flex-col">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-brand-muted">
          <span>
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-brand-navy/8">
          <motion.div
            className="risk-calc-progress h-full rounded-full bg-brand-teal"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            style={{ boxShadow: "0 0 10px rgba(26,107,122,0.35)" }}
          />
        </div>
      </div>

      <div className="relative min-h-[280px] flex-1 overflow-hidden sm:min-h-[320px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 flex flex-col"
          >
            <h3 className="font-display text-2xl font-bold leading-snug text-brand-navy sm:text-3xl">
              {question.text}
            </h3>
            {question.helper ? (
              <p className="mt-3 text-sm text-brand-muted">{question.helper}</p>
            ) : null}

            <div className="mt-8 flex-1">
              {question.type === "radio" && question.options ? (
                <fieldset className="space-y-3">
                  <legend className="sr-only">{question.text}</legend>
                  {question.options.map((option) => {
                    const selected = value === option.value;
                    return (
                      <label
                        key={option.value}
                        className={cn(
                          "risk-calc-input flex min-h-[52px] cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300",
                          selected
                            ? "border-brand-teal bg-brand-teal/8 shadow-[0_0_0_1px_rgba(26,107,122,0.35),0_8px_24px_-12px_rgba(26,107,122,0.25)]"
                            : "border-brand-navy/10 bg-brand-cream/50 hover:border-brand-teal/35 hover:bg-white",
                        )}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          checked={selected}
                          onChange={() => onChange(option.value, option.score)}
                          className="h-4 w-4 accent-brand-teal"
                        />
                        <span className="text-sm font-medium text-brand-navy sm:text-base">
                          {option.label}
                        </span>
                      </label>
                    );
                  })}
                </fieldset>
              ) : null}

              {question.type === "toggle" && question.toggles ? (
                <div className="grid grid-cols-3 gap-3" role="group" aria-label={question.text}>
                  {question.toggles.map((toggle) => {
                    const selected = value === toggle.value;
                    return (
                      <button
                        key={toggle.value}
                        type="button"
                        onClick={() => onChange(toggle.value, toggle.score)}
                        className={cn(
                          "risk-calc-input min-h-[56px] rounded-xl border px-3 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300",
                          selected
                            ? "border-brand-teal bg-brand-teal text-white shadow-[0_0_20px_-6px_rgba(26,107,122,0.45)]"
                            : "border-brand-navy/10 bg-brand-cream/50 text-brand-navy hover:border-brand-teal/35 hover:bg-white",
                        )}
                      >
                        {toggle.label}
                      </button>
                    );
                  })}
                </div>
              ) : null}

              {question.type === "slider" && question.slider ? (
                <div className="rounded-2xl border border-brand-navy/10 bg-brand-cream/60 p-5">
                  <div className="mb-4 flex items-end justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                      Adjust value
                    </span>
                    <span className="font-display text-3xl font-bold text-brand-teal">
                      {formatSliderValue(
                        typeof value === "number" ? value : question.slider.defaultValue,
                        question.slider.unit,
                      )}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={question.slider.min}
                    max={question.slider.max}
                    step={question.slider.step}
                    value={
                      typeof value === "number" ? value : question.slider.defaultValue
                    }
                    onChange={(e) => {
                      const num = Number(e.target.value);
                      onChange(num, scoreFromAnswer(question, num));
                    }}
                    className="risk-calc-slider w-full"
                    aria-label={question.text}
                  />
                  <div className="mt-2 flex justify-between text-xs text-brand-muted">
                    <span>
                      {formatSliderValue(question.slider.min, question.slider.unit)}
                    </span>
                    <span>
                      {formatSliderValue(question.slider.max, question.slider.unit)}
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={questionIndex === 0}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-brand-muted transition hover:text-brand-navy disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className={cn(
            "risk-calc-cta inline-flex min-h-[48px] items-center justify-center rounded-xl px-8 text-sm font-bold transition-all duration-300",
            "bg-brand-gold text-brand-navy hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-45",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          )}
        >
          {isLast ? "Calculate Risk Score" : "Continue"}
        </button>
      </div>
    </div>
  );
}
