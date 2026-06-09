import type { LucideIcon } from "lucide-react";
import { Shield, TrendingUp, Wallet } from "lucide-react";

export type BlueprintTableRow = {
  label: string;
  metric: string;
  horizon: string;
};

export type BlueprintCta = {
  label: string;
  href: string;
  external?: boolean;
  variant: "primary" | "secondary";
};

export type ServiceBlueprintPillar = {
  id: string;
  order: number;
  title: string;
  badge: string;
  badgeTone: "risk" | "income" | "growth" | "planning";
  icon: LucideIcon;
  context: string;
  audience: string;
  mechanisms: string[];
  tableTitle?: string;
  tableRows?: BlueprintTableRow[];
  additionalNotes?: string[];
  ctas: BlueprintCta[];
};

export const SERVICES_BLUEPRINT_INTRO = {
  eyebrow: "Product architecture",
  title: "Our Comprehensive",
  titleAccent: "Financial Schemes",
  subtitle:
    "Three integrated wealth verticals—risk insulation, guaranteed income, and market-linked compounding—structured for HNIs, corporate professionals, and families seeking clarity before capital deployment.",
  architecture: [
    {
      label: "Pure Risk Management",
      sub: "Term, disability & asset protection",
    },
    {
      label: "Guaranteed Income",
      sub: "Non-linked savings & Tata AIA plans",
    },
    {
      label: "Market-Linked Compounding",
      sub: "SIPs, NFOs & managed portfolios",
    },
  ],
} as const;

