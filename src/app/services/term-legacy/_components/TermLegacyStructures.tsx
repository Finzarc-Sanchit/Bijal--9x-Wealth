"use client";

import { Reveal } from "@/components/animations/reveal";
import { CompactPracticeCard } from "@/components/cards/compact-practice-card";
import { cn } from "@/lib/utils";
import { TERM_LEGACY_STRUCTURES } from "../_data/content";

export function TermLegacyStructures() {
  const headingId = "term-legacy-structures-heading";

  return (
    <section
      id="term-legacy-structures"
      aria-labelledby={headingId}
      // Replaced outer spacing with edge-to-edge tracking classes
      className="w-full section-py px-4 md:px-12 lg:px-16"
    >
      {/* Removed max-w-7xl constraint to support dynamic ultra-widescreen viewports */}
      <div className="w-full mx-auto">
        <div className="max-w-3xl">
          {TERM_LEGACY_STRUCTURES.badge && (
            <Reveal>
              <p className="label">{TERM_LEGACY_STRUCTURES.badge}</p>
            </Reveal>
          )}

          <Reveal delay={0.08}>
            <h2
              id={headingId}
              className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl lg:text-[2.75rem]"
            >
              {TERM_LEGACY_STRUCTURES.headline}
            </h2>
          </Reveal>
        </div>

        <ul
          className={cn(
            "mt-12 grid gap-5 w-full md:mt-16 md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {TERM_LEGACY_STRUCTURES.items.map((item, index) => (
            <li key={item.id} className="h-full w-full">
              <Reveal delay={0.1 + index * 0.06} className="h-full w-full">
                <CompactPracticeCard
                  label={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}