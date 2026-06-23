import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const CAREERS_METADATA = {
  title: "Careers — 9xWealth · 9xWealth",
  description:
    "Join the practice. A small, deliberately small house. We hire when the standard the existing team holds to can absorb a new partner.",
  keywords: [
    "9xWealth careers",
    "insurance broker jobs Mumbai",
    "underwriting architect",
    "claims advocate",
  ],
} as const;

export const CAREERS_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Professional team collaboration",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "Careers at 9xWealth",
  },
  leadWord: "",
  headlineLines: ["Join the", "practice."] as const,
  epigraph:
    "A small, deliberately small house. We hire when the standard the existing team holds to can absorb a new partner — not when a quarterly target says we should.",
} as const;

export const CAREERS_CTAS = [
  {
    label: "Apply via Contact",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const CAREERS_CONVICTION = {
  badge: "What we look for",
  headline: "The right disposition, then the right\ncredentials.",
  paragraphs: [
    "Every advisor we have hired was, before they joined, someone who preferred to do fewer placements correctly than more placements quickly. That preference is not an ornament; it is the precondition.",
    "The credentials matter — CA, CFP, IRDAI certification, specialist qualifications in marine, art, or aviation as relevant to the desk. But the disposition matters more, and is harder to develop after the fact.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const CAREERS_VALUES = {
  badge: "What we hold to",
  headline: "Four values, applied without exception.",
  items: [
    {
      id: "01",
      title: "The standard before the work",
      description:
        "We set the standard for each mandate first, then proceed at whatever rate the standard allows. We do not optimise for volume; we do not chase quarterly placements.",
    },
    {
      id: "02",
      title: "Architecture, not product",
      description:
        "Every advisor is trained to begin with the family situation — the structure of wealth, the location of successors, the jurisdictions in play — and let the architecture follow.",
    },
    {
      id: "03",
      title: "Independence, in practice",
      description:
        "We are not a tied agent of any insurer. The choice of carrier and product is ours, on every mandate, regardless of commission gradient.",
    },
    {
      id: "04",
      title: "Multi-decade relationships",
      description:
        "The relationship director who opens the file is the one your grandchildren will inherit. We hire and develop with that horizon in mind.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const CAREERS_ROLES = {
  badge: "Open roles",
  headline: "Roles we are actively recruiting for.",
  items: [
    {
      id: "MUMBAI",
      title: "Senior Underwriting Architect",
      description:
        "Five-plus years in life or specie underwriting. Modelling, structuring, single-page proposal preparation. Reports to the founding partner.",
    },
    {
      id: "BENGALURU",
      title: "Relationship Associate, South India",
      description:
        "Three-plus years in private banking, wealth management, or financial planning. CFP preferred, IRDAI certification mandatory before mandate ownership.",
    },
    {
      id: "DELHI-NCR",
      title: "Specie Desk Analyst",
      description:
        "Background in fine art, jewellery valuation, classic cars, or marine. We will train the insurance side; the asset literacy must be there.",
    },
    {
      id: "MUMBAI",
      title: "Claims Advocate",
      description:
        "Five-plus years in health or life claim handling — TPA, insurer, or hospital-side. We do not need administrators; we need advocates.",
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const CAREERS_APPLY = {
  badge: "How to apply",
  headline: "The process.",
  paragraphs: [
    "Write to practice@9xwealth.in with the subject line of the role and a one-page note describing why the practice interests you. Include a CV. We do not require a cover letter beyond the one-page note.",
    "We respond to every serious application within one business week. Initial conversations are conducted by a partner, not a recruiter. Final-round interviews include a working session with the desk you would join.",
  ],
} as const;

export const CAREERS_RELATED = {
  badge: "Continue",
  headline: "Read more about the house.",
  items: [
    {
      title: "Our Story",
      description: "Founded in MMXIII Mumbai. The conviction that became 9xWealth.",
      href: "/about",
    },
    {
      title: "The Practice",
      description: "A four-act engagement — conversation, architecture, activation, stewardship.",
      href: "/about/practice",
    },
    {
      title: "Team",
      description: "Principals and advisors across Mumbai, Bengaluru, and Delhi.",
      href: "/about/team",
    },
    {
      title: "Press & Recognition",
      description: "Press mentions, awards, and regulatory standing.",
      href: "/about/press",
    },
    {
      title: "Insights",
      description: "Quarterly letters and considered essays on protection, estate, and stewardship.",
      href: "/insights",
    },
    {
      title: "Contact",
      description: "Begin a confidential conversation with a senior partner.",
      href: "/contact",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
