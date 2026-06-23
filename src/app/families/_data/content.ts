import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
import { COVERAGE_LINKS, FAMILY_LINKS } from "@/lib/constants";

export const FAMILIES_HUB_METADATA = {
  title: "Families We Serve — UHNI, NRI, Business Owners, Listed Promoters · 9xWealth",
  description:
    "The protection architecture that fits a single-promoter business is not the architecture that fits a Bay Area NRI household. We organise the practice around the situation, not the product.",
  keywords: [
    "UHNI families insurance",
    "NRI insurance India",
    "business owner insurance",
    "listed promoter insurance",
    "family wealth protection Mumbai",
  ],
} as const;

export const FAMILIES_HUB_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Multi-generational family in warm editorial light",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "Families we serve — UHNI, NRI, business owners, listed promoters",
  },
  leadWord: "One house. ",
  headlineLines: ["Four", "practices."] as const,
  epigraph:
    "The protection architecture that fits a single-promoter business is not the architecture that fits a Bay Area NRI household, or a listed promoter pledged to the founder's holding. We organise the practice around the situation, not the product.",
} as const;

export const FAMILIES_HUB_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const FAMILIES_HUB_CONVICTION = {
  badge: "Why this matters",
  headline: "The right cover begins with the right\nquestion.",
  paragraphs: [
    "Insurance brokers default to product. They lead with term, or health, or a ULIP, and fit the family to whichever wrapper pays best. We do the opposite: we begin with the family situation — the structure of wealth, the location of successors, the encumbrances on equity, the jurisdictions in play — and let the architecture follow.",
    "Across twelve years, four situations have emerged most frequently in the practice. For each, we have built a dedicated way of working.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const FAMILIES_HUB_PRACTICES = {
  badge: "The four practices",
  headline: "Choose the situation that most resembles yours.",
  items: [
    {
      title: FAMILY_LINKS.uhni.title,
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
      href: FAMILY_LINKS.uhni.href,
    },
    {
      title: FAMILY_LINKS.nri.title,
      description: "Cross-border tax, GIFT City products, currency hedging, FATCA/CRS.",
      href: FAMILY_LINKS.nri.href,
    },
    {
      title: FAMILY_LINKS.businessOwners.title,
      description: "Keyman, buy-sell, and family-business continuity cover.",
      href: FAMILY_LINKS.businessOwners.href,
    },
    {
      title: FAMILY_LINKS.listedPromoters.title,
      description: "Pledge cover, SEBI considerations, and MWPA on promoter holdings.",
      href: FAMILY_LINKS.listedPromoters.href,
    },
  ] as const satisfies readonly RelatedLink[],
} as const;

export const FAMILIES_HUB_COVERAGE = {
  badge: "Or browse by coverage",
  headline: "Six disciplines, mapped to family need.",
  items: [
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
      title: COVERAGE_LINKS.keyman.title,
      description:
        "Buy-sell agreements, partner protection, and family-business continuity cover.",
      href: COVERAGE_LINKS.keyman.href,
    },
    {
      title: COVERAGE_LINKS.wealthUlips.title,
      description:
        "Hand-modelled ULIPs and guaranteed-return plans, evaluated against MF alternatives.",
      href: COVERAGE_LINKS.wealthUlips.href,
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
  ] as const satisfies readonly RelatedLink[],
} as const;
