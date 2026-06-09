"use client";

import type { SiteContent } from "@/lib/content/schema";
import { DISCLAIMER, SITE_NAV_LINKS, SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, ExternalLink, Mail, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterInput = z.infer<typeof newsletterSchema>;

const FOOTER_SERVICE_LINKS = [
  { label: "Insurance Planning", href: "/services#insurance" },
  { label: "Investments & SIPs", href: "/services#investments" },
  { label: "Wealth Planning", href: "/services#wealth-planning" },
  { label: "Book Consultation", href: "/#consultation-form" },
] as const;

const TRUST_BADGES = ["Tata AIA Partner", "BNI Arjuna", "Borivali, Mumbai"] as const;

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "group/link inline-flex min-h-[44px] items-center gap-1 text-sm text-white/70 transition-colors duration-200 hover:text-white";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/link:opacity-70" />
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function SocialLinks() {
  const links = [
    { href: SOCIAL.facebook, label: "Facebook" },
    { href: SOCIAL.instagram, label: "Instagram" },
    { href: SOCIAL.linkedin, label: "LinkedIn" },
  ] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/[0.07] px-4 text-xs font-semibold text-white/75 ring-1 ring-white/10 transition hover:bg-brand-gold/15 hover:text-white hover:ring-brand-gold/30"
        >
          {label}
        </a>
      ))}
    </div>
  );
}

function FooterNewsletter() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (_data: NewsletterInput) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-brand-gold/25">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
        <div>
          <p className="text-sm font-semibold text-white">You&apos;re subscribed!</p>
          <p className="mt-1 text-sm text-white/55">
            Thank you. We&apos;ll share practical insurance and wealth planning insights with you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <label htmlFor="footer-newsletter-email" className="sr-only">
        Email for newsletter
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="footer-newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          className={cn(
            "min-h-[48px] flex-1 rounded-xl border-0 bg-white/[0.07] px-4 text-base text-white placeholder:text-white/35 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-brand-gold/45",
            errors.email && "ring-red-400/60",
          )}
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 text-sm font-bold text-brand-navy transition hover:bg-brand-gold-light disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {errors.email && (
        <p className="text-sm text-red-300" role="alert">
          {errors.email.message}
        </p>
      )}
      <p className="text-xs leading-relaxed text-white/40">
        Practical tips on insurance, investments, and goal-based planning. Unsubscribe anytime.
      </p>
    </form>
  );
}

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="relative overflow-hidden border-t border-brand-gold/20 bg-[#0d1829] text-white">
      <div
        className="pointer-events-none absolute -left-[15%] bottom-0 h-[45%] w-[40%] rounded-full bg-brand-teal/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[10%] top-0 h-[40%] w-[35%] rounded-full bg-brand-gold/8 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-14 pb-8 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block" aria-label={`${content.site.name} — Home`}>
              <Image
                src="/images/9x-wealth-logo.png"
                alt="9X Wealth Financial Services"
                width={180}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {content.site.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/55 ring-1 ring-white/10"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <SocialLinks />
            </div>
            <a
              href={SOCIAL.tataAiaPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 text-sm text-brand-teal/90 transition hover:text-brand-teal"
            >
              Tata AIA Partner Portal
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <ul className="space-y-0.5">
              {SITE_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-0.5">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <FooterHeading>Newsletter</FooterHeading>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              Clear, senior-friendly guidance on protecting your family and building wealth — from
              Bijal Pathak and the 9X Wealth team.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-8">
          <p className="text-xs leading-relaxed text-white/40">{content.disclaimer || DISCLAIMER}</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/50">
              <p>
                © {new Date().getFullYear()} {content.site.name}. All rights reserved.
              </p>
              <p className="mt-1 text-xs text-white/40">
                Founded by {content.about.name} · {content.about.title.split("·")[0]?.trim()}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={content.contact.phoneHref}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/[0.06] px-4 text-xs font-semibold text-white/70 ring-1 ring-white/10 transition hover:bg-brand-gold/15 hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                Call
              </a>
              <a
                href={`mailto:${content.contact.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/[0.06] px-4 text-xs font-semibold text-white/70 ring-1 ring-white/10 transition hover:bg-brand-gold/15 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
              <a
                href="/#contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-gold/90 px-4 text-xs font-bold text-brand-navy transition hover:bg-brand-gold"
              >
                Full contact details
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
