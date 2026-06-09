"use client";

import type { SiteContent } from "@/lib/content/schema";
import { CONTACT, SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BarChart3, MessageCircle, Play, RefreshCw, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AboutHeroScrollSection } from "@/components/sections/AboutHeroScrollSection";

const FEATURE_CARDS = [
  {
    icon: Play,
    title: "Live Consultation Sessions",
    description:
      "One-on-one video or in-person meetings with Bijal — plain-language advice tailored to your goals.",
  },
  {
    icon: RefreshCw,
    title: "Interactive Financial Planning",
    description:
      "Structured reviews for insurance, SIPs, and retirement — updated as your life changes.",
  },
  {
    icon: User,
    title: "Goal Progress Tracker",
    description:
      "Track milestones for retirement, education, and protection — stay on course with clear checkpoints.",
  },
] as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function LaptopMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[340px] lg:absolute lg:-right-4 lg:top-1/2 lg:z-20 lg:max-w-[380px] lg:-translate-y-[42%] xl:-right-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="rounded-t-2xl bg-brand-navy-light px-3 pt-3 shadow-2xl">
        <div className="aspect-[16/10] overflow-hidden rounded-t-lg bg-brand-gold">
          <div className="relative h-full w-full p-4">
            <div className="flex h-full flex-col justify-between rounded-lg bg-brand-gold/90 p-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/70">
                  9X Wealth Session
                </p>
                <p className="mt-1 text-sm font-bold text-brand-navy">Consultation Preview</p>
              </div>
              <div className="relative mx-auto aspect-video w-[88%] overflow-hidden rounded-xl bg-white shadow-lg">
                <Image
                  src="/images/bijal-presenting.png"
                  alt=""
                  fill
                  className="object-cover object-[50%_20%]"
                  sizes="280px"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-md">
                    <Play className="ml-0.5 h-5 w-5 fill-brand-navy text-brand-navy" />
                  </div>
                </div>
              </div>
              <p className="text-center text-[10px] font-medium text-brand-navy/80">
                Watch how we plan your wealth
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[94%] rounded-b-sm bg-brand-navy-light" />
      <div className="mx-auto h-1.5 w-[38%] rounded-b-xl bg-brand-navy/30" />
    </motion.div>
  );
}

export function AboutSection({ content }: { content: SiteContent }) {
  const testimonial = content.testimonials[0];

  return (
    <section className="bg-gradient-to-b from-brand-cream via-[#f7f3ec] to-brand-cream">
      <AboutHeroScrollSection content={content} />

      <div className="mx-auto max-w-6xl">
        {/* Dark band — rounded top, laptop overlap */}
        <div className="relative overflow-hidden rounded-t-[2.5rem] bg-brand-navy px-5 pb-16 pt-12 sm:rounded-t-[3rem] sm:px-8 sm:pb-20 sm:pt-16 lg:pb-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal className="relative z-10 max-w-lg">
              <h3 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Start Your Financial Planning Today.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">{content.vision}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#consultation-form"
                  className="inline-flex min-h-[48px] items-center rounded-full bg-white px-7 text-sm font-bold uppercase tracking-wide text-brand-navy transition hover:bg-brand-cream"
                >
                  Start Today
                </Link>
                <a
                  href={SOCIAL.tataAiaPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-white/80 px-7 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
                >
                  <Play className="h-4 w-4" />
                  Watch Plans
                </a>
              </div>
            </Reveal>

            <div className="relative min-h-[200px] lg:min-h-[280px]">
              <LaptopMockup />
            </div>
          </div>
        </div>

        {/* Three feature cards */}
        <div className="grid gap-4 bg-brand-cream/40 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {FEATURE_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[1.75rem] border border-brand-navy/6 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-navy/15">
                    <Icon className="h-5 w-5 text-brand-navy" strokeWidth={2} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy">{card.title}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom dark section */}
        <div className="rounded-t-[2rem] bg-brand-navy px-5 py-12 sm:px-8 sm:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Goal Progress Tracker
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
                {content.about.bio}
              </p>
              {testimonial && (
                <blockquote className="mt-8 border-t border-white/15 pt-6">
                  <p className="text-lg italic leading-relaxed text-white/90">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm text-white/55">
                    — {testimonial.author}
                    {testimonial.role ? `, ${testimonial.role}` : ""}
                  </footer>
                </blockquote>
              )}
            </Reveal>

            <Reveal delay={0.15} className="flex flex-col items-center gap-6 lg:items-end">
              <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
                {[
                  { href: SOCIAL.facebook, label: "Facebook", letter: "f" },
                  { href: SOCIAL.instagram, label: "Instagram", letter: "ig" },
                  { href: SOCIAL.linkedin, label: "LinkedIn", letter: "in" },
                  { href: CONTACT.whatsappHref, label: "WhatsApp", icon: MessageCircle },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy-light text-sm font-bold text-white ring-1 ring-white/15 transition hover:bg-brand-teal"
                  >
                    {"icon" in item && item.icon ? (
                      <item.icon className="h-5 w-5" />
                    ) : (
                      item.letter
                    )}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2" aria-hidden>
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className={cn(
                      "rounded-full bg-white/25",
                      dot === 0 ? "h-3 w-10" : "h-3 w-3",
                    )}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <BarChart3 className="h-4 w-4 text-brand-gold" />
                <span className="text-xs font-semibold text-white/80">
                  {content.about.title}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
