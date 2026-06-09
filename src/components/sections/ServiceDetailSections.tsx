"use client";

import { SERVICE_CARD_IMAGES } from "@/data/services-section";
import { getServiceDetailByIndex } from "@/data/services-detail";
import { SERVICES_PAGE_SLUGS } from "@/data/services-nav";
import type { SiteContent } from "@/lib/content/schema";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SECTION_THEMES = [
  {
    badge: "border-brand-teal/25 bg-brand-teal/8 text-brand-teal",
    ctaPrimary:
      "bg-brand-teal text-white hover:bg-brand-gold hover:text-brand-navy focus-visible:ring-brand-gold",
    ctaSecondary:
      "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
  },
  {
    badge: "border-brand-navy/15 bg-brand-navy/[0.05] text-brand-navy",
    ctaPrimary:
      "bg-brand-navy text-white hover:bg-brand-teal hover:text-white focus-visible:ring-brand-teal",
    ctaSecondary:
      "border-2 border-brand-gold bg-brand-gold text-brand-navy hover:bg-brand-gold-light focus-visible:ring-brand-navy",
  },
  {
    badge: "border-brand-gold/30 bg-brand-gold/10 text-brand-navy",
    ctaPrimary:
      "bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
    ctaSecondary:
      "border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white focus-visible:ring-brand-teal",
  },
] as const;

export function ServiceDetailSections({ content }: { content: SiteContent }) {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-5 pb-8 sm:px-8 md:space-y-24 md:pb-12">
      {content.services.map((service, index) => {
        const detail = getServiceDetailByIndex(index);
        const Icon = detail.icon;
        const image = SERVICE_CARD_IMAGES[index];
        const slug = SERVICES_PAGE_SLUGS[index] ?? detail.id;
        const theme = SECTION_THEMES[index] ?? SECTION_THEMES[0];
        const reversed = index % 2 === 1;

        return (
          <motion.section
            key={service.title}
            id={slug}
            className="scroll-mt-28"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={cn(
                "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                reversed && "lg:[direction:rtl]",
              )}
            >
              {image ? (
                <motion.div
                  className={cn("relative overflow-hidden rounded-3xl", reversed && "lg:[direction:ltr]")}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-brand-navy/8 shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 to-transparent" />
                  </div>
                </motion.div>
              ) : null}

              <div className={cn(reversed && "lg:[direction:ltr]")}>
                <div
                  className={cn(
                    "mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5",
                    theme.badge,
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.25} />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    {detail.label}
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
                  {detail.label}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
                  {detail.summary}
                </p>

                <ul className="mt-6 space-y-3">
                  {detail.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-brand-navy/90">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      <span className="text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-4">
                  {detail.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-brand-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/#consultation-form"
                    className={cn(
                      "inline-flex min-h-[48px] items-center justify-center rounded-full px-6 text-sm font-bold uppercase tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                      theme.ctaPrimary,
                    )}
                  >
                    {detail.ctaLabel}
                  </Link>
                  <a
                    href={content.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                      theme.ctaSecondary,
                    )}
                  >
                    WhatsApp Bijal
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        );
      })}

      <p className="text-center text-xs leading-relaxed text-brand-muted">
        Insurance products are subject to terms and conditions. Mutual fund investments are subject
        to market risks.
      </p>
    </div>
  );
}
