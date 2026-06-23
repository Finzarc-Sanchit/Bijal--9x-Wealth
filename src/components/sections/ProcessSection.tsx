"use client";

import {
  PROCESS_SECTION_META,
  PROCESS_STEPS,
  type ProcessStep,
} from "@/data/process-section";
import { parseProcessHeading } from "@/lib/grid-to-process";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function StepHeader({ number, lineRef, arrowRef }: { number: string; lineRef: any; arrowRef: any; }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-3">
      <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy/65 shrink-0">
        Step
      </span>
      {/* Joined track timeline line setup */}
      <div className="flex flex-1 items-center min-w-0 relative h-3">
        <div
          ref={lineRef}
          className="h-px bg-brand-navy/25 w-full origin-left absolute left-0"
          aria-hidden
        />
        <div
          ref={arrowRef}
          className="absolute right-0 opacity-0"
          aria-hidden
        >
          <ArrowRight
            className="size-3.5 text-brand-navy/45"
            strokeWidth={1.5}
          />
        </div>
      </div>
      <span className="font-mono text-sm font-medium tabular-nums text-brand-navy shrink-0">
        {number}
      </span>
    </div>
  );
}

function ProcessCard({
  step,
  isFirst,
  index,
}: {
  step: ProcessStep;
  isFirst: boolean;
  index: number;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const internalImgRef = useRef<HTMLImageElement>(null); // Ref specifically for the Image component
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const card = cardRef.current;
      if (!card) return;

      const internalImg = internalImgRef.current; // Cache the Image component DOM node

      ctx = gsap.context(() => {
        // Timeline specifically for drawing the vector track and revealing content on entry
        const tlReveal = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=10%",
            toggleActions: "play none none relative",
          },
        });

        // 1. Draw out the step line tracker vector and pop the arrow
        tlReveal.fromTo(lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power2.out" }
        )
          .fromTo(arrowRef.current,
            { opacity: 0, x: -8 },
            { opacity: 1, x: 0, duration: 0.25, ease: "back.out(2)" },
            "-=0.25"
          );

        // 2. Animate image frame entry
        tlReveal.fromTo(imageWrapperRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        );

        // 3. Subtle initial image depth refinement on entry
        if (internalImg) {
          // Initialize scale to ensure smooth parallax
          gsap.set(internalImg, { scale: 1.2 });

          tlReveal.fromTo(internalImg,
            { scale: 1.3 }, // Soft scale-down on entry
            { scale: 1.2, duration: 0.9, ease: "power2.out" },
            "-=0.5" // Start scaling shortly after entry
          );
        }

        // 4. Reveal glass overlay text content safely
        tlReveal.fromTo(glassRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );

        // 5. Scroll-driven PARALLAX effect specifically for the Image component
        if (internalImg && !imageFailed) {
          // Dedicated parallax effect setup
          gsap.fromTo(internalImg,
            { yPercent: 15 }, // Initial shift down
            {
              yPercent: -15, // Shift up relative to scroll
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom", // Effect begins as soon as card bottom enters screen
                end: "bottom top", // Effect ends as soon as card top exits screen
                scrub: true, // Smooth scrub effect linked to scroll position
                invalidateOnRefresh: true, // Handle viewport resize events gracefully
              },
            }
          );
        }

      }, card);
    };

    void init();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [imageFailed]); // Re-run if image loading state changes

  return (
    <article ref={cardRef} className="flex h-full flex-col opacity-100">
      <StepHeader number={step.number} lineRef={lineRef} arrowRef={arrowRef} />

      <div
        ref={imageWrapperRef}
        className="relative min-h-[460px] flex-1 overflow-hidden rounded-2xl border border-brand-navy/10 lg:min-h-[520px] xl:min-h-[580px] opacity-0"
      >
        {!imageFailed ? (
          <Image
            ref={internalImgRef} // Attach specific ref for GSAP control
            src={step.image.src}
            alt={step.image.alt}
            fill
            className="object-cover" // Object-cover class maintains ratio
            sizes="(max-w: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-brand-navy/10" aria-hidden />
        )}

        {/* Glassmorphism content box overlay */}
        <div
          ref={glassRef}
          className={cn(
            "absolute inset-x-5 top-5 border rounded-xl p-6 md:p-7 shadow-lg shadow-black/5 opacity-0 flex flex-col h-[200px] md:h-[220px]",
            isFirst
              ? "border-white/25 bg-white/15 backdrop-blur-xl text-white"
              : "border-white/15 bg-white/10 backdrop-blur-lg text-white"
          )}
        >
          <h3 className="font-display text-xl font-semibold leading-snug md:text-[1.4rem] drop-shadow-sm shrink-0">
            {step.title}
          </h3>
          <div className="mt-3 font-inter text-sm leading-relaxed text-white/90 md:text-[15px] overflow-y-auto pr-1 flex-1 custom-scrollbar">
            <p className="drop-shadow-sm">{step.body}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export type ProcessSectionProps = {
  eyebrow: string;
  heading: string | readonly [string, string];
  description: string;
  steps: readonly ProcessStep[];
  className?: string;
  stackPinned?: boolean;
  id?: string;
};

function processGridClassName(stepCount: number) {
  if (stepCount <= 3) {
    return "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full items-stretch";
  }

  return "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 w-full items-stretch";
}

export function ProcessSection({
  eyebrow,
  heading,
  description,
  steps,
  className,
  stackPinned = false,
  id = "process",
}: ProcessSectionProps) {
  const reduceMotion = useReducedMotion();
  const usePinnedLayout = stackPinned && !reduceMotion;
  const [headingPrimary, headingAccent] = parseProcessHeading(heading);
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "section-py relative w-full px-6 md:px-12 lg:px-16 xl:px-20",
        usePinnedLayout && "sticky bottom-0 z-10",
        className,
      )}
    >
      <div className="w-full overflow-hidden">
        <header className="mb-14 max-w-3xl md:mb-20">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-navy md:text-4xl lg:text-[2.75rem]"
          >
            {headingPrimary}{" "}
            {headingAccent ? (
              <span className="block text-brand-teal lg:inline">{headingAccent}</span>
            ) : null}
          </h2>
          <p className="mt-4 font-inter text-base leading-relaxed text-brand-navy/70 md:text-lg">
            {description}
          </p>
        </header>

        <div className={processGridClassName(steps.length)}>
          {steps.map((step, index) => (
            <ProcessCard
              key={step.id}
              step={step}
              isFirst={index === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSectionDefault({
  className,
  stackPinned = false,
}: {
  className?: string;
  stackPinned?: boolean;
}) {
  return (
    <ProcessSection
      eyebrow={PROCESS_SECTION_META.eyebrow}
      heading={PROCESS_SECTION_META.heading}
      description={PROCESS_SECTION_META.description}
      steps={PROCESS_STEPS}
      className={className}
      stackPinned={stackPinned}
    />
  );
}