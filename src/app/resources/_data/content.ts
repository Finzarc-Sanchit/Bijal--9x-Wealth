import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";

export const RESOURCES_METADATA = {
  title: "Resources — Glossary, FAQ, MWPA Guide, Calculators · 9xWealth",
  description:
    "Reference material for clients and counsel — glossary, FAQ, MWPA guide, and cover estimators from 9xWealth.",
  keywords: [
    "insurance glossary India",
    "MWPA guide",
    "insurance FAQ",
    "term cover calculator",
    "9xWealth resources",
  ],
} as const;

export const RESOURCES_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Open reference books and editorial study materials",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "Insurance and estate reference resources",
  },
  leadWord: "References for ",
  headlineLines: ["clients", "and their counsel."] as const,
  epigraph:
    "Reference material we have built for the families we serve, and for the chartered accountants, trust officers, and family lawyers who advise alongside us.",
} as const;

export const RESOURCES_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const RESOURCES_CONVICTION = {
  badge: "The principle",
  headline: "Information should be\nfree,\nstructures should not.",
  paragraphs: [
    "We publish what we know about our craft openly. The glossary defines the terms we use; the FAQ answers the questions we are asked most; the MWPA guide is a complete treatment of the most powerful structural instrument in Indian private wealth.",
    "None of it is a substitute for a conversation. But all of it should help you arrive at one with the right questions ready.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const RESOURCES_CARDS = {
  badge: "What we publish",
  headline: "Four resources, all freely available.",
  items: [
    {
      id: "GLOSSARY",
      title: "Glossary",
      description:
        "A–Z of insurance, estate, and succession terms used across our practice.",
    },
    {
      id: "FAQ",
      title: "Frequently Asked",
      description:
        "Considered answers on term, health, keyman, ULIPs, global, and specie cover.",
    },
    {
      id: "MWPA",
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
    },
    {
      id: "TOOLS",
      title: "Calculators",
      description: "Sum-assured, premium, and human-life-value tools.",
    },
  ] as const satisfies readonly EditorialCard[],
  links: [
    { href: "/resources/glossary" },
    { href: "/resources/faq" },
    { href: "/resources/mwpa-guide" },
    { href: "/resources/calculators" },
  ],
} as const;
