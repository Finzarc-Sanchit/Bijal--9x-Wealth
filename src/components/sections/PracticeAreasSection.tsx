"use client";

import type { PracticeArea } from "@/data/practice-areas";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const SLIDE_SPRING = {
  type: "spring" as const,
  stiffness: 50,
  damping: 24,
  mass: 1,
};

const INSIDE_SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 20,
};

export type PracticeAreasMeta = {
  eyebrow: string;
  heading: readonly [string, string];
  description: string;
};

export type PracticeAreasSectionProps = {
  meta: PracticeAreasMeta;
  areas: readonly PracticeArea[];
  className?: string;
  stackPinned?: boolean;
  id?: string;
};

function UniformPracticeCard({
  area,
  isActive,
}: {
  area: PracticeArea;
  isActive: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative flex min-h-[360px] h-full flex-col overflow-hidden rounded-xl p-8 transition-all duration-500 ease-out sm:min-h-[400px] sm:p-10 lg:min-h-[440px] lg:p-12",
        isActive ? "bg-[#2d3136]" : "bg-black",
      )}
    >
      {!imageFailed ? (
        <Image
          src={area.image.src}
          alt={area.image.alt || ""}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            isActive ? "opacity-[0.35]" : "opacity-100",
          )}
          sizes="(max-width: 1024px) 92vw, 720px"
          aria-hidden={isActive}
          onError={() => setImageFailed(true)}
        />
      ) : null}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2d3136]/70 via-[#2d3136]/50 to-[#2d3136]/75 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500",
          isActive ? "opacity-0" : "opacity-100",
        )}
      />

      <motion.div
        layout="position"
        transition={INSIDE_SPRING}
        className="relative z-10 flex flex-col w-full h-full justify-between items-start grow"
      >
        <motion.div
          layout="position"
          transition={INSIDE_SPRING}
          className={cn("w-full flex flex-col", isActive ? "" : "mt-auto")}
        >
          <motion.h3
            layout="position"
            transition={INSIDE_SPRING}
            className={cn(
              "font-display leading-tight tracking-tight text-white transition-all duration-500",
              isActive ? "text-3xl md:text-4xl font-medium" : "text-2xl md:text-3xl font-normal",
            )}
          >
            {area.title}
          </motion.h3>

          <AnimatePresence initial={false} mode="popLayout">
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 0.85, height: "auto", marginTop: 20 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={INSIDE_SPRING}
                className="font-inter text-base leading-relaxed text-white md:text-lg pointer-events-none overflow-hidden"
              >
                {area.description}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <Link
          href={area.href}
          className={cn(
            "group relative mt-10 inline-flex min-h-[44px] w-fit items-center gap-4 self-start cursor-pointer transition-all duration-500",
            isActive ? "opacity-100 translate-y-0 relative" : "opacity-0 pointer-events-none translate-y-4 absolute",
          )}
        >
          <span className="font-inter text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white sm:text-xs">
            {area.cta}
          </span>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-brand-navy">
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

export function PracticeAreasSection({
  meta,
  areas,
  className,
  stackPinned = false,
  id = "areas-of-practice",
}: PracticeAreasSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const usePinnedLayout = stackPinned && !reduceMotion;
  const total = areas.length;
  const headingId = `${id}-heading`;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  return (
    <section
      id={id}
      className={cn(
        "section-py w-full px-4 md:px-12 lg:px-16",
        usePinnedLayout && "sticky top-0 z-10",
        className,
      )}
      aria-labelledby={headingId}
    >
      <div className="mx-auto w-full">
        <header className="max-w-4xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal">
            {meta.eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-4 font-poppins text-4xl font-medium leading-[1.15] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl"
          >
            {meta.heading[0]}
            <br />
            {meta.heading[1]}
          </h2>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:mt-24 lg:grid-cols-[minmax(280px,340px)_1fr] lg:gap-28 xl:gap-40">
          <nav
            aria-label="Practice area tabs"
            className="min-w-0 lg:sticky lg:top-32 lg:self-start"
          >
            <p className="font-inter text-sm leading-relaxed text-brand-navy/70 md:text-base">
              {meta.description}
            </p>

            <div className="mt-8 divide-y-[1.5px] divide-brand-navy/40 border-y-[1.5px] border-brand-navy/40">
              {areas.map((area, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={area.id}
                    type="button"
                    layout
                    transition={INSIDE_SPRING}
                    aria-selected={isActive}
                    onClick={() => goTo(index)}
                    className={cn(
                      "flex min-h-[44px] w-full cursor-pointer items-center py-4 font-inter text-xs uppercase tracking-[0.18em] transition-colors duration-500 sm:text-sm",
                      isActive
                        ? "justify-end text-right font-bold text-brand-navy"
                        : "justify-start text-left font-normal text-brand-navy/40 hover:text-brand-navy/80",
                    )}
                  >
                    <motion.span layout="position" transition={INSIDE_SPRING}>
                      {area.title}
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>
          </nav>

          <div className="relative min-w-0 w-full overflow-hidden">
            {/* Added items-stretch here to align track elements identically with working homepage component layouts */}
            <motion.div
              className="flex w-full items-stretch"
              animate={{ x: `-${activeIndex * 72}%` }}
              transition={reduceMotion ? { duration: 0.2 } : SLIDE_SPRING}
            >
              {areas.map((area, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={area.id}
                    className="min-w-0 w-[72%] shrink-0 flex flex-col gap-6 pr-8 lg:flex-row lg:items-stretch"
                  >
                    <UniformPracticeCard area={area} isActive={isActive} />
                  </div>
                );
              })}
            </motion.div>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div
                className="flex flex-1 items-center justify-center gap-2 lg:justify-start lg:pl-2"
                role="tablist"
                aria-label="Practice area pagination"
              >
                {areas.map((area, index) => (
                  <button
                    key={area.id}
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-label={`Show ${area.title}`}
                    onClick={() => goTo(index)}
                    className={cn(
                      "cursor-pointer rounded-full transition-all duration-300",
                      activeIndex === index
                        ? "h-2.5 w-8 bg-brand-navy"
                        : "h-2 w-2 bg-brand-navy/20 hover:bg-brand-navy/40",
                    )}
                  />
                ))}
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  aria-label="Previous practice area"
                  onClick={goPrev}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-brand-navy/25 text-brand-navy transition-colors duration-300 hover:border-brand-navy hover:bg-brand-navy hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label="Next practice area"
                  onClick={goNext}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-brand-navy/25 text-brand-navy transition-colors duration-300 hover:border-brand-navy hover:bg-brand-navy hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}