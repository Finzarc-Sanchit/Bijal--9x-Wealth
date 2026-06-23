import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
import { COVERAGE_LINKS, HOUSE_LINKS } from "@/lib/constants";

export const FAMILIES_UHNI_METADATA = {
  title: "The UHNI Practice — For Families of ₹100 Cr+ · 9xWealth",
  description:
    "A private practice for 142 ultra-high-net-worth families. The single relationship that coordinates every protection decision — across jurisdictions, generations, and the unexpected.",
  keywords: [
    "UHNI insurance India",
    "families 100 crore insurance",
    "private wealth protection UHNI",
    "succession architecture insurance",
    "9xWealth UHNI practice",
  ],
} as const;

export const FAMILIES_UHNI_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Private residence evoking UHNI family stewardship",
  },
  pillImage: {
    src: "/images/practice-areas/specie-high-value.jpg",
    alt: "The UHNI practice — for families of ₹100 Cr+",
  },
  leadWord: "Reserved ",
  headlineLines: ["for the few."] as const,
  epigraph:
    "A private practice for 142 ultra-high-net-worth families. The single relationship that coordinates every protection decision — across jurisdictions, generations, and the unexpected.",
} as const;

export const FAMILIES_UHNI_CTAS = [
  {
    label: "Request an Audience",
    href: "/contact",
    variant: "primary",
  },
  {
    label: "Read about the practice",
    href: HOUSE_LINKS.practice.href,
    variant: "secondary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const FAMILIES_UHNI_INVITATION_INTRO = {
  badge: "By Invitation",
  headline: "The private practice for families of ₹100 Cr+ wealth.",
  paragraphs: [
    "For 142 families across India and the Indian diaspora, we serve as the single relationship that coordinates every protection decision — across jurisdictions, generations, and the unexpected things life will inevitably ask you to manage.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const FAMILIES_UHNI_INVITATION = {
  badge: "By Invitation",
  headline: "The private practice for families of ₹100 Cr+ wealth.",
  items: [
    {
      id: "01",
      title: "Dedicated relationship director",
      description: "Dedicated relationship director",
    },
    {
      id: "02",
      title: "Quarterly portfolio reviews at home",
      description: "Quarterly portfolio reviews at home",
    },
    {
      id: "03",
      title: "Estate & succession architecture",
      description: "Estate & succession architecture",
    },
    {
      id: "04",
      title: "Cross-border coverage (GIFT City, Lloyd's)",
      description: "Cross-border coverage (GIFT City, Lloyd's)",
    },
    {
      id: "05",
      title: "Specie cover for art, jewellery, watches",
      description: "Specie cover for art, jewellery, watches",
    },
    {
      id: "06",
      title: "24/7 dedicated claims concierge",
      description: "24/7 dedicated claims concierge",
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const FAMILIES_UHNI_CONVICTION = {
  badge: "The thesis",
  headline: "A mandate that\noutlasts us.",
  paragraphs: [
    "The UHNI practice was conceived around a single observation: the families we serve do not need more product. They need fewer relationships. One house, one named partner, one phone number — for the entire architecture of protection that surrounds the family, the business, the heirs, and the assets.",
    "We do this for 142 mandates today. Each is treated as a multi-decade relationship, not a placement. The relationship director who opens the file is the one your grandchildren will inherit.",
    "And we keep the practice deliberately small. New mandates are added only when capacity exists to serve them at the standard the existing ones receive. There is no growth target. There is only the standard.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const FAMILIES_UHNI_COMMITMENTS = {
  badge: "What is included",
  headline: "Six commitments on every UHNI mandate.",
  items: [
    {
      id: "01",
      title: "Dedicated relationship director",
      description:
        "A single named senior partner owns the relationship for the duration of the mandate. They know your family, your assets, and the situations you have asked us to anticipate.",
    },
    {
      id: "02",
      title: "Quarterly home reviews",
      description:
        "We come to you. Four times a year, the relationship director conducts a complete review at your residence — coverage, claims, structural changes, and family events that may shift the architecture.",
    },
    {
      id: "03",
      title: "Estate & succession architecture",
      description:
        "Insurance is one instrument inside a larger succession plan. We work alongside your tax counsel and trust architects to ensure the cover routes wealth in alignment with your will, deed, and intent.",
    },
    {
      id: "04",
      title: "Cross-border coverage",
      description:
        "Dollar-denominated GIFT City layers, Lloyd's of London excess, planned international medical treatment, and discreet K&R for families with overseas exposure.",
    },
    {
      id: "05",
      title: "Specie cover for valuables",
      description:
        "All-risks cover for jewellery, art, watches, classic cars, marine and aviation. Underwritten under NDA with named London and Mumbai underwriters.",
    },
    {
      id: "06",
      title: "24/7 claims concierge",
      description:
        "A senior advocate on call, any hour. From an unexpected hospitalisation in a foreign city to a claim on a single piece in transit — one phone number, immediate action.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const FAMILIES_UHNI_COVERAGE = {
  badge: "Coverage architecture",
  headline: "The disciplines we deploy on every UHNI mandate.",
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
