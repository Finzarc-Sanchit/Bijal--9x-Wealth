import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
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
  badge: "Press & Recognition",
  headlineLines: ["The standing", "of the practice."] as const,
  intro:
    "Regulatory registrations, industry recognitions, and the independent verifications that govern how we operate.",
  primaryImage: {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Editorial setting evoking institutional standing",
  },
  secondaryImage: {
    src: "/images/about/press/press.webp",
    alt: "Press and recognition — the standing of the practice",
  },
  sidePanel: {
    title: "Recognition",
    description:
      "Recognised for the UHNI practice and the structured approach to high-sum life cover.",
    cta: {
      label: "Schedule a Conversation",
      href: "/contact",
    },
  },
} as const;

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
      image: {
        src: "/images/about/press/awards/award-1.webp",
        alt: "Independent Broker of the Year — Insurance Industry Awards (India)",
      },
    },
    {
      id: "MMXXIII",
      title: "Best Cross-Border Insurance Practice — Asian Wealth Awards",
      description:
        "For the GIFT City IFSC framework and the Lloyd's of London co-broking model.",
      image: {
        src: "/images/about/press/awards/award-2.webp",
        alt: "Best Cross-Border Insurance Practice — Asian Wealth Awards",
      },
    },
    {
      id: "MMXXII",
      title: "IRDAI Compliance Excellence",
      description:
        "Top-quartile audit score for record-keeping, claim handling, and disclosure standards.",
      image: {
        src: "/images/about/press/awards/award-3.webp",
        alt: "IRDAI Compliance Excellence award",
      },
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
