"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { GLOSSARY_TERM_ENTRIES } from "../_data/glossary-terms";

function formatTermSlug(id: string) {
  return id.replace(/-/g, " ").toUpperCase();
}

export function GlossaryTermsSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-full px-6 md:px-12 lg:px-24">
        <ul className="list-none grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {GLOSSARY_TERM_ENTRIES.map((entry, index) => (
            <Reveal key={entry.id} delay={Math.min(0.04 * (index % 3), 0.12)}>
              <li
                id={entry.id}
                className={cn(
                  "group/card scroll-mt-24 relative h-full overflow-hidden rounded-2xl",
                  "bg-gradient-to-br from-white via-white to-brand-cream/50",
                  "ring-1 ring-brand-navy/[0.07]",
                  "shadow-[0_1px_2px_rgba(10,22,40,0.03),0_10px_28px_-12px_rgba(10,22,40,0.07)]",
                  "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "hover:-translate-y-1.5 hover:ring-brand-teal/25",
                  "hover:shadow-[0_28px_60px_-18px_rgba(10,22,40,0.16)]",
                )}
              >
                <span
                  className={cn(
                    "pointer-events-none absolute left-0 top-7 bottom-7 w-[2px]",
                    "bg-gradient-to-b from-brand-gold/30 via-brand-gold to-brand-gold/30",
                    "transition-all duration-500 group-hover/card:top-5 group-hover/card:bottom-5",
                  )}
                  aria-hidden
                />

                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/35 to-transparent"
                  aria-hidden
                />

                <div
                  className={cn(
                    "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full",
                    "bg-brand-gold/[0.04] blur-2xl transition-opacity duration-500",
                    "opacity-0 group-hover/card:opacity-100",
                  )}
                  aria-hidden
                />

                <div className="relative flex h-full flex-col p-7 pl-8 md:p-8 md:pl-9">
                  <div className="mb-6 flex items-start justify-between gap-4 select-none">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-teal">
                      {formatTermSlug(entry.id)}
                    </span>

                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                        "border border-brand-navy/10 bg-brand-cream/60 text-brand-navy/30",
                        "transition-all duration-300",
                        "group-hover/card:border-brand-teal/35 group-hover/card:bg-brand-teal/8",
                        "group-hover/card:text-brand-teal group-hover/card:shadow-[0_4px_14px_-4px_rgba(26,107,122,0.35)]",
                      )}
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>

                  <h5 className="font-display text-xl font-medium leading-snug tracking-tight text-brand-navy transition-colors duration-300 group-hover/card:text-brand-teal md:text-2xl">
                    <a
                      href={`#${entry.id}`}
                      className="focus:outline-none focus-visible:underline after:absolute after:inset-0"
                    >
                      {entry.term}
                    </a>
                  </h5>

                  <div
                    className="mt-5 h-px w-10 bg-brand-gold/45 transition-all duration-500 group-hover/card:w-14 group-hover/card:bg-brand-gold"
                    aria-hidden
                  />

                  <div className="mt-5 font-inter text-base leading-[1.75] text-brand-navy/72 md:text-[1.02rem] md:leading-[1.8]">
                    {entry.body}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
