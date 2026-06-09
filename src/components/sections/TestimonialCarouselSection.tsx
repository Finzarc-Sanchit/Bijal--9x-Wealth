"use client";

import {
  buildTestimonialCarouselItems,
  type TestimonialCarouselItem,
} from "@/data/testimonial-carousel";
import type { SiteContent } from "@/lib/content/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { TestimonialConsultationForm } from "@/components/sections/TestimonialConsultationForm";

function TestimonialCard({
  item,
  isRevealed,
  onToggle,
}: {
  item: TestimonialCarouselItem;
  isRevealed?: boolean;
  onToggle?: () => void;
}) {
  return (
    <article
      tabIndex={onToggle ? 0 : undefined}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (onToggle && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onToggle();
        }
      }}
      className={cn(
        "testimonial-card group/card relative z-0 shrink-0 overflow-hidden rounded-[24px]",
        "h-[min(420px,58vw)] w-[min(220px,42vw)]",
        "border border-brand-navy/10 shadow-[0_16px_40px_-18px_rgba(10,22,40,0.35)]",
        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:z-30 hover:-translate-y-3 hover:scale-[1.05] hover:shadow-[0_28px_60px_-16px_rgba(10,22,40,0.45)]",
        "max-md:snap-center",
        onToggle &&
          "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal",
        isRevealed && "max-md:z-30 max-md:-translate-y-3 max-md:scale-[1.05]",
      )}
    >
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover/card:scale-[1.04]"
        sizes="(max-width: 640px) 42vw, 220px"
        draggable={false}
      />

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-white/10",
          "opacity-50 transition-opacity duration-500 group-hover/card:opacity-90",
        )}
        aria-hidden
      />

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex min-h-[58%] flex-col justify-end p-5",
          "translate-y-full opacity-0",
          "bg-gradient-to-t from-brand-navy/98 via-brand-navy/88 to-transparent",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover/card:translate-y-0 group-hover/card:opacity-100",
          isRevealed && "max-md:translate-y-0 max-md:opacity-100",
        )}
      >
        <span className="mb-2 text-2xl leading-none text-brand-gold" aria-hidden>
          &ldquo;
        </span>
        <p className="text-sm leading-relaxed text-white sm:text-[0.95rem]">{item.quote}</p>
        <footer className="mt-4 border-t border-white/10 pt-3">
          <p className="text-sm font-semibold text-brand-gold">{item.author}</p>
          {item.role ? (
            <p className="mt-0.5 text-xs text-brand-cream/70">{item.role}</p>
          ) : null}
        </footer>
      </div>
    </article>
  );
}

function TestimonialTrack({ items }: { items: TestimonialCarouselItem[] }) {
  const loopItems = [...items, ...items];
  const [revealedIndex, setRevealedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="testimonial-marquee-track hidden items-center gap-5 py-4 md:flex">
        {loopItems.map((item, index) => (
          <TestimonialCard key={`${item.author}-${index}`} item={item} />
        ))}
      </div>

      <div
        className="testimonial-touch-track flex items-center gap-4 overflow-x-auto px-5 py-4 md:hidden"
        role="list"
        aria-label="Client testimonials — swipe to browse, tap to read"
      >
        {items.map((item, index) => (
          <div key={`touch-${item.author}-${index}`} role="listitem">
            <TestimonialCard
              item={item}
              isRevealed={revealedIndex === index}
              onToggle={() =>
                setRevealedIndex((current) => (current === index ? null : index))
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

export function TestimonialCarouselSection({ content }: { content: SiteContent }) {
  const items = buildTestimonialCarouselItems(content.testimonials);

  if (items.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-[#f3f7f6] to-[#faf8f5] py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[8%] top-[6%] h-[42%] w-[42%] rounded-full bg-brand-teal/10 blur-[100px]" />
        <div className="absolute -right-[6%] bottom-[10%] h-[38%] w-[38%] rounded-full bg-brand-gold/12 blur-[90px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,107,122,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-teal sm:text-sm">
          Client stories
        </p>
        <h2
          id="testimonials-heading"
          className="mt-4 font-display text-[2rem] font-bold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[3.25rem]"
        >
          Built For <span className="text-brand-teal">Families</span>
          <br className="hidden sm:block" />
          <span className="sm:ml-2">Backed By Trust</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
          Real experiences from Borivali families who found clarity in insurance and investment
          planning — hover a card to read their words.
        </p>

        <TestimonialConsultationForm className="mt-8" />
      </div>

      <div className="testimonial-carousel group/carousel relative mt-12 overflow-hidden md:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-cream to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#faf8f5] to-transparent sm:w-24" />

        <TestimonialTrack items={items} />
      </div>
    </section>
  );
}
