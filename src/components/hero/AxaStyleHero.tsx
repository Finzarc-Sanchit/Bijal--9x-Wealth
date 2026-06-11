"use client";

import { HeroAnimatedPillImage, HeroCrossfadeImage } from "@/components/hero/HeroAnimatedImage";
import { HeroTypewriterHeading } from "@/components/hero/HeroTypewriterHeading";
import { HeroVideoBackground } from "@/components/hero/HeroVideoBackground";
import { useSiteIntro } from "@/components/layout/SiteIntroLayout";
import { AXA_HERO_SLIDES } from "@/data/axa-hero-slides";
import {
  HERO_SCROLL_VH,
  getHeroScrollProgress,
  heroScrollProgressToStep,
} from "@/components/hero/hero-themes";
import { useHeroScrollSnap } from "@/components/hero/useHeroScrollSnap";
import { TypewriterText } from "@/components/motion/TypewriterText";
import type { SiteContent } from "@/lib/content/schema";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

const HEADLINE_CLASS =
  "hero-editorial-headline block w-full font-sans text-[clamp(2rem,4.2vw,3.75rem)] font-extrabold uppercase leading-[0.92] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]";

const EPIGRAPH_CLASS =
  "text-sm font-display font-medium italic leading-relaxed text-white/92 drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] sm:text-[0.95rem]";

const TYPEWRITER = {
  epigraph: { charDelayMs: 34, startDelayMs: 0 },
  headlineLead: { charDelayMs: 88 },
  headlineLine: { charDelayMs: 72 },
  cardQuote: { charDelayMs: 52, startDelayMs: 280 },
  cardBody: { charDelayMs: 38, startDelayMs: 1100 },
} as const;

function HeroCta({ label, href }: { label: string; href: string }) {
  const className =
    "group inline-flex min-h-[48px] items-center rounded-full bg-brand-gold py-2 pl-6 pr-2 text-brand-navy shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-brand-gold-light hover:pr-3 sm:pl-8";

  const inner = (
    <>
      <span className="mr-3 text-sm font-semibold sm:mr-4">{label}</span>
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
}: {
  slideIndex: number;
  introReady: boolean;
}) {
  const slide = AXA_HERO_SLIDES[slideIndex];
  const [line2, line3, closingLine] = slide.headlineLines;
  const typingActive = introReady;
  const showInstant = slideIndex > 0;

  return (
    <motion.div
      className="flex w-full max-w-full flex-col items-start text-left"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={SLIDE_TRANSITION}
    >
      <div className="flex w-full max-w-full flex-wrap items-center gap-3 sm:gap-4">
        <span className="relative h-11 w-32 shrink-0 overflow-hidden rounded-full bg-white/10 ring-2 ring-white/30 sm:h-14 sm:w-44">
          <HeroAnimatedPillImage
            src={slide.pillImage.src}
            alt={slide.pillImage.alt}
            priority={slideIndex === 0}
            isActive={typingActive}
          />
        </span>
        <HeroTypewriterHeading
          text={slide.leadWord}
          isActive={typingActive}
          instant={showInstant}
          className={cn(HEADLINE_CLASS, "min-w-0 flex-1")}
          charDelayMs={TYPEWRITER.headlineLead.charDelayMs}
          cursorClassName="text-brand-gold"
        />
      </div>

      <HeroTypewriterHeading
        text={line2}
        isActive={typingActive}
        instant={showInstant}
        className={cn(HEADLINE_CLASS, "mt-2 sm:mt-3")}
        charDelayMs={TYPEWRITER.headlineLine.charDelayMs}
        cursorClassName="text-brand-gold"
      />
      <HeroTypewriterHeading
        text={line3}
        isActive={typingActive}
        instant={showInstant}
        className={cn(HEADLINE_CLASS, "mt-2 sm:mt-3")}
        charDelayMs={TYPEWRITER.headlineLine.charDelayMs}
        cursorClassName="text-brand-gold"
      />

      <div className="mt-3 flex w-full max-w-full flex-col gap-5 sm:mt-4">
        <HeroTypewriterHeading
          text={closingLine}
          isActive={typingActive}
          instant={showInstant}
          className={HEADLINE_CLASS}
          charDelayMs={TYPEWRITER.headlineLine.charDelayMs}
          cursorClassName="text-brand-gold"
        />
        <div className="w-full sm:w-auto">
          <HeroCta label={slide.cta.label} href={slide.cta.href} />
        </div>
      </div>
    </motion.div>
  );
}

