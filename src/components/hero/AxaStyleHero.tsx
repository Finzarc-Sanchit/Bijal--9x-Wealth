"use client";

import { HeroAnimatedPillImage, HeroCrossfadeImage } from "@/components/hero/HeroAnimatedImage";
import { HeroVideoBackground } from "@/components/hero/HeroVideoBackground";
import { useSiteIntro } from "@/components/layout/SiteIntroLayout";
import { AXA_HERO_SLIDES } from "@/data/axa-hero-slides";
import {
  HERO_SCROLL_VH,
  getHeroScrollProgress,
  heroScrollProgressToStep,
} from "@/components/hero/hero-themes";
import { useHeroScrollSnap } from "@/components/hero/useHeroScrollSnap";
import type { SiteContent } from "@/lib/content/schema";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

// Added a fluid responsive text scale stack to prevent horizontal clipping across ultra-wide desktop layouts
const HEADLINE_CLASS =
  "hero-editorial-headline block w-full font-poppins font-medium uppercase tracking-tight text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6.5rem] leading-[1.05] whitespace-nowrap";

const EPIGRAPH_CLASS =
  "text-sm font-inter font-medium italic leading-relaxed text-white/92 sm:text-[0.95rem] lg:text-base";

function HeroCta({ label, href }: { label: string; href: string; }) {
  const className =
    "group inline-flex min-h-[48px] items-center rounded-full bg-brand-gold py-2 pl-6 pr-2 font-inter text-brand-navy shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-brand-gold-light hover:pr-3 sm:pl-8 tracking-normal normal-case";

  const inner = (
    <>
      <span className="mr-3 text-sm font-semibold sm:mr-4 tracking-normal normal-case">{label}</span>
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
    <div className="flex w-full max-w-full flex-col items-start text-left m-0 p-0 select-none">
      <h1 className="contents">
        {/* Line 1 */}
        <div className="overflow-hidden w-full pb-1">
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
            <span className={cn(HEADLINE_CLASS, "min-w-0 flex-1")}>
              {slide.leadWord}
            </span>
          </motion.div>
        </div>

        {/* Line 2 */}
        <div className="overflow-hidden w-full mt-1 sm:mt-2 pb-1">
          <motion.div
            custom={scrollDirection}
            variants={lineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SLIDE_TRANSITION}
          >
            <span className={HEADLINE_CLASS}>
              {line2}
            </span>
          </motion.div>
        </div>

        {/* Line 3 */}
        <div className="overflow-hidden w-full mt-1 sm:mt-2 pb-1">
          <motion.div
            custom={scrollDirection}
            variants={lineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SLIDE_TRANSITION}
          >
            <span className={HEADLINE_CLASS}>
              {line3}
            </span>
          </motion.div>
        </div>

        {/* Line 4 */}
        <div className="overflow-hidden w-full mt-2 sm:mt-3 pb-1">
          <motion.div
            custom={scrollDirection}
            variants={lineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SLIDE_TRANSITION}
          >
            <span className={HEADLINE_CLASS}>
              {closingLine}
            </span>
          </motion.div>
        </div>
      </h1>

      {/* Description Text (Epigraph) with expanded spatial desktop boundaries */}
      <div className="relative min-w-0 w-full mt-6 md:mt-8 overflow-hidden">
        <AnimatePresence mode="wait">
          {introReady ? (
            <motion.div
              key={slideIndex + "-epigraph"}
              className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl text-left"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <p className={EPIGRAPH_CLASS}>
                {`"${slide.epigraph}"`}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Action CTA Button */}
      <div className="w-full sm:w-auto mt-8 md:mt-10 block relative z-30">
        <HeroCta label={slide.cta.label} href={slide.cta.href} />
      </div>
    </div>
  );
}

export function AxaStyleHero({ content: _content }: { content: SiteContent; }) {
  const { introComplete } = useSiteIntro();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  const { scrollToStep } = useHeroScrollSnap(containerRef);

  const syncHeroScroll = useCallback(() => {
    if (!introComplete) return;

    const el = containerRef.current;
    if (!el) return;

    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection("up");
    }
    lastScrollY.current = currentScrollY;

    setActiveIndex(heroScrollProgressToStep(getHeroScrollProgress(el)));
  }, [introComplete]);

  useEffect(() => {
    if (!introComplete) return;

    syncHeroScroll();
    setIsReady(true);

    window.addEventListener("scroll", syncHeroScroll, { passive: true });
    window.addEventListener("resize", syncHeroScroll);
    return () => {
      window.removeEventListener("scroll", syncHeroScroll);
      window.removeEventListener("resize", syncHeroScroll);
    };
  }, [syncHeroScroll, introComplete]);

  useEffect(() => {
    if (introComplete) {
      window.scrollTo({ top: 0, behavior: "auto" });
      scrollToStep(0, "auto");
      setActiveIndex(0);
    }
  }, [introComplete, scrollToStep]);

  return (
    <div
      ref={containerRef}
      className="hero-scroll-section relative bg-black/10 w-full"
      style={{ height: `${HERO_SCROLL_VH}vh` }}
      id="hero"
    >
      <div className="sticky top-0 flex h-[100dvh] items-start overflow-hidden pt-24 sm:pt-28">
        <HeroVideoBackground />

        {/* Blown wide layout limits: max-w-full lets the component scale smoothly without horizontal grid clipping */}
        <div className="relative z-10 w-full max-w-full px-4 py-8 md:px-12 lg:px-16 xl:px-24">
          <div className="w-full max-w-7xl pt-12 md:pt-16 xl:pt-20 text-left">
            <div className="relative z-10 w-full min-w-0">
              <AnimatePresence mode="wait" custom={scrollDirection}>
                {isReady && introComplete && (
                  <HeroStackedHeadline
                    key={activeIndex}
                    slideIndex={activeIndex}
                    introReady={introComplete}
                    scrollDirection={scrollDirection}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}