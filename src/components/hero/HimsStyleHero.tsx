"use client";

import { HeroLuxuryWaveBackground } from "@/components/hero/HeroLuxuryWaveBackground";
import { PhoneMockup } from "@/components/hero/PhoneMockup";
import {
  HERO_BACKGROUND_WORDS,
  HERO_SCROLL_VH,
  HERO_SLIDES,
  HERO_SLIDE_TRANSITION,
  getBackgroundWordWeights,
  getHeroScrollProgress,
  heroScrollProgressToStep,
} from "@/components/hero/hero-themes";
import { useHeroScrollSnap } from "@/components/hero/useHeroScrollSnap";
import { HeroTypewriterHeading } from "@/components/hero/HeroTypewriterHeading";
import type { SiteContent } from "@/lib/content/schema";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, MessageCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

const TEXT_BLOCK_HEIGHT = 420;

function HeroSlideLayer({
  index,
  content,
  isActive,
}: {
  index: number;
  content: SiteContent;
  isActive: boolean;
}) {
  const slide = HERO_SLIDES[index];
  const isWhatsapp = slide.ctas.primary.href === "whatsapp";
  const primaryHref = isWhatsapp ? content.contact.whatsappHref : slide.ctas.primary.href;

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center text-left"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 20,
        filter: isActive ? "blur(0px)" : "blur(4px)",
      }}
      transition={{ ...HERO_SLIDE_TRANSITION, duration: 0.75 }}
      style={{
        zIndex: isActive ? 3 : 1,
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
        {slide.eyebrow}
      </p>
      <HeroTypewriterHeading
        text={slide.title}
        isActive={isActive}
        className="mb-4 max-w-lg font-poppins text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.85rem]"
      />
      <div className="max-w-lg space-y-2">
        {slide.descriptionLines.map((line) => (
          <p
            key={line}
            className="text-sm font-medium leading-relaxed text-neutral-300 sm:text-[0.98rem]"
          >
            {line}
          </p>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={primaryHref}
          {...(isWhatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={cn(
            "inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:flex-none sm:px-6",
            index === 0
              ? "bg-[#1a6b7a] text-white hover:bg-[#155966]"
              : index === 1
                ? "bg-brand-gold text-brand-navy hover:bg-brand-gold/90"
                : "bg-[#22A559] text-white hover:bg-[#1d8f4c]",
          )}
        >
          {isWhatsapp ? (
            <MessageCircle className="h-4 w-4" />
          ) : index === 0 ? (
            <ClipboardCheck className="h-4 w-4" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
          {slide.ctas.primary.label}
        </a>
        <a
          href={slide.ctas.secondary.href}
          className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:flex-none sm:px-6"
        >
          {slide.ctas.secondary.label}
        </a>
      </div>
    </motion.div>
  );
}

function HeroBackgroundTypography({ scrollProgress }: { scrollProgress: number }) {
  const weights = getBackgroundWordWeights(scrollProgress);
  const parallaxY = scrollProgress * -48;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none"
      aria-hidden
    >
      {HERO_BACKGROUND_WORDS.map((word, index) => (
        <div
          key={word}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: weights[index] * 0.5,
            transform: `translate3d(0, ${parallaxY + index * 8}px, 0)`,
            willChange: "transform",
          }}
        >
          <span
            className="font-poppins text-[clamp(3.5rem,12vw,9rem)] font-extrabold uppercase tracking-[0.08em] text-white/[0.03]"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)" }}
          >
            {word}
          </span>
        </div>
      ))}
    </div>
  );
}

function HeroProgressDot({
  index,
  isActive,
  onSelect,
}: {
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Go to slide ${index + 1}: ${HERO_SLIDES[index].title}`}
      aria-current={isActive ? "step" : undefined}
      onClick={() => onSelect(index)}
      className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center p-2"
    >
      <motion.div
        className={cn("h-2 rounded-full", isActive ? "w-8" : "w-2")}
        animate={{
          opacity: isActive ? 1 : 0.35,
          backgroundColor: isActive ? "#c9a227" : "#ffffff",
        }}
        transition={{ duration: 0.35 }}
      />
    </button>
  );
}

const SCENE_GLOW = [
  "radial-gradient(circle at 70% 55%, rgba(26, 107, 122, 0.15) 0%, transparent 55%)",
  "radial-gradient(circle at 50% 50%, rgba(201, 162, 39, 0.12) 0%, transparent 55%)",
  "radial-gradient(circle at 30% 55%, rgba(34, 165, 89, 0.12) 0%, transparent 55%)",
];

export function HimsStyleHero({ content }: { content: SiteContent }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const { scrollToStep } = useHeroScrollSnap(containerRef);

  const syncHeroScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const progress = getHeroScrollProgress(el);
    setScrollProgress(progress);
    setActiveIndex(heroScrollProgressToStep(progress));
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

  const goToSlide = useCallback(
    (slideIndex: number) => {
      scrollToStep(slideIndex);
      setActiveIndex(slideIndex);
    },
    [scrollToStep],
  );

  const handleMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setParallax({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const contentScrollY = scrollProgress * -56;

  return (
    <div
      ref={containerRef}
      className="hero-scroll-section relative"
      style={{ height: `${HERO_SCROLL_VH}vh` }}
    >
      <div
        className="sticky top-0 h-[100dvh] overflow-hidden text-white"
        onMouseMove={handleMouseMove}
      >
        <HeroLuxuryWaveBackground
          scrollProgress={scrollProgress}
          activeIndex={activeIndex}
          parallaxX={parallax.x}
          parallaxY={parallax.y}
        />

        <div
          className="pointer-events-none absolute inset-0 z-[3] transition-all duration-1000 ease-out opacity-60"
          style={{ background: SCENE_GLOW[activeIndex] ?? SCENE_GLOW[0] }}
        />

        <div className="pointer-events-none absolute inset-0 z-[4] bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <HeroBackgroundTypography scrollProgress={scrollProgress} />

        <div className="pointer-events-none absolute inset-x-6 top-24 z-20 hidden select-none items-center justify-between text-[9px] uppercase tracking-[0.25em] text-white/45 md:flex">
          <span>9X Wealth Experience</span>
          <span>Bijal Pathak Financial Services</span>
          <span>ESTD. 2006</span>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 pt-[90px] pb-8 sm:pt-[100px]">
          <div className="flex flex-1 flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div
              className="w-full lg:max-w-xl lg:w-[44%]"
              style={{
                transform: `translate3d(0, ${contentScrollY}px, 0)`,
                willChange: "transform",
              }}
            >
              <div className="relative overflow-hidden" style={{ height: TEXT_BLOCK_HEIGHT }}>
                {HERO_SLIDES.map((_, i) => (
                  <HeroSlideLayer
                    key={HERO_SLIDES[i].title}
                    index={i}
                    content={content}
                    isActive={activeIndex === i}
                  />
                ))}
              </div>

              <div className="mt-4 flex justify-start gap-0">
                {HERO_SLIDES.map((slide, i) => (
                  <HeroProgressDot
                    key={slide.screen}
                    index={i}
                    isActive={activeIndex === i}
                    onSelect={goToSlide}
                  />
                ))}
              </div>

              <p className="mt-3 hidden text-xs font-semibold tracking-wide text-white/40 lg:block">
                Scroll to explore portfolio, goals, and advisory
              </p>
            </div>

            <div className="flex w-full flex-shrink-0 items-center justify-center overflow-visible px-6 sm:px-10 lg:w-[50%] lg:px-14">
              <PhoneMockup
                activeIndex={activeIndex}
                scrollProgress={scrollProgress}
                parallaxX={parallax.x}
                parallaxY={parallax.y}
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-6 bottom-8 z-20 hidden select-none items-center justify-between text-[9px] uppercase tracking-[0.25em] text-white/45 md:flex">
          <span>Tata AIA Partner Channel</span>
          <span>Borivali, Mumbai</span>
          <span>Portfolio · Goals · Advisory</span>
        </div>
      </div>
    </div>
  );
}
