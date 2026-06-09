"use client";

import type { HeroTheme } from "@/components/hero/hero-themes";
import { cn } from "@/lib/utils";

function PortfolioAnimation() {
  return (
    <>
      <div className="hero-bg-orb hero-bg-orb--breathe-a absolute -left-[8%] top-[6%] h-[50%] w-[50%] rounded-full bg-brand-gold/22 blur-3xl" />
      <div className="hero-bg-orb hero-bg-orb--breathe-b absolute -right-[4%] top-[22%] h-[44%] w-[44%] rounded-full bg-brand-teal/14 blur-3xl" />
      <div className="hero-bg-orb hero-bg-orb--drift-a absolute bottom-[-6%] left-[28%] h-[36%] w-[36%] rounded-full bg-brand-gold/12 blur-3xl" />
      <svg
        className="hero-bg-grid-drift absolute inset-0 h-full w-full opacity-[0.09]"
        aria-hidden
      >
        <defs>
          <pattern id="hero-anim-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#0a1628" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-anim-grid)" />
      </svg>
      <div className="hero-bg-shimmer absolute inset-0 opacity-[0.04]" />
    </>
  );
}

function RetirementAnimation() {
  return (
    <>
      <div className="hero-bg-orb hero-bg-orb--breathe-c absolute -right-[6%] top-[10%] h-[48%] w-[48%] rounded-full bg-brand-teal/20 blur-3xl" />
      <div className="hero-bg-orb hero-bg-orb--drift-b absolute bottom-[-4%] left-[-4%] h-[42%] w-[42%] rounded-full bg-cyan-400/15 blur-3xl" />
      <svg
        className="absolute -left-[12%] bottom-[-18%] h-[80%] w-[80%]"
        viewBox="0 0 400 400"
        aria-hidden
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <circle
            key={`pulse-${i}`}
            cx="200"
            cy="200"
            r={40 * i}
            fill="none"
            stroke="#1a6b7a"
            strokeWidth="1.5"
            className="hero-bg-ring-pulse"
            style={{ animationDelay: `${i * 1.2}s` }}
          />
        ))}
        {[1, 2, 3].map((i) => (
          <circle
            key={`expand-${i}`}
            cx="200"
            cy="200"
            r={55 * i}
            fill="none"
            stroke="#c9a227"
            strokeWidth="1"
            className="hero-bg-ring-expand"
            style={{ animationDelay: `${i * 2.4}s` }}
          />
        ))}
      </svg>
      <div className="hero-bg-shimmer absolute inset-0 opacity-[0.035]" />
    </>
  );
}

function AdvisoryAnimation() {
  return (
    <>
      <div className="hero-bg-orb hero-bg-orb--breathe-d absolute -left-[6%] top-[12%] h-[46%] w-[46%] rounded-full bg-brand-gold/24 blur-3xl" />
      <div className="hero-bg-orb hero-bg-orb--drift-c absolute -right-[8%] bottom-[8%] h-[40%] w-[40%] rounded-full bg-brand-teal/12 blur-3xl" />
      <svg
        className="absolute -right-[8%] top-[-12%] h-[72%] w-[72%] opacity-[0.14]"
        viewBox="0 0 400 400"
        aria-hidden
      >
        <path
          d="M0 320 Q200 80 400 320"
          fill="none"
          stroke="#c9a227"
          strokeWidth="2"
          className="hero-bg-arc-flow"
        />
        <path
          d="M0 360 Q200 120 400 360"
          fill="none"
          stroke="#c9a227"
          strokeWidth="1.5"
          className="hero-bg-arc-flow"
          style={{ animationDelay: "-6s" }}
        />
        <path
          d="M0 280 Q200 40 400 280"
          fill="none"
          stroke="#0a1628"
          strokeWidth="1"
          className="hero-bg-arc-flow"
          style={{ animationDelay: "-12s" }}
        />
      </svg>
      <div className="hero-bg-orb hero-bg-orb--breathe-e absolute right-[12%] top-[28%] h-24 w-24 rounded-full bg-brand-gold/10 blur-2xl" />
      <div className="hero-bg-shimmer absolute inset-0 opacity-[0.04]" />
    </>
  );
}

const ANIMATIONS: Record<HeroTheme["pattern"], () => React.ReactNode> = {
  grid: PortfolioAnimation,
  rings: RetirementAnimation,
  arcs: AdvisoryAnimation,
};

export function HeroAnimatedBackground({
  pattern,
  className,
}: {
  pattern: HeroTheme["pattern"];
  className?: string;
}) {
  const Animation = ANIMATIONS[pattern];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <Animation />
    </div>
  );
}
