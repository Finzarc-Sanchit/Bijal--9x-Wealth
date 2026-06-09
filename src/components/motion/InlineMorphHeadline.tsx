"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const HOLD_MS = 550;
const REVEAL_DURATION = 1.15;
const PILL_WIDTH = 220;
const PILL_HEIGHT = 112;

export type InlineMorphHeadlineProps = {
  wordBefore: string;
  wordAfter: string;
  tagline: string;
  image: { src: string; alt: string };
  className?: string;
  hashTrigger?: string;
  viewThreshold?: number;
};

export function InlineMorphHeadline({
  wordBefore,
  wordAfter,
  tagline,
  image,
  className,
}: InlineMorphHeadlineProps) {
  const reduceMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setRevealed(true);
      return;
    }

    const timer = window.setTimeout(() => setRevealed(true), HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  const fullHeadline = `${wordBefore} ${wordAfter} ${tagline}`;
  const pillTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: REVEAL_DURATION, ease: [0.33, 0, 0.2, 1] as const };

  return (
    <div className={cn("text-center", className)}>
      <h2
        className={cn(
          "flex flex-col items-center font-display font-black leading-[0.95] tracking-tight text-brand-navy",
          "text-[clamp(2.5rem,10vw,6.25rem)]",
        )}
        aria-label={fullHeadline}
      >
        <span className="inline-flex flex-wrap items-center justify-center">
          <motion.span
            className="whitespace-nowrap"
            animate={{ marginRight: revealed ? "0.12em" : "0.2em" }}
            transition={pillTransition}
          >
            {wordBefore}
          </motion.span>

          <motion.span
            className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[100px] shadow-[0_12px_32px_-8px_rgba(10,22,40,0.28)]"
            initial={false}
            animate={{
              width: revealed ? PILL_WIDTH : 0,
              opacity: revealed ? 1 : 0,
              y: revealed ? 0 : -28,
              scale: revealed ? 1 : 0.88,
              marginLeft: revealed ? 10 : 0,
              marginRight: revealed ? 10 : 0,
            }}
            transition={pillTransition}
            style={{ height: PILL_HEIGHT }}
            aria-hidden={!revealed}
          >
            <span
              className="relative block shrink-0"
              style={{ width: PILL_WIDTH, height: PILL_HEIGHT }}
            >
              <Image
                src={image.src}
                alt={revealed ? image.alt : ""}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 160px, 220px"
              />
            </span>
          </motion.span>

          <span className="whitespace-nowrap">{wordAfter}</span>
        </span>

        <span className="mt-1 block whitespace-nowrap font-display text-[clamp(2.25rem,9vw,5.75rem)] font-black leading-none tracking-tight text-brand-navy">
          {tagline}
        </span>
      </h2>
    </div>
  );
}
