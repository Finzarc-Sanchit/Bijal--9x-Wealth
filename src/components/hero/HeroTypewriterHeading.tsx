"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function HeroTypewriterHeading({
  text,
  isActive,
  className,
  charDelayMs = 42,
}: {
  text: string;
  isActive: boolean;
  className?: string;
  charDelayMs?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const prevActive = useRef(false);

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
      prevActive.current = false;
      return;
    }

    if (!prevActive.current) {
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

      prevActive.current = true;
      return () => clearInterval(interval);
    }
  }, [isActive, text, charDelayMs, reducedMotion]);

  return (
    <h1 className={className} aria-label={text}>
      <span>{isActive ? displayed : text}</span>
      {isActive && !done && (
        <motion.span
          aria-hidden
          className="ml-0.5 inline-block text-brand-teal"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      )}
    </h1>
  );
}
