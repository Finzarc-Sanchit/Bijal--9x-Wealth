import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const GLOSSARY_METADATA = {
  title: "Glossary — Insurance, Estate & Succession Terms · 9xWealth",
  description:
    "A–Z of insurance, estate, and succession terms used across the 9xWealth practice and the Indian insurance ecosystem.",
  keywords: [
    "insurance glossary",
    "estate planning terms India",
    "MWPA definition",
    "HUF insurance",
    "succession terms",
  ],
} as const;

export const GLOSSARY_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Reference dictionary and editorial study",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "Insurance and estate glossary",
  },
  leadWord: "The vocabulary ",
  headlineLines: ["of", "stewardship."] as const,
  epigraph:
    "Terms used across our practice, and across the Indian insurance and estate ecosystem more broadly. Linked into the relevant pages where the structure or product is treated in depth.",
} as const;

export const GLOSSARY_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const GLOSSARY_TERMS = {
  badge: "Glossary",
  headline: "Insurance, estate, and succession terms.",
  items: [
    {
      id: "AGREED-VALUE",
      title: "Agreed Value",
      subtitle: "Agreed Value",
      description:
        "A specie or motor cover where the payout matches a pre-agreed appraised value of the asset, rather than depreciated market value at claim. Standard for fine art, jewellery, classic cars.",
    },
    {
      id: "BENEFICIARY",
      title: "Beneficiary",
      subtitle: "Beneficiary",
      description:
        "The party named to receive policy proceeds. Distinct from the policy owner and the insured life — three roles that can be three different parties or entities.",
    },
    {
      id: "BUY-SELL",
      title: "Buy-Sell Agreement",
      subtitle: "Buy-Sell Agreement",
      description:
        "A funded agreement among partners that triggers the orderly purchase of a deceased partner's shares from the family at a pre-agreed valuation. Funded by life cover. See Keyman & Enterprise.",
    },
    {
      id: "CRITICAL-ILLNESS",
      title: "Critical Illness Cover",
      subtitle: "Critical Illness Cover",
      description:
        "A lump-sum payout on diagnosis of one of a defined list of serious conditions (cancer, cardiac events, stroke, organ failure). Independent of hospitalisation cost.",
    },
    {
      id: "D-AND-O",
      title: "D&O Liability",
      subtitle: "D&O Liability",
      description:
        "Directors' and officers' liability cover. Indemnifies directors against personal liability for management decisions. Investigations cover for SEBI, ED, and tax matters layered alongside.",
    },
    {
      id: "FATCA",
      title: "FATCA",
      subtitle: "FATCA",
      description:
        "Foreign Account Tax Compliance Act. US legislation requiring foreign financial institutions to disclose accounts and certain insurance products held by US persons. Compliant disclosure is straightforward when products are structured with FATCA in mind from the start.",
    },
    {
      id: "FAMILY-FLOATER",
      title: "Family Floater",
      subtitle: "Family Floater",
      description:
        "A health policy where a single sum insured is shared across the named family members — typically self, spouse, children, sometimes parents. More efficient than separate individual policies for HNI families.",
    },
    {
      id: "GIFT-CITY",
      title: "GIFT City IFSC",
      subtitle: "GIFT City IFSC",
      description:
        "Gujarat International Finance Tec-City's International Financial Services Centre — a special-economic zone enabling dollar-denominated insurance from Indian soil, regulated by the IFSCA. Used for NRI cover and cross-border structures.",
    },
    {
      id: "GUARANTEED-RETURN-PLAN",
      title: "Guaranteed Return Plan",
      subtitle: "Guaranteed Return Plan",
      description:
        "A non-participating endowment policy that locks in a guaranteed IRR (typically 5.5–6.5%) for 20–35 years, tax-free at maturity under Section 10(10D). See Wealth & ULIPs.",
    },
    {
      id: "HUF",
      title: "Hindu Undivided Family",
      subtitle: "Hindu Undivided Family",
      description:
        "A taxable entity under Indian law representing a joint family, with the karta as legal head. A useful policy owner for multi-generational corpora — the cover belongs to the family unit, not an individual.",
    },
    {
      id: "HUMAN-LIFE-VALUE",
      title: "Human Life Value (HLV)",
      subtitle: "Human Life Value (HLV)",
      description:
        "A method of estimating term cover by projecting the present value of the insured's future earnings. A starting point for sum-assured calculation, but not a substitute for succession-driven sizing.",
    },
    {
      id: "IRDAI",
      title: "IRDAI",
      subtitle: "IRDAI",
      description:
        "Insurance Regulatory and Development Authority of India. The statutory regulator for insurance and reinsurance in India. 9xWealth is registered as an IRDAI Composite Broker.",
    },
    {
      id: "KEYMAN",
      title: "Keyman Insurance",
      subtitle: "Keyman Insurance",
      description:
        "A company-owned policy on the life of an individual whose loss would materially disrupt the business. Premium deductible under Section 37(1); proceeds taxable as business income. See Keyman & Enterprise.",
    },
    {
      id: "KR",
      title: "Kidnap & Ransom (K&R)",
      subtitle: "Kidnap & Ransom (K&R)",
      description:
        "Insurance indemnifying ransom payment, related expenses, and access to a global crisis-response firm. Discreet underwriting only — even the existence of the policy is undisclosed within the household.",
    },
    {
      id: "LLOYD",
      title: "Lloyd's of London",
      subtitle: "Lloyd's of London",
      description:
        "The London-based insurance market organising syndicates that take on risks beyond the capacity of any single insurer. Used by 9xWealth for excess-layer cover beyond Indian domestic limits.",
    },
    {
      id: "LRS",
      title: "LRS",
      subtitle: "LRS",
      description:
        "Liberalised Remittance Scheme. The RBI framework permitting Indian residents to remit up to USD 250,000 per financial year for permitted purposes — including premium payment on certain GIFT City and offshore policies.",
    },
    {
      id: "MWPA",
      title: "Married Women's Property Act (MWPA)",
      subtitle: "Married Women's Property Act (MWPA)",
      description:
        "Indian legislation creating an irrevocable trust over a life policy assigned under Section 6, making the proceeds the separate property of the wife and named children — beyond the reach of the policyholder's creditors. Read the complete guide: MWPA: A Complete Guide.",
    },
    {
      id: "NOMINEE",
      title: "Nominee",
      subtitle: "Nominee",
      description:
        "The party named to receive policy proceeds in the absence of an assignment. Distinct from a beneficiary under a trust assignment — a nominee is merely a receiver, not the rightful owner. Critical distinction in succession planning.",
    },
    {
      id: "OCI",
      title: "OCI",
      subtitle: "OCI",
      description:
        "Overseas Citizen of India. A foreign citizen of Indian origin holding lifelong visa-free entry rights to India. OCI families often hold mixed-jurisdiction wealth and require coordinated cross-border insurance architecture.",
    },
    {
      id: "PLEDGE-COVER",
      title: "Pledge Cover",
      subtitle: "Pledge Cover",
      description:
        "Life cover sized to outstanding loans against pledged shares, with a structured beneficiary path to the lender. Releases the pledge on event, returns the equity to the family. Standard for listed-company promoters.",
    },
    {
      id: "SECTION-10-10D",
      title: "Section 10(10D)",
      subtitle: "Section 10(10D)",
      description:
        "The Income Tax Act provision exempting life insurance maturity proceeds from tax, subject to conditions (premium under 10% of sum assured, ULIP premium under ₹2.5L per year, etc.). The basis for the tax efficiency of most Indian life products.",
    },
    {
      id: "SPECIE",
      title: "Specie Insurance",
      subtitle: "Specie Insurance",
      description:
        "All-risks cover for high-value moveable property — jewellery, fine art, watches, classic cars, rare wines. Worldwide, transit-included, narrowly excluded. See Specie & High-Value.",
    },
    {
      id: "SUPER-TOP-UP",
      title: "Super Top-Up",
      subtitle: "Super Top-Up",
      description:
        "A health policy that pays only after a defined deductible (typically equal to a base policy's sum insured) is exhausted. Stacks above a base floater to provide catastrophic-event coverage at a low marginal premium.",
    },
    {
      id: "TPA",
      title: "TPA",
      subtitle: "TPA",
      description:
        "Third-Party Administrator. Processes health claims on behalf of insurers. Standard TPA service is procedural; 9xWealth supplements with senior claim advocates who own the matter end-to-end.",
    },
    {
      id: "TRUST",
      title: "Trust (as Policy Owner)",
      subtitle: "Trust (as Policy Owner)",
      description:
        "A private discretionary trust may own a life policy and direct proceeds per a trust deed. The cleanest structure for blended families and for promoters with overseas successors. Decouples the policy from individual estate proceedings.",
    },
    {
      id: "ULIP",
      title: "ULIP",
      subtitle: "ULIP",
      description:
        "Unit Linked Insurance Plan. A market-linked investment wrapped in a thin layer of life cover. Tax-efficient under ₹2.5L premium via Section 10(10D). See Wealth & ULIPs.",
    },
    {
      id: "WHOLE-LIFE",
      title: "Whole Life Cover",
      subtitle: "Whole Life Cover",
      description:
        "Lifelong cover paying out on death whenever it occurs, layered over a smaller cash-value component. Used selectively where succession architecture requires perpetual liquidity.",
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const GLOSSARY_RELATED = {
  badge: "Continue",
  headline: "Where these terms are put to use.",
  items: [
    {
      title: "MWPA: A Complete Guide",
      description:
        "How the Married Women's Property Act protects your term cover from creditors and dilution.",
      href: "/resources/mwpa-guide",
    },
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
      title: "Frequently Asked",
      description:
        "Considered answers on term, health, keyman, ULIPs, global, and specie cover.",
      href: "/resources/faq",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
