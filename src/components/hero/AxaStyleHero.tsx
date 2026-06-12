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

const HEADLINE_CLASS =
  "hero-editorial-headline block w-full font-sans font-extrabold uppercase tracking-tight text-white";

const EPIGRAPH_CLASS =
  "text-sm font-display font-medium italic leading-relaxed text-white/92 sm:text-[0.95rem]";

function HeroCta({ label, href }: { label: string; href: string; }) {
  // Added normal tracking classes to stop letters from collapsing closer together
  const className =
    "group inline-flex min-h-[48px] items-center rounded-full bg-brand-gold py-2 pl-6 pr-2 text-brand-navy shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-brand-gold-light hover:pr-3 sm:pl-8 tracking-normal normal-case font-sans";

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
    <div className="flex w-full max-w-full flex-col items-start text-left m-0 p-0">
      <h1 className="contents">
        {/* Line 1 */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex w-full max-w-full flex-wrap items-center gap-3 sm:gap-4"
            custom={scrollDirection}
            variants={lineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SLIDE_TRANSITION}
          >
            <span className="relative h-11 w-32 shrink-0 overflow-hidden rounded-full bg-white/10 ring-2 ring-white/30 sm:h-14 sm:w-44">
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
        <div className="overflow-hidden w-full mt-2 sm:mt-3">
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
        <div className="overflow-hidden w-full mt-2 sm:mt-3">
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
        <div className="overflow-hidden w-full mt-3 sm:mt-4">
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

      {/* Fixed Button Container - Outside h1 flow to protect styles */}
      <div className="w-full sm:w-auto mt-6 block relative z-30">
        <HeroCta label={slide.cta.label} href={slide.cta.href} />
      </div>
    </div>
  );
}

function HeroEditorialCard({
  activeIndex,
  introReady,
  onSelect,
  isReady,
}: {
  activeIndex: number;
  introReady: boolean;
  onSelect: (index: number) => void;
  isReady: boolean;
}) {
  const slide = AXA_HERO_SLIDES[activeIndex];
  const progressWidth = `${((activeIndex + 1) / AXA_HERO_SLIDES.length) * 100}%`;

  return (
    <article className="hero-editorial-clip group relative h-[380px] w-full overflow-hidden bg-white/5 backdrop-blur-md border border-white/15 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] sm:h-[420px] lg:h-[440px]">
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-35">
        {AXA_HERO_SLIDES.map((item, index) => (
          <HeroCrossfadeImage
            key={item.id}
            src={item.cardImage.src}
            alt={item.cardImage.alt}
            priority={index === 0}
            isActive={activeIndex === index}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-8 pb-8 pt-16 text-white sm:px-10 sm:pb-10">
        <AnimatePresence mode="wait">
          {isReady && introReady ? (
            <motion.div
              key={slide.id + "-copy"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="mb-3 font-display text-xl font-light italic sm:mb-4 tracking-wide text-brand-gold-light">
                {`'${slide.cardQuote}'`}
              </p>
              <p className="max-w-md text-base font-medium leading-relaxed text-white/90 sm:text-lg">
                {slide.cardBody}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="relative mt-8 h-[2px] w-full bg-white/15">
          <motion.div
            className="absolute left-0 top-0 h-full bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]"
            animate={{ width: progressWidth }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="mt-5 flex justify-end gap-1.5">
          {AXA_HERO_SLIDES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? "step" : undefined}
              onClick={() => onSelect(index)}
              className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center transition-transform active:scale-95"
            >
              <span
                className={cn(
                  "block rounded-full bg-white transition-all duration-300",
                  activeIndex === index ? "h-2 w-5 bg-brand-gold opacity-100" : "h-2 w-2 opacity-25 hover:opacity-50",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </article>
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

  const goToSlide = useCallback(
    (index: number) => {
      if (!isReady) return;
      scrollToStep(index);
      setActiveIndex(index);
    },
    [scrollToStep, isReady],
  );

  const activeSlide = AXA_HERO_SLIDES[activeIndex];

  return (
    <div
      ref={containerRef}
      className="hero-scroll-section relative bg-black/10"
      style={{ height: `${HERO_SCROLL_VH}vh` }}
      id="hero"
    >
      <div className="sticky top-0 flex h-[100dvh] items-start overflow-hidden pt-24 sm:pt-28">
        <HeroVideoBackground />
        <div className="relative z-10 w-full max-w-full px-4 py-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 pt-16 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-12 xl:gap-x-16">

            {/* Left half — Mask Animated Heading */}
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

            {/* Right half — Premium Translucent Widget Block */}
            <div className="relative flex w-full min-w-0 flex-col lg:mt-12">
              <AnimatePresence mode="wait">
                {isReady && introComplete ? (
                  <motion.div
                    key={activeIndex + "-epigraph"}
                    className="mb-4 max-w-md text-left lg:mb-6 lg:ml-auto lg:text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                  >
                    <p className={EPIGRAPH_CLASS}>
                      {`"${activeSlide.epigraph}"`}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {/* <div className="relative w-full">
                <HeroEditorialCard
                  activeIndex={activeIndex}
                  introReady={introComplete}
                  onSelect={goToSlide}
                  isReady={isReady && introComplete}
                />
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}