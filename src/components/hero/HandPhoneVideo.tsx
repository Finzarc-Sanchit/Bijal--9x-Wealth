"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const FALLBACK_VIDEO =
  "https://videos.pexels.com/video-files/7578614/7578614-uhd_2560_1440_25fps.mp4";
const FALLBACK_POSTER =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80";

export function HandPhoneVideo({
  videoUrl,
  posterUrl,
  className,
}: {
  videoUrl?: string;
  posterUrl?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      /* autoplay blocked until user interaction */
    });
  }, []);

  return (
    <div className={cn("relative mx-auto w-full max-w-[420px]", className)}>
      {/* Ambient glow — Hims-style soft highlight behind device */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/15 blur-3xl"
        aria-hidden
      />

      <div className="hero-phone-float relative z-10">
        {/* Stylized hand holding the phone */}
        <svg
          viewBox="0 0 420 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-4 left-1/2 w-[115%] max-w-none -translate-x-1/2"
          aria-hidden
        >
          <path
            d="M210 480 C120 480 60 420 55 340 C50 260 90 200 130 180 C140 120 170 80 210 70 C250 80 280 120 290 180 C330 200 370 260 365 340 C360 420 300 480 210 480Z"
            fill="#E8C4A8"
          />
          <path
            d="M155 320 C145 380 165 430 210 445 C255 430 275 380 265 320 C260 280 240 250 210 245 C180 250 160 280 155 320Z"
            fill="#D4A574"
          />
          <ellipse cx="120" cy="300" rx="28" ry="48" fill="#E8C4A8" transform="rotate(-25 120 300)" />
          <ellipse cx="300" cy="300" rx="28" ry="48" fill="#E8C4A8" transform="rotate(25 300 300)" />
          <ellipse cx="95" cy="360" rx="22" ry="40" fill="#E8C4A8" transform="rotate(-35 95 360)" />
          <ellipse cx="325" cy="360" rx="22" ry="40" fill="#E8C4A8" transform="rotate(35 325 360)" />
          <ellipse cx="210" cy="395" rx="18" ry="32" fill="#E8C4A8" />
        </svg>

        {/* Smartphone frame */}
        <div className="relative z-20 mx-auto w-[260px] sm:w-[280px]">
          <div className="rounded-[2.75rem] border-[11px] border-neutral-900 bg-neutral-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)]">
            {/* Dynamic Island / notch */}
            <div className="absolute left-1/2 top-3.5 z-30 h-[26px] w-[100px] -translate-x-1/2 rounded-full bg-neutral-950" />

            {/* Screen with video */}
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-neutral-950">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={posterUrl ?? FALLBACK_POSTER}
              >
                <source src={videoUrl ?? FALLBACK_VIDEO} type="video/mp4" />
              </video>

              {/* In-app wealth UI overlay — mimics finance app content */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
              <div className="absolute left-0 right-0 top-0 p-4 pt-10">
                <p className="text-[10px] font-medium uppercase tracking-widest text-white/70">
                  9X Wealth
                </p>
                <p className="mt-1 text-lg font-semibold text-white">Money Management</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 space-y-2 p-4 pb-6">
                <div className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
                  <p className="text-[10px] text-white/70">Portfolio growth</p>
                  <p className="text-sm font-semibold text-emerald-300">+12.4% this year</p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-brand-gold/90 px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
                    SIP
                  </span>
                  <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] text-white">
                    Insurance
                  </span>
                  <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] text-white">
                    Goals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
