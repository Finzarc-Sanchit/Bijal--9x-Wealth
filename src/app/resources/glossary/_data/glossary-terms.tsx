import Link from "next/link";
import type { ReactNode } from "react";

export type GlossaryTerm = {
  id: string;
  term: string;
  body: ReactNode;
};

const TERM_LINK_CLASS = "text-brand-gold transition-colors hover:text-brand-teal hover:underline";

export const GLOSSARY_TERM_ENTRIES: readonly GlossaryTerm[] = [
  {
    id: "agreed-value",
    term: "Agreed Value",
    body: "A specie or motor cover where the payout matches a pre-agreed appraised value of the asset, rather than depreciated market value at claim. Standard for fine art, jewellery, classic cars.",
  },
  {
    id: "beneficiary",
    term: "Beneficiary",
    body: "The party named to receive policy proceeds. Distinct from the policy owner and the insured life — three roles that can be three different parties or entities.",
  },
  {
    id: "buy-sell",
    term: "Buy-Sell Agreement",
    body: (
      <>
        A funded agreement among partners that triggers the orderly purchase of a
        deceased partner&apos;s shares from the family at a pre-agreed valuation.
        Funded by life cover. See{" "}
        <Link href="/services/keyman" className={TERM_LINK_CLASS}>
          Keyman & Enterprise
        </Link>
        .
      </>
    ),
  },
  {
    id: "critical-illness",
    term: "Critical Illness Cover",
    body: "A lump-sum payout on diagnosis of one of a defined list of serious conditions (cancer, cardiac events, stroke, organ failure). Independent of hospitalisation cost.",
  },
  {
    id: "d-and-o",
    term: "D&O Liability",
    body: "Directors' and officers' liability cover. Indemnifies directors against personal liability for management decisions. Investigations cover for SEBI, ED, and tax matters layered alongside.",
  },
  {
    id: "fatca",
    term: "FATCA",
    body: "Foreign Account Tax Compliance Act. US legislation requiring foreign financial institutions to disclose accounts and certain insurance products held by US persons. Compliant disclosure is straightforward when products are structured with FATCA in mind from the start.",
  },
  {
    id: "family-floater",
    term: "Family Floater",
    body: "A health policy where a single sum insured is shared across the named family members — typically self, spouse, children, sometimes parents. More efficient than separate individual policies for HNI families.",
  },
  {
    id: "gift-city",
    term: "GIFT City IFSC",
    body: (
      <>
        Gujarat International Finance Tec-City&apos;s International Financial Services
        Centre — a special-economic zone enabling dollar-denominated insurance
        from Indian soil, regulated by the IFSCA. Used for{" "}
        <Link href="/services/global" className={TERM_LINK_CLASS}>
          NRI cover and cross-border structures
        </Link>
        .
      </>
    ),
  },
  {
    id: "guaranteed-return-plan",
    term: "Guaranteed Return Plan",
    body: (
      <>
        A non-participating endowment policy that locks in a guaranteed IRR
        (typically 5.5–6.5%) for 20–35 years, tax-free at maturity under Section
        10(10D). See{" "}
        <Link href="/services/wealth-ulips" className={TERM_LINK_CLASS}>
          Wealth & ULIPs
        </Link>
        .
      </>
    ),
  },
  {
    id: "huf",
    term: "Hindu Undivided Family",
    body: "A taxable entity under Indian law representing a joint family, with the karta as legal head. A useful policy owner for multi-generational corpora — the cover belongs to the family unit, not an individual.",
  },
  {
    id: "human-life-value",
    term: "Human Life Value (HLV)",
    body: "A method of estimating term cover by projecting the present value of the insured's future earnings. A starting point for sum-assured calculation, but not a substitute for succession-driven sizing.",
  },
  {
    id: "irdai",
    term: "IRDAI",
    body: "Insurance Regulatory and Development Authority of India. The statutory regulator for insurance and reinsurance in India. 9xWealth is registered as an IRDAI Composite Broker.",
  },
  {
    id: "keyman",
    term: "Keyman Insurance",
    body: (
      <>
        A company-owned policy on the life of an individual whose loss would
        materially disrupt the business. Premium deductible under Section 37(1);
        proceeds taxable as business income. See{" "}
        <Link href="/services/keyman" className={TERM_LINK_CLASS}>
          Keyman & Enterprise
        </Link>
        .
      </>
    ),
  },
  {
    id: "kr",
    term: "Kidnap & Ransom (K&R)",
    body: "Insurance indemnifying ransom payment, related expenses, and access to a global crisis-response firm. Discreet underwriting only — even the existence of the policy is undisclosed within the household.",
  },
  {
    id: "lloyd",
    term: "Lloyd's of London",
    body: "The London-based insurance market organising syndicates that take on risks beyond the capacity of any single insurer. Used by 9xWealth for excess-layer cover beyond Indian domestic limits.",
  },
  {
    id: "lrs",
    term: "LRS",
    body: "Liberalised Remittance Scheme. The RBI framework permitting Indian residents to remit up to USD 250,000 per financial year for permitted purposes — including premium payment on certain GIFT City and offshore policies.",
  },
  {
    id: "mwpa",
    term: "Married Women's Property Act (MWPA)",
    body: (
      <>
        Indian legislation creating an irrevocable trust over a life policy
        assigned under Section 6, making the proceeds the separate property of
        the wife and named children — beyond the reach of the policyholder&apos;s
        creditors. Read the complete guide:{" "}
        <Link href="/resources/mwpa-guide" className={TERM_LINK_CLASS}>
          MWPA: A Complete Guide
        </Link>
        .
      </>
    ),
  },
  {
    id: "nominee",
    term: "Nominee",
    body: "The party named to receive policy proceeds in the absence of an assignment. Distinct from a beneficiary under a trust assignment — a nominee is merely a receiver, not the rightful owner. Critical distinction in succession planning.",
  },
  {
    id: "oci",
    term: "OCI",
    body: "Overseas Citizen of India. A foreign citizen of Indian origin holding lifelong visa-free entry rights to India. OCI families often hold mixed-jurisdiction wealth and require coordinated cross-border insurance architecture.",
  },
  {
    id: "pledge-cover",
    term: "Pledge Cover",
    body: (
      <>
        Life cover sized to outstanding loans against pledged shares, with a
        structured beneficiary path to the lender. Releases the pledge on
        event, returns the equity to the family. Standard for{" "}
        <Link href="/families/listed-promoters" className={TERM_LINK_CLASS}>
          listed-company promoters
        </Link>
        .
      </>
    ),
  },
  {
    id: "section-10-10d",
    term: "Section 10(10D)",
    body: "The Income Tax Act provision exempting life insurance maturity proceeds from tax, subject to conditions (premium under 10% of sum assured, ULIP premium under ₹2.5L per year, etc.). The basis for the tax efficiency of most Indian life products.",
  },
  {
    id: "specie",
    term: "Specie Insurance",
    body: (
      <>
        All-risks cover for high-value moveable property — jewellery, fine art,
        watches, classic cars, rare wines. Worldwide, transit-included, narrowly
        excluded. See{" "}
        <Link href="/services/specie" className={TERM_LINK_CLASS}>
          Specie & High-Value
        </Link>
        .
      </>
    ),
  },
  {
    id: "super-top-up",
    term: "Super Top-Up",
    body: "A health policy that pays only after a defined deductible (typically equal to a base policy's sum insured) is exhausted. Stacks above a base floater to provide catastrophic-event coverage at a low marginal premium.",
  },
  {
    id: "tpa",
    term: "TPA",
    body: "Third-Party Administrator. Processes health claims on behalf of insurers. Standard TPA service is procedural; 9xWealth supplements with senior claim advocates who own the matter end-to-end.",
  },
  {
    id: "trust",
    term: "Trust (as Policy Owner)",
    body: "A private discretionary trust may own a life policy and direct proceeds per a trust deed. The cleanest structure for blended families and for promoters with overseas successors. Decouples the policy from individual estate proceedings.",
  },
  {
    id: "ulip",
    term: "ULIP",
    body: (
      <>
        Unit Linked Insurance Plan. A market-linked investment wrapped in a thin
        layer of life cover. Tax-efficient under ₹2.5L premium via Section
        10(10D). See{" "}
        <Link href="/services/wealth-ulips" className={TERM_LINK_CLASS}>
          Wealth & ULIPs
        </Link>
        .
      </>
    ),
  },
  {
    id: "whole-life",
    term: "Whole Life Cover",
    body: "Lifelong cover paying out on death whenever it occurs, layered over a smaller cash-value component. Used selectively where succession architecture requires perpetual liquidity.",
  },
] as const;
