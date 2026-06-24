"use client";

import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type FooterColumnLink = {
  text: string;
  href: string;
  external?: boolean;
  hasIndicator?: boolean;
};

export type FooterColumnSocialLink = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

export type FooterColumnProps = {
  company: {
    name: string;
    description: string;
    logo: string;
    logoAlt: string;
  };
  socialLinks: readonly FooterColumnSocialLink[];
  aboutLinks: readonly FooterColumnLink[];
  familyLinks: readonly FooterColumnLink[];
  serviceLinks: readonly FooterColumnLink[];
  helpfulLinks: readonly FooterColumnLink[];
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    address: string;
  };
  copyrightName: string;
  className?: string;
  newsletter?: React.ReactNode;
};

function FooterNavLink({ text, href, external, hasIndicator }: FooterColumnLink) {
  const linkClass = cn(
    "inline-flex min-h-[44px] items-center font-inter text-sm text-white/70 transition-colors duration-200 hover:text-brand-gold",
    hasIndicator && "group gap-1.5 justify-center sm:justify-start",
  );

  const content = (
    <>
      <span>{text}</span>
      {hasIndicator ? (
        <span className="relative flex size-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-brand-teal" />
        </span>
      ) : null}
    </>
  );

  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {content}
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={linkClass}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {content}
    </Link>
  );
}

function FooterColumnHeading({ children }: { children: React.ReactNode; }) {
  return (
    <p className="font-poppins text-base font-semibold tracking-tight text-white md:text-lg">
      {children}
    </p>
  );
}

export function FooterColumn({
  company,
  socialLinks,
  aboutLinks,
  familyLinks,
  serviceLinks,
  helpfulLinks,
  contact,
  copyrightName,
  className,
  newsletter,
}: FooterColumnProps) {
  const contactInfo = [
    {
      icon: Mail,
      text: contact.email,
      href: `mailto:${contact.email}`,
      isAddress: false,
      nowrap: false,
    },
    {
      icon: Phone,
      text: contact.phone,
      href: contact.phoneHref,
      isAddress: false,
      nowrap: true,
    },
    {
      icon: MapPin,
      text: contact.address,
      href: "/contact",
      isAddress: true,
      nowrap: false,
    },
  ] as const;

  return (
    <div className={cn("w-full", className)}>
      <div className="relative z-10 w-full px-4 pt-14 pb-8 sm:px-6 md:px-12 md:pt-16 lg:px-16 lg:pt-20 xl:px-24">
        {newsletter}

        {/* Tightened the outer layout column gaps from gap-12 to gap-8 and split the spacing allocations cleanly */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="text-center sm:text-left lg:col-span-3 xl:col-span-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center sm:justify-start"
              aria-label={`${company.name} — Home`}
            >
              <span className="inline-flex rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-white/10">
                <Image
                  src={company.logo}
                  alt={company.logoAlt}
                  width={200}
                  height={56}
                  className="h-9 w-auto object-contain sm:h-10"
                />
              </span>
            </Link>

            <p className="mx-auto mt-5 max-w-lg font-inter text-sm leading-relaxed text-white/65 sm:mx-0 md:text-base xl:max-w-md">
              {company.description}
            </p>

            {socialLinks.length > 0 ? (
              <ul className="mt-8 flex justify-center gap-3 sm:justify-start md:gap-4">
                {socialLinks.map(({ icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-brand-gold transition-colors duration-200 hover:bg-white/10 hover:text-brand-gold-light"
                    >
                      <span className="size-5 md:size-6" aria-hidden>
                        {icon}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Adjusted column metrics to lg:grid-cols-5 and reduced tracking gaps down to gap-6/gap-8 to distribute your 5 columns uniformly without huge spaces */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:col-span-9 xl:col-span-8 gap-y-8 lg:gap-x-6 xl:gap-x-8">
            <div className="text-center sm:text-left">
              <FooterColumnHeading>About Us</FooterColumnHeading>
              <ul className="mt-6 space-y-1 md:mt-8">
                {aboutLinks.map((link) => (
                  <li key={link.text}>
                    <FooterNavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <FooterColumnHeading>Our Services</FooterColumnHeading>
              <ul className="mt-6 space-y-1 md:mt-8">
                {serviceLinks.map((link) => (
                  <li key={link.text}>
                    <FooterNavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <FooterColumnHeading>Our Families</FooterColumnHeading>
              <ul className="mt-6 space-y-1 md:mt-8">
                {familyLinks.map((link) => (
                  <li key={link.text}>
                    <FooterNavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <FooterColumnHeading>Helpful Links</FooterColumnHeading>
              <ul className="mt-6 space-y-1 md:mt-8">
                {helpfulLinks.map((link) => (
                  <li key={link.text}>
                    <FooterNavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <FooterColumnHeading>Contact Us</FooterColumnHeading>
              <ul className="mt-6 space-y-2 md:mt-8">
                {contactInfo.map(({ icon: Icon, text, href, isAddress, nowrap }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 sm:justify-start"
                    >
                      <Icon
                        className="size-5 shrink-0 text-brand-gold"
                        aria-hidden
                      />
                      {isAddress ? (
                        <address className="font-inter text-left text-sm not-italic text-white/70 transition-colors duration-200 hover:text-brand-gold md:text-base">
                          {text}
                        </address>
                      ) : (
                        <span
                          className={cn(
                            "font-inter text-sm text-white/70 transition-colors duration-200 hover:text-brand-gold md:text-base",
                            nowrap && "whitespace-nowrap",
                          )}
                        >
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 md:mt-14">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-inter text-sm text-white/55">
              &copy; {new Date().getFullYear()} {copyrightName}
            </p>
            <p className="font-inter text-sm text-white/55">All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}