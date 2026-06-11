"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TypewriterText({
  text,
  className,
  charDelayMs = 55,
  startDelayMs = 400,
  cursorClassName = "text-brand-teal",
}: {
  text: string;
  className?: string;
  charDelayMs?: number;
  startDelayMs?: number;
  cursorClassName?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    let interval: ReturnType<typeof setInterval> | undefined;
    const startTimer = setTimeout(() => {
      let index = 0;
      interval = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, charDelayMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [text, charDelayMs, startDelayMs]);

  return (
    <p className={className} aria-label={text}>
      <span>{displayed}</span>
      {!done && (
        <motion.span
          aria-hidden
          className={cn("ml-0.5 inline-block", cursorClassName)}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      )}
    </p>
  );
}
