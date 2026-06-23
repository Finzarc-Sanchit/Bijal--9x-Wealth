import type { CompactPracticeCardImage } from "@/components/cards/compact-practice-card";

export type TermLegacyStructureItem = {
  id: string;
  title: string;
  description: string;
  image: CompactPracticeCardImage;
};
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { FaqItem } from "@/components/sections/EditorialFaqSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GlassCardMetricsCta, MetricCardData } from "@/components/sections/GlassCardMetricsSection";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const TERM_LEGACY_METADATA = {
  title: "High-Sum Term & Legacy Cover | 9X Wealth — Borivali, Mumbai",
  description:
    "High-sum term insurance structured through MWPA, HUF, and trust frameworks. Creditor-aware legacy cover so proceeds reach the family you intend — Borivali, Mumbai.",
  keywords: [
    "high sum term insurance Mumbai",
    "MWPA term insurance",
    "legacy cover Borivali",
    "term insurance estate planning",
    "creditor proof life insurance India",
    "9X Wealth term cover",
  ],
} as const;

export const TERM_LEGACY_HERO = {
  backgroundImage: {
    src: "/images/term-legacy/hero3.webp",
    alt: "Warm editorial portrait evoking family legacy and protection",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "Family legacy and high-sum term insurance planning",
  },
  leadWord: "High-sum ",
  headlineLines: ["term cover,", "properly architected."] as const,
  epigraph:
    "A term policy that pays the wrong estate is a policy that has failed. We structure cover so the proceeds reach the family you intend — not the creditors, not the disputes.",
} as const;

