export const SITE = {
  name: "9X Wealth Financial Services",
  tagline: "Happiness Insured",
  description:
    "Expert wealth management, life insurance, and investment planning in Borivali, Mumbai.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const CONTACT = {
  phone: "+91 93228 87442",
  phoneHref: "tel:+919322887442",
  whatsapp: "919322887442",
  whatsappHref: "https://wa.me/919322887442",
  email: "9xwealth@gmail.com",
  address: {
    line1: "Techno IT Park, Near Eskay Resorts Link Road",
    city: "Borivali",
    state: "Maharashtra",
    postalCode: "400092",
    country: "India",
  },
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/9xWealth/",
  instagram: "https://www.instagram.com/bijalppathak/",
  linkedin: "https://in.linkedin.com/in/bijal-pathak-3b7b672a",
  tataAiaPortal: "https://bijalprashantpathak.tataaiapartner.com",
} as const;

/** Homepage section anchors (single-page nav) */
export const SITE_NAV_LINKS = [
  { label: "Health Check", href: "/#financial-health-check" },
  { label: "Goals", href: "/#goal-planning" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Risk Calculator", href: "/risk-calculator" },
  { label: "Contact", href: "/#contact" },
] as const;

/** Legacy routes — for future multi-page expansion */
export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Calculators", href: "/calculators" },
  { label: "Contact", href: "/contact" },
] as const;

export const DISCLAIMER =
  "9X Wealth Financial Services is an authorized partner of Tata AIA Life Insurance Company Limited. Insurance products are subject to terms and conditions. Mutual fund investments are subject to market risks. Tax benefits are as per applicable tax laws.";
