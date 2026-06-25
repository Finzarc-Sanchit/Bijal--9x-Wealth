import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { FaqItem } from "@/components/sections/EditorialFaqSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const WEALTH_ULIPS_METADATA = {
  title: "Wealth & ULIPs — Hand-Modelled Investment Cover · 9X Wealth",
  description:
    "ULIPs and guaranteed-return plans hand-modelled against direct mutual fund alternatives. Transparent after-tax comparison for wealth accumulation — Borivali, Mumbai.",
  keywords: [
    "ULIP vs mutual fund India",
    "guaranteed return plans India",
    "Section 10(10D) ULIP",
    "wealth accumulation insurance",
    "hand-modelled ULIP Mumbai",
    "9X Wealth ULIPs",
  ],
} as const;

export const WEALTH_ULIPS_HERO = {
  backgroundImage: {
    src: "/images/wealth-ulips/hero.avif",
    alt: "Financial charts evoking disciplined wealth modelling",
  },
  pillImage: {
    src: "/images/practice-areas/wealth-ulips.jpg",
    alt: "Investment growth and wealth planning",
  },
  leadWord: "The wrapper",
  headlineLines: [" has a cost.", "So does the", "alternative."] as const,
  epigraph:
    "A ULIP is a mutual fund inside a tax-advantaged shell. We hand-model the math against the equivalent direct fund and place the structure that wins on after-tax outcome — not commission.",
} as const;

