import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const ABOUT_PRESS_METADATA = {
  title: "Press & Recognition — 9xWealth · 9xWealth",
  description:
    "Regulatory registrations, industry recognitions, and the independent verifications that govern how we operate.",
  keywords: [
    "9xWealth press",
    "insurance broker awards India",
    "IRDAI composite broker",
    "GIFT IFSC intermediary",
    "private client insurance recognition",
  ],
} as const;

export const ABOUT_PRESS_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Editorial setting evoking institutional standing",
  },
  pillImage: {
    src: "/images/process/stewardship.jpg",
    alt: "Press and recognition — the standing of the practice",
  },
  leadWord: "The standing of ",
  headlineLines: ["the practice."] as const,
  epigraph:
    "Regulatory registrations, industry recognitions, and the independent verifications that govern how we operate.",
} as const;

export const ABOUT_PRESS_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const ABOUT_PRESS_REGULATORY = {
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

export const ABOUT_PRESS_RECOGNITION = {
  badge: "Recognition",
  headline: "Acknowledgements from peers and the press.",
  items: [
    {
      id: "MMXXIV",
      title: "Independent Broker of the Year — Insurance Industry Awards (India)",
      description:
        "Recognised for the UHNI practice and the structured approach to high-sum life cover.",
    },
    {
      id: "MMXXIII",
      title: "Best Cross-Border Insurance Practice — Asian Wealth Awards",
      description:
        "For the GIFT City IFSC framework and the Lloyd's of London co-broking model.",
    },
    {
      id: "MMXXII",
      title: "IRDAI Compliance Excellence",
      description:
        "Top-quartile audit score for record-keeping, claim handling, and disclosure standards.",
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const ABOUT_PRESS_ENQUIRIES = {
  badge: "Press enquiries",
  headline: "For the press.",
  paragraphs: [
    "For media or analyst enquiries, please write to practice@9xwealth.in with a brief outline of the matter, your publication, and your deadline. We respond to all serious press requests within one business day.",
    "We do not provide client references or named testimonials. We can provide background commentary on the Indian private-client insurance market, the regulatory framework, and the structures we deploy — on the record or on background, as appropriate.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const ABOUT_PRESS_RELATED = {
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
      title: "Team",
      description: "Principals and advisors across Mumbai, Bengaluru, and Delhi.",
      href: "/about/team",
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
    {
      title: "Contact",
      description: "Begin a confidential conversation with a senior partner.",
      href: "/contact",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
