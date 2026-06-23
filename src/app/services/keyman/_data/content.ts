import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { FaqItem } from "@/components/sections/EditorialFaqSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { PracticeAreasMeta } from "@/components/sections/PracticeAreasSection";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
import type { PracticeArea } from "@/data/practice-areas";

export const KEYMAN_METADATA = {
  title: "Keyman & Enterprise Insurance — Buy-Sell, Partner Protection, Family Business Continuity · 9X Wealth",
  description:
    "Keyman insurance, buy-sell agreements, and partner protection to keep family businesses in family hands — structured, documented, and defensible.",
  keywords: [
    "keyman insurance India",
    "buy-sell agreement insurance",
    "partner protection Mumbai",
    "family business continuity",
    "keyman cover tax deductible",
    "9X Wealth enterprise insurance",
  ],
} as const;

export const KEYMAN_HERO = {
  backgroundImage: {
    src: "/images/keyman/hero.webp",
    alt: "Modern corporate architecture evoking enterprise continuity",
  },
  pillImage: {
    src: "/images/practice-areas/keyman-enterprise.jpg",
    alt: "Business succession and enterprise protection",
  },
  leadWord: "Cover that keeps ",
  headlineLines: ["the business", "in family hands."] as const,
  epigraph:
    "A founder's death does not stop the business — it stops the financing, the negotiations, and the family's claim on the equity. Keyman and buy-sell architecture restarts each one.",
} as const;

