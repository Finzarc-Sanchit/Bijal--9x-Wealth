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

/** Editorial hero nav — mirrors live site dropdown structure */
export const EDITORIAL_NAV_MENUS = [
  {
    label: "Coverage",
    items: [
      { label: "Term & Legacy Cover", href: "/services/term-legacy" },
      { label: "Private Health Coverage", href: "/services/health" },
      { label: "Keyman & Enterprise", href: "/services/keyman" },
      { label: "Wealth & ULIPs", href: "/services/wealth-ulips" },
      { label: "Global Solutions", href: "/services/global" },
      { label: "Specie & High-Value", href: "/services/specie" },
    ],
  },
  {
    label: "Families",
    items: [
      { label: "UHNI Families", href: "/families/uhni" },
      { label: "NRI & Global Indian Households", href: "/families/nri" },
      { label: "Business Owners", href: "/families/business-owners" },
      { label: "Listed Promoters", href: "/families/listed-promoters" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Frequently Asked", href: "/resources/faq" },
      { label: "MWPA: A Complete Guide", href: "/resources/mwpa-guide" },
      { label: "Calculators", href: "/resources/calculators" },
    ],
  },
  {
    label: "House",
    items: [
      { label: "Our Story", href: "/about" },
      { label: "The Practice", href: "/about/practice" },
      { label: "Team", href: "/about/team" },
      { label: "Press & Recognition", href: "/about/press" },
      // { label: "The Folio", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const EDITORIAL_NAV_CTA = {
  portalLabel: "Client Portal",
  portalHref: "/portal",
  scheduleLabel: "Schedule a Conversation",
  scheduleHref: "/contact",
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

type SeoLink = { href: string; title: string; };

export const SERVICE_LINKS = {
  pureRisk: { href: "/services#pure-risk", title: "Risk Protection" },
  guaranteedIncome: { href: "/services#guaranteed-income", title: "Guaranteed Income" },
  marketCompounding: { href: "/services#market-compounding", title: "Market Compounding" },
  wealthPlanning: { href: "/services#wealth-planning", title: "Wealth Planning" },
} as const satisfies Record<string, SeoLink>;

export const COVERAGE_LINKS = {
  termLegacy: { href: "/services/term-legacy", title: "Term & Legacy Cover" },
  health: { href: "/services/health", title: "Private Health Coverage" },
  keyman: { href: "/services/keyman", title: "Keyman & Enterprise" },
  wealthUlips: { href: "/services/wealth-ulips", title: "Wealth & ULIPs" },
  global: { href: "/services/global", title: "Global Solutions" },
  specie: { href: "/services/specie", title: "Specie & High-Value" },
} as const satisfies Record<string, SeoLink>;

export const FAMILY_LINKS = {
  uhni: { href: "/families/uhni", title: "UHNI Families" },
  nri: { href: "/families/nri", title: "NRI & Global Indian Households" },
  businessOwners: { href: "/families/business-owners", title: "Business Owners" },
  listedPromoters: { href: "/families/listed-promoters", title: "Listed Promoters" },
} as const satisfies Record<string, SeoLink>;

export const RESOURCE_LINKS = {
  glossary: { href: "/resources/glossary", title: "Glossary" },
  faq: { href: "/resources/faq", title: "Frequently Asked" },
  mwpaGuide: { href: "/resources/mwpa-guide", title: "MWPA: A Complete Guide" },
  calculators: { href: "/resources/calculators", title: "Calculators" },
} as const satisfies Record<string, SeoLink>;

export const HOUSE_LINKS = {
  ourStory: { href: "/about", title: "Our Story" },
  practice: { href: "/about/practice", title: "The Practice" },
  team: { href: "/about/team", title: "Team" },
  press: { href: "/about/press", title: "Press & Recognition" },
  // folio: { href: "/insights", title: "The Folio" },
  careers: { href: "/careers", title: "Careers" },
} as const satisfies Record<string, SeoLink>;

export const OFFICE_LINKS = {
  mumbai: { href: "/offices/mumbai", title: "Mumbai" },
  bengaluru: { href: "/offices/bengaluru", title: "Bengaluru" },
  delhi: { href: "/offices/delhi", title: "New Delhi" },
} as const satisfies Record<string, SeoLink>;

export type NavItem =
  | { kind: "link"; href: string; label: string; }
  | {
    kind: "menu";
    label: string;
    hub: { href: string; label: string; };
    groups: { heading: string; items: { href: string; label: string; }[]; }[];
  };

export const NAV: NavItem[] = [
  {
    kind: "menu",
    label: "Coverage",
    hub: { href: "/services", label: "All practices" },
    groups: [
      {
        heading: "Practice areas",
        items: Object.values(COVERAGE_LINKS).map((link) => ({
          href: link.href,
          label: link.title,
        })),
      },
    ],
  },
  {
    kind: "menu",
    label: "Families",
    hub: { href: "/families", label: "All families" },
    groups: [
      {
        heading: "Who we serve",
        items: Object.values(FAMILY_LINKS).map((l) => ({ href: l.href, label: l.title })),
      },
    ],
  },
  {
    kind: "menu",
    label: "Resources",
    hub: { href: "/resources", label: "All resources" },
    groups: [
      {
        heading: "For clients",
        items: Object.values(RESOURCE_LINKS).map((l) => ({ href: l.href, label: l.title })),
      },
    ],
  },
  {
    kind: "menu",
    label: "House",
    hub: { href: "/about", label: "About us" },
    groups: [
      {
        heading: "About 9xWealth",
        items: [
          HOUSE_LINKS.ourStory,
          HOUSE_LINKS.practice,
          HOUSE_LINKS.team,
          HOUSE_LINKS.press,
        ].map((l) => ({ href: l.href, label: l.title })),
      },
      {
        heading: "Other",
        items: [
          // { href: HOUSE_LINKS.folio.href, label: HOUSE_LINKS.folio.title },
          { href: HOUSE_LINKS.careers.href, label: HOUSE_LINKS.careers.title },
          ...Object.values(OFFICE_LINKS).map((l) => ({ href: l.href, label: l.title })),
        ],
      },
    ],
  },
  { kind: "link", href: "/contact", label: "Contact" },
];
