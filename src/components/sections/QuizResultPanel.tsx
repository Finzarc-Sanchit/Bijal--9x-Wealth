"use client";

import {
  computeHealthScore,
  getScoreColor,
  getSuggestionsForAnswers,
  scoreLabel,
  type HealthSuggestion,
} from "@/lib/assessment/recommendations";
import type { AssessmentTier, QuizAnswer } from "@/lib/assessment/types";
import { TIER_RESULTS } from "@/data/financial-health-quiz";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedScoreRing({
  score,
  reduceMotion,
}: {
  score: number;
  reduceMotion: boolean | null;
}) {
  const [displayScore, setDisplayScore] = useState(reduceMotion ? score : 0);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeColor = getScoreColor(score);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayScore(score);
      return;
    }

    let frame = 0;
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setDisplayScore(Math.round(score * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [score, reduceMotion]);

  const progress = (displayScore / 100) * circumference;

  return (
    <div className="relative mx-auto h-40 w-40">
      <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90" aria-hidden>
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="rgba(10,22,40,0.08)"
          strokeWidth="10"
        />
        <motion.circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
          initial={reduceMotion ? false : { strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${progress} ${circumference}` }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-4xl font-bold tabular-nums text-brand-navy"
          key={displayScore}
          initial={reduceMotion ? false : { scale: 0.92, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {displayScore}
        </motion.span>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
          / 100
        </span>
      </div>
    </div>
  );
}

function SuggestionCard({
  suggestion,
  index,
}: {
  suggestion: HealthSuggestion;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.35 + index * 0.1, duration: 0.4 }}
      className={cn(
        "rounded-2xl border px-4 py-3.5",
        suggestion.priority === "high"
          ? "border-brand-teal/25 bg-brand-teal/[0.06]"
          : suggestion.priority === "medium"
            ? "border-brand-gold/30 bg-brand-gold/[0.07]"
            : "border-brand-navy/10 bg-brand-cream",
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
            suggestion.priority === "high"
              ? "bg-brand-teal/15 text-brand-teal"
              : suggestion.priority === "medium"
                ? "bg-brand-gold/20 text-[#8a6f12]"
                : "bg-brand-navy/8 text-brand-navy",
          )}
        >
          <Lightbulb className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-navy">{suggestion.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-brand-muted">{suggestion.detail}</p>
        </div>
      </div>
    </motion.li>
  );
}

type QuizResultPanelProps = {
  answers: QuizAnswer[];
  tier: AssessmentTier;
  onRetake: () => void;
};

export function QuizResultPanel({ answers, tier, onRetake }: QuizResultPanelProps) {
  const reduceMotion = useReducedMotion();
  const score = computeHealthScore(answers);
  const suggestions = getSuggestionsForAnswers(answers);
  const resultCopy = TIER_RESULTS[tier];
  const label = scoreLabel(score);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center">
        <div className="text-center lg:text-left">
          <AnimatedScoreRing score={score} reduceMotion={reduceMotion} />
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-3 text-sm font-semibold text-brand-teal"
          >
            {label}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-brand-teal" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
              Your health score
            </p>
          </div>
          <h3 className="text-2xl font-semibold text-brand-navy md:text-[1.65rem]">
            {resultCopy.header}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-brand-muted">{resultCopy.body}</p>
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 flex items-center justify-between gap-3"
        >
          <h4 className="text-lg font-semibold text-brand-navy">Personalised suggestions</h4>
          <span className="text-xs font-medium text-brand-muted">Based on your 5 answers</span>
        </motion.div>
        <ul className="space-y-3" role="list">
          {suggestions.map((suggestion, index) => (
            <SuggestionCard key={suggestion.id} suggestion={suggestion} index={index} />
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap gap-3"
      >
        <button
          type="button"
          onClick={onRetake}
          className="min-h-[44px] rounded-full px-6 py-2.5 text-sm font-semibold text-brand-muted ring-1 ring-brand-navy/10 hover:text-brand-navy"
        >
          Retake Checkup
        </button>
        <a
          href="#consultation-form"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-light"
        >
          Book a consultation
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </div>
  );
}
