"use client";

import {
  BLUEPRINT_DISCLAIMER,
  SERVICE_BLUEPRINT_PILLARS,
  SERVICES_BLUEPRINT_INTRO,
  WEALTH_PLANNING_BRIDGE,
  type BlueprintCta,
  type ServiceBlueprintPillar,
} from "@/data/services-blueprint";
import { CONTACT, SOCIAL } from "@/lib/constants";
import type { SiteContent } from "@/lib/content/schema";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BADGE_TONES = {
  risk: "bg-rose-600/10 text-rose-700 ring-rose-600/20",
  income: "bg-brand-teal/10 text-brand-teal ring-brand-teal/25",
  growth: "bg-brand-gold/15 text-[#8a6f12] ring-brand-gold/30",
  planning: "bg-brand-navy/8 text-brand-navy ring-brand-navy/15",
} as const;

const CARD_ACCENTS = {
  risk: "border-rose-200/60 from-rose-50/40",
  income: "border-brand-teal/20 from-brand-teal/[0.04]",
  growth: "border-brand-gold/25 from-brand-gold/[0.06]",
  planning: "border-brand-navy/10 from-brand-cream",
} as const;

function resolveCtaHref(cta: BlueprintCta, whatsappHref: string) {
  if (cta.href === "whatsapp") return whatsappHref;
  return cta.href;
}

function CtaButton({
  cta,
  whatsappHref,
  accent,
}: {
  cta: BlueprintCta;
  whatsappHref: string;
  accent: keyof typeof CARD_ACCENTS;
}) {
  const href = resolveCtaHref(cta, whatsappHref);
  const isExternal = cta.external || href.startsWith("http");

  const className = cn(
    "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    cta.variant === "primary"
      ? accent === "risk"
        ? "bg-brand-navy text-white hover:bg-brand-navy-light focus-visible:ring-brand-navy"
        : accent === "income"
          ? "bg-brand-teal text-white hover:bg-[#155966] focus-visible:ring-brand-teal"
          : accent === "growth"
            ? "bg-brand-gold text-brand-navy hover:bg-brand-gold-light focus-visible:ring-brand-gold"
            : "bg-brand-teal text-white hover:bg-brand-navy focus-visible:ring-brand-teal"
      : "border-2 border-brand-navy/20 bg-transparent text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {cta.label}
      {cta.href !== "/#consultation-form" ? <ArrowUpRight className="h-4 w-4" /> : null}
    </Link>
  );
}

