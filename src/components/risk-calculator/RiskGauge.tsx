"use client";

import { riskColorForScore, riskLabelForScore } from "@/lib/risk-calculator/scoring";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type RiskGaugeProps = {
  score: number;
  className?: string;
};

export function RiskGauge({ score, className }: RiskGaugeProps) {
  const color = riskColorForScore(score);
  const label = riskLabelForScore(score);
  const rotation = -90 + (score / 100) * 180;

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="relative h-44 w-72 sm:h-52 sm:w-80">
        <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="gauge-arc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a6b7a" />
              <stop offset="50%" stopColor="#c9a227" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(100,116,139,0.2)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <motion.path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gauge-arc)"
            strokeWidth="14"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: score / 100 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          />
        </svg>
        <motion.div
          className="absolute bottom-6 left-1/2 h-16 w-1 origin-bottom rounded-full bg-brand-navy"
          style={{ marginLeft: "-2px" }}
          initial={{ rotate: -90 }}
          animate={{ rotate: rotation }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        />
        <div
          className="absolute bottom-4 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white shadow-sm"
          style={{ backgroundColor: color }}
        />
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted">
        Your Vulnerability Rating
      </p>
      <motion.p
        className="mt-2 font-display text-4xl font-bold text-brand-navy sm:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {score}%
      </motion.p>
      <motion.p
        className="mt-2 text-lg font-semibold"
        style={{ color }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        — {label}
      </motion.p>
    </div>
  );
}
