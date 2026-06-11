/** HNI hero collage panels — split from /public/images/hero/hni-grid-source.png */

export const HNI_HERO_PANELS = {
  boardroom: {
    src: "/images/hero/hni-panel-1-boardroom.png",
    alt: "Executive boardroom with legacy planning and family portrait",
  },
  markets: {
    src: "/images/hero/hni-panel-2-markets.png",
    alt: "Financial markets dashboard and premium planning tools",
  },
  foundation: {
    src: "/images/hero/hni-panel-3-foundation.png",
    alt: "Estate conservation and philanthropic foundation landscape",
  },
  risk: {
    src: "/images/hero/hni-panel-4-risk.png",
    alt: "Climate resilience and physical asset security for high-net-worth clients",
  },
  execution: {
    src: "/images/hero/hni-panel-5-execution.png",
    alt: "Family office execution model and operational planning workspace",
  },
  lifestyle: {
    src: "/images/hero/hni-panel-6-lifestyle.png",
    alt: "Luxury lifestyle rewards of disciplined wealth stewardship",
  },
} as const;

/** AXA editorial hero — three scroll scenes */
export const AXA_HERO_SLIDES = [
  {
    id: "generational-continuity",
    epigraph:
      "A lifetime of building creates an empire. But an empire requires a shield.",
    leadWord: "Safeguarding",
    headlineLines: ["Generational", "Wealth", "Continuity"],
    pillImage: HNI_HERO_PANELS.boardroom,
    cardImage: HNI_HERO_PANELS.risk,
    cardQuote: "Legacy & Asset Protection",
    cardBody: "Creditor-aware structures that ring-fence what generations have built.",
    cta: { label: "Read More", href: "/services#pure-risk" },
  },
  {
    id: "bespoke-structures",
    epigraph:
      "We engineer bespoke, creditor-proof insurance structures to ring-fence your assets.",
    leadWord: "Bespoke",
    headlineLines: ["Insurance", "Structures", "Engineered"],
    pillImage: HNI_HERO_PANELS.markets,
    cardImage: HNI_HERO_PANELS.execution,
    cardQuote: "Execution & Income Plans",
    cardBody: "Non-linked savings, predictable cash flows, and disciplined portfolio oversight.",
    cta: { label: "Read More", href: "/services#guaranteed-income" },
  },
  {
    id: "family-enterprise",
    epigraph:
      "So the enterprise you created forever protects the family that inspired it.",
    leadWord: "Forever",
    headlineLines: ["Protects", "The Family", "Inspired"],
    pillImage: HNI_HERO_PANELS.foundation,
    cardImage: HNI_HERO_PANELS.lifestyle,
    cardQuote: "Generational Stewardship",
    cardBody: "Holistic planning so your business legacy endures for the people you love.",
    cta: { label: "Read More", href: "/#consultation-form" },
  },
] as const;

export type AxaHeroSlide = (typeof AXA_HERO_SLIDES)[number];
