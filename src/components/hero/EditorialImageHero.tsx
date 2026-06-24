"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

export type EditorialImageHeroProps = {
  id?: string;
  title: string;
  subtitle?: string;
  /** Small line under title (e.g. "Paid & presented by …") */
  byline?: string;
  image: {
    src: string;
    alt: string;
  };
  /** Optional extra classes on outer section */
  className?: string;
};

// Configuration for row splitting
const ROW_COUNT = 4;
const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

// Transition presets synced directly from your reference code
const SLIDE_TRANSITION = {
  duration: 0.65,
  ease: REVEAL_EASE
} as const;

// Heading specific variants from reference code
const MOBILE_FADE_VARIANTS = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
};

const LINE_VARIANTS = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

// Clean fade-in variants for other text content
const FADE_IN_VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const ROW_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "linear",
      staggerChildren: 0.08,
    },
  },
};

export function EditorialImageHero({
  id = "hero",
  title,
  subtitle,
  byline,
  image,
  className,
}: EditorialImageHeroProps) {
  const reduceMotion = useReducedMotion();
  const [animateIn, setAnimateIn] = useState(false);

  // Client-side initialization to guarantee standard performance frames
  useEffect(() => {
    const reducedMotionPref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotionPref) {
      setAnimateIn(true);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setAnimateIn(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id={id}
      className={cn(
        "relative w-full bg-brand-navy text-white",
        "pt-36 md:pt-36", // Pushes text block lower on mobile layouts safely
        "pb-14 md:pb-20",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-4xl text-center select-none">

          {/* MOBILE VIEWPORT */}
          <div className="w-full min-w-0 sm:hidden">
            <h1 className="text-balance font-poppins text-3xl font-semibold tracking-tight">
              {/* Heading uses your mobile text animation layout */}
              <motion.span
                className="block"
                variants={MOBILE_FADE_VARIANTS}
                initial="initial"
                animate={animateIn ? "animate" : "initial"}
                transition={SLIDE_TRANSITION}
              >
                {title}
              </motion.span>
            </h1>

            {byline ? (
              <motion.p
                className="mt-4 text-sm font-inter italic text-white/80"
                variants={FADE_IN_VARIANTS}
                initial="initial"
                animate={animateIn ? "animate" : "initial"}
                transition={{ duration: 0.6, ease: "linear", delay: 0.15 }}
              >
                {byline}
              </motion.p>
            ) : null}

            {subtitle ? (
              <motion.p
                className="mt-5 text-pretty text-base leading-relaxed text-white/85"
                variants={FADE_IN_VARIANTS}
                initial="initial"
                animate={animateIn ? "animate" : "initial"}
                transition={{ duration: 0.6, ease: "linear", delay: 0.25 }}
              >
                {subtitle}
              </motion.p>
            ) : null}
          </div>

          {/* DESKTOP & TABLET VIEWPORT */}
          <div className="hidden w-full sm:block">
            <h1 className="contents">
              <div className="w-full overflow-hidden pb-1">
                {/* Heading uses your desktop line mask animation layout */}
                <motion.div
                  className="text-balance font-poppins text-4xl font-semibold tracking-tight md:text-5xl"
                  variants={LINE_VARIANTS}
                  initial="initial"
                  animate={animateIn ? "animate" : "initial"}
                  transition={SLIDE_TRANSITION}
                >
                  {title}
                </motion.div>
              </div>
            </h1>

            {byline ? (
              <motion.p
                className="mt-4 text-sm font-inter italic text-white/80"
                variants={FADE_IN_VARIANTS}
                initial="initial"
                animate={animateIn ? "animate" : "initial"}
                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
              >
                {byline}
              </motion.p>
            ) : null}

            {subtitle ? (
              <motion.p
                className="mt-5 text-pretty text-base leading-relaxed text-white/85 sm:text-lg"
                variants={FADE_IN_VARIANTS}
                initial="initial"
                animate={animateIn ? "animate" : "initial"}
                transition={{ duration: 0.6, ease: "linear", delay: 0.3 }}
              >
                {subtitle}
              </motion.p>
            ) : null}
          </div>

        </header>
      </div>

      {/* mt-14 matches clear custom spacing guidelines over the image block */}
      <div className="mt-14 md:mt-10 px-6 md:px-0">
        {/* Moving layout ring configurations from static markup to a controlled 
          Framer Motion wrapper prevents the container outline from rendering on initial load.
        */}
        <motion.div
          className="mx-auto max-w-6xl overflow-hidden rounded-2xl ring-1 ring-white/10"
          variants={reduceMotion ? undefined : ROW_CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={reduceMotion ? {} : { opacity: 0 }} // Native server fallback hide step
        >
          <div className="relative aspect-[16/9] w-full grayscale-[0.2] transition duration-700 hover:grayscale-0">

            {reduceMotion ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 72rem, 100vw"
                className="object-cover"
              />
            ) : (
              /* Inside elements inherit orchestration from parent wrapper */
              <>
                {Array.from({ length: ROW_COUNT }).map((_, index) => {
                  const heightPct = 100 / ROW_COUNT;

                  // Resolves sub-pixel splitting boundaries to suppress rendering gaps on mobile
                  const topPct = index === 0 ? 0 : index * heightPct - 0.5;
                  const bottomPct = index === ROW_COUNT - 1 ? 0 : 100 - (index * heightPct + heightPct) - 0.5;

                  const rowVariants: Variants = {
                    hidden: {
                      clipPath: `inset(${topPct}% 100% ${bottomPct}% 0%)`,
                    },
                    visible: {
                      clipPath: `inset(${topPct}% 0% ${bottomPct}% 0%)`,
                      transition: {
                        duration: 0.95,
                        ease: REVEAL_EASE,
                      },
                    },
                  };

                  return (
                    <motion.div
                      key={index}
                      variants={rowVariants}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{
                        clipPath: `inset(${topPct}% 100% ${bottomPct}% 0%)`
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority
                        sizes="(min-width: 1024px) 72rem, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                  );
                })}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}