function SchemeTable({
  title,
  rows,
}: {
  title: string;
  rows: NonNullable<ServiceBlueprintPillar["tableRows"]>;
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-brand-navy/8">
      <p className="bg-brand-cream px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
        {title}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-brand-navy/8 bg-white/80">
              <th className="px-4 py-3 font-semibold text-brand-navy">Scheme / tier</th>
              <th className="px-4 py-3 font-semibold text-brand-navy">Benchmark</th>
              <th className="px-4 py-3 font-semibold text-brand-navy">Horizon</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-brand-navy/5 last:border-0">
                <td className="px-4 py-3 font-medium text-brand-navy">{row.label}</td>
                <td className="px-4 py-3 text-brand-teal">{row.metric}</td>
                <td className="px-4 py-3 text-brand-muted">{row.horizon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PillarCard({ pillar }: { pillar: ServiceBlueprintPillar }) {
  const Icon = pillar.icon;
  const tone = pillar.badgeTone;

  return (
    <motion.section
      id={pillar.id}
      className={cn(
        "scroll-mt-28 rounded-[1.75rem] border bg-gradient-to-br to-white p-6 shadow-[0_20px_50px_-28px_rgba(10,22,40,0.12)] sm:p-8",
        CARD_ACCENTS[tone],
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-white">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-muted">
              Pillar {pillar.order}
            </p>
            <h3 className="font-poppins text-2xl font-bold text-brand-navy sm:text-[1.65rem]">
              {pillar.title}
            </h3>
          </div>
        </div>
        <span
          className={cn(
            "inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ring-1",
            BADGE_TONES[tone],
          )}
        >
          {pillar.badge}
        </span>
      </div>

      <p className="mt-5 text-base leading-relaxed text-brand-muted">{pillar.context}</p>

      <p className="mt-4 rounded-xl bg-brand-cream/80 px-4 py-3 text-sm leading-relaxed text-brand-navy/90 ring-1 ring-brand-navy/5">
        <span className="font-semibold text-brand-navy">Who it serves: </span>
        {pillar.audience}
      </p>

      <ul className="mt-5 space-y-2.5">
        {pillar.mechanisms.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-brand-navy/90">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
            {item}
          </li>
        ))}
      </ul>

      {pillar.tableRows && pillar.tableTitle ? (
        <SchemeTable title={pillar.tableTitle} rows={pillar.tableRows} />
      ) : null}

      {pillar.additionalNotes?.map((note) => (
        <p key={note} className="mt-4 text-sm leading-relaxed text-brand-muted">
          {note}
        </p>
      ))}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {pillar.ctas.map((cta) => (
          <CtaButton
            key={cta.label}
            cta={cta}
            whatsappHref={CONTACT.whatsappHref}
            accent={tone}
          />
        ))}
      </div>
    </motion.section>
  );
}

export function ServicesBlueprintSection({ content }: { content: SiteContent }) {
  return (
    <div className="border-t border-brand-navy/8 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">
            {SERVICES_BLUEPRINT_INTRO.eyebrow}
          </p>
          <h2 className="font-poppins text-3xl font-bold text-brand-navy sm:text-4xl md:text-[2.75rem]">
            {SERVICES_BLUEPRINT_INTRO.title}{" "}
            <span className="text-brand-teal">{SERVICES_BLUEPRINT_INTRO.titleAccent}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            {SERVICES_BLUEPRINT_INTRO.subtitle}
          </p>
        </motion.header>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {SERVICES_BLUEPRINT_INTRO.architecture.map((item, index) => (
            <motion.div
              key={item.label}
              className="rounded-2xl border border-brand-navy/8 bg-white px-5 py-4 text-center shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <p className="text-sm font-bold text-brand-navy">{item.label}</p>
              <p className="mt-1 text-xs text-brand-muted">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 space-y-10 md:space-y-14">
          {SERVICE_BLUEPRINT_PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}

          <motion.section
            id={WEALTH_PLANNING_BRIDGE.id}
            className={cn(
              "scroll-mt-28 rounded-[1.75rem] border bg-gradient-to-br p-6 sm:p-8",
              CARD_ACCENTS.planning,
            )}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ring-1",
                BADGE_TONES.planning,
              )}
            >
              {WEALTH_PLANNING_BRIDGE.badge}
            </span>
            <h3 className="mt-4 font-poppins text-2xl font-bold text-brand-navy sm:text-3xl">
              {WEALTH_PLANNING_BRIDGE.title}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-muted">
              {WEALTH_PLANNING_BRIDGE.summary}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {WEALTH_PLANNING_BRIDGE.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-white/80 px-4 py-3 text-sm leading-relaxed text-brand-navy ring-1 ring-brand-navy/8"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {WEALTH_PLANNING_BRIDGE.ctas.map((cta) => (
                <CtaButton
                  key={cta.label}
                  cta={cta}
                  whatsappHref={content.contact.whatsappHref}
                  accent="planning"
                />
              ))}
            </div>
          </motion.section>
        </div>

        <p className="mt-12 text-center text-xs leading-relaxed text-brand-muted">
          {BLUEPRINT_DISCLAIMER}{" "}
          <a
            href={SOCIAL.tataAiaPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-teal underline-offset-2 hover:underline"
          >
            Tata AIA partner portal
          </a>
          .
        </p>
      </div>
    </div>
  );
}