export const TERM_LEGACY_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
  {
    label: "Read about MWPA",
    href: "/resources/mwpa-guide",
    variant: "secondary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const TERM_LEGACY_CONVICTION = {
  badge: "The conviction",
  headline: "Insurance is structural,\nnot transactional.",
  paragraphs: [
    "A high-sum term policy is the simplest, cheapest, most powerful instrument in private wealth — and the most frequently mis-structured. Twelve years ago our founder watched a client family lose a great deal because the policy paid the wrong estate. The corpus arrived; the fragmentation followed.",
    [
      {
        type: "text",
        value:
          "That experience is why we treat term cover as a structural instrument of succession, not a commodity premium. Every policy we place is built around three questions: ",
      },
      { type: "highlight", value: "Whose life is being insured?" },
      { type: "text", value: " " },
      { type: "highlight", value: "Whose hands receive the proceeds?" },
      { type: "text", value: " " },
      { type: "highlight", value: "And what stands between those two?" },
    ],
    "For most families, the answer involves the Married Women's Property Act, an HUF, or a private trust. We walk you through each, model the math, and place the cover with the right insurer at the right structure.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const TERM_LEGACY_PROCESS = {
  eyebrow: "What we promise",
  headline: "Six commitments, on every term mandate.",
  leftCopy:
    "Every high-sum term mandate we open is governed by the same six commitments — from sum assured calibration through lifelong claims advocacy. The standard does not vary with premium size.",
  ctas: [
    {
      label: "Schedule a Conversation",
      href: "/contact",
      isPrimary: true,
    },
  ] as const satisfies readonly GlassCardMetricsCta[],
  items: [
    {
      id: "01",
      title: "Sum assured calibrated to succession",
      description:
        "We start with succession liabilities — promoter pledges, business loans, estate duty exposure — then layer lifestyle continuation. Not a multiple of salary.",
      imageSrc: "/images/term-legacy/commitment/commitment-1.webp",
    },
    {
      id: "02",
      title: "Ownership structured against the right life",
      description:
        "A policy that pays the wrong estate is a policy that fails. We structure under MWPA, HUF, or trust so the corpus reaches the intended beneficiary, creditor-proof.",
      imageSrc: "/images/term-legacy/commitment/commitment-2.webp",
    },
    {
      id: "03",
      title: "Multi-insurer placement",
      description:
        "For sums beyond Indian capacity, we co-broker excess layers through Lloyd's and GIFT City IFSC. Single point of contact, multi-carrier coverage.",
      imageSrc: "/images/term-legacy/commitment/commitment-3.webp",
    },
    {
      id: "04",
      title: "Medical underwriting at your residence",
      description:
        "Tele-medicals, blood draws, and ECGs conducted privately. We negotiate medical loadings on your behalf when prior conditions surface.",
      imageSrc: "/images/term-legacy/commitment/commitment-4.webp",
    },
    {
      id: "05",
      title: "Lifelong claims advocacy",
      description:
        "Our partners own the claim end-to-end on behalf of the surviving family — from death certificate collation through to the proceeds reaching the right account.",
      imageSrc: "/images/term-legacy/commitment/commitment-5.webp",
    },
    {
      id: "06",
      title: "Quarterly review against changing wealth",
      description:
        "As the business grows or the estate restructures, the cover is re-quoted. The policy is treated as a living instrument, not a one-time transaction.",
      imageSrc: "/images/term-legacy/commitment/commitment-6.webp",
    },
  ] as const satisfies readonly MetricCardData[],
} as const;

export const TERM_LEGACY_STRUCTURES = {
  badge: "Three structures",
  headline: "Choose the architecture that fits the family.",
  items: [
    {
      id: "MWPA",
      title: "Married Women's Property Act",
      description:
        "Creates an irrevocable trust. Proceeds become the separate property of the wife and named children — protected from creditors of the policyholder's estate.",
      image: {
        src: "/images/term-legacy/commitment/commitment-2.webp",
        alt: "Married Women's Property Act term insurance structure",
      },
    },
    {
      id: "HUF",
      title: "Hindu Undivided Family",
      description:
        "Karta as proposer. Useful for multi-generational corpora where the cover should belong to the family unit, not an individual.",
      image: {
        src: "/images/term-legacy/commitment/commitment-1.webp",
        alt: "Hindu Undivided Family succession structure",
      },
    },
    {
      id: "TRUST",
      title: "Private discretionary trust",
      description:
        "Trustees own the policy and direct proceeds per a deed. The cleanest structure for complex blended families and for promoters with overseas successors.",
      image: {
        src: "/images/term-legacy/commitment/commitment-3.webp",
        alt: "Private discretionary trust legacy structure",
      },
    },
  ] as const satisfies readonly TermLegacyStructureItem[],
} as const;

export const TERM_LEGACY_FAQ = {
  badge: "Frequently asked",
  headline: "Term cover, candidly answered.",
  items: [
    {
      question: "What sum assured is appropriate for a high-income family?",
      answer:
        "Our default starting point is 12–20× annual after-tax income, then we layer in succession liabilities (estate duty exposure, business loans, promoter pledges) and lifestyle continuation for dependants. Most families we serve hold cumulative cover between ₹25 Cr and ₹250 Cr across spouses.",
    },
    {
      question: "How does the Married Women's Property Act (MWPA) protect a term policy?",
      answer:
        "A policy structured under MWPA Section 6 creates an irrevocable trust. The proceeds become a separate property of the wife and named children — beyond the reach of the policyholder's creditors and free from estate-claim disputes. We assist with the assignment language, witness execution, and record-keeping.",
    },
    {
      question: "Can a HUF or family trust own the policy instead?",
      answer:
        "Yes. For multi-generation wealth, we often recommend ownership by a Hindu Undivided Family or a private trust, with the karta or trustee as proposer. This decouples the policy from individual estate proceedings and aligns the corpus with the family's succession plan rather than the proposer's will.",
    },
    {
      question: "Do Indian insurers issue cover above ₹50 Cr per life?",
      answer:
        "Domestic capacity is typically capped at ₹25–50 Cr per life. Beyond that, we co-broker excess layers through Lloyd's of London and GIFT City IFSC products denominated in USD. This is routine for our UHNI mandates.",
    },
    {
      question: "How long should the term run?",
      answer:
        "Long enough to outlive your largest financial obligation. For most promoters and operators that means age 70–75. Where succession architecture requires lifelong cover, we layer a smaller whole-life policy on top of a term core.",
    },
    {
      question: "What happens at the claim stage?",
      answer:
        "Our claims advocacy team owns the matter end-to-end. We collate the death certificate, hospital records, and assignment documents, file with the insurer, escalate any reserves, and follow proceeds through to the right beneficiary account — often within four to six weeks.",
    },
  ] as const satisfies readonly FaqItem[],
} as const;

export const TERM_LEGACY_RELATED = {
  badge: "Continue reading",
  headline: "Connected to this page.",
  items: [
    {
      title: "Private Health Coverage",
      description:
        "Family floater with international hospitalisation and dedicated claim advocates.",
      href: "/services/health",
    },
    {
      title: "Keyman & Enterprise",
      description: "Buy-sell agreements, partner protection, and family-business continuity cover.",
      href: "/services/keyman",
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
    {
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: "/resources/mwpa-guide",
    },
    {
      title: "Business Owners",
      description: "Keyman, buy-sell, and family-business continuity cover.",
      href: "/families/business-owners",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
