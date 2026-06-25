"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const FILL_DURATION = 0.6;
const COLOR_DURATION = 0.32;
const FILL_EASE = [0.22, 1, 0.36, 1] as const;

/** Stagger so text flips as the fill reaches each band (bottom → top). */
const COLOR_DELAY = {
  enter: { description: 0.06, title: 0.22, label: 0.38 },
  leave: { description: 0.28, title: 0.14, label: 0 },
} as const;

export type MethodologyTonalLayerRevealCardProps = {
  stepNumber: string;
  title: string;
  description: string;
  className?: string;
};

export function MethodologyTonalLayerRevealCard({
  stepNumber,
  title,
  description,
  className,
}: MethodologyTonalLayerRevealCardProps) {
  const reduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const hoverActive = isDesktop && isHovered;
  const delays = hoverActive ? COLOR_DELAY.enter : COLOR_DELAY.leave;

  const textTransition = reduceMotion
    ? { duration: 0 }
    : { duration: COLOR_DURATION, ease: FILL_EASE };

  return (
    <article
      className={cn(
        "group/card relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl bg-white px-6 py-7 ring-1 ring-brand-navy/10 md:min-h-[300px] md:px-8 md:py-8",
        className,
      )}
      onMouseEnter={isDesktop ? () => setIsHovered(true) : undefined}
      onMouseLeave={isDesktop ? () => setIsHovered(false) : undefined}
      onFocus={isDesktop ? () => setIsHovered(true) : undefined}
      onBlur={
        isDesktop
          ? (event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsHovered(false);
              }
            }
          : undefined
      }
      tabIndex={isDesktop ? 0 : undefined}
      aria-label={isDesktop ? title : undefined}
    >
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 z-0 bg-brand-navy"
        initial={false}
        animate={{
          width: hoverActive ? "100%" : "0%",
          height: hoverActive ? "100%" : "0%",
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: FILL_DURATION, ease: FILL_EASE }
        }
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col">
        <motion.p
          className="min-h-[1.125rem] shrink-0 font-mono text-xs font-medium uppercase tracking-[0.24em]"
          initial={false}
          animate={{
            color: hoverActive ? "rgba(232, 197, 71, 0.95)" : "var(--color-brand-muted)",
          }}
          transition={{ ...textTransition, delay: delays.label }}
        >
          {stepNumber}
        </motion.p>

        <motion.h3
          className="mt-5 min-h-[3.5rem] shrink-0 font-display text-xl font-medium leading-tight tracking-tight md:min-h-[4.75rem] md:text-2xl lg:min-h-[5.75rem]"
          initial={false}
          animate={{
            color: hoverActive ? "#ffffff" : "var(--color-brand-navy)",
          }}
          transition={{ ...textTransition, delay: delays.title }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="mt-6 font-inter text-base leading-relaxed"
          initial={false}
          animate={{
            color: hoverActive ? "rgba(255, 255, 255, 0.88)" : "rgba(10, 22, 40, 0.8)",
          }}
          transition={{ ...textTransition, delay: delays.description }}
        >
          {description}
        </motion.p>
      </div>
    </article>
  );
}
