"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { CONTACT_INTRO } from "../_data/content";

export function ContactPageIntro({ className }: { className?: string }) {
  const lines = CONTACT_INTRO.headlineLines;

  return (
    <header className={cn(className)}>
      <Reveal>
        <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-light leading-[1.08] tracking-tight text-brand-navy">
          <span className="block">{CONTACT_INTRO.leadWord}</span>
          {lines.map((line, index) => (
            <span
              key={line}
              className={cn("block", index === lines.length - 1 && "text-brand-gold")}
            >
              {line}
            </span>
          ))}
        </h1>
      </Reveal>

      <Reveal delay={0.06}>
        <p className="mt-5 max-w-xl font-inter text-base leading-relaxed text-brand-navy/70 md:text-lg">
          {CONTACT_INTRO.epigraph}
        </p>
      </Reveal>
    </header>
  );
}
