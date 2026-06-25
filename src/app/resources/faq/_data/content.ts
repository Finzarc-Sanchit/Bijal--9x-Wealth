import type { FaqItem } from "@/components/sections/EditorialFaqSection";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const FAQ_METADATA = {
  title: "Frequently Asked — 9xWealth · 9xWealth",
  description:
    "Considered answers on the practice, engagement, products, structuring, and confidentiality — from 9xWealth.",
  keywords: [
    "9xWealth FAQ",
    "insurance broker questions",
    "MWPA FAQ",
    "term cover India FAQ",
  ],
} as const;

export const FAQ_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Professional consultation and Q&A",
  },
  headline: "The questions we hear most often.",
  description:
    "Five chapters of considered answers — about the practice, the engagement, the products, the structuring, and the discretion that surrounds it all.",
} as const;

export const FAQ_CHAPTERS = [
  {
    badge: "About 9xWealth",
    headline: "About the practice.",
    items: [
      {
        question: "What is 9xWealth?",
        answer:
          "An independent insurance brokerage stewarding ₹10,000+ Cr in annual premiums on behalf of approximately 2,400 Indian families of substance. Founded in Mumbai in 2013, with sister offices in Bengaluru and Delhi-NCR. Registered as an IRDAI Composite Broker and as an intermediary in the GIFT City IFSC.",
      },
      {
        question: 'What does "independent" mean in this context?',
        answer:
          "We are not a tied agent of any insurer. We are paid by the insurance carrier as a standard market practice, but the choice of carrier and product is ours alone — we will recommend the structure that best suits the family, regardless of which carrier writes it.",
      },
      {
        question: "How is 9xWealth different from a private bank or wealth manager?",
        answer:
          "Private banks distribute insurance products incidentally to their primary investment business; wealth managers rarely have specialist underwriting or claims advocacy. We do only insurance, and we treat each placement as a multi-decade relationship rather than a transaction.",
      },
      {
        question: "Who is the typical 9xWealth client?",
        answer:
          "Indian families with ₹5 Cr+ in net wealth, including a meaningful share of UHNI families (₹100 Cr+), business owners, listed-company promoters, and global Indian households. We work entirely by referral; we do not solicit publicly.",
      },
    ],
  },
  {
    badge: "Engagement",
    headline: "How we work.",
    items: [
      {
        question: "How does an engagement begin?",
        answer:
          "With a confidential conversation — at our offices, at your residence, or over a private dinner. There is no fee for this conversation, no obligation, and no public footprint. A senior partner will respond within one business day of contact.",
      },
      {
        question: "How long does the architecture process take?",
        answer:
          "For most families, six weeks from first conversation to placed cover: two weeks of conversation and modelling, two weeks of insurer dialogue and structuring, two weeks of medical underwriting and policy issuance. Complex multi-jurisdiction or specie placements can take longer.",
      },
      {
        question: "Are reviews ongoing?",
        answer:
          "Yes. Our standard cadence is annual reviews for HNI mandates, quarterly home reviews for UHNI mandates. Premiums are re-quoted, network hospitals are audited, and structures are revisited as the family and business evolve.",
      },
      {
        question: "Are there fees beyond standard insurer commissions?",
        answer:
          "For our standard practice, no. For specific advisory engagements that fall outside placement (estate-planning coordination, claims advocacy on policies we did not place, training for family-office staff), we may charge a fixed fee, agreed in advance.",
      },
    ],
  },
  {
    badge: "Coverage",
    headline: "On the products themselves.",
    items: [
      {
        question: "What sum assured is right for our family?",
        answer:
          "Our default starting point is 12–20× annual after-tax income, then we layer in succession liabilities (estate-duty exposure, business loans, promoter pledges) and lifestyle continuation for dependants. Most families we serve hold cumulative cover between ₹25 Cr and ₹250 Cr across spouses.",
      },
      {
        question: "Can we cover sums above Indian capacity?",
        answer:
          "Yes. Domestic capacity is typically capped at ₹25–50 Cr per life. Beyond that, we co-broker excess layers through Lloyd's of London and place dollar-denominated cover via GIFT City IFSC. This is routine for our UHNI mandates.",
      },
      {
        question: "What about pre-existing medical conditions?",
        answer:
          "Most insurers impose two-to-four-year waits on disclosed pre-existing conditions on health policies, and may apply medical loadings on life policies. We pre-screen the medical history, identify carriers that take a more favourable view of specific conditions, and place with the right one — sometimes at a small loading.",
      },
      {
        question: "Do you place cover for senior parents?",
        answer:
          "Yes. Senior parental cover is a separate market with dedicated products. We place senior plans, GIFT City policies for parents with international exposure, and where new cover is no longer underwritten we structure self-funded health corpora supported by critical-illness and home-care policies.",
      },
    ],
  },
  {
    badge: "Structure & Tax",
    headline: "On structuring and tax.",
    items: [
      {
        question: "Should the policy be assigned under MWPA?",
        answer:
          "For most term policies on married promoters and operators, yes. Section 6 of the Married Women's Property Act creates an irrevocable trust over the proceeds, making them the separate property of the wife and named children — beyond the reach of the policyholder's creditors. We treat it as the default structure for personal term cover.",
      },
      {
        question: "When does an HUF or trust make more sense?",
        answer:
          "For multi-generational corpora where the cover should belong to the family unit (HUF) or to a defined succession framework (private trust), these structures decouple the policy from any individual's estate proceedings. Standard for UHNI families and listed promoters.",
      },
      {
        question: "Are insurance proceeds taxable in India?",
        answer:
          "Maturity proceeds are typically exempt under Section 10(10D), subject to conditions (premium below 10% of sum assured, ULIP premium under ₹2.5L per year). Death proceeds are exempt without conditions. Keyman policy proceeds received by the company are taxable as business income. We model the after-tax outcome in advance.",
      },
      {
        question: "How does FATCA / CRS reporting work?",
        answer:
          "Certain insurance products held by US persons (FATCA) or residents of CRS jurisdictions require disclosure to the relevant authorities. Compliant disclosure is straightforward when products are structured properly from the start. We document and file as required for cross-border policies.",
      },
    ],
  },
  {
    badge: "Confidentiality",
    headline: "On discretion and confidentiality.",
    items: [
      {
        question: "How private is the process?",
        answer:
          "Highly. Specie and K&R placements proceed through pre-existing relationships under NDA. UHNI mandates are not discussed externally, and we do not publish client logos or names. We hold ISO 27001:2022 certification for information security and apply strict access controls internally.",
      },
      {
        question: "Will my information be shared with insurers beyond what is necessary?",
        answer:
          "No. We share with insurers only what is required for underwriting and placement, on a need-to-know basis. Medical and financial details are submitted via secured channels, retained per regulatory minimums, and never sold or repurposed.",
      },
    ],
  },
] as const satisfies readonly {
  badge: string;
  headline: string;
  items: readonly FaqItem[];
}[];

export const FAQ_RELATED = {
  badge: "Continue",
  headline: "Where to read further.",
  items: [
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
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: "/services/term-legacy",
    },
    {
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
      href: "/services/global",
    },
    {
      title: "UHNI Families",
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
      href: "/families/uhni",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
