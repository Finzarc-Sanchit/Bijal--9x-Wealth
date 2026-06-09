"use client";

import {
  CARD_ACCENT_DOT,
  CARD_ACCENT_STYLES,
  HERO_FLOATING_SETS,
  type HeroFloatingBadge,
} from "@/components/hero/hero-floating-cards";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Shield, TrendingUp } from "lucide-react";

const BADGE_ICONS = {
  shield: Shield,
  trending: TrendingUp,
  message: MessageCircle,
} as const;

function FloatingBadge({
  badge,
  isVisible,
}: {
  badge: HeroFloatingBadge;
  isVisible: boolean;
}) {
  const Icon = BADGE_ICONS[badge.icon];

  return (
    <motion.div
      className={cn(
        "absolute hidden h-11 w-11 items-center justify-center rounded-full text-white shadow-lg sm:flex",
        badge.color,
        badge.position,
      )}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={
        isVisible
          ? { opacity: 1, scale: 1, y: [0, -10, 0] }
          : { opacity: 0, scale: 0.6, y: 8 }
      }
      transition={{
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
        y: isVisible
          ? {
              duration: 3.2 + badge.floatDelay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: badge.floatDelay,
            }
          : { duration: 0.2 },
      }}
      aria-hidden
    >
      <Icon className="h-5 w-5" strokeWidth={2.25} />
    </motion.div>
  );
}

type HeroFloatingCardsProps = {
  activeIndex: number;
  isHovered: boolean;
};

export function HeroFloatingCards({ activeIndex, isHovered }: HeroFloatingCardsProps) {
  const set = HERO_FLOATING_SETS[activeIndex] ?? HERO_FLOATING_SETS[0];

  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 hidden overflow-visible md:block"
      aria-hidden
    >
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            key={activeIndex}
            className="absolute inset-0 overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {set.cards.map((card, i) => (
              <motion.div
                key={card.title}
                className={cn(
                  "absolute z-30 max-w-[152px] rounded-xl border px-3 py-2.5 shadow-[0_16px_40px_-10px_rgba(10,22,40,0.22)] backdrop-blur-md sm:max-w-[172px]",
                  CARD_ACCENT_STYLES[card.accent],
                  card.position,
                )}
                style={{ rotate: `${card.rotate}deg` }}
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
                exit={{ opacity: 0, scale: 0.9, y: 8 }}
                transition={{
                  opacity: { duration: 0.25, delay: i * 0.06 },
                  scale: { duration: 0.3, delay: i * 0.06 },
                  y: {
                    duration: 4 + card.floatDelay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.floatDelay + 0.15,
                  },
                }}
              >
                <div className="mb-1.5 flex items-center gap-1.5">
                  <span className={cn("h-2 w-2 rounded-full", CARD_ACCENT_DOT[card.accent])} />
                  <p className="text-[11px] font-bold leading-tight">{card.title}</p>
                </div>
                <p className="text-[10px] font-medium leading-snug opacity-80">{card.subtitle}</p>
              </motion.div>
            ))}

            {set.badges.map((badge) => (
              <FloatingBadge
                key={`${badge.icon}-${badge.position}`}
                badge={badge}
                isVisible={isHovered}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
