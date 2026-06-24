import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
import type { StatsSectionStat } from "@/components/sections/StatsSection";
import { parseMetricDisplay, SITE_METRICS } from "@/data/site-metrics";

export const ABOUT_HUB_METADATA = {
  title: "The House — A Private Wealth-Protection Atelier · 9xWealth",
  description:
    "Founded in MMXIII in Mumbai, 9xWealth delivers insurance counsel as deliberate as investment counsel for India's wealthiest families.",
  keywords: [
    "9xWealth about",
    "private wealth protection Mumbai",
    "insurance brokerage India",
    "UHNI insurance counsel",
    "family wealth stewardship",
  ],
} as const;

export const ABOUT_HUB_HERO = {
  badge: "The House",
  headlineLines: ["A private", "wealth-protection", "atelier."] as const,
  intro:
    "Founded in 2013 in Mumbai, 9xWealth was born from a singular conviction — that India's wealthiest families deserve insurance counsel as deliberate as their investment counsel.",
  primaryImage: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Editorial view of a distinguished Mumbai office tower at dusk",
  },
  secondaryImage: {
    src: "/images/our-conviction.jpg",
    alt: "The House — private wealth-protection atelier",
  },
  sidePanel: {
    title: "Our origin",
    description:
      "Twelve years ago, our founder — then a chartered accountant advising listed promoters — watched a client family lose a great deal because their term cover was structured against the wrong life. The policy paid. The estate fragmented anyway.",
    cta: {
      label: "Schedule a Conversation",
      href: "/contact",
    },
  },
} as const;

export const ABOUT_HUB_CONVICTION = {
  badge: "Our origin",
  headline: "Our origin",
  paragraphs: [
    "Twelve years ago, our founder — then a chartered accountant advising listed promoters — watched a client family lose a great deal because their term cover was structured against the wrong life. The policy paid. The estate fragmented anyway.",
    "That experience became 9xWealth's founding hypothesis: that insurance, properly architected, is not a transactional product but a structural instrument of succession. A house was needed to deliver it that way.",
    "Today, the firm intermediates over ₹10,000 Cr in annual premiums on behalf of 2,400+ families, listed promoters, and global Indian households across three offices.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const ABOUT_HUB_STATS = {
  id: "about-hub-stats",
  headline: "Stewardship in numbers",
  leftCopy:
    "Today, the firm intermediates over ₹10,000 Cr in annual premiums on behalf of 2,400+ families, listed promoters, and global Indian households across three offices.",
  primaryCta: {
    label: "The Practice",
    href: "/about/practice",
  },
  secondaryCta: {
    label: "Schedule a conversation",
    href: "/contact",
  },
  stats: [
    {
      id: "premiums",
      ...parseMetricDisplay(SITE_METRICS.premiumsCrore),
      labelLines: ["Annual", "premiums"],
    },
    {
      id: "families",
      ...parseMetricDisplay(SITE_METRICS.familiesProtected),
      labelLines: ["Families", "served"],
    },
    {
      id: "years",
      ...parseMetricDisplay(SITE_METRICS.yearsInPractice),
      labelLines: ["Years of", "stewardship"],
    },
    {
      id: "mandates",
      ...parseMetricDisplay(SITE_METRICS.uhniMandates),
      labelLines: ["Active UHNI", "mandates"],
    },
  ] as const satisfies readonly StatsSectionStat[],
} as const;

export const ABOUT_HUB_REGULATORY = {
  headline: "Regulatory standing",
  items: [
    {
      id: "01",
      title: "IRDAI Composite Broker",
      subtitle: "Reg. CB-XXX/XX",
      description: "Reg. CB-XXX/XX",
    },
    {
      id: "02",
      title: "GIFT IFSC Registered Intermediary",
      subtitle: "IIO/2024/XX",
      description: "IIO/2024/XX",
    },
    {
      id: "03",
      title: "Lloyd's of London Coverholder",
      subtitle: "via TPA partner",
      description: "via TPA partner",
    },
    {
      id: "04",
      title: "ISO 27001:2022",
      subtitle: "Information security",
      description: "Information security",
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const ABOUT_HUB_RELATED = {
  badge: "Continue",
  headline: "More about the house.",
  items: [
    {
      title: "The Practice",
      description:
        "A four-act engagement — conversation, architecture, activation, stewardship.",
      href: "/about/practice",
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
      title: "Contact",
      description: "Begin a confidential conversation with a senior partner.",
      href: "/contact",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
