"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { PriorityImage } from "@/components/ui/priority-image";

function PortraitCircleBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "about-portrait-circle absolute left-1/2 top-[52%] aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full",
        "bg-gradient-to-br from-[#E8C547] via-brand-gold to-[#A8841E]",
        "shadow-[0_24px_60px_-20px_rgba(201,162,39,0.55)]",
        "ring-1 ring-brand-gold/30",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-tr from-brand-teal/25 via-transparent to-brand-navy/10" />
    </div>
  );
}

export function AboutPortraitCutout({
  name,
  title,
  className,
}: {
  name: string;
  title: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[380px]",
        className,
      )}
    >
      <PortraitCircleBackground />

      <motion.div
        className="absolute inset-x-[6%] bottom-0 top-[6%] z-10"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <PriorityImage
          src="/images/bijal-headshot-cutout.png"
          alt={`${name} — ${title}`}
          fill
          className="object-contain object-bottom drop-shadow-[0_20px_32px_rgba(10,22,40,0.28)]"
          sizes="(max-width: 640px) 300px, 380px"
          priority
        />
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-10 w-[70%] -translate-x-1/2 rounded-[100%] bg-brand-navy/12 blur-xl"
        aria-hidden
      />
    </div>
  );
}