export const KEYMAN_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const KEYMAN_CONVICTION = {
  badge: "The thesis",
  headline: "Continuity is a financial,\nnot sentimental, problem.",
  paragraphs: [
    "When a founder, partner, or critical operator dies, the business does not stop running. The financing stops. The lender calls in the loan, the supplier shortens credit terms, the bank withdraws the working capital line. Eighteen months later — long after the funeral — the family discovers that the equity has been diluted, the partners have consolidated, and the inheritance has become a memory.",
    "Keyman cover and buy-sell architecture exist to give the family the same liquidity, at the same moment, that the partners and creditors already have. The corpus arrives within four to six weeks of the claim. The lender is reassured. The successor is recruited. The family equity is protected.",
    "We treat this as the most under-deployed instrument in Indian family-business protection — and the most consequential when a sudden event occurs. We model the math, document the methodology, and structure the policy so the premium is deductible and the claim is defensible.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const KEYMAN_STRUCTURES = {
  badge: "Six structures",
  headline: "Cover sized to the situation, not the brochure.",
  items: [
    {
      id: "01",
      title: "Pure keyman policy",
      description:
        "Company-owned, company-beneficiary cover on a critical individual. Funds operational continuity, lender reassurance, and successor recruitment.",
    },
    {
      id: "02",
      title: "Cross-purchase buy-sell",
      description:
        "Each partner owns term cover on the others. On a death, the proceeds fund the purchase of the deceased's shares from the family at a pre-agreed valuation.",
    },
    {
      id: "03",
      title: "Entity-redemption buy-sell",
      description:
        "The company owns cover on each shareholder. On a death, the company uses the proceeds to redeem the deceased's shares from the family. Cleaner with many shareholders.",
    },
    {
      id: "04",
      title: "Loan-protection cover",
      description:
        "Cover sized to outstanding business loans, with the lender as a structured beneficiary. Keeps personal and family assets out of recovery proceedings.",
    },
    {
      id: "05",
      title: "Critical-illness rider",
      description:
        "Lump-sum payout on diagnosis of cancer, cardiac events, or stroke. Funds extended absence, treatment, and a graceful succession.",
    },
    {
      id: "06",
      title: "Disability income rider",
      description:
        "Monthly income to the company in the event of permanent disability. Sustains operations through the recruitment-and-handover period.",
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const KEYMAN_STRUCTURES_META = {
  eyebrow: KEYMAN_STRUCTURES.badge,
  heading: ["Cover sized to the situation,", "not the brochure."],
  description:
    "The operational and strategic pillars defining our Keyman framework.",
} as const satisfies PracticeAreasMeta;

export const KEYMAN_STRUCTURE_AREAS = [
  {
    id: KEYMAN_STRUCTURES.items[0].id,
    title: KEYMAN_STRUCTURES.items[0].title,
    description: KEYMAN_STRUCTURES.items[0].description,
    cta: "Schedule a Conversation",
    href: "/contact",
    image: {
      src: "/images/practice-areas/keyman-enterprise.jpg",
      alt: "Pure keyman policy protecting critical business leadership",
    },
  },
  {
    id: KEYMAN_STRUCTURES.items[1].id,
    title: KEYMAN_STRUCTURES.items[1].title,
    description: KEYMAN_STRUCTURES.items[1].description,
    cta: "Schedule a Conversation",
    href: "/contact",
    image: {
      src: "/images/process/conversation.jpg",
      alt: "Cross-purchase buy-sell agreement between business partners",
    },
  },
  {
    id: KEYMAN_STRUCTURES.items[2].id,
    title: KEYMAN_STRUCTURES.items[2].title,
    description: KEYMAN_STRUCTURES.items[2].description,
    cta: "Schedule a Conversation",
    href: "/contact",
    image: {
      src: "/images/process/architecture.jpg",
      alt: "Entity-redemption buy-sell structure for shareholder continuity",
    },
  },
  {
    id: KEYMAN_STRUCTURES.items[3].id,
    title: KEYMAN_STRUCTURES.items[3].title,
    description: KEYMAN_STRUCTURES.items[3].description,
    cta: "Schedule a Conversation",
    href: "/contact",
    image: {
      src: "/images/process/stewardship.jpg",
      alt: "Loan-protection cover aligned to outstanding business liabilities",
    },
  },
  {
    id: KEYMAN_STRUCTURES.items[4].id,
    title: KEYMAN_STRUCTURES.items[4].title,
    description: KEYMAN_STRUCTURES.items[4].description,
    cta: "Schedule a Conversation",
    href: "/contact",
    image: {
      src: "/images/practice-areas/private-health-coverage.jpg",
      alt: "Critical-illness rider funding succession and treatment",
    },
  },
  {
    id: KEYMAN_STRUCTURES.items[5].id,
    title: KEYMAN_STRUCTURES.items[5].title,
    description: KEYMAN_STRUCTURES.items[5].description,
    cta: "Schedule a Conversation",
    href: "/contact",
    image: {
      src: "/images/process/activation.jpg",
      alt: "Disability income rider sustaining operations through handover",
    },
  },
] as const satisfies readonly PracticeArea[];

export const KEYMAN_FAQ = {
  badge: "Frequently asked",
  headline: "Keyman cover, candidly answered.",
  items: [
    {
      question: "What does keyman insurance actually cover?",
      answer:
        "A keyman policy is owned by the company, with the company as beneficiary. On the death (or, with riders, the disability) of the named individual, the proceeds flow into the company — providing liquidity to absorb the operational shock, repay loans, recruit a successor, or buy out shares from the deceased's estate.",
    },
    {
      question: "How is the sum assured determined?",
      answer:
        "Indian tax authorities accept three valuation methods: a multiple of remuneration (typically 5–10×), a contribution-to-net-profits multiple, or a purpose-built calculation tied to specific liabilities (loan repayment, buy-sell funding). We document the methodology so the premium is deductible and the claim is defensible.",
    },
    {
      question: "Is the premium deductible? Are proceeds taxable?",
      answer:
        "Premiums paid by the company on a bona fide keyman policy are deductible business expenditure under Section 37(1). Proceeds received by the company are taxable as business income. Proceeds received by the family on a buy-sell-funded individual policy follow Section 10(10D). We model the post-tax outcome before placement.",
    },
    {
      question: "How does a buy-sell agreement work?",
      answer:
        "Two or more partners cross-own term policies on each other (or the company owns one on each). On the death of any partner, the policy proceeds fund the purchase of the deceased's shares from the family at a pre-agreed valuation formula. The family receives liquidity; the partners retain control.",
    },
    {
      question: "Can a family business benefit from keyman cover even with a single shareholder?",
      answer:
        "Yes — and often more so. A single-promoter business is a single point of failure. Keyman cover funds the operational continuity period — roughly 18 months — during which a successor can be inducted, lenders reassured, and family equity protected.",
    },
    {
      question: "What about the COO, CFO, or technical key personnel?",
      answer:
        "Keyman cover is not limited to the founder. Any individual whose departure would meaningfully disrupt revenue, financing, or operations qualifies. We routinely place policies on CFOs, head distillers, head chefs, and lead designers.",
    },
  ] as const satisfies readonly FaqItem[],
} as const;

export const KEYMAN_RELATED = {
  badge: "Continue reading",
  headline: "Connected to this page.",
  items: [
    {
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: "/services/term-legacy",
    },
    {
      title: "Wealth & ULIPs",
      description: "Hand-modelled ULIPs and guaranteed-return plans, evaluated against MF alternatives.",
      href: "/services/wealth-ulips",
    },
    {
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
      href: "/services/global",
    },
    {
      title: "Business Owners",
      description: "Keyman, buy-sell, and family-business continuity cover.",
      href: "/families/business-owners",
    },
    {
      title: "Listed Promoters",
      description: "Pledge cover, SEBI considerations, and MWPA on promoter holdings.",
      href: "/families/listed-promoters",
    },
    {
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: "/resources/mwpa-guide",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
