import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const ABOUT_TEAM_METADATA = {
  title: "The Team — Partners & Practitioners · 9xWealth",
  description:
    "Three senior partners across Mumbai, Bengaluru, and Delhi, supported by claim advocates, underwriting architects, cross-border specialists, and a discreet specie desk.",
  keywords: [
    "9xWealth team",
    "insurance partners Mumbai",
    "UHNI relationship director",
    "private client insurance team India",
  ],
} as const;

export const ABOUT_TEAM_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Senior partners in considered discussion",
  },
  pillImage: {
    src: "/images/process/architecture.jpg",
    alt: "The Team — partners and practitioners",
  },
  leadWord: "The people behind ",
  headlineLines: ["the", "standard."] as const,
  epigraph:
    "Three senior partners across Mumbai, Bengaluru, and Delhi, supported by claim advocates, underwriting architects, cross-border specialists, and a discreet specie desk.",
} as const;

export const ABOUT_TEAM_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const ABOUT_TEAM_CONVICTION = {
  badge: "The principle",
  headline: "A small house, deliberately\nsmall.",
  paragraphs: [
    "We are a deliberately small practice. The senior partnership knows every UHNI mandate by name, attends material claim matters personally, and reads every quarterly review before it is sent.",
    "The ratio of senior advisors to relationship managers is intentionally inverted from the industry norm — most placements are led by partners, not associates. New partners are inducted only when the existing team can shepherd them to the standard, never to meet a hiring target.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const ABOUT_TEAM_PARTNERS = {
  badge: "The senior partnership",
  headline: "Three offices, three lead partners.",
  items: [
    {
      id: "MUMBAI",
      title: "The Founding Partner",
      description:
        "Chartered Accountant by training, advisor to listed promoters before founding 9xWealth in 2013. Leads the Mumbai office and the senior partnership across all UHNI mandates.",
    },
    {
      id: "BENGALURU",
      title: "The South India Partner",
      description:
        "CFP and IRDAI-certified intermediary. Leads the Bengaluru practice, with deep relationships into the founder community and the cross-border NRI segment in Singapore and the Bay Area.",
    },
    {
      id: "DELHI-NCR",
      title: "The North India Partner",
      description:
        "Specialist in pledge cover, D&O, and trust-owned succession structures. Co-manages the Lloyd's of London relationship with the Mumbai office.",
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const ABOUT_TEAM_FUNCTIONS = {
  badge: "Specialist functions",
  headline: "The desks behind every placement.",
  items: [
    {
      id: "01",
      title: "Senior Claim Advocates",
      description:
        "Mumbai-based team owning every claim end-to-end. Available any hour, with direct phones to the medical superintendents at the network hospitals we work with most.",
    },
    {
      id: "02",
      title: "Underwriting Architects",
      description:
        "Internal analysts who model each placement against alternatives, prepare the single-page proposal, and structure the policy ownership and assignment.",
    },
    {
      id: "03",
      title: "Cross-Border Specialists",
      description:
        "Registered intermediaries in GIFT City IFSC, with co-broking relationships into Lloyd's of London for excess-layer cover.",
    },
    {
      id: "04",
      title: "Specie & K&R Desk",
      description:
        "Discreet underwriting team for jewellery, fine art, classic cars, marine and aviation, and kidnap-and-ransom cover.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const ABOUT_TEAM_RELATED = {
  badge: "Continue",
  headline: "Where to read further.",
  items: [
    {
      title: "Our Story",
      description: "Founded in MMXIII Mumbai. The conviction that became 9xWealth.",
      href: "/about",
    },
    {
      title: "The Practice",
      description:
        "A four-act engagement — conversation, architecture, activation, stewardship.",
      href: "/about/practice",
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
      title: "Contact",
      description: "Begin a confidential conversation with a senior partner.",
      href: "/contact",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
