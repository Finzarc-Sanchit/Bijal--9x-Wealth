import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
export const GLOSSARY_METADATA = {
  title: "Glossary — Insurance, Estate & Succession Terms · 9xWealth",
  description:
    "A–Z of insurance, estate, and succession terms used across the 9xWealth practice and the Indian insurance ecosystem.",
  keywords: [
    "insurance glossary",
    "estate planning terms India",
    "MWPA definition",
    "HUF insurance",
    "succession terms",
  ],
} as const;

export const GLOSSARY_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Reference dictionary and editorial study",
  },
  headline: "The vocabulary of stewardship.",
  description:
    "Terms used across our practice, and across the Indian insurance and estate ecosystem more broadly. Linked into the relevant pages where the structure or product is treated in depth.",
} as const;

export const GLOSSARY_RELATED = {
  badge: "Continue",
  headline: "Where these terms are put to use.",
  items: [
    {
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: "/resources/mwpa-guide",
    },
    {
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: "/services/term-legacy",
    },
    {
      title: "Keyman & Enterprise",
      description: "Buy-sell agreements, partner protection, and family-business continuity cover.",
      href: "/services/keyman",
    },
    {
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
      href: "/services/global",
    },
    {
      title: "Frequently Asked",
      description:
        "Considered answers on term, health, keyman, ULIPs, global, and specie cover.",
      href: "/resources/faq",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
