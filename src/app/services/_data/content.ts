import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const SERVICES_METADATA = {
  title: "Coverage — Six Disciplines, One Architecture · 9X Wealth",
  description:
    "A complete coverage architecture for Indian families of substance — term, health, keyman, ULIPs, global, and specie cover modelled, placed, and stewarded under one roof.",
  keywords: [
    "insurance coverage Mumbai",
    "wealth protection architecture",
    "HNI insurance India",
    "family coverage planning",
    "9X Wealth services",
    "private wealth insurance",
  ],
} as const;

export const SERVICES_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Executive workspace evoking disciplined coverage architecture",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "Comprehensive coverage architecture for Indian families",
  },
  leadWord: "Six disciplines. ",
  headlineLines: ["One", "architecture."] as const,
  epigraph:
    "A complete coverage architecture for Indian families of substance — modelled, placed, and stewarded under one roof. Each discipline is a distinct chapter; together they form a single instrument.",
} as const;

export const SERVICES_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const SERVICES_PROCESS = {
  badge: "How We Work",
  headline: "A four-act engagement.\nConsidered, never rushed.",
  items: [
    {
      id: "01",
      title: "Conversation",
      description:
        "Week 1. We spend an unhurried afternoon understanding your family, your assets, and the things that keep you awake. No paperwork. No commitment.",
    },
    {
      id: "02",
      title: "Architecture",
      description:
        "Weeks 2–3. Our analysts assemble a coverage architecture across term, health, keyman, ULIP, and specialty lines. We model the math, you read the prose.",
    },
    {
      id: "03",
      title: "Activation",
      description:
        "Weeks 4–6. Medicals, underwriting, and policy issuance — conducted at your residence. We negotiate medical loadings on your behalf and document everything.",
    },
    {
      id: "04",
      title: "Stewardship",
      description:
        "Lifelong. Quarterly reviews, annual repricing, and lifelong claims advocacy. Your coverage evolves as your wealth and circumstances do.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const SERVICES_FAMILY_LINKS = {
  badge: "By family situation",
  headline: "Or browse by who we serve.",
  items: [
    {
      title: "UHNI Families",
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
      href: "/families/uhni",
    },
    {
      title: "NRI & Global Indian Households",
      description: "Cross-border tax, GIFT City products, currency hedging, FATCA/CRS.",
      href: "/families/nri",
    },
    {
      title: "Business Owners",
      description: "Keyman, buy-sell, and family-business continuity cover.",
      href: "/families/business-owners",
    },
    {
      title: "Listed Promoters",
      description: "Pledge cover, SEBI considerations, and MWPA on promoter holdings.",
      href: "/families/listed-promoters",
    },
    {
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: "/resources/mwpa-guide",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
