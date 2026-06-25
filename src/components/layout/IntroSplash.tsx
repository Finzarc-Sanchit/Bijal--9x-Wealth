"use client";

import { TypewriterText } from "@/components/motion/TypewriterText";
import { INTRO_TRANSITION_MS } from "@/components/layout/intro-constants";
import type { IntroPhase } from "@/components/layout/site-intro-context";
import { motion } from "framer-motion";
import { PriorityImage } from "@/components/ui/priority-image";
import { useEffect, useState } from "react";

/** Aligns with SiteNav floating bar: max-w-6xl, px-4 sm:px-6, pt-3, h-[64px] */
function navLogoPosition() {
  const containerWidth = Math.min(1152, window.innerWidth);
  const horizontalPadding = window.innerWidth >= 640 ? 24 : 16;
  const innerPadding = window.innerWidth >= 640 ? 20 : 16;
  const left = (window.innerWidth - containerWidth) / 2 + horizontalPadding + innerPadding;
  const navTopOffset = 12;
  const navHeight = 64;
  const logoHeight = window.innerWidth >= 768 ? 48 : window.innerWidth >= 640 ? 44 : 40;
  const top = navTopOffset + (navHeight - logoHeight) / 2;
  const splashHeight = window.innerWidth >= 640 ? 80 : 64;
  return { top, left, scale: logoHeight / splashHeight };
}

const LOGO_CENTER = {
  top: "50%",
  left: "50%",
  x: "-50%",
  y: "-50%",
  scale: 1,
} as const;

export function IntroSplash({
  tagline,
  siteName,
  phase,
}: {
  tagline: string;
  siteName: string;
  phase: IntroPhase;
}) {
  const isMoving = phase === "transition";
  const [navTarget, setNavTarget] = useState(() => ({
    top: 14,
    left: 16,
    x: 0,
    y: 0,
    scale: 0.55,
  }));

  useEffect(() => {
    if (isMoving) {
      const pos = navLogoPosition();
      setNavTarget({ top: pos.top, left: pos.left, x: 0, y: 0, scale: pos.scale });
    }
  }, [isMoving]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="pointer-events-none fixed inset-0 z-[100] bg-brand-cream"
        initial={{ opacity: 1 }}
        animate={{ opacity: isMoving ? 0 : 1 }}
        transition={{ duration: INTRO_TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={isMoving}
      />

      {!isMoving && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-brand-teal/8 blur-3xl"
            animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="h-28 sm:h-36" aria-hidden />

          <div className="text-center">
            <TypewriterText
              text={tagline}
              className="text-lg font-semibold tracking-wide text-brand-navy sm:text-xl"
              startDelayMs={500}
              charDelayMs={60}
            />
            <motion.p
              className="mt-2 text-sm text-brand-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              {siteName}
            </motion.p>
          </div>
        </motion.div>
      )}

      <motion.div
        className="pointer-events-none fixed z-[101] origin-top-left"
        initial={{ opacity: 0, ...LOGO_CENTER, scale: 0.82 }}
        animate={
          isMoving
            ? { opacity: 1, ...navTarget }
            : {
                opacity: 1,
                ...LOGO_CENTER,
                scale: 1,
              }
        }
        transition={{
          duration: isMoving ? INTRO_TRANSITION_MS / 1000 : 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          animate={
            isMoving
              ? {}
              : {
                  y: [0, -6, 0],
                  filter: [
                    "drop-shadow(0 4px 12px rgba(26,107,122,0.12))",
                    "drop-shadow(0 8px 24px rgba(26,107,122,0.22))",
                    "drop-shadow(0 4px 12px rgba(26,107,122,0.12))",
                  ],
                }
          }
          transition={
            isMoving ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <PriorityImage
            src="/images/9x-wealth-logo-bg.png"
            alt="9X Wealth Financial Services"
            width={280}
            height={78}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
