import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { EditorialProseSubsection } from "@/components/sections/EditorialProseSection";

export const DELHI_OFFICE_METADATA = {
  title: "New Delhi Office — North India Practice, Gurugram · 9xWealth",
  description:
    "The North India practice serves listed-company promoters, family offices, and multi-generational households across Delhi-NCR and the northern states.",
  keywords: [
    "9xWealth Delhi",
    "insurance broker Gurugram",
    "North India practice",
    "listed promoters cover",
  ],
} as const;

export const DELHI_OFFICE_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1587474260585-136574528ed5?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Delhi NCR skyline",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "9xWealth Delhi-NCR office",
  },
  leadWord: "For the families",
  headlineLines: ["that hold the", "listings."] as const,
  epigraph:
    "The North India practice serves listed-company promoters, family offices, and multi-generational households across Delhi, Gurugram, Punjab, and the northern states. Pledge cover, D&O, succession architecture.",
} as const;

export const DELHI_OFFICE_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const DELHI_OFFICE_CONVICTION = {
  badge: "North India Practice",
  headline: "Listed promoters and family offices\nacross the northern states.",
  paragraphs: [
    "The North India practice was opened to serve a concentration of listed-company promoters and multi-generation family offices that historically relied on private bankers and chartered accountants for insurance counsel — and rarely on dedicated brokerage.",
    "From DLF Cyber Park we serve mandates for promoters of listed entities, family offices in Lutyens' Delhi and Chanakyapuri, and households across the agro and industrial belts of the northern states. The practice carries strong specialist coverage in pledge cover, D&O, and trust-owned succession structures.",
    "The relationship with Lloyd's of London is co-managed from this office, alongside Mumbai, given the concentration of large-sum mandates we place.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const DELHI_OFFICE_DETAILS = {
  badge: "Office lead",
  headline: "The North India Partner",
  paragraphs: ["Delhi-NCR · Practice Lead"],
  subsections: [
    {
      title: "Address",
      paragraphs: [
        "Tower B, DLF Cyber Park",
        "Golf Course Road, Gurugram",
        "122002, India",
      ],
    },
    {
      title: "Phone",
      paragraphs: ["+91 11 4012 8800"],
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

export const DELHI_OFFICE_COVERAGE = {
  badge: "Coverage from this office",
  headline: "The disciplines led from Delhi-NCR.",
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
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
    },
    {
      id: "04",
      title: "Listed Promoters",
      description: "Pledge cover, SEBI considerations, and MWPA on promoter holdings.",
    },
    {
      id: "05",
      title: "Business Owners",
      description: "Keyman, buy-sell, and family-business continuity cover.",
    },
    {
      id: "06",
      title: "Specie & High-Value",
      description: "Art, jewellery, classic cars, marine, aviation, and K&R architecture.",
    },
  ] as const satisfies readonly EditorialCard[],
  links: [
    "/services/keyman",
    "/services/term-legacy",
    "/services/global",
    "/families/listed-promoters",
    "/families/business-owners",
    "/services/specie",
  ],
} as const;
