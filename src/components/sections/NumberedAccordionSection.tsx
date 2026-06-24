"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useId, useRef, useState } from "react";

const ACCORDION_TRANSITION = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

export type NumberedAccordionItem = {
  /** Small all-caps label shown in the left content column */
  label?: string;
  title: string;
  description: string;
};

export type NumberedAccordionProps = {
  items: readonly NumberedAccordionItem[];
  defaultOpenIndex?: number;
  singleOpen?: boolean;
  collapsible?: boolean;
  variant?: "light" | "overlay";
  className?: string;
  id?: string;
};

export type NumberedAccordionSectionProps = NumberedAccordionProps & {
  badge?: string;
  headline?: string;
  intro?: string;
  centeredIntro?: boolean;
  backgroundImage?: {
    src: string;
    alt: string;
  };
  className?: string;
  sectionClassName?: string;
  id?: string;
};

function NumberedAccordionItemRow({
  item,
  index,
  itemId,
  isOpen,
  onToggle,
  variant,
}: {
  item: NumberedAccordionItem;
  index: number;
  itemId: string;
  isOpen: boolean;
  onToggle: () => void;
  variant: "light" | "overlay";
}) {
  const answerId = `${itemId}-answer`;
  const isOverlay = variant === "overlay";
  const label = item.label?.toUpperCase();

  return (
    <div
      className={cn(
        "group flex cursor-pointer items-stretch border-t transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isOverlay ? "border-white/20" : "border-brand-navy/15",
        "hover:bg-brand-cream",
      )}
    >
      {/* Index strip — stretches with expanded content */}
      <div
        className={cn(
          "flex w-12 shrink-0 justify-center pt-5 md:w-14 md:pt-7",
          isOverlay
            ? "bg-black/35 text-white/55"
            : "bg-brand-navy/[0.08] text-brand-muted",
          "transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-black/45 group-hover:text-white/75",
        )}
        aria-hidden
      >
        <span className="font-inter text-sm font-medium">{index + 1}</span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="m-0">
          <button
            type="button"
            id={itemId}
            className={cn(
              "flex w-full min-h-[44px] cursor-pointer items-start gap-4 px-4 py-5 text-left transition-colors md:gap-8 md:px-8 md:py-7 lg:gap-12",
              "focus-visible:outline-2 focus-visible:outline-offset-[-2px]",
              isOverlay
                ? "focus-visible:outline-brand-gold/60"
                : "focus-visible:outline-brand-teal",
            )}
            aria-expanded={isOpen}
            aria-controls={answerId}
            onClick={onToggle}
          >
            {label ? (
              <span
                className={cn(
                  "hidden w-[7.5rem] shrink-0 font-inter text-[10px] font-medium uppercase leading-snug tracking-[0.22em] transition-colors duration-300 md:block lg:w-36",
                  isOverlay ? "text-white/45 group-hover:text-brand-muted" : "text-brand-muted",
                )}
              >
                {label}
              </span>
            ) : null}

            <span className="flex min-w-0 flex-1 items-start justify-between gap-4">
              <span
                className={cn(
                  "min-w-0 flex-1 font-display text-lg font-normal leading-snug transition-colors duration-300 md:text-xl lg:text-2xl",
                  isOverlay ? "text-white/92 group-hover:text-brand-navy" : "text-brand-navy",
                )}
              >
                {label ? (
                  <span
                    className={cn(
                      "mb-1 block font-inter text-[10px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 md:hidden",
                      isOverlay ? "text-white/45 group-hover:text-brand-muted" : "text-brand-muted",
                    )}
                  >
                    {label}
                  </span>
                ) : null}
                {item.title}
              </span>

              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center transition-colors duration-300",
                  isOverlay ? "text-white/90 group-hover:text-brand-navy" : "text-brand-navy",
                )}
                aria-hidden
              >
                {isOpen ? (
                  <X className="size-5 font-light md:size-6" strokeWidth={1.25} />
                ) : (
                  <Plus className="size-5 font-light md:size-6" strokeWidth={1.25} />
                )}
              </span>
            </span>
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id={answerId}
              role="region"
              aria-labelledby={itemId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={ACCORDION_TRANSITION}
              className="overflow-hidden"
            >
              <div className="flex gap-4 px-4 pb-6 md:gap-8 md:px-8 md:pb-8 lg:gap-12">
                {label ? (
                  <span className="hidden w-[7.5rem] shrink-0 md:block lg:w-36" aria-hidden />
                ) : null}
                <p
                  className={cn(
                    "max-w-2xl flex-1 font-inter text-base leading-relaxed transition-colors duration-300",
                    isOverlay ? "text-white/72 group-hover:text-brand-navy/70" : "text-brand-navy/70",
                  )}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function NumberedAccordion({
  items,
  defaultOpenIndex = 0,
  singleOpen = true,
  collapsible = true,
  variant = "light",
  className,
  id = "numbered-accordion",
}: NumberedAccordionProps) {
  const baseId = useId();
  const isOverlay = variant === "overlay";
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => {
    if (defaultOpenIndex === undefined) return new Set();
    if (defaultOpenIndex < 0 || defaultOpenIndex >= items.length) return new Set();
    return new Set([defaultOpenIndex]);
  });

  const handleToggle = (index: number) => {
    setOpenIndexes((current) => {
      const isOpen = current.has(index);

      if (isOpen) {
        if (!collapsible) return current;
        const next = new Set(current);
        next.delete(index);
        return next;
      }

      if (singleOpen) return new Set([index]);

      const next = new Set(current);
      next.add(index);
      return next;
    });
  };

  return (
    <div
      id={id}
      className={cn(
        "overflow-hidden backdrop-blur-[10px]",
        isOverlay
          ? "bg-white/[0.05] shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
          : "border border-brand-navy/10 bg-white/80 shadow-sm ring-1 ring-brand-navy/5",
        className,
      )}
    >
      {items.map((item, index) => (
        <NumberedAccordionItemRow
          key={`${item.title}-${index}`}
          item={item}
          index={index}
          itemId={`${baseId}-item-${index}`}
          isOpen={openIndexes.has(index)}
          onToggle={() => handleToggle(index)}
          variant={variant}
        />
      ))}

      <div
        className={cn(
          "border-t",
          isOverlay ? "border-white/20" : "border-brand-navy/15",
        )}
        aria-hidden
      />
    </div>
  );
}

