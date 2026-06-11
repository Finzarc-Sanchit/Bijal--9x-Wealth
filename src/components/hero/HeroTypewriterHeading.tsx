"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroTypewriterHeading({
  text,
  isActive,
  className,
  charDelayMs = 42,
  instant = false,
  cursorClassName = "text-brand-teal",
}: {
  text: string;
  isActive: boolean;
  className?: string;
  charDelayMs?: number;
  instant?: boolean;
  cursorClassName?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    if (!isActive) {
      setDisplayed("");
      setDone(false);
      return;
    }

    if (instant) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, charDelayMs);

    return () => clearInterval(interval);
  }, [instant, isActive, text, charDelayMs, reducedMotion]);

  return (
    <h1 className={className} aria-label={text}>
      <span>{isActive ? displayed : ""}</span>
      {isActive && !done && displayed.length > 0 && (
        <motion.span
          aria-hidden
          className={cn("ml-0.5 inline-block", cursorClassName)}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      )}
    </h1>
  );
}
