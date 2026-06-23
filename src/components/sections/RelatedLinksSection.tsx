"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type RelatedLink = {
  title: string;
  description: string;
  href: string;
};

export type RelatedLinksSectionProps = {
  badge?: string;
  headline: string;
  items: readonly RelatedLink[];
  className?: string;
  id?: string;
};

function CardCornerBrackets() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-3 top-3 size-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute left-0 top-0 h-px w-4 bg-brand-gold" />
        <div className="absolute left-0 top-0 h-4 w-px bg-brand-gold" />
      </div>
      <div
        className="pointer-events-none absolute bottom-3 right-3 size-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute bottom-0 right-0 h-px w-4 bg-brand-gold" />
        <div className="absolute bottom-0 right-0 h-4 w-px bg-brand-gold" />
      </div>
    </>
  );
}

function RelatedLinkCard({ item }: { item: RelatedLink }) {
  return (
    <Link
      href={item.href}
      prefetch={false}
      className={cn(
        "group relative flex h-full min-h-[44px] flex-col justify-between overflow-hidden",
        "rounded-xl border border-brand-navy/10 p-6 md:p-8",
        "bg-transparent transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-white/70 hover:shadow-md",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
      )}
    >
      <CardCornerBrackets />

      <div className="relative z-10 flex flex-1 flex-col gap-3">
        <span className="flex items-start justify-between gap-4">
          <span className="font-poppins text-lg font-semibold leading-snug tracking-tight text-brand-navy transition-colors duration-300 group-hover:text-brand-teal md:text-xl">
            {item.title}
          </span>
          <ArrowRight
            className="mt-1 size-5 shrink-0 text-brand-teal opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
            aria-hidden
          />
        </span>
        <span className="font-inter text-sm leading-relaxed text-brand-navy/70 transition-colors duration-300 group-hover:text-brand-navy/85 md:text-base">
          {item.description}
        </span>
      </div>
    </Link>
  );
}

export function RelatedLinksSection({
  badge,
  headline,
  items,
  className,
  id = "related-links",
}: RelatedLinksSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section-py", className)}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-16">
        {badge ? (
          <Reveal>
            <p className="label">{badge}</p>
          </Reveal>
        ) : null}

        <Reveal delay={badge ? 0.08 : 0}>
          <h2
            id={headingId}
            className={cn(
              "font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl",
              badge ? "mt-5" : "mt-0"
            )}
          >
            {headline}
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.href} className="h-full">
              <Reveal delay={0.1 + index * 0.06} className="h-full">
                <RelatedLinkCard item={item} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
