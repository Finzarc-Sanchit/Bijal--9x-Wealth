"use client";

import { GOAL_BACKGROUND_THEMES } from "@/data/goal-slider-theme";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function GoalSliderBackground({
  activeIndex,
  className,
  children,
}: {
  activeIndex: 0 | 1 | 2;
  className?: string;
  children?: React.ReactNode;
}) {
  const theme = GOAL_BACKGROUND_THEMES[activeIndex];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className={cn("absolute inset-0 bg-gradient-to-br", theme.base)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <AnimatePresence mode="wait">
          <motion.div
            key={`orbs-${activeIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={cn(
                "absolute -left-[8%] top-[8%] h-[46%] w-[46%] rounded-full blur-3xl",
                theme.orb1,
              )}
            />
            <div
              className={cn(
                "absolute -right-[6%] top-[20%] h-[40%] w-[40%] rounded-full blur-3xl",
                theme.orb2,
              )}
            />
            <div
              className={cn(
                "absolute bottom-[-8%] left-[25%] h-[36%] w-[36%] rounded-full blur-3xl",
                theme.orb3,
              )}
            />
          </motion.div>
        </AnimatePresence>

        <svg className="absolute inset-0 h-full w-full opacity-[0.18]" aria-hidden>
          <defs>
            <pattern id="goal-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-brand-navy/8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#goal-grid)" />
        </svg>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
