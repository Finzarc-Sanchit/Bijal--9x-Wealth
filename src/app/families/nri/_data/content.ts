import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
import { COVERAGE_LINKS, FAMILY_LINKS, RESOURCE_LINKS } from "@/lib/constants";

export const FAMILIES_NRI_METADATA = {
  title: "NRI Insurance & Cross-Border Cover — For Global Indian Households · 9xWealth",
  description:
    "For NRI and OCI households whose wealth, dependants, and obligations span jurisdictions. An Indian house with global reach, registered in GIFT City, partnered with Lloyd's.",
  keywords: [
    "NRI insurance India",
    "cross-border insurance GIFT City",
    "global Indian household cover",
    "FATCA CRS insurance",
    "OCI insurance planning",
  ],
} as const;

export const FAMILIES_NRI_HERO = {
  backgroundImage: {
    src: "/images/nri/hero.webp",
    alt: "Global travel evoking cross-border family protection",
  },
  pillImage: {
    src: "/images/practice-areas/global-solutions.jpg",
    alt: "NRI and global Indian household insurance",
  },
  leadWord: "Cover that  ",
  headlineLines: ["travels with", "the family."] as const,
  epigraph:
    "For NRI and OCI households whose wealth, dependants, and obligations span jurisdictions. An Indian house with global reach, registered in GIFT City, partnered with Lloyd's.",
} as const;

export const FAMILIES_NRI_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const FAMILIES_NRI_CONVICTION = {
  badge: "The thesis",
  headline: "A single architecture,\nacross jurisdictions.",
  paragraphs: [
    "NRI families have historically faced a forced choice: insure in India, in rupees, with whatever local capacity exists — or insure offshore through a fragmented set of foreign brokers, none of whom understood Indian succession or cross-border tax. Neither produced a coherent architecture.",
    "The opening of GIFT City's International Financial Services Centre changed the calculus. A registered intermediary in the zone can now issue dollar-denominated cover from Indian soil, regulated by the IFSCA, with Indian-jurisdiction enforcement and clean tax treatment for non-residents. We are one of those intermediaries.",
    "The result for the family: a single architecture, owned by one house, that covers Indian liabilities in rupees and global ones in dollars — with explicit FATCA/CRS treatment documented at the start and a relationship director who works in your time zone when you need them.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const FAMILIES_NRI_CONSIDERATIONS = {
  badge: "Six considerations",
  headline: "What changes when the family crosses borders.",
  subtitle:
    "When a family spans jurisdictions, insurance cannot be a set of disconnected policies. These six considerations guide how we structure every NRI and OCI mandate — from currency alignment and FATCA treatment to cover that travels with the family.",
  items: [
    {
      id: "01",
      title: "Currency mismatch",
      description:
        "Liabilities in dollars, cover in rupees, exchange-rate risk on the family. We layer GIFT City USD term cover above an Indian INR core to align the corpus with the obligations.",
      image: {
        src: "/images/nri/considerations/consideration-1.webp",
        alt: "Currency alignment between dollar liabilities and rupee cover",
      },
    },
    {
      id: "02",
      title: "Multi-jurisdiction tax",
      description:
        "Premium residency, claim residency, policy situs, and treaty position determine the after-tax outcome. We work alongside your tax counsel — IRDAI/IFSCA structures we own; cross-border tax we co-pilot.",
      image: {
        src: "/images/nri/considerations/consideration-2.webp",
        alt: "Cross-border tax coordination across multiple jurisdictions",
      },
    },
    {
      id: "03",
      title: "FATCA & CRS reporting",
      description:
        "For US persons and CRS-jurisdiction residents, certain insurance products require disclosure to the relevant authorities. Compliant from day one, documented at placement.",
      image: {
        src: "/images/nri/considerations/consideration-3.webp",
        alt: "FATCA and CRS compliance documentation for insurance products",
      },
    },
    {
      id: "04",
      title: "Estate fragmentation",
      description:
        "Multi-jurisdiction estates fragment without proactive structuring. We coordinate insurance routing with your trust architect so the proceeds reach the intended successor in the intended jurisdiction.",
      image: {
        src: "/images/nri/considerations/consideration-4.webp",
        alt: "Estate succession planning across jurisdictions",
      },
    },
    {
      id: "05",
      title: "Health cover that travels",
      description:
        "Family floater cover with worldwide treatment — including planned procedures in Singapore, London, or the United States — and emergency cover that follows the family member, not the policy.",
      image: {
        src: "/images/nri/considerations/consideration-5.webp",
        alt: "International health coverage that travels with the family",
      },
    },
    {
      id: "06",
      title: "GIFT City as the bridge",
      description:
        "For most NRI families, GIFT City's IFSC is the cleanest structure: dollar-denominated, IFSCA-regulated, Indian-jurisdiction enforcement, FATCA-compliant. We are a registered intermediary in the zone.",
      image: {
        src: "/images/nri/considerations/consideration-6.webp",
        alt: "GIFT City IFSC as the bridge for NRI insurance structures",
      },
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const FAMILIES_NRI_COVERAGE = {
  badge: "Coverage architecture",
  headline: "The disciplines most relevant to NRI households.",
  items: [
    {
      title: COVERAGE_LINKS.global.title,
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
      href: COVERAGE_LINKS.global.href,
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
      title: COVERAGE_LINKS.specie.title,
      description: "Art, jewellery, classic cars, marine, aviation, and K&R architecture.",
      href: COVERAGE_LINKS.specie.href,
    },
    {
      title: RESOURCE_LINKS.mwpaGuide.title,
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: RESOURCE_LINKS.mwpaGuide.href,
    },
    {
      title: FAMILY_LINKS.uhni.title,
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
      href: FAMILY_LINKS.uhni.href,
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