export function NumberedAccordionSection({
  badge,
  headline,
  intro,
  centeredIntro = false,
  backgroundImage,
  items,
  defaultOpenIndex = 0,
  singleOpen = true,
  collapsible = true,
  variant = "light",
  className,
  sectionClassName,
  id = "numbered-accordion-section",
}: NumberedAccordionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingId = `${id}-heading`;
  const reduceMotion = useReducedMotion();
  const hasBackground = Boolean(backgroundImage);
  const isOverlay = variant === "overlay" || hasBackground;
  const resolvedVariant = isOverlay ? "overlay" : variant;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={headline ? headingId : undefined}
      className={cn(
        "relative isolate overflow-hidden",
        hasBackground ? "py-24 md:py-32 lg:py-40" : "section-py",
        sectionClassName,
      )}
    >
      {backgroundImage ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <motion.div
            className="absolute -inset-x-0 -top-[12%] h-[124%]"
            style={{ y: reduceMotion ? 0 : parallaxY }}
          >
            <Image
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={85}
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/20 to-brand-navy/60" />
        </div>
      ) : null}

      <div
        className={cn(
          "relative z-10 mx-auto max-w-7xl px-4 md:px-12 lg:px-16",
          className,
        )}
      >
        {(badge || headline || intro) && (
          <div
            className={cn(
              "mb-12 md:mb-16",
              centeredIntro && "mx-auto max-w-4xl text-center",
              !centeredIntro && "max-w-3xl",
            )}
          >
            {badge ? (
              <Reveal>
                {centeredIntro ? (
                  <div
                    className={cn(
                      "mb-8 inline-flex border px-3 py-1.5 md:mb-10",
                      isOverlay ? "border-white/40" : "border-brand-navy/15",
                    )}
                  >
                    <span
                      className={cn(
                        "font-inter text-[10px] font-medium uppercase tracking-[0.25em]",
                        isOverlay ? "text-white" : "text-brand-teal",
                      )}
                    >
                      {badge}
                    </span>
                  </div>
                ) : (
                  <p className={cn("label", isOverlay && "text-brand-gold")}>{badge}</p>
                )}
              </Reveal>
            ) : null}

            {headline ? (
              <Reveal delay={badge ? 0.08 : 0}>
                <h2
                  id={headingId}
                  className={cn(
                    "font-display text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]",
                    badge ? "mt-5" : "mt-0",
                    centeredIntro && "text-balance",
                    isOverlay ? "text-white" : "text-brand-navy",
                  )}
                >
                  {headline}
                </h2>
              </Reveal>
            ) : null}

            {intro ? (
              <Reveal delay={badge || headline ? 0.12 : 0}>
                <p
                  className={cn(
                    "mt-5 font-inter text-base leading-relaxed md:mt-6 md:text-lg md:leading-[1.75]",
                    centeredIntro && "mx-auto max-w-3xl text-balance",
                    isOverlay ? "text-white/80" : "text-brand-navy/70",
                  )}
                >
                  {intro}
                </p>
              </Reveal>
            ) : null}
          </div>
        )}

        <Reveal delay={0.14}>
          <NumberedAccordion
            items={items}
            defaultOpenIndex={defaultOpenIndex}
            singleOpen={singleOpen}
            collapsible={collapsible}
            variant={resolvedVariant}
            id={`${id}-accordion`}
          />
        </Reveal>
      </div>
    </section>
  );
}
