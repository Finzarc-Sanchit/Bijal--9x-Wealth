"use client";

import { HeroFloatingCards } from "@/components/hero/HeroFloatingCards";
import {
  HERO_SLIDES,
  HERO_SLIDE_TRANSITION,
  lerpAtProgress,
} from "@/components/hero/hero-themes";
import { PHONE_SCREENS } from "@/components/hero/phone-screens";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type PhoneMockupProps = {
  activeIndex: number;
  scrollProgress?: number;
  parallaxX?: number;
  parallaxY?: number;
  className?: string;
};

export function PhoneMockup({
  activeIndex,
  scrollProgress = 0,
  parallaxX = 0,
  parallaxY = 0,
  className,
}: PhoneMockupProps) {
  const [isHovered, setIsHovered] = useState(false);
  const slide = HERO_SLIDES[activeIndex];
  const Screen = PHONE_SCREENS[slide.screen];

  const phoneY = lerpAtProgress(scrollProgress, [
    [0, 0],
    [0.5, -8],
    [1, 0],
  ]);
  const phoneScale =
    lerpAtProgress(scrollProgress, [
      [0, 1],
      [0.5, 1.04],
      [1, 1],
    ]) + parallaxY * 0.015;

  const rotateY = -8 + parallaxX * 6;
  const rotateX = 4 + parallaxY * 4;

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[380px] overflow-visible sm:max-w-[420px]",
        className,
      )}
      aria-hidden={false}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[55%] h-[70%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/15 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[60%] h-[50%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/10 blur-[60px]"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto w-[min(100%,290px)] overflow-visible sm:w-[300px]"
        style={{
          transform: `translate3d(0, ${phoneY + parallaxY * 8}px, 0) perspective(1400px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${phoneScale})`,
          transformOrigin: "center center",
          willChange: "transform",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        role="img"
        aria-label="Interactive phone preview — hover to see highlights"
      >
        <HeroFloatingCards activeIndex={activeIndex} isHovered={isHovered} />

        {/* iPhone 15 Pro — titanium frame */}
        <div className="relative z-10 transition-[filter] duration-300 hover:brightness-105">
          {/* Side buttons */}
          <div
            className="absolute -left-[3px] top-[19%] z-20 h-7 w-[3px] rounded-l-sm bg-gradient-to-b from-neutral-500 to-neutral-700"
            aria-hidden
          />
          <div
            className="absolute -left-[3px] top-[28%] z-20 h-12 w-[3px] rounded-l-sm bg-gradient-to-b from-neutral-500 to-neutral-700"
            aria-hidden
          />
          <div
            className="absolute -left-[3px] top-[36%] z-20 h-12 w-[3px] rounded-l-sm bg-gradient-to-b from-neutral-500 to-neutral-700"
            aria-hidden
          />
          <div
            className="absolute -right-[3px] top-[30%] z-20 h-16 w-[3px] rounded-r-sm bg-gradient-to-b from-neutral-500 to-neutral-700"
            aria-hidden
          />

          <div className="rounded-[3rem] bg-gradient-to-br from-[#8e8e93] via-[#636366] to-[#48484a] p-[2px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.08)_inset]">
            <div className="rounded-[2.9rem] bg-[#1c1c1e] p-[9px]">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.4rem] bg-black ring-1 ring-white/5">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-[10px] z-40 h-[27px] w-[104px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                  <div className="absolute right-[18px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#0a0a0c] ring-1 ring-white/10" />
                </div>

                {/* Screen glare */}
                <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />

                {/* Live app screens */}
                <div className="absolute inset-0 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.screen}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                      transition={HERO_SLIDE_TRANSITION}
                    >
                      <Screen />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-[7px] left-1/2 z-40 h-[4px] w-[112px] -translate-x-1/2 rounded-full bg-white/35" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
