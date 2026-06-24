import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export type OfficePracticeContact = {
  address: readonly string[];
  phone: string;
  phoneHref?: string;
  email: string;
  hours: readonly string[];
  mapHref?: string;
};

export type OfficePracticeLead = {
  badge?: string;
  name: string;
  role: string;
};

export type OfficePracticeCta = {
  label: string;
  href: string;
};

export type OfficePracticeSectionProps = {
  id?: string;
  badge: string;
  paragraphs: readonly string[];
  officeLead: OfficePracticeLead;
  contact: OfficePracticeContact;
  primaryCta?: OfficePracticeCta;
  mapCta?: OfficePracticeCta;
  className?: string;
};

const detailLinkClass =
  "font-inter text-base text-brand-navy transition-colors hover:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30 focus-visible:rounded-sm";

function EditorialMetadataField({
  icon: Icon,
  label,
  children,
  className,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-3">
        <Icon className="size-4 shrink-0 text-brand-muted" aria-hidden />
        <p className="label">{label}</p>
      </div>
      <div className="space-y-0.5 pl-7 font-inter text-base leading-relaxed text-brand-navy">
        {children}
      </div>
    </div>
  );
}

function PracticeCta({
  label,
  href,
  variant,
}: OfficePracticeCta & { variant: "primary" | "secondary" }) {
  const isExternal = href.startsWith("http");

  if (variant === "primary") {
    const className =
      "group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 font-inter text-sm font-semibold text-brand-navy shadow-[0_8px_28px_rgba(201,162,39,0.28)] transition-all duration-300 hover:bg-brand-gold-light sm:w-auto";

    const inner = (
      <>
        {label}
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </>
    );

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  const className =
    "inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-brand-navy/15 bg-white px-6 py-2.5 font-inter text-sm font-medium text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal sm:w-auto";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function OfficePracticeSection({
  id = "office-practice",
  badge,
  paragraphs,
  officeLead,
  contact,
  primaryCta = { label: "Schedule a Conversation", href: "/contact" },
  mapCta,
  className,
}: OfficePracticeSectionProps) {
  const resolvedMapCta =
    mapCta ??
    (contact.mapHref
      ? { label: "View on map", href: contact.mapHref }
      : undefined);
  const phoneHref = contact.phoneHref ?? `tel:${contact.phone.replace(/\s/g, "")}`;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-badge`}
      className={cn("w-full px-4 py-24 md:px-12 lg:px-16 lg:py-32", className)}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        <div className="lg:col-span-7">
          <Reveal>
            <p id={`${id}-badge`} className="label">
              {badge}
            </p>
          </Reveal>

          <div className="mt-10 space-y-6 lg:mt-12">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={`${id}-paragraph-${index}`} delay={0.06 + index * 0.05}>
                <p className="max-w-2xl font-inter text-base leading-relaxed text-brand-navy/90 md:text-[1.05rem] md:leading-[1.7]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 max-w-md border-l border-brand-gold pl-6 lg:mt-24 lg:pl-8">
              {officeLead.badge ? <p className="label">{officeLead.badge}</p> : null}
              <h2
                className={cn(
                  "font-display text-2xl font-medium tracking-tight text-brand-navy md:text-[1.75rem] md:leading-tight",
                  officeLead.badge ? "mt-4" : "mt-0",
                )}
              >
                {officeLead.name}
              </h2>
              <p className="mt-3 font-inter text-sm leading-relaxed text-brand-muted">
                {officeLead.role}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="h-full w-full lg:col-span-5 lg:sticky lg:top-36">
          <aside aria-label="Office contact information">
            <p className="label">Information</p>

            <div className="mt-8 space-y-8">
              <EditorialMetadataField icon={MapPin} label="Address">
                {contact.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </EditorialMetadataField>

              <EditorialMetadataField
                icon={Phone}
                label="Phone"
                className="border-t border-brand-navy/10 pt-6"
              >
                <a href={phoneHref} className={detailLinkClass}>
                  {contact.phone}
                </a>
              </EditorialMetadataField>

              <EditorialMetadataField
                icon={Mail}
                label="Email"
                className="border-t border-brand-navy/10 pt-6"
              >
                <a href={`mailto:${contact.email}`} className={detailLinkClass}>
                  {contact.email}
                </a>
              </EditorialMetadataField>

              <EditorialMetadataField
                icon={Clock}
                label="Hours"
                className="border-t border-brand-navy/10 pt-6"
              >
                {contact.hours.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </EditorialMetadataField>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-brand-navy/10 pt-8 sm:flex-row sm:flex-wrap">
              <PracticeCta {...primaryCta} variant="primary" />
              {resolvedMapCta ? (
                <PracticeCta {...resolvedMapCta} variant="secondary" />
              ) : null}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
