"use client";

import { computeHealthScore, scoreLabel } from "@/lib/assessment/recommendations";
import type { QuizAnswer } from "@/lib/assessment/types";
import { motion, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export function QuizAnalyzingPanel({ answers }: { answers: QuizAnswer[] }) {
  const reduceMotion = useReducedMotion();
  const targetScore = computeHealthScore(answers);
  const [displayScore, setDisplayScore] = useState(reduceMotion ? targetScore : 0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayScore(targetScore);
      return;
    }

    let frame = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setDisplayScore(Math.round(targetScore * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [targetScore, reduceMotion]);

  return (
    <div className="flex flex-col items-center py-10 text-center">
      <div className="relative mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-brand-cream ring-1 ring-brand-navy/8">
        <Loader2 className="absolute h-10 w-10 animate-spin text-brand-teal/40" />
        <motion.span
          className="relative text-3xl font-bold tabular-nums text-brand-navy"
          key={displayScore}
          initial={reduceMotion ? false : { scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          {displayScore}
        </motion.span>
      </div>
      <p className="text-lg font-semibold text-brand-navy">Calculating your financial health score</p>
      <p className="mt-2 text-sm text-brand-muted">
        {scoreLabel(displayScore)} · Preparing personalised suggestions
      </p>
    </div>
  );
}
