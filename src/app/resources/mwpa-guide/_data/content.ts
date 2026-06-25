import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { FaqItem } from "@/components/sections/EditorialFaqSection";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
import type { EditorialProseSubsection } from "@/components/sections/EditorialProseSection";

export const MWPA_GUIDE_METADATA = {
  title: "MWPA: A Complete Guide — Married Women's Property Act for Term Cover · 9xWealth",
  description:
    "The complete treatment of the Married Women's Property Act, Section 6 — the most powerful structural instrument in Indian private wealth for term cover.",
  keywords: [
    "MWPA guide",
    "Married Women's Property Act",
    "MWPA Section 6",
    "creditor proof term insurance",
    "term cover India",
  ],
} as const;

export const MWPA_GUIDE_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Legal documents and estate planning materials",
  },
  headline: "MWPA: a complete guide.",
  description:
    "The Married Women's Property Act, 1874 — Section 6 — is the most powerful structural instrument in Indian private wealth that almost no one has heard of. This is the complete treatment.",
} as const;

export const MWPA_GUIDE_WHAT_IT_DOES = {
  badge: "What MWPA actually does",
  headline: "What MWPA actually does",
  paragraphs: [
    "In 1874, the British Parliament enacted the Married Women's Property Act for then-British India. Among its various provisions, Section 6 created a statutory mechanism by which a man could take out a life insurance policy expressed to be for the benefit of his wife, or his wife and children — and have those proceeds treated, in law, as a trust held for them.",
    "The mechanism survives today, in the original Act, and applies to married men of every religion practising in India. Despite being one hundred and fifty years old, it remains the simplest, cleanest, and most under-used structural protection available to Indian families.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const MWPA_GUIDE_CONSEQUENCES = {
  badge: "The four legal consequences",
  headline: "Four protections that matter at claim.",
  items: [
    {
      id: "01",
      title: "An irrevocable trust is created.",
      description:
        "Once assigned under Section 6, the policy cannot be reassigned, pledged, or surrendered without the consent of all named beneficiaries.",
    },
    {
      id: "02",
      title: "The proceeds are protected from creditors.",
      description:
        "Creditors of the policyholder cannot reach the proceeds, even if the policyholder is bankrupt or the estate is in dispute. This is the protection that matters most.",
    },
    {
      id: "03",
      title: "The proceeds bypass the estate.",
      description:
        "The proceeds do not form part of the deceased policyholder's estate, and so are not subject to estate-administration delays, claims by other heirs, or contestation under the will.",
    },
    {
      id: "04",
      title: "The proceeds are tax-free under Section 10(10D).",
      description:
        "As with any compliant life insurance receipt, death proceeds are exempt from income tax in the hands of the beneficiaries.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export const MWPA_GUIDE_WHO_CAN_ASSIGN = {
  badge: "Who can assign, who can be assigned to",
  headline: "The policyholder and beneficiaries must meet specific criteria.",
  subsections: [
    {
      title: "The policyholder",
      paragraphs: [
        "must be a married man (Hindu, Muslim, Christian, Parsi, or otherwise) who is the proposer and the insured life on the policy.",
      ],
    },
    {
      title: "The beneficiaries",
      paragraphs: [
        "may be the wife alone, or the wife and any one or more named children. Stepchildren, adopted children, and children from prior marriages may be included where they meet the legal definition of children. Specific naming is required — \"my children\" is inadequate; each must be named individually.",
      ],
    },
    {
      title: "A second wife",
      paragraphs: [
        "can be a beneficiary only if the marriage is legally recognised. For Hindu policyholders, a second simultaneous marriage is not recognised; for those whose personal law permits multiple marriages, separate policies are sometimes the cleaner structure.",
      ],
    },
  ] as const satisfies readonly EditorialProseSubsection[],
} as const;

export const MWPA_GUIDE_ASSIGNMENT = {
  badge: "The assignment in practice",
  headline: "Execute the form on day one — not years later.",
  paragraphs: [
    "Most Indian insurers provide a standard MWPA assignment form (Form 12 or its modern equivalent) that should be executed at the time the policy is taken out. Retroactive assignment is possible but procedurally cumbersome and often resisted by insurers — far better to do it on day one.",
    "The form names the beneficiaries with their relationship to the policyholder, the share each is to receive (typically the wife receives a defined share with the balance distributed equally among children), and the trustee. Most policies use the policyholder himself as trustee during his lifetime, with successor trustees nominated.",
    "The form is signed in the presence of two witnesses. The insurer endorses the policy as \"Assigned under MWPA Section 6\" and the protection takes effect immediately.",
  ],
} as const;

export const MWPA_GUIDE_WHEN_NOT = {
  badge: "When MWPA is not the right structure",
  headline: "The right default — with clear exceptions.",
  paragraphs: [
    "For most term policies on married promoters and operators, MWPA is the right default. But there are situations where it is not.",
  ],
  subsections: [
    {
      title: "For unmarried policyholders",
      paragraphs: ["MWPA is unavailable. A private trust may serve a similar purpose."],
    },
    {
      title: "For multi-generational corpora",
      paragraphs: [
        "— where the proceeds are intended to accumulate for grandchildren and beyond — a private discretionary trust is typically a more flexible owner than the MWPA structure.",
      ],
    },
    {
      title: "For keyman and buy-sell cover",
      paragraphs: [
        "MWPA is irrelevant: those policies are owned by the company or the partners with corporate succession in mind. See our Keyman & Enterprise page.",
      ],
    },
    {
      title: "For cross-border families with US-resident successors",
      paragraphs: [
        "MWPA-assigned proceeds may interact with US estate-tax and FATCA rules in ways that require specific structuring. We coordinate with cross-border counsel before placement.",
      ],
    },
  ] as const satisfies readonly EditorialProseSubsection[],
} as const;

export const MWPA_GUIDE_COMMON_MISTAKE = {
  badge: "The most common mistake",
  headline: "Nominee is not the same as MWPA beneficiary.",
  paragraphs: [
    "The most common — and most costly — error in Indian term insurance is to name a wife as nominee rather than assign the policy under MWPA. The two appear similar. They are not.",
    "A nominee is a receiver. The proceeds form part of the deceased's estate, and the nominee is the conduit through which they pass — but they remain reachable by creditors, contestable by other heirs, and subject to the deceased's will.",
    "A beneficiary under MWPA is the rightful owner. The proceeds never form part of the estate and never reach the creditors. This is the difference between a corpus that arrives and a corpus that arrives and stays.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const MWPA_GUIDE_FAQ = {
  badge: "Common questions",
  headline: "MWPA, candidly answered.",
  items: [
    {
      question: "Can MWPA be added to an existing policy?",
      answer:
        "In principle yes; in practice insurers vary. Some allow re-assignment with a fresh form; some require surrender and re-issue. We assist with the procedural steps.",
    },
    {
      question: "Does MWPA apply to ULIPs?",
      answer:
        "Yes — and uniquely well. Because ULIPs accumulate value during the policyholder's lifetime, the MWPA wrap protects that accumulation from creditors throughout, not just at the moment of claim. See Wealth & ULIPs.",
    },
    {
      question: "Can children alone be beneficiaries?",
      answer:
        "Section 6 contemplates the wife as beneficiary, with or without children. A policy assigned solely to children, without the wife, may not enjoy the full statutory protection — we generally recommend including the wife.",
    },
  ] as const satisfies readonly FaqItem[],
} as const;

export const MWPA_GUIDE_EXAMPLE = {
  badge: "A worked example",
  headline: "The structural difference costs nothing extra.",
  paragraphs: [
    "A 45-year-old founder, married, with two children. He takes out a ₹50 Cr term policy for 25 years. Under standard practice, the wife is named as nominee and the children as joint nominees with her.",
    "Twelve years later, the founder's business takes on substantial lender debt with a personal guarantee. Three years after that, the founder dies in an accident, the business runs into difficulty, and the lender invokes the personal guarantee.",
    "Under the standard structure, the ₹50 Cr proceeds are reachable by the lender as part of the deceased's estate. The family receives whatever survives recovery — typically nothing.",
    "Under an MWPA assignment from day one, the same ₹50 Cr proceeds are the separate property of the wife and children, untouchable by the lender. The family receives the corpus in full.",
    "That is the structural difference. It costs nothing extra. It requires only that someone, twelve years earlier, knew to ask the right question.",
  ],
} as const;

export const MWPA_GUIDE_FIT_IN = {
  badge: "Where 9xWealth fits in",
  headline: "MWPA as default on every personal term policy.",
  paragraphs: [
    "We assign every personal term policy under MWPA as the default, unless there is a specific reason not to. We assist with the form, the witnesses, the trustee structure, and the policy endorsement. We document every step and retain a copy of the executed assignment in our secure archives — so that, twenty years from now, when the claim is filed, nothing is missing.",
    "If you would like to discuss your existing term cover, or consider a fresh policy with an MWPA structure from day one, begin a confidential conversation.",
  ],
} as const;

export const MWPA_GUIDE_RELATED = {
  badge: "Where to read next",
  headline: "Connected to this guide.",
  items: [
    {
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: "/services/term-legacy",
    },
    {
      title: "Wealth & ULIPs",
      description:
        "Hand-modelled ULIPs and guaranteed-return plans, evaluated against MF alternatives.",
      href: "/services/wealth-ulips",
    },
    {
      title: "Glossary",
      description: "A–Z of insurance, estate, and succession terms used across our practice.",
      href: "/resources/glossary",
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
    {
      title: "Listed Promoters",
      description: "Pledge cover, SEBI considerations, and MWPA on promoter holdings.",
      href: "/families/listed-promoters",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
