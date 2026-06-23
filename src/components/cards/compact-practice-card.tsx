"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HOVER_SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 20,
};

export type CompactPracticeCardImage = {
  src: string;
  alt: string;
};

export type CompactPracticeCardProps = {
  title: string;
  description: string;
  image: CompactPracticeCardImage;
  label?: string;
  href?: string;
  cta?: string;
  className?: string;
};

export function CompactPracticeCard({
  title,
  description,
  image,
  label,
  href,
  cta,
  className,
}: CompactPracticeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const cardBody = (
    <article
      className={cn(
        "relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-xl p-6 transition-all duration-500 ease-out sm:min-h-[280px] lg:min-h-[300px] lg:p-8",
        isHovered ? "bg-[#2d3136]" : "bg-black",
        href && "cursor-pointer",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsHovered(false);
        }
      }}
      tabIndex={href ? undefined : 0}
      aria-label={href ? undefined : title}
    >
      {!imageFailed ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            isHovered ? "opacity-[0.35]" : "opacity-100",
          )}
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 400px"
          aria-hidden={isHovered}
          onError={() => setImageFailed(true)}
        />
      ) : null}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2d3136]/70 via-[#2d3136]/50 to-[#2d3136]/75 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500",
          isHovered ? "opacity-0" : "opacity-100",
        )}
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full grow flex-col items-start justify-between">
        <div className={cn("flex w-full flex-col", isHovered ? "" : "mt-auto")}>
          {label ? (
            <p
              className="mb-3 font-mono text-xs font-medium tracking-[0.24em] text-brand-teal"
              aria-hidden
            >
              {label}
            </p>
          ) : null}

          <motion.h3
            layout="position"
            transition={HOVER_SPRING}
            className={cn(
              "font-display leading-tight tracking-tight text-white transition-all duration-500",
              isHovered
                ? "text-2xl font-medium md:text-3xl"
                : "text-xl font-normal md:text-2xl",
            )}
          >
            {title}
          </motion.h3>

          <AnimatePresence initial={false} mode="popLayout">
            {isHovered ? (
              <motion.p
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 0.85, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={HOVER_SPRING}
                className="pointer-events-none overflow-hidden font-inter text-sm leading-relaxed text-white md:text-base"
              >
                {description}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>

        {href && cta ? (
          <span
            className={cn(
              "relative mt-8 inline-flex min-h-[44px] w-fit items-center gap-3 self-start transition-all duration-500",
              isHovered
                ? "translate-y-0 opacity-100"
                : "pointer-events-none absolute translate-y-4 opacity-0",
            )}
          >
            <span className="font-inter text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white sm:text-xs">
              {cta}
            </span>
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white">
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </span>
        ) : null}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 rounded-xl">
        {cardBody}
      </Link>
    );
  }

  return cardBody;
}
