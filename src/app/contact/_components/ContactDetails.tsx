import { Reveal } from "@/components/animations/reveal";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { CONTACT_DETAILS } from "../_data/content";

const detailLinkClass =
  "font-inter text-base text-brand-navy transition-colors hover:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30 focus-visible:rounded-sm";

const metaLabelClass =
  "mb-2 font-inter text-xs font-semibold uppercase tracking-wider text-brand-navy/60";

export function ContactDetails({ className }: { className?: string }) {
  const fullAddress = [
    CONTACT.address.line1,
    `${CONTACT.address.city}, ${CONTACT.address.state} ${CONTACT.address.postalCode}`,
    CONTACT.address.country,
  ].join(", ");

  return (
    <aside className={cn("space-y-8", className)} aria-label="Contact information">
      <Reveal delay={0.08}>
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3">
              <Phone className="size-4 text-brand-muted" aria-hidden />
              <p className={metaLabelClass}>{CONTACT_DETAILS.labels.phone}</p>
            </div>
            <a href={CONTACT.phoneHref} className={cn(detailLinkClass, "mt-2 inline-block")}>
              {CONTACT.phone}
            </a>
          </div>

          <div className="border-t border-brand-navy/10 pt-6">
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-brand-muted" aria-hidden />
              <p className={metaLabelClass}>{CONTACT_DETAILS.labels.email}</p>
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className={cn(detailLinkClass, "mt-2 inline-block")}
            >
              {CONTACT.email}
            </a>
          </div>

          <div className="border-t border-brand-navy/10 pt-6">
            <div className="flex items-center gap-3">
              <MapPin className="size-4 text-brand-muted" aria-hidden />
              <p className={metaLabelClass}>{CONTACT_DETAILS.labels.address}</p>
            </div>
            <p className="mt-2 font-inter text-base leading-relaxed text-brand-navy">
              {fullAddress}
            </p>
          </div>

          <div className="border-t border-brand-navy/10 pt-6">
            <div className="flex items-center gap-3">
              <Clock className="size-4 text-brand-muted" aria-hidden />
              <p className={metaLabelClass}>{CONTACT_DETAILS.labels.hours}</p>
            </div>
            <p className="mt-2 font-inter text-base leading-relaxed text-brand-navy">
              {CONTACT_DETAILS.hours}
            </p>
          </div>
        </div>
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
                  className="inline-flex min-h-[44px] items-center rounded-full border border-brand-navy/15 bg-transparent px-4 font-inter text-sm font-medium text-brand-navy transition hover:border-brand-teal/40 hover:text-brand-teal"
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
