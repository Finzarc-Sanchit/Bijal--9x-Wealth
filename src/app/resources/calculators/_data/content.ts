import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const CALCULATORS_METADATA = {
  title: "Cover Estimator — Sum-Assured Calculator · 9xWealth",
  description:
    "A directional view of the term cover an Indian earner of your profile may consider. For precise architecture, request an audience.",
  keywords: [
    "term cover calculator",
    "sum assured calculator India",
    "human life value calculator",
    "insurance cover estimator",
  ],
} as const;

export const CALCULATORS_HERO = {
  backgroundImage: {
    src: "/images/resources/calci-hero.avif",
    alt: "Financial planning calculator and documents",
  },
  headline: "Cover estimator.",
  description:
    "A directional view of the term cover an Indian earner of your profile may consider. For a precise architecture, request an audience.",
} as const;

export const CALCULATORS_FORM = {
  badge: "Your profile",
  title: "Cover estimator",
  intro:
    "Move each control below. The estimate on the right updates as your inputs change.",
  ageLabel: "Your age",
  ageHint: "Used for working-years projection.",
  ageUnit: "yrs",
  ageDefault: 35,
  ageMin: 25,
  ageMax: 60,
  incomeLabel: "Annual income",
  incomeHint: "Annual household income, in lakhs.",
  incomeUnit: "L / yr",
  incomeDefault: 50,
  incomeMin: 10,
  incomeMax: 500,
  liabilitiesLabel: "Outstanding liabilities",
  liabilitiesHint: "Home loans, business debt, and other obligations.",
  liabilitiesUnit: "Cr",
  liabilitiesDefault: 0,
  liabilitiesMin: 0,
  liabilitiesMax: 50,
  dependentsLabel: "Financial dependents",
  dependentsHint: "Spouse, children, or parents who rely on your income.",
  dependentsDefault: 2,
  dependentsMin: 0,
  dependentsMax: 6,
  resultsBadge: "Your estimate",
  recommendedLabel: "Recommended term cover",
  acrossLabel: "Across",
  workingYearsDefault: 25,
  workingYearsUnit: "working years",
  incomeReplacementLabel: "Income replacement",
  liabilityCoverLabel: "Liability cover",
  dependentEducationLabel: "Dependent education",
  workingYearsLabel: "Working years remaining",
  ctaHeading: "Request an audience",
  ctaDescription:
    "A senior partner will review your profile and propose a cover architecture suited to your family.",
  ctaLabel: "Schedule a Conversation",
  ctaHref: "/contact",
  disclaimer:
    "Indicative only. Final cover depends on lifestyle, succession plans, and underwriting.",
} as const;

export const CALCULATORS_RELATED = {
  badge: "Read further",
  headline: "Once you have the number, the structure matters.",
  items: [
    {
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: "/services/term-legacy",
    },
    {
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: "/resources/mwpa-guide",
    },
    {
      title: "Glossary",
      description: "A–Z of insurance, estate, and succession terms used across our practice.",
      href: "/resources/glossary",
    },
    {
      title: "Frequently Asked",
      description:
        "Considered answers on term, health, keyman, ULIPs, global, and specie cover.",
      href: "/resources/faq",
    },
    {
      title: "UHNI Families",
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
      href: "/families/uhni",
    },
    {
      title: "Business Owners",
      description: "Keyman, buy-sell, and family-business continuity cover.",
      href: "/families/business-owners",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
