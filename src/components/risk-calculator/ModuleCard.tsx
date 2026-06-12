"use client";

import type { RiskModule } from "@/data/risk-calculator";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Building2, Shield, TrendingDown, Users } from "lucide-react";
import { motion } from "framer-motion";

const ICONS = {
  shield: Shield,
  users: Users,
  trending: TrendingDown,
  building: Building2,
} as const;

type ModuleCardProps = {
  module: RiskModule;
  onAction: () => void;
  index: number;
  compact?: boolean;
};

export function ModuleCard({ module, onAction, index, compact }: ModuleCardProps) {
  const Icon = ICONS[module.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -6 }}
      className={cn(
        "risk-calc-module-card group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-navy/8 bg-white",
        "shadow-[0_16px_40px_-20px_rgba(10,22,40,0.14)] transition-shadow duration-400",
        "hover:border-brand-teal/30 hover:shadow-[0_24px_48px_-18px_rgba(26,107,122,0.2)]",
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center bg-gradient-to-br from-brand-cream via-white to-brand-teal/10",
          compact ? "h-28" : "h-36 sm:h-40",
        )}
      >
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-teal/15" />
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-gold/10" />
        </div>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-10 w-10 text-brand-teal sm:h-12 sm:w-12" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-flex w-fit rounded-full bg-brand-teal/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-teal ring-1 ring-brand-teal/20">
          {module.focus}
        </span>
        <h3 className="font-poppins text-lg font-bold leading-tight text-brand-navy sm:text-xl">
          {module.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{module.subtitle}</p>

        <button
          type="button"
          onClick={onAction}
          className={cn(
            "risk-calc-cta mt-auto inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5",
            "bg-brand-gold text-sm font-bold text-brand-navy transition-all duration-300",
            "hover:bg-brand-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream",
          )}
        >
          {module.ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.article>
  );
}