export const SERVICE_BLUEPRINT_PILLARS: ServiceBlueprintPillar[] = [
  {
    id: "pure-risk",
    order: 1,
    title: "HNI & Corporate Pure Risk Cover",
    badge: "Asset Security",
    badgeTone: "risk",
    icon: Shield,
    context:
      "Foundational asset security before allocating capital to volatile asset classes. This layer isolates core wealth from critical illness liabilities, legal claims, or untimely demise.",
    audience:
      "High-net-worth individuals, business owners needing keyman protection, and clients above age 70 navigating coverage options with structured underwriting support.",
    mechanisms: [
      "High-sum term life covers sized to offset business debt, mortgages, and inheritance obligations.",
      "Active living benefit riders with medical and comprehensive disability payouts that substitute income during long-term illness.",
      "Corporate keyman and partnership protection aligned to balance-sheet exposure—not generic off-the-shelf sums.",
    ],
    additionalNotes: [
      "Senior-friendly explanations with no jargon; women-centric options such as Param Rakshak Plus where applicable.",
      "Tata AIA product illustrations and terms reviewed before any recommendation.",
    ],
    ctas: [
      { label: "Request Risk Audit", href: "/#consultation-form", variant: "primary" },
      {
        label: "Tata AIA Product Portal",
        href: "https://bijalprashantpathak.tataaiapartner.com",
        external: true,
        variant: "secondary",
      },
    ],
  },
  {
    id: "guaranteed-income",
    order: 2,
    title: "Guaranteed Income & Savings Solutions",
    badge: "Capital Preservation",
    badgeTone: "income",
    icon: Wallet,
    context:
      "A safety-first buffer through non-linked insurance frameworks to generate reliable cash flows independent of equity market cycles. Primary strategic alignment with Tata AIA Life Insurance platforms.",
    audience:
      "Families prioritising predictable milestone payouts, retirees seeking stable income layers, and professionals building a tax-efficient base before market exposure.",
    mechanisms: [
      "Fortune Guarantee Plus (FGP) for predictable regular income tied to life milestones.",
      "Smart Income Plus for escalating milestone payouts post defined maturation windows.",
      "Smart Value Income for flexible cash bonuses with long-term or whole-life structures.",
    ],
    tableTitle: "Illustrative scheme benchmarks (indicative—not guaranteed until policy issued)",
    tableRows: [
      {
        label: "Fortune Guarantee Plus (FGP)",
        metric: "~5.8%–6.4% indicative IRR (tax treatment per Sec. 10(10D) limits)",
        horizon: "5 to 12 years premium payment term",
      },
      {
        label: "Smart Income Plus Plan",
        metric: "120%–160% of annualised premium (guaranteed payout structure per policy)",
        horizon: "10 to 15 years policy term",
      },
      {
        label: "Smart Value Income Plan",
        metric: "Variable declared cash bonuses with compounding options",
        horizon: "Long-term / whole-life flexible options",
      },
    ],
    additionalNotes: [
      "Premiums above ₹5 lakh may require additional documentation—reviewed with your tax advisor where applicable.",
    ],
    ctas: [
      { label: "Illustrate My Returns", href: "/#consultation-form", variant: "primary" },
      {
        label: "View Tata AIA Savings Plans",
        href: "https://bijalprashantpathak.tataaiapartner.com",
        external: true,
        variant: "secondary",
      },
    ],
  },
  {
    id: "market-compounding",
    order: 3,
    title: "Market-Linked Wealth Compounding",
    badge: "Market Growth",
    badgeTone: "growth",
    icon: TrendingUp,
    context:
      "Accelerating capital through active equities and managed debt to outpace multi-year inflation. Discipline matters more than timing—SIPs, curated NFO access, and PMS where suitable.",
    audience:
      "Corporate professionals with surplus cash flow, mid-career investors building long horizons, and HNI portfolios requiring rebalancing discipline.",
    mechanisms: [
      "Systematic Investment Plans exploiting rupee-cost averaging across market phases.",
      "New Fund Offers and Portfolio Management Services for selective sector themes where risk appetite permits.",
      "Quarterly reviews with overlap checks so insurance and investments reinforce—not duplicate—your plan.",
    ],
    tableTitle: "Long-term return benchmarks (non-guaranteed, market-linked)",
    tableRows: [
      {
        label: "Aggressive equity mutual funds",
        metric: "14%–18% historical CAGR band (not assured)",
        horizon: "5 to 7+ years minimum",
      },
      {
        label: "Balanced / hybrid portfolios",
        metric: "11%–13% historical CAGR band (moderate risk)",
        horizon: "3 to 5 years",
      },
      {
        label: "Conservative debt schemes",
        metric: "6.5%–8% yield profile (risk-managed)",
        horizon: "1 to 3 years",
      },
    ],
    ctas: [
      { label: "Initiate SIP Setup", href: "/#consultation-form", variant: "primary" },
      { label: "WhatsApp Bijal", href: "whatsapp", variant: "secondary" },
    ],
  },
];

export const WEALTH_PLANNING_BRIDGE = {
  id: "wealth-planning",
  title: "Integrated Wealth Planning & Tax Efficiency",
  badge: "Holistic Advisory",
  badgeTone: "planning" as const,
  summary:
    "Retirement timelines, child education corridors, and legacy mapping sit above individual products. Bijal coordinates insurance, guaranteed buffers, and market sleeves into one documented plan—with annual reviews in Borivali or via video.",
  highlights: [
    "Retirement corpus modelling with inflation-adjusted milestones",
    "Education funding timelines separate from emergency liquidity",
    "Tax-efficient premium and investment structuring with compliance-first documentation",
  ],
  ctas: [
    { label: "Start Goal Planning", href: "/#consultation-form", variant: "primary" as const },
    { label: "Risk Calculator", href: "/risk-calculator", variant: "secondary" as const },
  ],
};

export const BLUEPRINT_DISCLAIMER =
  "Illustrations and return ranges are indicative only and not guaranteed. Insurance products are subject to terms and conditions of the insurer. Mutual fund investments are subject to market risks. Tax benefits are as per applicable laws—consult your tax advisor.";

export const CAROUSEL_TO_BLUEPRINT_SLUG = [
  "pure-risk",
  "market-compounding",
  "wealth-planning",
] as const;
