"use client";

import {
  WELLNESS_CARD_TONES,
  WELLNESS_FOCUS_UI,
  WELLNESS_FOCUS_WINS,
} from "@/data/financial-health-quiz";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

const COLLAPSED_WIDTH = 152;
const EXPANDED_WIDTH = 380;
const CARD_HEIGHT = 272;
const CARD_GAP = 12;

const springTransition = {
  type: "spring" as const,
  stiffness: 340,
  damping: 32,
  mass: 0.9,
};

type FocusWinItem = (typeof WELLNESS_FOCUS_WINS)[number];

function FocusWinCard({
  item,
  cardKey,
  isActive,
  onActivate,
  reduceMotion,
}: {
  item: FocusWinItem;
  cardKey: string;
  isActive: boolean;
  onActivate: (key: string) => void;
  reduceMotion: boolean | null;
}) {
  const tone = WELLNESS_CARD_TONES[item.tone];

  return (
    <motion.article
      animate={{
        width: isActive ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
      }}
      transition={reduceMotion ? { duration: 0.2 } : springTransition}
      onMouseEnter={() => onActivate(cardKey)}
      onFocus={() => onActivate(cardKey)}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={`${item.name}. ${isActive ? "Expanded" : "Hover to expand"}`}
      style={{ height: CARD_HEIGHT }}
      className={cn(
        "relative shrink-0 cursor-pointer overflow-hidden rounded-2xl outline-none ring-1 transition-shadow duration-300",
        isActive
          ? cn("z-20 text-white shadow-[0_24px_48px_-14px_rgba(10,22,40,0.35)]", tone.expanded)
          : cn("z-10 shadow-sm hover:shadow-md", tone.collapsed),
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isActive ? (
          <motion.div
            key="expanded"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="flex h-full flex-col"
          >
            <div className="relative h-28 shrink-0 overflow-hidden sm:h-[7.5rem]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes={`${EXPANDED_WIDTH}px`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-sm font-bold sm:text-base">{item.name}</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/60">
                  {item.metricHighlight}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between px-4 py-4 sm:px-5">
              <p className="text-xs leading-relaxed text-white/82 sm:text-[13px]">
                {item.description}
              </p>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-white/10 px-3 py-2.5 ring-1 ring-white/10">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-white/50">
                    Key indicator
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-gold">{item.metric}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={cn(
                        "inline-flex min-h-[26px] items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ring-1",
                        tone.badge,
                      )}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="relative h-full overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover"
              sizes={`${COLLAPSED_WIDTH}px`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
            <p className="absolute bottom-3 left-2 right-2 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-white sm:text-[11px]">
              {item.logoLabel}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function MobileFocusCard({
  item,
  cardKey,
  isActive,
  onToggle,
  reduceMotion,
}: {
  item: FocusWinItem;
  cardKey: string;
  isActive: boolean;
  onToggle: (key: string) => void;
  reduceMotion: boolean | null;
}) {
  const tone = WELLNESS_CARD_TONES[item.tone];

  return (
    <motion.article
      layout
      onClick={() => onToggle(cardKey)}
      className={cn(
        "w-[min(92vw,380px)] shrink-0 snap-center overflow-hidden rounded-2xl ring-1 transition-shadow",
        isActive ? cn("text-white shadow-lg", tone.expanded) : cn("shadow-sm", tone.collapsed),
      )}
    >
      <div className="relative h-36 overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-sm font-bold text-white">{item.name}</p>
          {!isActive && <p className="text-[11px] text-white/70">{item.logoLabel}</p>}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden px-4 pb-4 pt-3"
          >
            <p className="text-xs leading-relaxed text-white/80">{item.description}</p>
            <div className="mt-3 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/10">
              <p className="text-[10px] uppercase tracking-wide text-white/50">Key indicator</p>
              <p className="text-sm font-semibold text-brand-gold">{item.metric}</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-semibold ring-1",
                    tone.badge,
                  )}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function WellnessFocusWinsRow() {
  const reduceMotion = useReducedMotion();
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const marqueeItems = useMemo(
    () => [
      ...WELLNESS_FOCUS_WINS.map((item, index) => ({ item, key: `${item.id}-a-${index}` })),
      ...WELLNESS_FOCUS_WINS.map((item, index) => ({ item, key: `${item.id}-b-${index}` })),
    ],
    [],
  );

  const handleActivate = useCallback((key: string) => {
    setActiveKey(key);
  }, []);

  const handleDeactivate = useCallback(() => {
    setActiveKey(null);
  }, []);

  const isPaused = activeKey !== null || Boolean(reduceMotion);

  const desktopItems = reduceMotion
    ? WELLNESS_FOCUS_WINS.map((item) => ({ item, key: item.id }))
    : marqueeItems;

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
          {WELLNESS_FOCUS_UI.eyebrow}
        </p>
        <p className="text-[11px] text-brand-muted sm:text-xs">
          <span className="hidden sm:inline">{WELLNESS_FOCUS_UI.hint}</span>
          <span className="sm:hidden">{WELLNESS_FOCUS_UI.hintTouch}</span>
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-[1.25rem] bg-brand-cream/80 p-2 ring-1 ring-brand-navy/8 sm:rounded-[1.5rem] sm:p-3"
        onMouseLeave={handleDeactivate}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-30 w-10 bg-gradient-to-r from-brand-cream/95 to-transparent sm:w-14"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-30 w-10 bg-gradient-to-l from-brand-cream/95 to-transparent sm:w-14"
          aria-hidden
        />

        {/* Desktop — slow right-to-left marquee */}
        <div className="hidden overflow-hidden md:block" style={{ height: CARD_HEIGHT + 8 }}>
          <div
            className={cn(
              "flex w-max items-stretch py-1",
              !reduceMotion && "wellness-focus-marquee-track",
              isPaused && "is-paused",
            )}
            style={{ gap: CARD_GAP }}
          >
            {desktopItems.map(({ item, key }) => (
              <FocusWinCard
                key={key}
                cardKey={key}
                item={item}
                isActive={activeKey === key}
                onActivate={handleActivate}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* Mobile — slow marquee + tap to expand */}
        <div className="overflow-hidden md:hidden">
          <div
            className={cn(
              "wellness-focus-marquee-track flex w-max gap-2 py-1",
              activeKey && "is-paused",
            )}
          >
            {marqueeItems.map(({ item, key }) => (
              <MobileFocusCard
                key={key}
                cardKey={key}
                item={item}
                isActive={activeKey === key}
                onToggle={(k) => setActiveKey(activeKey === k ? null : k)}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
