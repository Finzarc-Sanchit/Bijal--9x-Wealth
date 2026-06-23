import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { EditorialProseSubsection } from "@/components/sections/EditorialProseSection";

export const DISCLOSURES_METADATA = {
  title: "Regulatory Disclosures · 9xWealth",
  description:
    "IRDAI registration, remuneration, conflicts of interest, and grievance redressal disclosures for 9xWealth Insurance Brokers Pvt. Ltd.",
  keywords: ["9xWealth IRDAI", "regulatory disclosures", "insurance broker registration"],
} as const;

export const DISCLOSURES_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Regulatory disclosures",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "Regulatory disclosures",
  },
  leadWord: "Legal · ",
  headlineLines: ["Regulatory", "disclosures."] as const,
  epigraph: "Last updated: 26 April 2026",
} as const;

export const DISCLOSURES_CTAS = [] as const satisfies readonly HeroCtaConfig[];

export const DISCLOSURES_SECTIONS = [
  {
    title: "IRDAI registration",
    paragraphs: [
      "9xWealth Insurance Brokers Pvt. Ltd. is registered with the Insurance Regulatory and Development Authority of India as a Composite Broker.",
      "Registration number: CB-XXX/XX (placeholder)",
      "CIN: UXXXXX-MH-2013-PTC-XXXXXX (placeholder)",
      "Registered office: Mumbai, Maharashtra, India.",
    ],
  },
  {
    title: "Remuneration",
    paragraphs: [
      "Brokerage and remuneration are received from insurers in line with IRDAI (Payment of Commission) Regulations. Where additional fees are charged, these are disclosed to clients in writing before placement.",
    ],
  },
  {
    title: "Conflicts of interest",
    paragraphs: [
      "We carry no equity holdings in insurance manufacturers, hold no exclusive tie-ups, and operate a written conflicts-of-interest policy reviewed annually by the Board.",
    ],
  },
  {
    title: "Grievance redressal",
    paragraphs: [
      "Clients may raise concerns to the Principal Officer at practice@9xwealth.in. Unresolved grievances may be escalated to the Insurance Ombudsman of the relevant zone, or to the IRDAI Grievance Redressal Cell at igms.irda.gov.in",
    ],
  },
  {
    title: "Public-disclosure policy",
    paragraphs: [
      "Annual public disclosures are filed with IRDAI in the formats and within the timelines prescribed under the IRDAI (Insurance Brokers) Regulations.",
    ],
  },
] as const satisfies readonly EditorialProseSubsection[];

export const DISCLOSURES_FOOTNOTE =
  "The placeholder registration numbers above will be replaced with the issued values once received. This page is informational and does not constitute legal advice.";
