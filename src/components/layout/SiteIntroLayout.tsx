"use client";

import { TypewriterText } from "@/components/motion/TypewriterText";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const INTRO_HOLD_MS = 3000;
const INTRO_TRANSITION_MS = 900;

export type IntroPhase = "hold" | "transition" | "complete";

type IntroContextValue = {
  phase: IntroPhase;
  introComplete: boolean;
  showNavLogo: boolean;
};

const IntroContext = createContext<IntroContextValue>({
  phase: "complete",
  introComplete: true,
  showNavLogo: true,
});

export function useSiteIntro() {
  return useContext(IntroContext);
}

/** Aligns with SiteNav: max-w-6xl (72rem), px-4 sm:px-6, h-[72px] bar */
function navLogoPosition() {
  const containerWidth = Math.min(1152, window.innerWidth);
  const horizontalPadding = window.innerWidth >= 640 ? 24 : 16;
  const left = (window.innerWidth - containerWidth) / 2 + horizontalPadding;
  const navHeight = 72;
  const logoHeight = window.innerWidth >= 768 ? 48 : window.innerWidth >= 640 ? 44 : 40;
  const top = (navHeight - logoHeight) / 2;
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

function IntroSplash({
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
    <>
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
          <div className="h-16 sm:h-20" aria-hidden />
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
          <Image
            src="/images/9x-wealth-logo.png"
            alt="9X Wealth Financial Services"
            width={280}
            height={78}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export function SiteIntroLayout({
  tagline,
  siteName,
  children,
}: {
  tagline: string;
  siteName: string;
  children: ReactNode;
}) {
  const [introState, setIntroState] = useState<"pending" | "active" | "skipped" | "done">(
    "pending",
  );
  const [phase, setPhase] = useState<IntroPhase>("hold");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setIntroState("skipped");
      return;
    }

    setIntroState("active");

    const transitionTimer = window.setTimeout(() => {
      setPhase("transition");
    }, INTRO_HOLD_MS);

    const completeTimer = window.setTimeout(() => {
      setPhase("complete");
      setIntroState("done");
    }, INTRO_HOLD_MS + INTRO_TRANSITION_MS);

    return () => {
      window.clearTimeout(transitionTimer);
      window.clearTimeout(completeTimer);
    };
  }, []);

  const introComplete = introState === "skipped" || introState === "done";
  const showIntro = introState === "pending" || introState === "active";
  const showNavLogo = introComplete;

  useEffect(() => {
    if (showIntro && !introComplete) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [showIntro, introComplete]);

  useEffect(() => {
    if (introComplete) {
      window.scrollTo(0, 0);
    }
  }, [introComplete]);

  return (
    <IntroContext.Provider value={{ phase, introComplete, showNavLogo }}>
      <motion.div
        className="min-h-screen will-change-transform"
        initial={false}
        animate={
          introComplete || phase === "transition"
            ? { y: 0, opacity: 1 }
            : { y: "100vh", opacity: 0.5 }
        }
        transition={{
          duration: INTRO_TRANSITION_MS / 1000,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {showIntro && !introComplete && (
          <IntroSplash key="intro-splash" tagline={tagline} siteName={siteName} phase={phase} />
        )}
      </AnimatePresence>
    </IntroContext.Provider>
  );
}
