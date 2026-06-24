import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const INSIGHTS_METADATA = {
  title: "The Folio — Letters, Essays, Quarterly Reflections · 9xWealth",
  description:
    "Quarterly letters and considered essays on protection, estate, succession, and stewardship — written for the families we serve.",
  keywords: [
    "9xWealth insights",
    "estate planning essays",
    "insurance quarterly letter",
    "The Folio",
  ],
} as const;

export const INSIGHTS_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Editorial letters and long-form writing",
  },
  headline: "Letters & long-form thinking.",
  description:
    "Quarterly letters and considered essays on protection, estate, succession, and stewardship — written for the families we serve and the counsel that advises alongside us.",
} as const;

export const INSIGHTS_CONVICTION = {
  badge: "The Folio",
  headline: "Long-form thinking,\nwritten for our clients.",
  paragraphs: [
    "All essays",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const INSIGHTS_ESSAYS = {
  badge: "The Folio",
  headline: "Recent essays.",
  items: [
    {
      id: "APR-2026",
      title: "The MWPA Trust: why Section 6 changed everything for HUFs",
      subtitle: "Estate Planning · April 2026",
      description:
        "A detailed examination of how the Married Women's Property Act creates a creditor-proof corpus that transcends generations — and where most CAs miss the structuring window.",
    },
    {
      id: "MAR-2026",
      title: "GIFT City: the new offshore for Indian UHNI families",
      subtitle: "Tax Architecture · March 2026",
      description:
        "With dollar-denominated insurance now permissible from GIFT City IFSC, we examine tax efficiency, foreign currency exposure, and successor planning implications.",
    },
    {
      id: "FEB-2026",
      title: "Why we still take meetings at the dining table",
      subtitle: "On Practice · February 2026",
      description:
        "On the unfashionable practice of in-person discovery, the death of the discovery call, and what twelve years of family-level engagements have taught us.",
    },
  ] as const satisfies readonly EditorialCard[],
  readTimes: ["12 minute read", "9 minute read", "7 minute read"],
} as const;

export const INSIGHTS_RELATED = {
  badge: "Continue reading",
  headline: "Pillar references most often cited.",
  items: [
    {
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: "/resources/mwpa-guide",
    },
    {
      title: "Glossary",
      description: "A–Z of insurance, estate, and succession terms used across our practice.",
      href: "/resources/glossary",
    },
    {
      title: "Frequently Asked",
      description:
        "Considered answers on term, health, keyman, ULIPs, global, and specie cover.",
      href: "/resources/faq",
    },
    {
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: "/services/term-legacy",
    },
    {
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
      href: "/services/global",
    },
    {
      title: "UHNI Families",
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
      href: "/families/uhni",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
