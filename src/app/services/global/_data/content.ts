import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { FaqItem } from "@/components/sections/EditorialFaqSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const GLOBAL_METADATA = {
  title: "Global Solutions — GIFT City IFSC & Lloyd's of London Insurance · 9X Wealth",
  description:
    "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London for NRI households, cross-border successors, and sums beyond Indian domestic capacity.",
  keywords: [
    "GIFT City IFSC insurance",
    "Lloyd's of London India",
    "NRI life insurance USD",
    "cross-border insurance India",
    "IFSCA insurance intermediary",
    "9X Wealth global solutions",
  ],
} as const;

export const GLOBAL_HERO = {
  backgroundImage: {
    src: "/images/global/hero.webp",
    alt: "Global travel vista evoking cross-border family wealth",
  },
  pillImage: {
    src: "/images/practice-areas/global-solutions.jpg",
    alt: "International insurance and global family planning",
  },
  leadWord: "For families  ",
  headlineLines: ["who already ", "cross borders."] as const,
  epigraph:
    "Dollar cover via GIFT City IFSC and Lloyd's of London. For NRI households, cross-border successors, and sums that exceed Indian domestic capacity.",
} as const;

export const GLOBAL_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
  {
    label: "For NRI families",
    href: "/families/nri",
    variant: "secondary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const GLOBAL_CONVICTION = {
  badge: "The thesis",
  headline: "An Indian house with global\nreach.",
  paragraphs: [
    "For a generation, Indian families with international wealth had a choice: insure in India, in rupees, with whatever capacity the local market allowed — or insure offshore through fragmented relationships with foreign brokers who did not understand Indian succession or tax. Neither was satisfactory.",
    [
      {
        type: "text",
        value:
          "GIFT City IFSC changed the calculus. A registered intermediary in the zone can issue dollar-denominated cover from Indian soil, regulated by the IFSCA, with Indian-jurisdiction enforcement and a clean tax framework for NRIs and OCIs. We are one of those intermediaries.",
      },
    ],
    "For sums beyond what any single Indian or IFSC carrier will write, we co-broker excess layers through a Lloyd's of London coverholder partnership. A single submission, placed across multiple syndicates, with the family represented by one Indian house from start to finish.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const GLOBAL_PRODUCTS = {
  badge: "Four products",
  headline: "Cover that travels with the family.",
  items: [
    {
      id: "IFSC",
      title: "GIFT City IFSC USD term cover",
      description:
        "Dollar-denominated high-sum term issued from the GIFT City IFSC. IRDAI-adjacent regulation via IFSCA. The first port of call for NRI families and those with US-resident successors.",
      image: {
        src: "/images/practice-areas/global-solutions.jpg",
        alt: "GIFT City IFSC dollar-denominated term cover",
      },
    },
    {
      id: "LLOYD",
      title: "Lloyd's of London excess layers",
      description:
        "For sums beyond domestic capacity, we co-broker excess layers through Lloyd's syndicates via a coverholder partner. Single submission, multi-syndicate placement.",
      image: {
        src: "/images/process/architecture.jpg",
        alt: "Lloyd's of London excess layer placement",
      },
    },
    {
      id: "INTL",
      title: "International private health",
      description:
        "Worldwide cover with planned-treatment riders for London, Singapore, the United States. For families whose lives genuinely cross borders.",
      image: {
        src: "/images/practice-areas/private-health-coverage.jpg",
        alt: "International private health coverage across borders",
      },
    },
    {
      id: "BOND",
      title: "Offshore bond wrappers",
      description:
        "Insurance-linked structures for tax-deferred international wealth accumulation, particularly useful for OCI families with mixed-residency successors.",
      image: {
        src: "/images/process/stewardship.jpg",
        alt: "Offshore bond wrappers for international wealth",
      },
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const GLOBAL_PROCESS = {
  badge: "How we work",
  headline: "Four commitments on every cross-border mandate.",
  items: [
    {
      id: "01",
      title: "IFSCA-registered intermediary",
      description:
        "We are a registered insurance intermediary in GIFT IFSC, with direct relationships across the carriers issuing from the zone.",
    },
    {
      id: "02",
      title: "Lloyd's coverholder partnership",
      description:
        "Excess capacity beyond Indian limits, placed through a Lloyd's coverholder. Single submission process; multi-syndicate placement.",
    },
    {
      id: "03",
      title: "Tax structuring with your counsel",
      description:
        "We work alongside your existing tax counsel — we will not recommend a structure your CA has not vetted, and we document the FATCA/CRS treatment up front.",
    },
    {
      id: "04",
      title: "Multi-currency claims advocacy",
      description:
        "Claims handled in the policy's native currency, paid into the family's preferred jurisdiction, with full reporting back to Indian authorities where required.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const GLOBAL_FAQ = {
  badge: "Frequently asked",
  headline: "Global cover, candidly answered.",
  items: [
    {
      question: "What is a GIFT City IFSC insurance product?",
      answer:
        "GIFT City's International Financial Services Centre is a special-economic zone for cross-border financial services. Insurance products issued from GIFT City are typically denominated in USD or other foreign currency, regulated by the IFSCA (not IRDAI), and structured to serve NRIs, OCIs, and Indian residents seeking foreign-currency cover. We are a registered intermediary in GIFT IFSC.",
    },
    {
      question: "When does a Lloyd's of London policy make sense?",
      answer:
        "When the sum assured exceeds Indian domestic capacity (typically beyond ₹50 Cr per life), when the family has multi-jurisdictional residency, or when specie and high-value risks require Lloyd's syndicate capacity. We co-broker excess layers through a Lloyd's coverholder partner.",
    },
    {
      question: "How does cross-border tax work on dollar-denominated cover?",
      answer:
        "Tax treatment depends on residency at premium payment, residency at claim, the policy's situs, and the applicable double-tax treaty. Most NRI families use GIFT City for cleaner Indian tax treatment; US-resident successors often require additional FATCA reporting. We work alongside your tax counsel to structure correctly.",
    },
    {
      question: "What about FATCA and CRS reporting?",
      answer:
        "FATCA applies to US persons; CRS applies to residents of CRS jurisdictions. Both require disclosure of qualifying insurance products to the relevant authorities. Compliant disclosure is straightforward when the product is structured properly from the start. We document and file as required.",
    },
    {
      question: "Can the family hold both INR and USD cover simultaneously?",
      answer:
        "Yes — and this is often the right structure. A core INR term policy under MWPA covers Indian liabilities and INR-denominated lifestyle continuation. A GIFT City USD layer above it covers USD-denominated obligations (overseas property, foreign-currency education, US-resident successors).",
    },
    {
      question: "How is the premium paid for a GIFT City policy?",
      answer:
        "From a GIFT City premium account, fundable from NRE/NRO accounts or from offshore sources under LRS. The structure is documented and entirely compliant. We coordinate with your private banker on the funding mechanics.",
    },
  ] as const satisfies readonly FaqItem[],
} as const;

export const GLOBAL_RELATED = {
  badge: "Continue reading",
  headline: "Connected to this page.",
  items: [
    {
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: "/services/term-legacy",
    },
    {
      title: "Private Health Coverage",
      description:
        "Family floater with international hospitalisation and dedicated claim advocates.",
      href: "/services/health",
    },
    {
      title: "Specie & High-Value",
      description: "Art, jewellery, classic cars, marine, aviation, and K&R architecture.",
      href: "/services/specie",
    },
    {
      title: "NRI & Global Indian Households",
      description: "Cross-border tax, GIFT City products, currency hedging, FATCA/CRS.",
      href: "/families/nri",
    },
    {
      title: "UHNI Families",
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
      href: "/families/uhni",
    },
    {
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: "/resources/mwpa-guide",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
