import { Reveal } from "@/components/animations/reveal";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { CONTACT_DETAILS } from "../_data/content";

const detailLinkClass =
  "font-inter text-base text-brand-navy transition-colors hover:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30 focus-visible:rounded-sm";

export function ContactDetails({ className }: { className?: string }) {
  const fullAddress = [
    CONTACT.address.line1,
    `${CONTACT.address.city}, ${CONTACT.address.state} ${CONTACT.address.postalCode}`,
    CONTACT.address.country,
  ].join(", ");

  return (
    <aside className={cn("space-y-8", className)} aria-label="Contact information">
      <Reveal>
        <div>
          <p className="label">{CONTACT_DETAILS.badge}</p>
          <h2 className="mt-4 font-display text-3xl font-light text-brand-navy md:text-4xl">
            {CONTACT_DETAILS.headline}
          </h2>
          <p className="mt-4 font-inter text-base leading-relaxed text-brand-navy/70">
            {CONTACT_DETAILS.description}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="space-y-5 rounded-2xl border border-brand-navy/10 bg-white/70 p-6 shadow-sm ring-1 ring-brand-navy/5 backdrop-blur-sm">
          <li className="flex gap-4">
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal"
              aria-hidden
            >
              <Phone className="size-5" />
            </span>
            <div>
              <p className="font-inter text-sm font-medium text-brand-navy/60">
                {CONTACT_DETAILS.labels.phone}
              </p>
              <a href={CONTACT.phoneHref} className={cn(detailLinkClass, "mt-1 inline-block")}>
                {CONTACT.phone}
              </a>
            </div>
          </li>

          <li className="flex gap-4">
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal"
              aria-hidden
            >
              <Mail className="size-5" />
            </span>
            <div>
              <p className="font-inter text-sm font-medium text-brand-navy/60">
                {CONTACT_DETAILS.labels.email}
              </p>
              <a href={`mailto:${CONTACT.email}`} className={cn(detailLinkClass, "mt-1 inline-block")}>
                {CONTACT.email}
              </a>
            </div>
          </li>

          <li className="flex gap-4">
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal"
              aria-hidden
            >
              <MapPin className="size-5" />
            </span>
            <div>
              <p className="font-inter text-sm font-medium text-brand-navy/60">
                {CONTACT_DETAILS.labels.address}
              </p>
              <p className="mt-1 font-inter text-base leading-relaxed text-brand-navy">
                {fullAddress}
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal"
              aria-hidden
            >
              <Clock className="size-5" />
            </span>
            <div>
              <p className="font-inter text-sm font-medium text-brand-navy/60">
                {CONTACT_DETAILS.labels.hours}
              </p>
              <p className="mt-1 font-inter text-base text-brand-navy">
                {CONTACT_DETAILS.hours}
              </p>
            </div>
          </li>
        </ul>
      </Reveal>

      <Reveal delay={0.12}>
        <div>
          <p className="font-inter text-sm font-medium uppercase tracking-widest text-brand-navy/50">
            {CONTACT_DETAILS.officeHeading}
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {CONTACT_DETAILS.offices.map((office) => (
              <li key={office.href}>
                <Link
                  href={office.href}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-brand-navy/15 bg-white/80 px-4 font-inter text-sm font-medium text-brand-navy transition hover:border-brand-teal/40 hover:text-brand-teal"
                >
                  {office.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </aside>
  );
}
