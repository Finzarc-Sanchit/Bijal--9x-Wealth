"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { PriorityImage } from "@/components/ui/priority-image";
import { useEffect, useState } from "react";

const CYCLE_MS = 2000;

function MeshBlobSet() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-[#f7f3ec] to-[#efe8dc]" />
      <div className="about-mesh-blob-a absolute -left-[12%] top-[0%] h-[58%] w-[58%] rounded-full bg-brand-gold/14 blur-[90px]" />
      <div className="about-mesh-blob-b absolute -right-[10%] top-[12%] h-[52%] w-[52%] rounded-full bg-brand-teal/10 blur-[85px]" />
      <div className="about-mesh-blob-c absolute bottom-[-8%] left-[22%] h-[48%] w-[48%] rounded-full bg-brand-gold/9 blur-[75px]" />
      <div className="about-mesh-blob-d absolute right-[18%] bottom-[8%] h-[36%] w-[36%] rounded-full bg-brand-teal/7 blur-[65px]" />
      <svg
        className="about-mesh-grid absolute inset-0 h-full w-full opacity-[0.45]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="about-mesh-lines" width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M56 0H0V56"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              className="text-brand-navy/[0.07]"
            />
          </pattern>
          <pattern id="about-mesh-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="0.9" className="fill-brand-navy/[0.06]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-mesh-lines)" />
        <rect width="100%" height="100%" fill="url(#about-mesh-dots)" />
      </svg>
      <div className="about-mesh-shimmer absolute inset-0 opacity-[0.04]" />
    </>
  );
}

function OrbRingSet() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#faf6ef] via-brand-cream to-[#f0ebe3]" />
      <div className="live-bg-orb absolute -left-[6%] top-[8%] h-[50%] w-[50%] rounded-full bg-brand-gold/18 blur-[90px]" />
      <div className="live-bg-orb-delay absolute -right-[8%] top-[18%] h-[46%] w-[46%] rounded-full bg-brand-teal/12 blur-[85px]" />
      <div className="live-bg-orb-slow absolute bottom-[-6%] left-[30%] h-[40%] w-[40%] rounded-full bg-brand-gold/10 blur-[75px]" />
      <svg
        className="absolute left-1/2 top-1/2 h-[min(90%,520px)] w-[min(90%,520px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
        viewBox="0 0 400 400"
      >
        {[1, 2, 3, 4].map((i) => (
          <circle
            key={`about-ring-${i}`}
            cx="200"
            cy="200"
            r={42 * i}
            fill="none"
            stroke="#1a6b7a"
            strokeWidth="1.5"
            className="hero-bg-ring-pulse"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </svg>
      <div className="live-bg-shimmer absolute inset-0 opacity-[0.035]" />
    </>
  );
}

function ArcFlowSet() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-bl from-[#f8f4ed] via-[#f5f0e8] to-brand-cream" />
      <div className="about-mesh-blob-a absolute -right-[10%] top-[5%] h-[54%] w-[54%] rounded-full bg-brand-teal/12 blur-[90px]" />
      <div className="about-mesh-blob-c absolute bottom-[-4%] left-[10%] h-[44%] w-[44%] rounded-full bg-brand-gold/11 blur-[80px]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0 480 Q400 120 800 480"
          fill="none"
          stroke="#c9a227"
          strokeWidth="2"
          className="hero-bg-arc-flow"
        />
        <path
          d="M0 520 Q400 160 800 520"
          fill="none"
          stroke="#1a6b7a"
          strokeWidth="1.5"
          className="hero-bg-arc-flow"
          style={{ animationDelay: "-4s" }}
        />
        <path
          d="M0 440 Q400 80 800 440"
          fill="none"
          stroke="#0a1628"
          strokeWidth="1"
          className="hero-bg-arc-flow"
          style={{ animationDelay: "-8s" }}
        />
      </svg>
      <div
        className="hero-bg-grid-drift absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,22,40,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="about-mesh-shimmer absolute inset-0 opacity-[0.03]" />
    </>
  );
}

const BACKGROUND_SETS = [MeshBlobSet, OrbRingSet, ArcFlowSet] as const;

export function AboutHeroMeshBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [activeSet, setActiveSet] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveSet((current) => (current + 1) % BACKGROUND_SETS.length);
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const ActiveBackground = BACKGROUND_SETS[activeSet];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-brand-cream" />

        <div className="absolute left-1/2 top-[46%] z-[1] w-[min(72%,540px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.055] sm:top-[42%] sm:w-[min(65%,600px)] sm:opacity-[0.065]">
          <PriorityImage
            src="/logo.svg"
            alt=""
            width={600}
            height={150}
            className="h-auto w-full"
            priority
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSet}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <ActiveBackground />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
