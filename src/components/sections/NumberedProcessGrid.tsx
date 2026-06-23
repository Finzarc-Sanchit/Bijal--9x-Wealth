"use client";

import { Reveal } from "@/components/animations/reveal";
import {
  CompactPracticeCard,
  type CompactPracticeCardImage,
} from "@/components/cards/compact-practice-card";
import { resolveCardGridImage } from "@/lib/card-grid-images";
import { cn } from "@/lib/utils";

export type GridItem = {
  id: string;
  title: string;
  description: string;
  image?: CompactPracticeCardImage;
};

export type NumberedProcessGridProps = {
  badge?: string;
  headline: string;
  items: readonly GridItem[];
  className?: string;
  id?: string;
};

export function NumberedProcessGrid({
  badge,
  headline,
  items,
  className,
  id = "numbered-process-grid",
}: NumberedProcessGridProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("w-full section-py px-4 md:px-12 lg:px-16", className)}
    >
      <div className="mx-auto w-full">
        <div className="max-w-3xl">
          {badge ? (
            <Reveal>
              <p className="label">{badge}</p>
            </Reveal>
          ) : null}

          <Reveal delay={badge ? 0.08 : 0}>
            <h2
              id={headingId}
              className={cn(
                "font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl lg:text-[2.75rem]",
                badge ? "mt-5" : "mt-0",
              )}
            >
              {headline}
            </h2>
          </Reveal>
        </div>

        <ul
          className={cn(
            "mt-12 grid w-full gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {items.map((item, index) => (
            <li key={item.id} className="h-full w-full">
              <Reveal delay={0.1 + index * 0.06} className="h-full w-full">
                <CompactPracticeCard
                  label={item.id}
                  title={item.title}
                  description={item.description}
                  image={resolveCardGridImage(item.title, index, item.image)}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
