"use client";

import type { HeroTheme } from "@/components/hero/hero-themes";

export function HeroPattern({ pattern }: { pattern: HeroTheme["pattern"] }) {
  if (pattern === "grid") {
    return (
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
        <defs>
          <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#0a1628" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    );
  }

  if (pattern === "rings") {
    return (
      <svg
        className="absolute -left-[10%] bottom-[-15%] h-[70%] w-[70%] opacity-[0.12]"
        viewBox="0 0 400 400"
        aria-hidden
      >
        {[1, 2, 3, 4].map((i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={50 * i}
            fill="none"
            stroke="#1a6b7a"
            strokeWidth="1.5"
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      className="absolute -right-[5%] top-[-10%] h-[65%] w-[65%] opacity-[0.1]"
      viewBox="0 0 400 400"
      aria-hidden
    >
      <path d="M0 320 Q200 80 400 320" fill="none" stroke="#c9a227" strokeWidth="2" />
      <path d="M0 360 Q200 120 400 360" fill="none" stroke="#c9a227" strokeWidth="1.5" />
      <path d="M0 280 Q200 40 400 280" fill="none" stroke="#0a1628" strokeWidth="1" />
    </svg>
  );
}
