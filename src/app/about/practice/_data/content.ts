import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const ABOUT_PRACTICE_METADATA = {
  title: "The Practice — How 9xWealth Works · 9xWealth",
  description:
    "Every mandate proceeds through four acts and is governed by six principles. The standard is not negotiable; the rate of work is.",
  keywords: [
    "9xWealth practice",
    "insurance engagement process",
    "wealth protection architecture",
    "UHNI insurance mandate",
    "private client insurance India",
  ],
} as const;

export const ABOUT_PRACTICE_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Considered workspace for private wealth counsel",
  },
  pillImage: {
    src: "/images/process/conversation.jpg",
    alt: "The Practice — how 9xWealth works",
  },
  leadWord: "How we work, ",
  headlineLines: ["without", "exception."] as const,
  epigraph:
    "Every mandate proceeds through four acts and is governed by six principles. The standard is not negotiable; the rate of work is.",
} as const;

export const ABOUT_PRACTICE_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const ABOUT_PRACTICE_CONVICTION = {
  badge: "The thesis",
  headline: "The standard, before the\nwork.",
  paragraphs: [
    "Most insurance brokerages run on volume — placements per relationship manager per quarter, premiums underwritten per office per year. The metric drives the conversation, the conversation drives the placement, and the family receives whatever fits the metric.",
    "We organised the practice around the opposite premise. The standard for each mandate is set first — what the architecture must achieve, what the family must receive, what the relationship must look like in twenty years. The work then proceeds at whatever rate the standard allows.",
    "That has produced a practice of approximately 2,400 mandates today, of which 142 are at UHNI scale. Each one is treated as a multi-decade relationship rather than a placement.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const ABOUT_PRACTICE_PROCESS = {
  badge: "How We Work",
  headline: "A four-act engagement.\nConsidered, never rushed.",
  items: [
    {
      id: "01",
      title: "Conversation",
      description:
        "Week 1 — We spend an unhurried afternoon understanding your family, your assets, and the things that keep you awake. No paperwork. No commitment.",
    },
    {
      id: "02",
      title: "Architecture",
      description:
        "Weeks 2–3 — Our analysts assemble a coverage architecture across term, health, keyman, ULIP, and specialty lines. We model the math, you read the prose.",
    },
    {
      id: "03",
      title: "Activation",
      description:
        "Weeks 4–6 — Medicals, underwriting, and policy issuance — conducted at your residence. We negotiate medical loadings on your behalf and document everything.",
    },
    {
      id: "04",
      title: "Stewardship",
      description:
        "Lifelong — Quarterly reviews, annual repricing, and lifelong claims advocacy. Your coverage evolves as your wealth and circumstances do.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const ABOUT_PRACTICE_PRINCIPLES = {
  badge: "Six principles",
  headline: "The standards we hold to without exception.",
  items: [
    {
      id: "01",
      title: "Architecture before product",
      description:
        "Every engagement begins with the family situation, not the product. We map the wealth, the dependants, the jurisdictions, and the encumbrances — then design the cover.",
    },
    {
      id: "02",
      title: "Independence, not affiliation",
      description:
        "We are not a tied agent of any insurer. The choice of carrier and product is ours alone, and we will recommend the structure that best serves the family.",
    },
    {
      id: "03",
      title: "Transparency on charges",
      description:
        "Every product is modelled against its alternative on a single sheet of paper. Premium-allocation, fund-management, and mortality charges are disclosed in full, before any premium is paid.",
    },
    {
      id: "04",
      title: "Stewardship across decades",
      description:
        "Coverage is reviewed annually, structures revisited as the family evolves, and claims advocated end-to-end. The relationship director who opens the file is the one your grandchildren will inherit.",
    },
    {
      id: "05",
      title: "Discretion as default",
      description:
        "No client logos, no testimonials with names, no public footprint of the placements we make. ISO 27001:2022 certification for information security across the practice.",
    },
    {
      id: "06",
      title: "Capacity-bound growth",
      description:
        "We add new mandates only when capacity exists to serve them at the standard the existing ones receive. There is no growth target. There is only the standard.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const ABOUT_PRACTICE_RELATED = {
  badge: "Continue",
  headline: "Where to read further about the house.",
  items: [
    {
      title: "Our Story",
      description: "Founded in MMXIII Mumbai. The conviction that became 9xWealth.",
      href: "/about",
    },
    {
      title: "Team",
      description: "Principals and advisors across Mumbai, Bengaluru, and Delhi.",
      href: "/about/team",
    },
    {
      title: "Press & Recognition",
      description: "Press mentions, awards, and regulatory standing.",
      href: "/about/press",
    },
    {
      title: "Careers",
      description: "Join the practice. Open roles across Mumbai, Bengaluru, and Delhi.",
      href: "/careers",
    },
    {
      title: "Insights",
      description:
        "Quarterly letters and considered essays on protection, estate, and stewardship.",
      href: "/insights",
    },
    {
      title: "Frequently Asked",
      description:
        "Considered answers on term, health, keyman, ULIPs, global, and specie cover.",
      href: "/resources/faq",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
