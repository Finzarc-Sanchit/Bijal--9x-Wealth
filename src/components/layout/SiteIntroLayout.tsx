"use client";

import { IntroSplash } from "@/components/layout/IntroSplash";
import { INTRO_HOLD_MS, INTRO_TRANSITION_MS } from "@/components/layout/intro-constants";
import {
  IntroContext,
  type IntroPhase,
} from "@/components/layout/site-intro-context";
import { shouldSkipHomeIntro } from "@/lib/site-intro-skip";
import { refreshScrollLayoutAfterIntro } from "@/lib/scroll-layout";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";

export type { IntroPhase } from "@/components/layout/site-intro-context";
export { useSiteIntro } from "@/components/layout/site-intro-context";

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
  const [splashMounted, setSplashMounted] = useState(false);
  const [splashExited, setSplashExited] = useState(false);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || shouldSkipHomeIntro()) {
      setIntroState("skipped");
      setSplashExited(true);
      return;
    }

    setIntroState("active");
    setSplashMounted(true);

    const transitionTimer = window.setTimeout(() => {
      setPhase("transition");
    }, INTRO_HOLD_MS);

    const completeTimer = window.setTimeout(() => {
      setPhase("complete");
      setIntroState("done");
      setSplashMounted(false);
    }, INTRO_HOLD_MS + INTRO_TRANSITION_MS);

    return () => {
      window.clearTimeout(transitionTimer);
      window.clearTimeout(completeTimer);
    };
  }, []);

  const introComplete = introState === "skipped" || introState === "done";
  const layoutReady = introComplete && splashExited;
  const showNavLogo = introComplete;

  useEffect(() => {
    if (layoutReady) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [layoutReady]);

  useEffect(() => {
    if (!layoutReady) return;
    refreshScrollLayoutAfterIntro();
  }, [layoutReady]);

  const handleSplashExitComplete = () => {
    setSplashExited(true);
  };

  useEffect(() => {
    if (!introComplete || splashExited) return;
    const fallback = window.setTimeout(() => setSplashExited(true), 400);
    return () => window.clearTimeout(fallback);
  }, [introComplete, splashExited]);

  return (
    <IntroContext.Provider value={{ phase, introComplete, layoutReady, showNavLogo }}>
      <motion.div
        className="min-h-screen w-full min-w-0"
        initial={false}
        animate={{
          opacity: introComplete || phase === "transition" ? 1 : 0,
        }}
        transition={{
          duration: INTRO_TRANSITION_MS / 1000,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence onExitComplete={handleSplashExitComplete}>
        {splashMounted ? (
          <IntroSplash key="intro-splash" tagline={tagline} siteName={siteName} phase={phase} />
        ) : null}
      </AnimatePresence>
    </IntroContext.Provider>
  );
}
