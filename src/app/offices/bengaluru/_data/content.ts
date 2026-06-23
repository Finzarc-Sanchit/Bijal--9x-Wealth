import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { EditorialProseSubsection } from "@/components/sections/EditorialProseSection";

export const BENGALURU_OFFICE_METADATA = {
  title: "Bengaluru Office — South India Practice, UB City · 9xWealth",
  description:
    "The Bengaluru office serves founders, operators, and second-generation family heads across Karnataka, Tamil Nadu, and Telangana.",
  keywords: [
    "9xWealth Bengaluru",
    "insurance broker UB City",
    "South India practice",
  ],
} as const;

export const BENGALURU_OFFICE_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1596176530734-90fcfd96784c?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Bengaluru cityscape",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "9xWealth Bengaluru office",
  },
  leadWord: "Where new wealth ",
  headlineLines: ["meets old", "discipline."] as const,
  epigraph:
    "The Bengaluru office serves a generation of founders, operators, and second-generation family heads — across Karnataka, Tamil Nadu, and Telangana. New money, conventional structures, considered counsel.",
} as const;

export const BENGALURU_OFFICE_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const BENGALURU_OFFICE_CONVICTION = {
  badge: "South India Practice",
  headline: "Founders building enduring companies\nneed considered counsel.",
  paragraphs: [
    "The Bengaluru practice was opened to serve a generation of founders building enduring companies — and discovering that the wealth that came with them needed the same architecture that older Bombay families had relied on for decades.",
    "From UB City we serve startup founders considering keyman cover for the first time, second-generation family operators stepping into formal roles, and UHNI households across the southern states. The practice is led with the same standard as Mumbai, with deep local relationships into the institutions and hospitals of the region.",
    "A meaningful share of our cross-border NRI mandates — particularly Bay Area and Singapore — are coordinated from this office.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const BENGALURU_OFFICE_DETAILS = {
  badge: "Office lead",
  headline: "The South India Partner",
  paragraphs: ["Bengaluru · Practice Lead"],
  subsections: [
    {
      title: "Address",
      paragraphs: ["UB City, Vittal Mallya Road", "Lavelle Nagar", "560001, India"],
    },
    {
      title: "Phone",
      paragraphs: ["+91 80 4567 1200"],
    },
    {
      title: "Email",
      paragraphs: ["practice@9xwealth.in"],
    },
    {
      title: "Hours",
      paragraphs: ["Mon–Fri · 9.30am – 6.30pm", "Sat · 10.00am – 2.00pm"],
    },
  ] as const satisfies readonly EditorialProseSubsection[],
} as const;

export const BENGALURU_OFFICE_COVERAGE = {
  badge: "Coverage from this office",
  headline: "The disciplines led from Bengaluru.",
  items: [
    {
      id: "01",
      title: "Keyman & Enterprise",
      description: "Buy-sell agreements, partner protection, and family-business continuity cover.",
    },
    {
      id: "02",
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
    },
    {
      id: "03",
      title: "Private Health Coverage",
      description:
        "Family floater with international hospitalisation and dedicated claim advocates.",
    },
    {
      id: "04",
      title: "Business Owners",
      description: "Keyman, buy-sell, and family-business continuity cover.",
    },
    {
      id: "05",
      title: "NRI & Global Indian Households",
      description: "Cross-border tax, GIFT City products, currency hedging, FATCA/CRS.",
    },
    {
      id: "06",
      title: "Wealth & ULIPs",
      description:
        "Hand-modelled ULIPs and guaranteed-return plans, evaluated against MF alternatives.",
    },
  ] as const satisfies readonly EditorialCard[],
  links: [
    "/services/keyman",
    "/services/term-legacy",
    "/services/health",
    "/families/business-owners",
    "/families/nri",
    "/services/wealth-ulips",
  ],
} as const;
