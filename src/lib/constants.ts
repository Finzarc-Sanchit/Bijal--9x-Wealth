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
      { label: "Term & Legacy Cover", href: "/services/term-legacy" },
      { label: "Private Health Coverae", href: "/services/health" },
      { label: "Keyman & Enterprise", href: "/services/keyman" },
      { label: "Wealth & ULIPs", href: "/services/wealth-ulips" },
      { label: "Global Solutions", href: "/services/global-solutions" },
      { label: "Specie & High-Value", href: "/services/specie-high-value" },
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

type SeoLink = { href: string; title: string; };

export const SERVICE_LINKS = {
  pureRisk: { href: "/services#pure-risk", title: "Risk Protection" },
  guaranteedIncome: { href: "/services#guaranteed-income", title: "Guaranteed Income" },
  marketCompounding: { href: "/services#market-compounding", title: "Market Compounding" },
  wealthPlanning: { href: "/services#wealth-planning", title: "Wealth Planning" },
} as const satisfies Record<string, SeoLink>;

export const FAMILY_LINKS = {
  families: { href: "/families", title: "Families" },
  seniors: { href: "/families/seniors", title: "Senior Citizens" },
  women: { href: "/families/women", title: "Women & Protection" },
  professionals: { href: "/families/professionals", title: "Professionals & HNIs" },
} as const satisfies Record<string, SeoLink>;

export const RESOURCE_LINKS = {
  healthCheck: { href: "/#financial-health-check", title: "Financial Health Check" },
  goalPlanning: { href: "/#goal-planning", title: "Goal Planning" },
  riskCalculator: { href: "/risk-calculator", title: "Risk Calculator" },
  compare: { href: "/compare", title: "Compare Plans" },
  tataAiaPortal: { href: SOCIAL.tataAiaPortal, title: "Tata AIA Client Portal" },
} as const satisfies Record<string, SeoLink>;

export const OFFICE_LINKS = {
  borivali: { href: "/#contact", title: "Borivali Office" },
  consultation: { href: "/#consultation-form", title: "Book a Consultation" },
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
        items: Object.values(SERVICE_LINKS).map((l) => ({ href: l.href, label: l.title })),
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
    hub: { href: "/about", label: "Our story" },
    groups: [
      {
        heading: "About 9xWealth",
        items: [
          { href: "/about", label: "Our story" },
          { href: "/about/practice", label: "The Practice" },
          { href: "/about/team", label: "Team" },
          { href: "/about/press", label: "Press & Recognition" },
        ],
      },
      {
        heading: "Other",
        items: [
          { href: "/insights", label: "Insights" },
          { href: "/careers", label: "Careers" },
          ...Object.values(OFFICE_LINKS).map((l) => ({ href: l.href, label: l.title })),
        ],
      },
    ],
  },
  { kind: "link", href: "/contact", label: "Contact" },
];
