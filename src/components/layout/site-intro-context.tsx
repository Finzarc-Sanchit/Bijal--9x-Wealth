"use client";

import { createContext, useContext } from "react";

export type IntroPhase = "hold" | "transition" | "complete";

export type IntroContextValue = {
  phase: IntroPhase;
  introComplete: boolean;
  layoutReady: boolean;
  showNavLogo: boolean;
};

export const IntroContext = createContext<IntroContextValue>({
  phase: "complete",
  introComplete: true,
  layoutReady: true,
  showNavLogo: true,
});

export function useSiteIntro() {
  return useContext(IntroContext);
}
