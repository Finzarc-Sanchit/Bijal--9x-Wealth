import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
import { COVERAGE_LINKS, FAMILY_LINKS, RESOURCE_LINKS } from "@/lib/constants";

export const FAMILIES_LISTED_PROMOTERS_METADATA = {
  title: "Insurance for Listed Promoters — Pledge Cover, SEBI, MWPA on Holdings · 9xWealth",
  description:
    "For promoters of listed entities, every protection decision sits inside a regulatory framework — SEBI, the lender consortium, the analyst community, the family trust.",
  keywords: [
    "listed promoter insurance",
    "pledge cover insurance India",
    "SEBI promoter insurance",
    "MWPA promoter holdings",
    "keyman listed company",
  ],
} as const;

export const FAMILIES_LISTED_PROMOTERS_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Financial markets evoking listed promoter stewardship",
  },
  pillImage: {
    src: "/images/practice-areas/keyman-enterprise.jpg",
    alt: "Insurance for listed promoters — pledge cover, SEBI, MWPA",
  },
  leadWord: "When the equity is ",
  headlineLines: ["public, but the", "risk is personal."] as const,
  epigraph:
    "For promoters of listed entities, every protection decision sits inside a regulatory framework — SEBI, the lender consortium, the analyst community, the family trust. The architecture has to satisfy each one.",
} as const;

export const FAMILIES_LISTED_PROMOTERS_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const FAMILIES_LISTED_PROMOTERS_CONVICTION = {
  badge: "The thesis",
  headline: "Cover sized to the\nscrutiny.",
  paragraphs: [
    "A listed promoter is not just a business owner with a larger company. They sit inside a framework of SEBI disclosure, lender pledge arrangements, analyst expectations, and family-trust governance — each of which constrains, and sometimes mandates, particular forms of protection.",
    "Pledged promoter shares are the most under-protected asset class in Indian private wealth. A founder's sudden absence triggers margin calls, forced disposals at distressed prices, and a cascade through the holding structure that the family never recovers from. Pledge cover, properly sized, neutralises that risk in days rather than years.",
    "Beyond pledge cover, listed promoters need MWPA-protected term, D&O and investigations cover, trust-owned succession structures, and keyman cover held by the listed entity itself — disclosed in the financials, calming the analyst community and the lender consortium on every event.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const FAMILIES_LISTED_PROMOTERS_PRIORITIES = {
  badge: "Six priorities",
  headline: "The architecture that survives public scrutiny.",
  items: [
    {
      id: "01",
      title: "Pledge-cover architecture",
      description:
        "For pledged promoter shares, life cover sized to the outstanding loan with a structured beneficiary path to the lender. Releases the pledge on event, returns the equity to the family.",
    },
    {
      id: "02",
      title: "MWPA on promoter holdings",
      description:
        "Term cover assigned under MWPA, sized to the value of the promoter holding, ring-fences the corpus from any future SEBI, regulatory, or creditor proceedings against the promoter estate.",
    },
    {
      id: "03",
      title: "Insider considerations",
      description:
        "Trading-window restrictions and SEBI disclosure obligations apply to certain insurance assignments and beneficiary structures. We work alongside your company secretary to keep every step compliant.",
    },
    {
      id: "04",
      title: "Continuity cover for the listed entity",
      description:
        "Keyman cover on the promoter held by the listed company, with proceeds disclosed in the financial statements. Calms the analyst community and the lender consortium in any sudden-event scenario.",
    },
    {
      id: "05",
      title: "D&O alongside personal cover",
      description:
        "Directors' and officers' liability cover layered alongside personal protection, including investigations cover for SEBI, ED, and tax matters. Co-broked through specialist coverholder partners.",
    },
    {
      id: "06",
      title: "Trust-owned cover for succession",
      description:
        "For multi-generation promoter holdings, a private trust ownership of life cover decouples the policy from individual estate proceedings — and aligns the corpus with the long-term succession plan.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const FAMILIES_LISTED_PROMOTERS_COVERAGE = {
  badge: "Coverage architecture",
  headline: "The disciplines most relevant to listed promoters.",
  items: [
    {
      title: COVERAGE_LINKS.keyman.title,
      description:
        "Buy-sell agreements, partner protection, and family-business continuity cover.",
      href: COVERAGE_LINKS.keyman.href,
    },
    {
      title: COVERAGE_LINKS.termLegacy.title,
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: COVERAGE_LINKS.termLegacy.href,
    },
    {
      title: COVERAGE_LINKS.global.title,
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
      href: COVERAGE_LINKS.global.href,
    },
    {
      title: COVERAGE_LINKS.specie.title,
      description: "Art, jewellery, classic cars, marine, aviation, and K&R architecture.",
      href: COVERAGE_LINKS.specie.href,
    },
    {
      title: FAMILY_LINKS.businessOwners.title,
      description: "Keyman, buy-sell, and family-business continuity cover.",
      href: FAMILY_LINKS.businessOwners.href,
    },
    {
      title: RESOURCE_LINKS.mwpaGuide.title,
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: RESOURCE_LINKS.mwpaGuide.href,
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