export const WEALTH_ULIPS_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const WEALTH_ULIPS_CONVICTION = {
  badge: "The thesis",
  headline: "The honest comparison\nalways\nwins.",
  paragraphs: [
    "Most ULIP advice in India is a sales pitch dressed as analysis. We do the opposite: every product we consider is modelled against the equivalent direct mutual fund (or PMS, for larger corpora) on a single sheet of paper. The conclusion is whichever option produces the better after-tax outcome over the relevant horizon.",
    "Sometimes the answer is the ULIP — particularly under the ₹2.5L Section 10(10D) ceiling, where the tax exemption beats the LTCG drag. Sometimes the answer is a guaranteed plan — particularly as a fixed-income sleeve for a 30%-bracket family for whom 5.5% tax-free beats 6.5% taxable. And sometimes the answer is a direct fund and no wrapper at all. We will tell you which.",
    "What we will not do: place a ULIP because it pays more commission. Place a guaranteed plan because the bank wants it on the book. Quote an IRR with the charges hidden. The standard for the conversation is full disclosure, in advance, on a single page.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const WEALTH_ULIPS_WRAPPERS = {
  badge: "Four wrappers",
  headline: "The vehicles we model on every wealth mandate.",
  items: [
    {
      id: "ULIP",
      title: "Unit Linked Insurance Plans",
      description:
        "A market-linked investment wrapped in a thin layer of insurance. Section 10(10D) exemption under ₹2.5L premium. Useful for tax-efficient long-horizon accumulation with structural protection.",
      image: {
        src: "/images/practice-areas/wealth-ulips.jpg",
        alt: "Unit linked insurance plans for wealth accumulation",
      },
    },
    {
      id: "GTD",
      title: "Guaranteed Return Plans",
      description:
        "Non-participating endowments locking in 5.5–6.5% IRR tax-free for 20–35 years. The fixed-income sleeve for a 30%-bracket family.",
      image: {
        src: "/images/process/stewardship.jpg",
        alt: "Guaranteed return plans as fixed-income wealth sleeves",
      },
    },
    {
      id: "PAR",
      title: "Participating Endowments",
      description:
        "A guaranteed sum assured plus participation in the insurer's surplus. Modest returns, but the bonus structure makes the math non-obvious. We benchmark against transparent alternatives.",
      image: {
        src: "/images/process/architecture.jpg",
        alt: "Participating endowment structures benchmarked transparently",
      },
    },
    {
      id: "WL",
      title: "Whole Life Cover",
      description:
        "Lifelong protection layered over a smaller cash-value component. Structural use cases (perpetual succession liquidity) outweigh the return profile.",
      image: {
        src: "/images/process/conversation.jpg",
        alt: "Whole life cover for perpetual succession liquidity",
      },
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const WEALTH_ULIPS_PROCESS = {
  badge: "How we work",
  headline: "Four principles, transparently applied.",
  items: [
    {
      id: "01",
      title: "We start with the alternative",
      description:
        "Every wealth product is modelled against the equivalent direct mutual fund or PMS. The math is presented in a single page; the conclusion is whichever is better.",
      image: {
        src: "/images/wealth-ulips/process/process-1.webp",
        alt: "Benchmarking wealth products against direct mutual fund and PMS alternatives",
      },
    },
    {
      id: "02",
      title: "Section 10(10D) is a real benefit, not a sales pitch",
      description:
        "For premiums under ₹2.5L, ULIPs retain a meaningful tax edge. We use it where it applies and decline it where it does not.",
      image: {
        src: "/images/wealth-ulips/process/process-2.webp",
        alt: "Section 10(10D) tax efficiency applied transparently to ULIP premiums",
      },
    },
    {
      id: "03",
      title: "Charges are disclosed in full, in advance",
      description:
        "Premium-allocation, fund-management, mortality, and administration — all of it, on a single sheet, before any premium is paid.",
      image: {
        src: "/images/wealth-ulips/process/process-3.webp",
        alt: "Full disclosure of ULIP charges before premium payment",
      },
    },
    {
      id: "04",
      title: "Wrapper benefits are real or they are abandoned",
      description:
        "MWPA assignment, settlement options, succession routing — if the wrapper does work the alternative cannot, we use it. If not, we go direct.",
      image: {
        src: "/images/wealth-ulips/process/process-4.webp",
        alt: "MWPA and succession wrapper evaluation for wealth products",
      },
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const WEALTH_ULIPS_FAQ = {
  badge: "Frequently asked",
  headline: "ULIPs and wealth, candidly answered.",
  items: [
    {
      question: "When does a ULIP outperform a direct mutual fund?",
      answer:
        "Rarely on pure return, frequently on tax. For premiums under ₹2.5 lakh annually, Section 10(10D) currently exempts ULIP maturity proceeds — versus 10–12.5% LTCG on equity MFs. For families above that threshold, ULIPs make sense only when the wrapper provides specific structural benefits: forced compounding discipline, MWPA-protected accumulation, or settlement options that align with succession.",
    },
    {
      question: "How are ULIP charges actually structured?",
      answer:
        "A ULIP carries premium-allocation, fund-management, policy-administration, and mortality charges. Modern ULIPs return mortality and admin charges at maturity, leaving fund management at 1.0–1.35%. We model the all-in cost against the equivalent direct MF and present the gap candidly.",
    },
    {
      question: "What about guaranteed return plans?",
      answer:
        "Guaranteed plans (non-participating endowments) lock in 5.5–6.5% IRR for 20–35 years, tax-free at maturity. Useful as a fixed-income sleeve in the post-tax portfolio for a 30%-bracket family — particularly when the alternative is a 6.5% taxable bond yielding 4.5% post-tax. We rarely recommend them for younger investors with longer horizons.",
    },
    {
      question: "Can ULIPs be assigned under MWPA?",
      answer:
        "Yes. The wrapper structure makes ULIPs a particularly good vehicle for MWPA assignment — the corpus accumulates inside the trust from day one rather than appearing only at the moment of claim. We use this for families whose primary protection structure is MWPA.",
    },
    {
      question: "What is your stance on bank-distributor ULIP recommendations?",
      answer:
        "Cautious. Bank distribution is incentive-driven, and the policies most heavily promoted are rarely the most efficient for the buyer. We model the proposed product against three alternatives and present the math. If the bank is right, we say so. Most of the time, they are not.",
    },
    {
      question: "Do you recommend single-premium ULIPs?",
      answer:
        "Selectively. Single-premium ULIPs above ₹2.5 lakh lose Section 10(10D) treatment, so they compete head-on with mutual funds on after-tax return. We use them only when the structural benefits — settlement options, MWPA wrap, or a specific guaranteed feature — clear the cost gap.",
    },
  ] as const satisfies readonly FaqItem[],
} as const;

export const WEALTH_ULIPS_RELATED = {
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
      title: "Glossary",
      description: "A–Z of insurance, estate, and succession terms used across our practice.",
      href: "/resources/glossary",
    },
    {
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: "/resources/mwpa-guide",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
