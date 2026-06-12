"use client";

import { HERO_LAPTOP_FRAMES } from "@/components/hero/hero-laptop-frames";
import {
  HERO_SLIDES,
  HERO_SLIDE_TRANSITION,
  getLaptopImageWeights,
  getLaptopTransform,
  lerpAtProgress,
} from "@/components/hero/hero-themes";
import { useLaptopStageDimensions } from "@/components/hero/useLaptopStageDimensions";
import { GOAL_SLIDER_UI } from "@/data/goal-slider-content";
import type { SiteContent } from "@/lib/content/schema";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  ClipboardCheck,
  MessageCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function SimulatedCursor({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <motion.div
      className="pointer-events-none absolute z-50 h-2 w-2 rounded-full border border-white/80 bg-white shadow-sm"
      animate={{
        opacity: [0.6, 1, 1, 0.7],
        left: ["12%", "58%", "44%", "70%"],
        top: ["20%", "32%", "55%", "42%"],
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />
  );
}

function LaptopScreenNav({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex shrink-0 items-center justify-between border-b border-gray-200/80 bg-white px-2 py-1">
      <div className="flex items-center gap-0.5">
        <span className="text-[7px] font-extrabold tracking-wide text-brand-navy sm:text-[8px]">
          9X Wealth
        </span>
        <Sparkles className="h-2 w-2 fill-brand-gold text-brand-gold" />
      </div>
      <div className="flex items-center gap-0.5">
        {HERO_SLIDES.map((slide, idx) => (
          <span
            key={slide.eyebrow}
            className={cn(
              "rounded px-1 py-0.5 text-[5px] font-bold uppercase tracking-wide sm:text-[6px]",
              activeIndex === idx ? "bg-brand-navy/5 text-brand-gold" : "text-brand-navy/45",
            )}
          >
            {slide.eyebrow}
          </span>
        ))}
      </div>
    </div>
  );
}

function LaptopHeroIntro({
  index,
  content,
}: {
  index: number;
  content: SiteContent;
}) {
  const slide = HERO_SLIDES[index];
  const isWhatsapp = slide.ctas.primary.href === "whatsapp";
  const primaryHref = isWhatsapp ? content.contact.whatsappHref : slide.ctas.primary.href;

  return (
    <div className="shrink-0 border-b border-gray-200/80 bg-gradient-to-br from-brand-navy to-[#132038] px-2 py-1.5 text-white">
      <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-brand-gold sm:text-[7px]">
        {slide.eyebrow}
      </p>
      <h2 className="mt-0.5 font-poppins text-[9px] font-bold leading-tight sm:text-[10px]">
        {slide.title}
      </h2>
      <p className="mt-0.5 line-clamp-2 text-[6px] leading-snug text-white/75">
        {slide.descriptionLines[0]}
      </p>
      <div className="mt-1 flex flex-wrap gap-0.5">
        <a
          href={primaryHref}
          {...(isWhatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={cn(
            "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[6px] font-semibold",
            index === 0
              ? "bg-brand-teal text-white"
              : index === 1
                ? "bg-brand-gold text-brand-navy"
                : "bg-[#22A559] text-white",
          )}
        >
          {isWhatsapp ? (
            <MessageCircle className="h-2 w-2" />
          ) : index === 0 ? (
            <ClipboardCheck className="h-2 w-2" />
          ) : (
            <ArrowRight className="h-2 w-2" />
          )}
          {slide.ctas.primary.label}
        </a>
        <a
          href={slide.ctas.secondary.href}
          className="inline-flex items-center rounded-full border border-white/25 px-1.5 py-0.5 text-[6px] font-semibold text-white"
        >
          {slide.ctas.secondary.label}
        </a>
      </div>
    </div>
  );
}

function LaptopPortfolioPanel() {
  return (
    <div className="grid grid-cols-12 gap-1.5 p-2">
      <div className="col-span-5 space-y-1.5">
        <div className="rounded-md bg-white p-1.5 shadow-xs ring-1 ring-black/5">
          <p className="text-[6px] text-gray-500">Net Portfolio Value</p>
          <p className="text-[11px] font-extrabold text-brand-navy">₹24,80,000</p>
          <p className="flex items-center gap-0.5 text-[6px] font-medium text-emerald-600">
            <TrendingUp className="h-2 w-2" />
            +12.4% this year
          </p>
        </div>
        <div className="rounded-md bg-white p-1.5 shadow-xs ring-1 ring-black/5">
          <p className="text-[6px] text-gray-500">Allocation</p>
          <div className="mt-0.5 flex flex-wrap gap-0.5">
            {["Mutual Funds", "SIPs", "Tata AIA"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-gold/15 px-1 py-0.5 text-[5px] font-medium text-brand-navy"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-7 rounded-md bg-white p-1.5 shadow-xs ring-1 ring-black/5">
        <div className="mb-0.5 flex items-center justify-between">
          <span className="text-[6px] font-semibold text-gray-500">Performance</span>
          <Bell className="h-2 w-2 text-gray-400" />
        </div>
        <svg viewBox="0 0 200 80" className="h-10 w-full sm:h-12" aria-hidden>
          <polyline
            fill="none"
            stroke="#1a6b7a"
            strokeWidth="2.5"
            points="0,65 30,55 60,60 100,40 140,45 170,25 200,10"
          />
        </svg>
      </div>
    </div>
  );
}

function LaptopGoalsPanel() {
  return (
    <div className="grid grid-cols-2 gap-1.5 p-2">
      <div className="rounded-md bg-brand-navy/5 p-1.5 ring-1 ring-brand-navy/10">
        <p className="text-[6px] text-brand-navy/60">Retirement Goal</p>
        <p className="text-[11px] font-extrabold text-brand-gold">₹2.00 Cr</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-md bg-brand-gold/10 p-1.5">
        <span className="text-sm font-bold text-brand-navy">68%</span>
        <span className="text-[6px] text-brand-navy/60">on track</span>
      </div>
      <p className="col-span-2 text-[6px] leading-relaxed text-brand-navy/70">
        {GOAL_SLIDER_UI.sectionSubtitle}
      </p>
    </div>
  );
}

function LaptopAdvisorPanel({
  testimonial,
}: {
  testimonial?: SiteContent["testimonials"][number];
}) {
  return (
    <div className="space-y-1.5 p-2">
      {testimonial && (
        <div className="rounded-md bg-white p-1.5 shadow-xs ring-1 ring-black/5">
          <p className="text-[6px] italic leading-relaxed text-brand-navy/90">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="mt-0.5 text-[6px] font-semibold text-brand-teal">{testimonial.author}</p>
        </div>
      )}
      <div className="rounded-md rounded-bl-sm bg-white p-1.5 text-[6px] shadow-xs ring-1 ring-black/5">
        How can I help with insurance or SIPs today?
      </div>
      <div className="ml-auto max-w-[85%] rounded-md rounded-br-sm bg-brand-teal p-1.5 text-[6px] text-white">
        Plan family goals and review Tata AIA wealth plans.
      </div>
    </div>
  );
}

function LaptopScreenContent({
  activeIndex,
  content,
  isLive,
}: {
  activeIndex: number;
  content: SiteContent;
  isLive: boolean;
}) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#F4F5F7]">
      <LaptopScreenNav activeIndex={activeIndex} />
      <div
        className={cn(
          "relative min-h-0 flex-1 overflow-hidden",
          isLive && "hero-laptop-autoscroll hero-laptop-autoscroll--active",
        )}
      >
        <div className="flex h-[155%] flex-col">
          <LaptopHeroIntro index={activeIndex} content={content} />
          {activeIndex === 0 && <LaptopPortfolioPanel />}
          {activeIndex === 1 && <LaptopGoalsPanel />}
          {activeIndex === 2 && (
            <LaptopAdvisorPanel testimonial={content.testimonials[0]} />
          )}
        </div>
      </div>
      <SimulatedCursor active={isLive} />
    </div>
  );
}

function LaptopScreenOverlay({
  frameIndex,
  activeIndex,
  weight,
  content,
}: {
  frameIndex: number;
  activeIndex: number;
  weight: number;
  content: SiteContent;
}) {
  const frame = HERO_LAPTOP_FRAMES[frameIndex];
  const isLive = weight > 0.4;

  if (weight < 0.02) return null;

  return (
    <div
      className="absolute z-20"
      style={{
        top: frame.screen.top,
        left: frame.screen.left,
        width: frame.screen.width,
        height: frame.screen.height,
        opacity: weight,
      }}
    >
      <div
        className="h-full w-full overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
        style={{
          transform: frame.screen.transform,
          transformOrigin: frame.screen.transformOrigin ?? "50% 50%",
          borderRadius: frame.screen.borderRadius,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={HERO_SLIDES[activeIndex].screen}
            className="h-full w-full"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={HERO_SLIDE_TRANSITION}
          >
            <LaptopScreenContent
              activeIndex={activeIndex}
              content={content}
              isLive={isLive}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

type LaptopMockupProps = {
  activeIndex: number;
  scrollProgress: number;
  content: SiteContent;
  parallaxX?: number;
  parallaxY?: number;
};

export function LaptopMockup({
  activeIndex,
  scrollProgress,
  content,
  parallaxX = 0,
  parallaxY = 0,
}: LaptopMockupProps) {
  const [isMobile, setIsMobile] = useState(false);
  const stageSize = useLaptopStageDimensions();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const weights = useMemo(
    () => getLaptopImageWeights(scrollProgress),
    [scrollProgress],
  );
  const transform = useMemo(
    () => getLaptopTransform(scrollProgress),
    [scrollProgress],
  );

  const stageOffsetX = useMemo(
    () =>
      lerpAtProgress(scrollProgress, [
        [0, 12],
        [0.5, 0],
        [1, -12],
      ]),
    [scrollProgress],
  );

  const stageScale = isMobile ? 1.02 : transform.scale;
  const ready = stageSize.width > 0;

  return (
    <div className="absolute inset-0 z-[5] overflow-hidden bg-[#0B0F19]">
      {ready && (
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: stageSize.width,
            height: stageSize.height,
            transform: `translate3d(calc(-50% + ${stageOffsetX + transform.xPercent * 0.25}% + ${parallaxX * 0.12}px), calc(-50% + ${parallaxY * 0.08}px), 0) scale(${stageScale})`,
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          {HERO_LAPTOP_FRAMES.map((frame, index) => {
            const weight = isMobile ? (index === 1 ? 1 : 0) : weights[index];

            return (
              <div
                key={frame.src}
                className="absolute inset-0"
                style={{ opacity: weight, willChange: "opacity" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ transform: frame.flipHorizontal ? "scaleX(-1)" : undefined }}
                >
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    priority={index <= 1}
                    sizes="100vw"
                    className="object-cover"
                    draggable={false}
                  />
                </div>

                <LaptopScreenOverlay
                  frameIndex={index}
                  activeIndex={activeIndex}
                  weight={weight}
                  content={content}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F19]/70 via-transparent to-[#0B0F19]/20" />
    </div>
  );
}
