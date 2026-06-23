"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export type EditorialFaqSectionProps = {
  badge?: string;
  headline: string;
  items: readonly FaqItem[];
  className?: string;
  id?: string;
};

const ACCORDION_TRANSITION = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1] as const,
};

function FaqAccordionItem({
  item,
  itemId,
  defaultOpen = false,
}: {
  item: FaqItem;
  itemId: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const answerId = `${itemId}-answer`;

  return (
    <div className="w-full">
      <dt>
        <button
          type="button"
          id={itemId}
          className={cn(
            "flex w-full min-h-[44px] items-center justify-between gap-4 py-4 text-left transition-colors duration-200 md:py-5",
            "hover:bg-brand-navy/[0.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          )}
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="min-w-0 flex-1 font-poppins text-lg font-semibold leading-snug text-brand-navy md:text-xl">
            {item.question}
          </span>
          <ChevronDown
            className={cn(
              "size-5 shrink-0 text-brand-teal transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isOpen && "rotate-180"
            )}
            aria-hidden
          />
        </button>
      </dt>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.dd
            id={answerId}
            role="region"
            aria-labelledby={itemId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={ACCORDION_TRANSITION}
            className="overflow-hidden"
          >
            <p className="pb-5 font-inter text-sm leading-relaxed text-brand-navy/70 md:pb-6 md:text-base md:leading-relaxed">
              {item.answer}
            </p>
          </motion.dd>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function EditorialFaqSection({
  badge,
  headline,
  items,
  className,
  id = "editorial-faq",
}: EditorialFaqSectionProps) {
  const headingId = `${id}-heading`;
  const baseId = useId();

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section-py", className)}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-16">
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
                badge ? "mt-5" : "mt-0"
              )}
            >
              {headline}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          {/* Increased border line weight to [1.5px] and slightly boosted visibility opacity to /15 */}
          <dl className="mt-12 flex flex-col gap-0 border-y-[1.5px] border-brand-navy/15 divide-y-[1.5px] divide-brand-navy/15 md:mt-16">
            {items.map((item, index) => (
              <FaqAccordionItem
                key={`${item.question}-${index}`}
                item={item}
                itemId={`${baseId}-item-${index}`}
              />
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}