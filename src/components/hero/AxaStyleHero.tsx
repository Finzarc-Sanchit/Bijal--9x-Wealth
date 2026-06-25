"use client";

import { HeroAnimatedPillImage } from "@/components/hero/HeroAnimatedImage";
import { HeroVideoBackground } from "@/components/hero/HeroVideoBackground";
import { useSiteIntro } from "@/components/layout/site-intro-context";
import { AXA_HERO_SLIDES } from "@/data/axa-hero-slides";
import type { SiteContent } from "@/lib/content/schema";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 5000;
const SLIDE_TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

const HEADLINE_CLASS =
  "hero-editorial-headline block w-full max-w-full min-w-0 box-border whitespace-normal font-poppins font-medium uppercase tracking-tight text-white";

const EPIGRAPH_CLASS =
  "text-sm font-inter font-medium italic leading-relaxed text-white/92 md:text-[0.95rem] lg:text-base";

const MOBILE_FADE_VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

function HeroCta({ label, href }: { label: string; href: string }) {
  const className =
    "group inline-flex min-h-[48px] items-center rounded-full bg-brand-gold py-2 pl-6 pr-2 font-inter text-brand-navy shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-brand-gold-light hover:pr-3 sm:pl-8 tracking-normal normal-case";

  const inner = (
    <>
      <span className="mr-3 text-sm font-semibold sm:mr-4 tracking-normal normal-case">
        {label}
      </span>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white transition group-hover:bg-brand-navy-light">
        <ArrowRight className="h-4 w-4" />
      </span>
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

function HeroStackedHeadline({
  slideIndex,
  introReady,
  scrollDirection,
}: {
  slideIndex: number;
  introReady: boolean;
  scrollDirection: "up" | "down";
}) {
  const slide = AXA_HERO_SLIDES[slideIndex];
  const [line2, line3, closingLine] = slide.headlineLines;
  const typingActive = introReady;
  const mobileHeadlineLines = [slide.leadWord, line2, line3, closingLine] as const;

  const lineVariants = {
    initial: (dir: "up" | "down") => ({
      y: dir === "down" ? "100%" : "-100%",
    }),
    animate: { y: 0 },
    exit: (dir: "up" | "down") => ({
      y: dir === "down" ? "-100%" : "100%",
    }),
  };

  return (
    <div className="m-0 flex w-full max-w-full select-none flex-col items-start p-0 text-left">
      {/* Mobile — full copy, no overflow clip, opacity-only entrance */}
      <div className="w-full min-w-0 sm:hidden">
        <h1 className="flex w-full min-w-0 flex-col gap-2">
          {mobileHeadlineLines.map((line, index) => (
            <motion.span
              key={`${slide.id}-mobile-line-${index}`}
              className={HEADLINE_CLASS}
              variants={MOBILE_FADE_VARIANTS}
              initial="initial"
              animate={introReady ? "animate" : "initial"}
              transition={{ ...SLIDE_TRANSITION, delay: index * 0.06 }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {introReady ? (
          <motion.div
            className="relative mt-5 w-full min-w-0"
            variants={MOBILE_FADE_VARIANTS}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.45, ease: "easeInOut", delay: 0.14 }}
          >
            <p className={EPIGRAPH_CLASS}>{`"${slide.epigraph}"`}</p>
          </motion.div>
        ) : null}

        <div className="relative z-30 mt-6 block w-full">
          <HeroCta label={slide.cta.label} href={slide.cta.href} />
        </div>
      </div>

      {/* Desktop / tablet — preserved stacked slide-in layout */}
      <div className="hidden w-full sm:block">
        <h1 className="contents">
          <div className="w-full overflow-hidden pb-1">
            <motion.div
              className="flex w-full max-w-full flex-wrap items-center gap-3 sm:gap-4 md:gap-5"
              custom={scrollDirection}
              variants={lineVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE_TRANSITION}
            >
              <span className="relative h-11 w-32 shrink-0 overflow-hidden rounded-full bg-white/10 ring-2 ring-white/30 sm:h-14 sm:w-44 md:h-16 md:w-52 lg:h-18 lg:w-56">
                <HeroAnimatedPillImage
                  src={slide.pillImage.src}
                  alt={slide.pillImage.alt}
                  priority={slideIndex === 0}
                  isActive={typingActive}
                />
              </span>
              <span className={cn(HEADLINE_CLASS, "min-w-0 flex-1")}>{slide.leadWord}</span>
            </motion.div>
          </div>

          <div className="mt-1 w-full overflow-hidden pb-1 sm:mt-2">
            <motion.div
              custom={scrollDirection}
              variants={lineVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE_TRANSITION}
            >
              <span className={HEADLINE_CLASS}>{line2}</span>
            </motion.div>
          </div>

          <div className="mt-1 w-full overflow-hidden pb-1 sm:mt-2">
            <motion.div
              custom={scrollDirection}
              variants={lineVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE_TRANSITION}
            >
              <span className={HEADLINE_CLASS}>{line3}</span>
            </motion.div>
          </div>

          <div className="mt-2 w-full overflow-hidden pb-1 sm:mt-3">
            <motion.div
              custom={scrollDirection}
              variants={lineVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={SLIDE_TRANSITION}
            >
              <span className={HEADLINE_CLASS}>{closingLine}</span>
            </motion.div>
          </div>
        </h1>

        <div className="relative mt-6 w-full min-w-0 overflow-hidden sm:mt-8 md:mt-8">
          <AnimatePresence mode="wait">
            {introReady ? (
              <motion.div
                key={`${slideIndex}-epigraph`}
                className="w-full max-w-xl text-left md:max-w-2xl lg:max-w-3xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <p className={EPIGRAPH_CLASS}>{`"${slide.epigraph}"`}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="relative z-30 mt-8 block w-full sm:mt-10 md:mt-10 sm:w-auto">
          <HeroCta label={slide.cta.label} href={slide.cta.href} />
        </div>
      </div>
    </div>
  );
}

export function AxaStyleHero({ content: _content }: { content: SiteContent }) {
  const { introComplete } = useSiteIntro();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    if (!introComplete) return;

    setIsReady(true);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setScrollDirection("down");
      setActiveIndex((current) => (current + 1) % AXA_HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [introComplete]);

  return (
    <section
      id="hero"
      className="hero-scroll-section relative box-border min-h-[100dvh] h-auto w-full max-w-full"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative box-border flex h-auto min-h-[100dvh] max-w-full items-start overflow-x-clip overflow-y-visible pb-10 pt-24 sm:overflow-hidden sm:pb-0 sm:pt-28">
        <HeroVideoBackground />

        <div className="relative z-10 box-border w-full max-w-full min-w-0 px-4 py-6 sm:py-8 md:px-12 lg:px-16 xl:px-24">
          <div className="box-border w-full min-w-0 max-w-7xl pt-24 text-left sm:pt-12 md:pt-16 xl:pt-20">
            <div className="relative z-10 w-full min-w-0">
              <AnimatePresence mode="wait" custom={scrollDirection}>
                {isReady && introComplete ? (
                  <HeroStackedHeadline
                    key={activeIndex}
                    slideIndex={activeIndex}
                    introReady={introComplete}
                    scrollDirection={scrollDirection}
                  />
                ) : (
                  <div className="min-h-[12rem] sm:hidden" aria-hidden />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
