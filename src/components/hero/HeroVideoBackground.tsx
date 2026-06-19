"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export const HERO_BACKGROUND_VIDEO = {
  src: "/videos/hero.mp4",
  poster: "/images/hero/hni-panel-1-boardroom.png",
} as const;

export function HeroVideoBackground({ className }: { className?: string; }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    video.play().catch(() => {
      /* autoplay blocked until user interaction */
    });
  }, [reduceMotion]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)} aria-hidden>
      <video
        ref={videoRef}
        className="box-border h-full w-full max-w-none object-cover"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        poster={HERO_BACKGROUND_VIDEO.poster}
        preload={reduceMotion ? "none" : "auto"}
      >
        <source src={HERO_BACKGROUND_VIDEO.src} type="video/mp4" />
      </video>

      {/* <div className="absolute inset-0 bg-black/10" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/78 via-brand-navy/55 to-brand-navy/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-brand-navy/32" /> */}
    </div>
  );
}
