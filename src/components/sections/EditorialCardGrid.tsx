"use client";

import { Reveal } from "@/components/animations/reveal";
import {
  CompactPracticeCard,
  type CompactPracticeCardImage,
} from "@/components/cards/compact-practice-card";
import { resolveCardGridImage } from "@/lib/card-grid-images";
import { cn } from "@/lib/utils";

export type EditorialCard = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: CompactPracticeCardImage;
};

export type EditorialCardGridProps = {
  badge?: string;
  headline: string;
  items: readonly EditorialCard[];
  className?: string;
  id?: string;
};

function cardDescription(item: EditorialCard) {
  if (!item.subtitle) return item.description;
  if (item.description.toLowerCase().startsWith(item.subtitle.toLowerCase())) {
    return item.description;
  }
  return `${item.subtitle}. ${item.description}`;
}

export function EditorialCardGrid({
  badge,
  headline,
  items,
  className,
  id = "editorial-card-grid",
}: EditorialCardGridProps) {
  const headingId = `${id}-heading`;
  const totalItems = items.length;

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
            "mt-12 grid w-full gap-5 md:mt-16 md:grid-cols-2",
            totalItems === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          )}
        >
          {items.map((item, index) => (
            <li key={item.id} className="h-full w-full">
              <Reveal delay={0.1 + index * 0.06} className="h-full w-full">
                <CompactPracticeCard
                  label={item.id}
                  title={item.title}
                  description={cardDescription(item)}
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