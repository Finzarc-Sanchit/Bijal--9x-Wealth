import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { EditorialProseSubsection } from "@/components/sections/EditorialProseSection";

export const TERMS_METADATA = {
  title: "Terms of Engagement · 9xWealth",
  description:
    "Terms governing use of the 9xWealth website and the nature of our insurance brokerage service.",
  keywords: ["9xWealth terms", "insurance broker terms India"],
} as const;

export const TERMS_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Legal terms document",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "Terms of engagement",
  },
  leadWord: "Legal · ",
  headlineLines: ["Terms of", "engagement."] as const,
  epigraph: "Last updated: 26 April 2026",
} as const;

export const TERMS_CTAS = [] as const satisfies readonly HeroCtaConfig[];

export const TERMS_SECTIONS = [
  {
    title: "About this site",
    paragraphs: [
      "This website is operated by 9xWealth Insurance Brokers Pvt. Ltd., an IRDAI-licensed Composite Insurance Broker. It is intended for residents of India who are considering, holding, or administering general or life insurance contracts.",
    ],
  },
  {
    title: "Nature of our service",
    paragraphs: [
      "We act as your insurance broker. We do not underwrite. The insurance contract, when bound, is between you and the insurer. We receive remuneration from the insurer in the form of commission and, where applicable, agreed brokerage fees, disclosed in writing before placement.",
    ],
  },
  {
    title: "No investment advice",
    paragraphs: [
      "Nothing on this site constitutes investment advice or a recommendation to acquire a particular product. Cover decisions follow a written needs-analysis specific to your circumstances.",
    ],
  },
  {
    title: "Calculators and illustrations",
    paragraphs: [
      "Cover estimators on this site are educational tools. Actual cover decisions require an underwritten proposal. Illustrations are not contractual.",
    ],
  },
  {
    title: "Engagement terms",
    paragraphs: [
      "When we place cover for you, we will issue formal Terms of Business that supersede anything on this site. Those terms govern the engagement.",
    ],
  },
  {
    title: "Jurisdiction",
    paragraphs: [
      "These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts at Mumbai.",
    ],
  },
] as const satisfies readonly EditorialProseSubsection[];

export const TERMS_FOOTNOTE =
  "These terms are provided for informational purposes and do not constitute legal advice. Final wording is subject to review by counsel before publication.";
