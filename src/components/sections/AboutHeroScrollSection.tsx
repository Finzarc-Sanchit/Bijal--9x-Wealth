"use client";

import { AboutAchievementsTicker } from "@/components/sections/AboutAchievementsTicker";
import { AboutHeroMeshBackground } from "@/components/sections/AboutHeroMeshBackground";
import {
  ABOUT_HERO_SCROLL_VH,
  getAboutHeroScrollProgress,
} from "@/components/sections/about/about-hero-constants";
import { useAboutHeroScrollSnap } from "@/components/sections/about/useAboutHeroScrollSnap";
import type { SiteContent } from "@/lib/content/schema";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MessageCircle, Search } from "lucide-react";
import { AboutPortraitCutout } from "@/components/sections/AboutPortraitCutout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const ABOUT_NAV = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;

function AboutMiniHeader() {
  return (
    <header className="relative flex items-center justify-end gap-3 border-b border-brand-navy/8 px-5 py-4 sm:px-8 sm:py-5">
      <nav
        aria-label="About section"
        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
      >
        {ABOUT_NAV.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-navy transition hover:text-brand-teal sm:text-xs"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        aria-label="Search"
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-brand-navy/80 transition hover:text-brand-teal"
      >
        <Search className="h-5 w-5" strokeWidth={2} />
      </button>
      <Link
        href="/#consultation-form"
        className="inline-flex min-h-[44px] items-center rounded-full border-2 border-brand-navy px-5 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
      >
        Get Started
      </Link>
    </header>
  );
}

function PortraitWithGradientBorder({ name, title }: { name: string; title: string }) {
  return <AboutPortraitCutout name={name} title={title} className="lg:ml-auto lg:mr-0" />;
}

export function AboutHeroScrollSection({ content }: { content: SiteContent }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const reduceMotion = useReducedMotion();
  useAboutHeroScrollSnap(containerRef);

  const syncProgress = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setScrollProgress(getAboutHeroScrollProgress(el));
  }, []);

  useEffect(() => {
    syncProgress();
    window.addEventListener("scroll", syncProgress, { passive: true });
    window.addEventListener("resize", syncProgress);
    return () => {
      window.removeEventListener("scroll", syncProgress);
      window.removeEventListener("resize", syncProgress);
    };
  }, [syncProgress]);

  const heroY = reduceMotion ? 0 : scrollProgress * -100;

  return (
    <div
      ref={containerRef}
      className="about-hero-scroll-section relative"
      style={{ height: `${ABOUT_HERO_SCROLL_VH}vh` }}
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <motion.div
          className="flex h-full flex-col pt-[72px]"
          style={{ y: `${heroY}vh` }}
          transition={{ type: "tween", ease: SLIDE_EASE, duration: reduceMotion ? 0 : 0.01 }}
        >
          <AboutHeroMeshBackground className="flex min-h-0 flex-1 flex-col">
            <AboutMiniHeader />

            <div className="flex flex-1 flex-col justify-center px-5 py-8 sm:px-8 sm:py-10">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
                <motion.div
                  className="text-center lg:text-left"
                  initial={reduceMotion ? false : { opacity: 0, x: -72 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.85, ease: SLIDE_EASE, delay: 0.1 }}
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold sm:text-sm">
                    Start Your Journey
                  </p>
                  <h1 className="font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-4xl lg:text-[3.1rem]">
                    Plan Your Wealth From Anywhere.
                  </h1>
                  <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-muted lg:mx-0 lg:text-[1.02rem]">
                    {content.mission}
                  </p>

                  <div className="mx-auto mt-6 max-w-lg space-y-4 text-left lg:mx-0">
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-teal">
                        Why I&apos;m the right partner for you
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:text-[0.95rem]">
                        {content.about.whyChoose}
                      </p>
                    </div>
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-teal">
                        My personal journey
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:text-[0.95rem]">
                        {content.about.journey}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <Link
                      href="/#consultation-form"
                      className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-brand-navy px-8 text-base font-semibold text-white transition hover:bg-brand-navy-light sm:w-auto"
                    >
                      Start Free Consultation
                    </Link>
                    <a
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full",
                        "border-2 border-brand-teal px-8 text-base font-semibold text-brand-teal",
                        "transition hover:bg-brand-teal hover:text-white sm:w-auto",
                      )}
                    >
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, x: 72 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.85, ease: SLIDE_EASE, delay: 0.22 }}
                >
                  <PortraitWithGradientBorder
                    name={content.about.name}
                    title={content.about.title}
                  />
                </motion.div>
              </div>

              <motion.div
                className="mt-8 flex justify-center"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: SLIDE_EASE, delay: 0.38 }}
              >
                <AboutAchievementsTicker
                  achievements={content.about.credentials}
                  className="w-full max-w-3xl"
                />
              </motion.div>
            </div>

            {scrollProgress < 0.15 ? (
              <motion.div
                className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-brand-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                aria-hidden
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Scroll to explore
                </span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </motion.div>
            ) : null}
          </AboutHeroMeshBackground>
        </motion.div>
      </div>
    </div>
  );
}
