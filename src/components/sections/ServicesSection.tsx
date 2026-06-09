"use client";

import { ServicesCardsCarousel } from "@/components/sections/ServicesCardsCarousel";
import { ServicesHeroBackground } from "@/components/sections/ServicesHeroBackground";
import { ServicesMorphHeadline } from "@/components/sections/ServicesMorphHeadline";
import { SERVICES_PARTNER_LABELS } from "@/data/services-section";
import type { SiteContent } from "@/lib/content/schema";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export function ServicesSection({
  content,
  isStandalonePage = false,
}: {
  content: SiteContent;
  isStandalonePage?: boolean;
}) {
  return (
    <>
      <ServicesHeroBackground id="services" className="scroll-mt-8">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-24 sm:px-8 md:pb-16 md:pt-28">
          <ServicesMorphHeadline />

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/#consultation-form"
              className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-full bg-brand-teal px-8 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-navy"
            >
              Book Consultation
            </Link>
            <a
              href={content.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-navy transition hover:text-brand-teal"
            >
              I Need Help
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-navy transition group-hover:border-brand-teal group-hover:bg-brand-teal/10">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </ServicesHeroBackground>

      <ServicesCardsCarousel content={content} isStandalonePage={isStandalonePage} />

      <div className="border-t border-brand-navy/10 bg-brand-cream">
        <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
          <div className="flex flex-col items-center gap-6 pt-8 sm:flex-row sm:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {SERVICES_PARTNER_LABELS.map((label) => (
                <span
                  key={label}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted/80"
                >
                  {label}
                </span>
              ))}
            </div>

            <a
              href={isStandalonePage ? "#pure-risk" : "/services#pure-risk"}
              className="inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy transition hover:text-brand-teal"
            >
              Explore sections
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-navy/25">
                <ChevronDown className="h-4 w-4" />
              </span>
            </a>
          </div>

          {!isStandalonePage ? (
            <p className="mt-8 text-center text-xs leading-relaxed text-brand-muted">
              Insurance products are subject to terms and conditions. Mutual fund investments are subject
              to market risks.
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}
