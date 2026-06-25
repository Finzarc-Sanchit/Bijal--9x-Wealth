"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { GLOSSARY_TERM_ENTRIES } from "../_data/glossary-terms";

export function GlossaryTermsSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      {/* Expanded to max-w-full and increased wide-screen horizontal padding for a full-bleed grid presentation */}
      <div className="mx-auto max-w-full px-6 md:px-12 lg:px-24">

        {/* Reconfigured grid tracking mechanics to dynamically scale into a 3-column matrix layout */}
        <ul className="list-none grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {GLOSSARY_TERM_ENTRIES.map((entry, index) => (
            /* Rebalanced modular math delay index to match the 3-column structural layout sequence */
            <Reveal key={entry.id} delay={Math.min(0.04 * (index % 3), 0.12)}>
              <li
                id={entry.id}
                className={cn(
                  "group/card scroll-mt-24 h-full relative flex flex-col justify-between box-border",
                  "p-6 md:p-8 rounded-2xl bg-white border border-brand-navy/5",
                  "shadow-[0_2px_8px_rgba(10,22,40,0.02)] hover:shadow-[0_20px_48px_-12px_rgba(10,22,40,0.08)]",
                  "transition-all duration-500 ease-out hover:-translate-y-1"
                )}
              >
                <div className="w-full min-w-0">
                  {/* Premium Index Token Layout */}
                  <div className="flex items-center justify-between gap-4 mb-5 select-none">
                    <span className="font-poppins text-[0.65rem] font-bold uppercase tracking-[0.25em] text-brand-gold/90 bg-brand-cream/60 rounded px-2.5 py-1">
                      {entry.id.toUpperCase()}
                    </span>

                    {/* Micro-interaction anchor indicator icon */}
                    <span className="opacity-0 scale-75 text-brand-navy/30 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:scale-100 group-hover/card:text-brand-teal">
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>

                  {/* Heading Typography Hierarchy */}
                  <h5 className="font-poppins text-xl font-semibold tracking-tight text-brand-navy mb-4 transition-colors duration-300 group-hover/card:text-brand-teal md:text-2xl">
                    <a
                      href={`#${entry.id}`}
                      className="focus:outline-none after:absolute after:inset-0"
                    >
                      {entry.term}
                    </a>
                  </h5>

                  {/* Body Text copy frame optimization */}
                  <div className="font-inter text-[0.92rem] font-normal leading-[1.8] text-brand-navy/70">
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