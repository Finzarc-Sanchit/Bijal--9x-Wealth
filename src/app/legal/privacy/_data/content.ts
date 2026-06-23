import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { EditorialProseSubsection } from "@/components/sections/EditorialProseSection";

export const PRIVACY_METADATA = {
  title: "Privacy Notice · 9xWealth",
  description:
    "How 9xWealth Insurance Brokers Pvt. Ltd. collects, uses, and protects personal information under IRDAI and DPDP Act requirements.",
  keywords: ["9xWealth privacy", "IRDAI broker privacy", "data protection India"],
} as const;

export const PRIVACY_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Confidential documents",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "Privacy notice",
  },
  leadWord: "Legal · ",
  headlineLines: ["Privacy", "notice."] as const,
  epigraph: "Last updated: 26 April 2026",
} as const;

export const PRIVACY_CTAS = [] as const satisfies readonly HeroCtaConfig[];

export const PRIVACY_INTRO =
  "9xWealth Insurance Brokers Pvt. Ltd. (\"9xWealth\", \"we\", \"our\") is registered with the Insurance Regulatory and Development Authority of India (IRDAI) as a Composite Broker. Our regulatory standing requires us to handle the personal information of clients and prospective clients with the highest standards of confidentiality.";

export const PRIVACY_SECTIONS = [
  {
    title: "What we collect",
    paragraphs: [
      "When you request an audience with the practice, request a quotation, or engage us formally, we collect identifying details (name, email, phone), professional context, and information necessary to underwrite the cover you have asked us to arrange. We never collect Aadhaar or PAN numbers through our website.",
    ],
  },
  {
    title: "How we use it",
    paragraphs: [
      "To respond to your enquiry, prepare proposals, place cover with insurers, administer policies you have placed with us, and meet our regulatory obligations under the IRDAI (Insurance Brokers) Regulations and the Digital Personal Data Protection Act, 2023.",
    ],
  },
  {
    title: "Whom we share it with",
    paragraphs: [
      "Insurers, reinsurers and TPAs to the extent required to bind, service or settle claims under cover you have engaged us to arrange. Statutory authorities where required by law. Our processors (email delivery, hosting, analytics) operate under written confidentiality obligations.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "You may at any time request access to, correction of, or deletion of personal information we hold about you, subject to retention obligations imposed by IRDAI and the income-tax authorities. Write to practice@9xwealth.in",
    ],
  },
  {
    title: "Grievance officer",
    paragraphs: [
      "The grievance officer for matters under this notice is the Principal Officer of the brokerage, contactable at the address above.",
    ],
  },
] as const satisfies readonly EditorialProseSubsection[];

export const PRIVACY_FOOTNOTE =
  "This notice is provided for informational purposes and does not constitute legal advice. Final wording is subject to review by counsel before publication.";
