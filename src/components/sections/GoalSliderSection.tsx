"use client";

import { GoalSliderBackground } from "@/components/sections/GoalSliderBackground";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  GOAL_CARD_ACCENTS,
  GOAL_TAB_ACTIVE_STYLES,
  GOAL_TAB_STYLES,
  type GoalCardAccentType,
} from "@/data/goal-slider-theme";
import {
  GOAL_SLIDER_CONTENT,
  GOAL_SLIDER_UI,
  type GoalCardImageKey,
  type GoalSliderItem,
} from "@/data/goal-slider-content";
import { scrollToConsultation } from "@/lib/consultation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ArrowUpRight, ChevronLeft, ChevronRight, Layers, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const CARD_CONFIG: {
  type: GoalCardAccentType;
  imageKey: GoalCardImageKey;
  label: string;
  getContent: (item: GoalSliderItem) => React.ReactNode;
}[] = [
  {
    type: "reality",
    imageKey: "reality",
    label: GOAL_SLIDER_UI.realityLabel,
    getContent: (item) => item.problemText,
  },
  {
    type: "architecture",
    imageKey: "architecture",
    label: GOAL_SLIDER_UI.architectureLabel,
    getContent: (item) => item.strategyText,
  },
  {
    type: "compounding",
    imageKey: "compounding",
    label: GOAL_SLIDER_UI.compoundingLabel,
    getContent: (item) => (
      <>
        <p className="font-semibold text-brand-navy">{item.formulaText}</p>
        <p className="mt-3 text-xs leading-relaxed text-brand-muted">
          {GOAL_SLIDER_UI.formulaDisclaimer}
        </p>
      </>
    ),
  },
];

function GoalInsightCard({
  type,
  label,
  image,
  children,
  index,
}: {
  type: GoalCardAccentType;
  label: string;
  image: { src: string; alt: string };
  children: React.ReactNode;
  index: number;
}) {
  const accent = GOAL_CARD_ACCENTS[type];
  const Icon = type === "reality" ? AlertTriangle : type === "architecture" ? Layers : TrendingUp;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white",
        "shadow-[0_16px_40px_-20px_rgba(10,22,40,0.18)] ring-1 transition-shadow duration-500",
        accent.ring,
        accent.glow,
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 z-20 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
          accent.bar,
        )}
        aria-hidden
      />

      <div className="relative h-44 overflow-hidden sm:h-48">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/88 via-brand-navy/35 to-brand-navy/10" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="goal-card-shimmer absolute inset-0" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5">
          <span
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl backdrop-blur-sm",
              accent.iconBg,
            )}
          >
            <Icon className={cn("h-5 w-5", accent.icon)} strokeWidth={2.25} />
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]",
              accent.badge,
              accent.label,
            )}
          >
            {label}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="text-sm leading-relaxed text-brand-muted sm:text-[0.95rem]">{children}</div>
        <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold uppercase tracking-wide text-brand-navy/50 transition-colors duration-300 group-hover:text-brand-teal">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}

export function GoalSliderSection() {
  const [activeIndex, setActiveIndex] = useState<0 | 1 | 2>(0);
  const active = GOAL_SLIDER_CONTENT[activeIndex];

  const goNext = useCallback(() => {
    setActiveIndex((i) => ((i + 1) % 3) as 0 | 1 | 2);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => ((i + 2) % 3) as 0 | 1 | 2);
  }, []);

  return (
    <section id="goal-planning" className="scroll-mt-8">
      <GoalSliderBackground activeIndex={activeIndex} className="section-py">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-10 max-w-2xl">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
                {GOAL_SLIDER_UI.sectionEyebrow}
              </p>
              <h2 className="mb-4 font-poppins text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
                {GOAL_SLIDER_UI.sectionTitle}
              </h2>
              <p className="text-base leading-relaxed text-brand-muted">
                {GOAL_SLIDER_UI.sectionSubtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous goal"
                className="hidden min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full bg-white/80 text-brand-navy shadow-sm ring-1 ring-brand-navy/8 transition hover:bg-white hover:ring-brand-gold/40 sm:inline-flex"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div
                className="flex flex-1 flex-col gap-2 sm:flex-row"
                role="tablist"
                aria-label="Financial goals"
              >
                {GOAL_SLIDER_CONTENT.map((item) => {
                  const isActive = activeIndex === item.index;
                  return (
                    <button
                      key={item.index}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveIndex(item.index)}
                      className={cn(
                        "relative min-h-[48px] flex-1 overflow-hidden rounded-2xl px-4 py-3 text-left ring-1 transition-all duration-400",
                        isActive ? GOAL_TAB_ACTIVE_STYLES[item.index] : GOAL_TAB_STYLES[item.index],
                      )}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="goal-tab-highlight"
                          className="absolute inset-0 rounded-2xl bg-white"
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          aria-hidden
                        />
                      ) : null}
                      <span className="relative flex items-center gap-2">
                        <span className="text-lg" aria-hidden>
                          {item.tabEmoji}
                        </span>
                        <span className="flex flex-col">
                          <span className="text-sm font-bold text-brand-navy sm:text-base">
                            {item.tabShortLabel}
                          </span>
                          <span className="hidden text-xs text-brand-muted sm:block">
                            Tap to explore
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next goal"
                className="hidden min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full bg-white/80 text-brand-navy shadow-sm ring-1 ring-brand-navy/8 transition hover:bg-white hover:ring-brand-gold/40 sm:inline-flex"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                {CARD_CONFIG.map((card, index) => (
                  <GoalInsightCard
                    key={card.type}
                    type={card.type}
                    label={card.label}
                    image={active.cardImages[card.imageKey]}
                    index={index}
                  >
                    {card.getContent(active)}
                  </GoalInsightCard>
                ))}
              </div>

              <div className="mt-10 text-center">
                <motion.button
                  type="button"
                  onClick={() => scrollToConsultation(active.formTargetSlug)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-3 text-base font-bold text-brand-navy shadow-[0_12px_28px_-10px_rgba(201,162,39,0.55)] transition-colors duration-300 hover:bg-brand-navy hover:text-white"
                >
                  {active.actionButtonText}
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </GoalSliderBackground>
    </section>
  );
}
