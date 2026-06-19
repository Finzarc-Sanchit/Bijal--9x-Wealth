"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export const HERO_BACKGROUND_VIDEO = {
  src: "/videos/hero.mp4",
} as const;

export function HeroVideoBackground({ className }: { className?: string; }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Extract the 1st second frame to act as the fallback poster
    const generatePosterFrame = () => {
      // Seek to 1 second if possible, otherwise use what's loaded
      video.currentTime = Math.min(1, video.duration || 0);

      video.addEventListener("seeked", function onSeeked() {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            // Assign the captured frame as the native poster attribute
            video.poster = canvas.toDataURL("image/jpeg");
          }
        } catch (error) {
          console.error("Failed to capture video poster frame:", error);
        }

        // Reset back to start and clean up event listener
        video.currentTime = 0;
        video.removeEventListener("seeked", onSeeked);

        // 2. Play the video safely after the poster frame is locked in
        if (!reduceMotion) {
          video.play().catch(() => {
            /* autoplay blocked until user interaction */
          });
        }
      }, { once: true });
    };

    // If metadata is ready, generate immediately, otherwise wait for it
    if (video.readyState >= 1) {
      generatePosterFrame();
    } else {
      video.addEventListener("loadedmetadata", generatePosterFrame, { once: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", generatePosterFrame);
    };
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