function HeroEditorialCard({
  activeIndex,
  introReady,
  onSelect,
}: {
  activeIndex: number;
  introReady: boolean;
  onSelect: (index: number) => void;
}) {
  const slide = AXA_HERO_SLIDES[activeIndex];
  const progressWidth = `${((activeIndex + 1) / AXA_HERO_SLIDES.length) * 100}%`;

  return (
    <article className="hero-editorial-clip group relative h-[420px] w-full overflow-hidden bg-brand-navy shadow-2xl sm:h-[480px] lg:h-[500px]">
      {AXA_HERO_SLIDES.map((item, index) => (
        <HeroCrossfadeImage
          key={item.id}
          src={item.cardImage.src}
          alt={item.cardImage.alt}
          priority={index === 0}
          isActive={activeIndex === index}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-8 pb-10 pt-16 text-white sm:px-10 sm:pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-copy"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45 }}
          >
            {introReady ? (
              <>
                <TypewriterText
                  text={`'${slide.cardQuote}'`}
                  className="mb-3 font-display text-xl font-light italic sm:mb-4"
                  charDelayMs={TYPEWRITER.cardQuote.charDelayMs}
                  startDelayMs={TYPEWRITER.cardQuote.startDelayMs}
                />
                <TypewriterText
                  text={slide.cardBody}
                  className="max-w-xs text-base font-medium leading-snug sm:text-lg"
                  charDelayMs={TYPEWRITER.cardBody.charDelayMs}
                  startDelayMs={TYPEWRITER.cardBody.startDelayMs}
                />
              </>
            ) : null}
          </motion.div>
        </AnimatePresence>

        <div className="relative mt-6 h-px w-full bg-white/20">
          <motion.div
            className="absolute left-0 top-0 h-full bg-brand-teal shadow-[0_0_10px_rgba(26,107,122,0.8)]"
            animate={{ width: progressWidth }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="mt-6 flex justify-end gap-2">
          {AXA_HERO_SLIDES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? "step" : undefined}
              onClick={() => onSelect(index)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center"
            >
              <span
                className={cn(
                  "block rounded-full bg-white transition-all duration-300",
                  activeIndex === index ? "h-2.5 w-2.5 opacity-100" : "h-2 w-2 opacity-30",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export function AxaStyleHero({ content: _content }: { content: SiteContent }) {
  const { introComplete } = useSiteIntro();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollToStep } = useHeroScrollSnap(containerRef);

  const syncHeroScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setActiveIndex(heroScrollProgressToStep(getHeroScrollProgress(el)));
  }, []);

  useEffect(() => {
    syncHeroScroll();
    window.addEventListener("scroll", syncHeroScroll, { passive: true });
    window.addEventListener("resize", syncHeroScroll);
    return () => {
      window.removeEventListener("scroll", syncHeroScroll);
      window.removeEventListener("resize", syncHeroScroll);
    };
  }, [syncHeroScroll]);

  useEffect(() => {
    if (introComplete) {
      window.scrollTo({ top: 0, behavior: "auto" });
      scrollToStep(0, "auto");
      setActiveIndex(0);
    }
  }, [introComplete, scrollToStep]);

  const goToSlide = useCallback(
    (index: number) => {
      scrollToStep(index);
      setActiveIndex(index);
    },
    [scrollToStep],
  );

  const activeSlide = AXA_HERO_SLIDES[activeIndex];

  return (
    <div
      ref={containerRef}
      className="hero-scroll-section relative bg-brand-navy"
      style={{ height: `${HERO_SCROLL_VH}vh` }}
      id="hero"
    >
      <div className="sticky top-0 flex h-[100dvh] items-start overflow-hidden pt-24 sm:pt-28">
        <HeroVideoBackground />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-14">
            {/* Left half — stacked headline + Read More CTA (all 3 slides) */}
            <div className="relative z-10 w-full min-w-0 lg:pr-4">
              <AnimatePresence mode="wait">
                <HeroStackedHeadline
                  key={activeSlide.id}
                  slideIndex={activeIndex}
                  introReady={introComplete}
                />
              </AnimatePresence>
            </div>

            {/* Right half — epigraph + image card (all 3 slides) */}
            <div className="relative flex w-full min-w-0 flex-col lg:pl-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id + "-epigraph"}
                  className="mb-6 max-w-md text-left lg:mb-8 lg:ml-auto lg:text-right"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45 }}
                >
                  {introComplete ? (
                    <TypewriterText
                      text={`"${activeSlide.epigraph}"`}
                      className={EPIGRAPH_CLASS}
                      charDelayMs={TYPEWRITER.epigraph.charDelayMs}
                      startDelayMs={TYPEWRITER.epigraph.startDelayMs}
                      cursorClassName="text-brand-gold"
                    />
                  ) : null}
                </motion.div>
              </AnimatePresence>

              <div className="relative w-full">
                <HeroEditorialCard
                  activeIndex={activeIndex}
                  introReady={introComplete}
                  onSelect={goToSlide}
                />

                <div className="absolute -bottom-14 right-2 flex flex-col items-center sm:-bottom-16 sm:right-4">
                  <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                    Scroll
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                    <ArrowDown className="h-4 w-4 animate-bounce" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
