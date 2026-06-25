 "use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const HOVER_SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 20,
};

export type MethodologyTonalLayerCardProps = {
  stepNumber: string;
  title: string;
  description: string;
  className?: string;
};

export function MethodologyTonalLayerCard({
  stepNumber,
  title,
  description,
  className,
}: MethodologyTonalLayerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(media.matches);

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl bg-brand-cream px-6 py-7 ring-1 ring-brand-navy/10 transition-colors md:h-[320px] md:overflow-hidden md:px-8 md:py-8 lg:h-[340px]",
        "hover:bg-brand-cream/80",
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
      <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-brand-muted">
        {stepNumber}
      </p>

      {/* Mobile: show full text, no hover state. */}
      <div className="mt-5 md:hidden">
        <h3 className="min-h-[3.5rem] font-display text-xl font-medium leading-tight tracking-tight text-brand-navy">
          {title}
        </h3>
        <p className="mt-6 font-inter text-base leading-relaxed text-brand-navy/80">
          {description}
        </p>
      </div>

      {/* Reserved a min-height standard context track on the header 
        so single-line and dual-line variants occupy identical vertical footprints 
      */}
      <div className="mt-5 hidden grow flex-col md:flex">
        <div className={cn("flex w-full flex-col", isHovered ? "" : "mt-auto")}>
          <motion.h3
            layout="position"
            transition={HOVER_SPRING}
            className="min-h-[4rem] font-display text-2xl font-medium leading-tight tracking-tight text-brand-navy"
          >
            {title}
          </motion.h3>

          <AnimatePresence initial={false} mode="popLayout">
            {isHovered ? (
              <motion.p
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 0.9, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={HOVER_SPRING}
                className="overflow-hidden font-inter text-base leading-relaxed text-brand-navy/80"
              >
                {description}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}