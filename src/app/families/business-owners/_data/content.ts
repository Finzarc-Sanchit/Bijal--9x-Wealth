import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
import { COVERAGE_LINKS, FAMILY_LINKS, RESOURCE_LINKS } from "@/lib/constants";

export const FAMILIES_BUSINESS_OWNERS_METADATA = {
  title: "Insurance for Business Owners — Keyman, Buy-Sell, Family Continuity · 9xWealth",
  description:
    "When the founder is the firm, an unexpected event affects every part of the family balance sheet at once. The architecture has to anticipate that — across personal cover, partner protection, and operational continuity.",
  keywords: [
    "business owner insurance India",
    "keyman insurance",
    "buy-sell agreement insurance",
    "family business continuity cover",
    "founder insurance MWPA",
  ],
} as const;

export const FAMILIES_BUSINESS_OWNERS_HERO = {
  backgroundImage: {
    src: "/images/business-owners/hero.webp",
    alt: "Business owner at work — family and firm intertwined",
  },
  pillImage: {
    src: "/images/practice-areas/keyman-enterprise.jpg",
    alt: "Insurance for business owners — keyman, buy-sell, family continuity",
  },
  leadWord: "The business ",
  headlineLines: ["is the family."] as const,
  epigraph:
    "When the founder is the firm, an unexpected event affects every part of the family balance sheet at once. The architecture has to anticipate that — across personal cover, partner protection, and operational continuity.",
} as const;

export const FAMILIES_BUSINESS_OWNERS_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const FAMILIES_BUSINESS_OWNERS_CONVICTION = {
  badge: "The thesis",
  headline: "One event,\nthree simultaneous shocks.",
  paragraphs: [
    "For most Indian business families, the firm and the household are not separate balance sheets. Equity in the company funds the lifestyle. Loans against the business sit on the founder's personal guarantee. Working capital flexes with relationships maintained, in person, by a single individual. An unexpected event — illness, accident, untimely death — strikes all three at once.",
    "The architecture we deploy is designed to absorb each shock independently. The keyman policy buys the company eighteen months of continuity. The buy-sell funds the orderly succession of equity. The personal term policy under MWPA keeps the family lifestyle whole and the corpus protected from creditors. The health and critical-illness cover is held in personal name so it does not collapse with the business.",
    "Done well, the family never has to choose between protecting the firm and protecting itself. Done poorly, they discover too late that the company's creditors are first in line on every asset.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const FAMILIES_BUSINESS_OWNERS_PRIORITIES = {
  badge: "Six priorities",
  headline: "The architecture that anticipates the shock.",
  backgroundImage: {
    src: "/images/business-owners/six-priorities.webp",
    alt: "Business owner at work — family and firm intertwined",
  },
  items: [
    {
      id: "01",
      title: "Continuity liquidity",
      description:
        "Eighteen months of working capital available within four-to-six weeks of an event. Funded through a company-owned keyman policy with a defensible valuation.",
    },
    {
      id: "02",
      title: "Buy-sell architecture",
      description:
        "Cross-purchase or entity-redemption agreements, funded by life cover, that give the surviving partners orderly succession of equity and the family fair value.",
    },
    {
      id: "03",
      title: "Promoter & founder term cover",
      description:
        "Personal term cover sized to family lifestyle continuation, structured under MWPA so the corpus reaches the spouse and children regardless of business creditors.",
    },
    {
      id: "04",
      title: "Loan-protection cover",
      description:
        "Cover sized to outstanding business loans with the lender as a structured beneficiary. Keeps the family home and personal assets out of recovery proceedings.",
    },
    {
      id: "05",
      title: "Health cover for the family",
      description:
        "Private health architecture that does not collapse with the business — held in personal name, internationally enabled, with claim concierge.",
    },
    {
      id: "06",
      title: "Critical-illness for the operator",
      description:
        "Lump-sum payout on diagnosis. Funds the extended absence, treatment, and graceful transition of operational responsibility.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const FAMILIES_BUSINESS_OWNERS_COVERAGE = {
  badge: "Coverage architecture",
  headline: "The disciplines we deploy for owner-operators.",
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
      title: COVERAGE_LINKS.health.title,
      description:
        "Family floater with international hospitalisation and dedicated claim advocates.",
      href: COVERAGE_LINKS.health.href,
    },
    {
      title: COVERAGE_LINKS.wealthUlips.title,
      description:
        "Hand-modelled ULIPs and guaranteed-return plans, evaluated against MF alternatives.",
      href: COVERAGE_LINKS.wealthUlips.href,
    },
    {
      title: FAMILY_LINKS.listedPromoters.title,
      description: "Pledge cover, SEBI considerations, and MWPA on promoter holdings.",
      href: FAMILY_LINKS.listedPromoters.href,
    },
    {
      title: RESOURCE_LINKS.mwpaGuide.title,
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: RESOURCE_LINKS.mwpaGuide.href,
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
