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

/** Editorial hero nav — Coverage, Families, Resources, House, Contact */
export const EDITORIAL_NAV_MENUS = [
  {
    label: "Coverage",
    items: [
      { label: "Pure Risk Cover", href: "/services#pure-risk" },
      { label: "Term & Health Plans", href: "/services#pure-risk" },
      { label: "Risk Calculator", href: "/risk-calculator" },
    ],
  },
  {
    label: "Families",
    items: [
      { label: "Family Protection", href: "/services#pure-risk" },
      { label: "Senior-Friendly Plans", href: "/services#pure-risk" },
      { label: "Financial Health Check", href: "/#financial-health-check" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Goal Planning", href: "/#goal-planning" },
      { label: "All Services", href: "/services" },
      { label: "Tata AIA Portal", href: SOCIAL.tataAiaPortal },
    ],
  },
  {
    label: "House",
    items: [
      { label: "About Bijal Pathak", href: "/about" },
      { label: "Home", href: "/#hero" },
      { label: "Contact", href: "/#contact" },
    ],
  },
] as const;

export const EDITORIAL_NAV_CTA = {
  portalLabel: "Client Portal",
  portalHref: SOCIAL.tataAiaPortal,
  scheduleLabel: "Schedule a Conversation",
  scheduleHref: "/#consultation-form",
} as const;

/** Legacy routes — for future multi-page expansion */
export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Calculators", href: "/calculators" },
  { label: "Contact", href: "/contact" },
] as const;

export const DISCLAIMER =
  "9X Wealth Financial Services is an authorized partner of Tata AIA Life Insurance Company Limited. Insurance products are subject to terms and conditions. Mutual fund investments are subject to market risks. Tax benefits are as per applicable tax laws.";
