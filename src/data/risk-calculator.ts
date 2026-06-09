export type RiskModuleId =
  | "legacy-shield"
  | "multi-generational"
  | "fortune-gap"
  | "corporate-audit";

export type RiskQuestionType = "radio" | "toggle" | "slider";

export type RiskRadioOption = {
  label: string;
  value: string;
  score: number;
};

export type RiskToggleOption = {
  label: string;
  value: "yes" | "no" | "unsure";
  score: number;
};

export type RiskSliderConfig = {
  min: number;
  max: number;
  step: number;
  unit: string;
  defaultValue: number;
  scoreAtMin: number;
  scoreAtMax: number;
};

export type RiskQuestion = {
  id: string;
  text: string;
  helper?: string;
  type: RiskQuestionType;
  options?: RiskRadioOption[];
  toggles?: RiskToggleOption[];
  slider?: RiskSliderConfig;
};

export type RiskModule = {
  id: RiskModuleId;
  title: string;
  subtitle: string;
  focus: string;
  ctaLabel: string;
  accent: string;
  icon: "shield" | "users" | "trending" | "building";
  questions: RiskQuestion[];
};

export const RISK_CALCULATOR_UI = {
  pageEyebrow: "Advanced Risk Intelligence",
  pageTitle: "Risk Calculator",
  pageSubtitle:
    "Quantify protection gaps across legacy planning, retirement continuity, and corporate exposure — then receive a tailored de-risking roadmap.",
  entryCta: "Analyze Your Risk Matrix",
  entryCtaSub: "4 specialized tracks · Confidential · No obligation",
  dashboardTitle: "Select Your Risk Track",
  dashboardSubtitle: "Each module evaluates a distinct vulnerability surface. Choose one to begin.",
  progressLabel: "Assessment progress",
  backLabel: "Back",
  nextLabel: "Continue",
  calculateLabel: "Calculate Risk Score",
  analyzingLabel: "Evaluating Risk Parameters…",
  analyzingSub: "Mapping exposure vectors against your responses",
  gaugeEyebrow: "Vulnerability Rating",
  gaugeActionRequired: "Action Required",
  gaugeModerate: "Moderate Exposure",
  gaugeProtected: "Well Protected",
  leadTitle: "Unlock Your De-Risking Roadmap",
  leadSubtitle:
    "Enter your details to receive a comprehensive PDF summary curated for your answers — including prioritized protection steps.",
  leadCta: "Get My Risk Roadmap PDF",
  leadSuccess: "Your tailored roadmap is being prepared. Bijal Pathak's team will reach out shortly.",
  disclaimer:
    "Illustrative risk assessment for educational purposes only. Not a substitute for personalized financial or legal advice. Insurance products are subject to terms and conditions.",
} as const;

export const RISK_MODULES: RiskModule[] = [
  {
    id: "legacy-shield",
    title: "The Legacy Shield Index",
    subtitle: "Asset protection & liability insulation",
    focus: "HNIs & Entrepreneurs",
    ctaLabel: "Start Legacy Audit",
    accent: "from-emerald-500/30 to-[#59BA86]/20",
    icon: "shield",
    questions: [
      {
        id: "ls-1",
        text: "How is your personal wealth legally separated from business liabilities?",
        type: "radio",
        options: [
          { label: "Fully ring-fenced via trusts/structures", value: "ring-fenced", score: 18 },
          { label: "Partial separation with some exposure", value: "partial", score: 48 },
          { label: "Personal and business assets are intertwined", value: "intertwined", score: 78 },
          { label: "I have not reviewed this", value: "unknown", score: 88 },
        ],
      },
      {
        id: "ls-2",
        text: "Do you carry umbrella liability coverage above your primary policies?",
        type: "toggle",
        toggles: [
          { label: "Yes", value: "yes", score: 22 },
          { label: "No", value: "no", score: 82 },
          { label: "Unsure", value: "unsure", score: 58 },
        ],
      },
      {
        id: "ls-3",
        text: "Estimated unprotected liquid net worth (₹ Crores)",
        helper: "Assets not covered by insurance or legal shields",
        type: "slider",
        slider: {
          min: 0,
          max: 50,
          step: 1,
          unit: "Cr",
          defaultValue: 5,
          scoreAtMin: 20,
          scoreAtMax: 92,
        },
      },
      {
        id: "ls-4",
        text: "Estate continuity plan in place for sudden incapacitation?",
        type: "radio",
        options: [
          { label: "Documented with executors assigned", value: "documented", score: 15 },
          { label: "Drafted but not updated recently", value: "drafted", score: 42 },
          { label: "Only informal family discussions", value: "informal", score: 68 },
          { label: "No plan exists", value: "none", score: 90 },
        ],
      },
    ],
  },
  {
    id: "multi-generational",
    title: "Multi-Generational Continuity Tester",
    subtitle: "Senior healthcare wealth leakage",
    focus: "Ages 70+ & Family Caregivers",
    ctaLabel: "Test Continuity Risk",
    accent: "from-teal-500/25 to-cyan-400/15",
    icon: "users",
    questions: [
      {
        id: "mg-1",
        text: "Is dedicated senior health coverage in place beyond basic mediclaim?",
        type: "toggle",
        toggles: [
          { label: "Yes", value: "yes", score: 20 },
          { label: "No", value: "no", score: 85 },
          { label: "Unsure", value: "unsure", score: 55 },
        ],
      },
      {
        id: "mg-2",
        text: "Projected annual healthcare spend for the household (₹ Lakhs)",
        type: "slider",
        slider: {
          min: 1,
          max: 40,
          step: 1,
          unit: "L",
          defaultValue: 8,
          scoreAtMin: 18,
          scoreAtMax: 88,
        },
      },
      {
        id: "mg-3",
        text: "How are long-term care costs expected to be funded?",
        type: "radio",
        options: [
          { label: "Insurance + dedicated corpus", value: "insured", score: 16 },
          { label: "Mostly from retirement savings", value: "savings", score: 52 },
          { label: "Family support without a plan", value: "family", score: 72 },
          { label: "Not yet considered", value: "none", score: 92 },
        ],
      },
      {
        id: "mg-4",
        text: "Critical illness or hospital cash buffer available?",
        type: "toggle",
        toggles: [
          { label: "Yes", value: "yes", score: 18 },
          { label: "No", value: "no", score: 80 },
          { label: "Unsure", value: "unsure", score: 52 },
        ],
      },
    ],
  },
  {
    id: "fortune-gap",
    title: "Fortune Guarantee Gap Finder",
    subtitle: "Passive retirement cashflow deficit",
    focus: "Pre & Post Retirement",
    ctaLabel: "Find My Income Gap",
    accent: "from-amber-400/25 to-[#59BA86]/15",
    icon: "trending",
    questions: [
      {
        id: "fg-1",
        text: "Monthly retirement income target (₹)",
        type: "slider",
        slider: {
          min: 25000,
          max: 500000,
          step: 5000,
          unit: "",
          defaultValue: 100000,
          scoreAtMin: 25,
          scoreAtMax: 70,
        },
      },
      {
        id: "fg-2",
        text: "What percentage of that target is guaranteed (pension, annuities, rentals)?",
        type: "slider",
        slider: {
          min: 0,
          max: 100,
          step: 5,
          unit: "%",
          defaultValue: 30,
          scoreAtMin: 85,
          scoreAtMax: 15,
        },
      },
      {
        id: "fg-3",
        text: "Market-linked portfolio share of retirement corpus",
        type: "radio",
        options: [
          { label: "Under 30% — mostly guaranteed", value: "low", score: 22 },
          { label: "30–60% — balanced mix", value: "balanced", score: 45 },
          { label: "Over 60% — market dependent", value: "high", score: 78 },
          { label: "I have not mapped this", value: "unknown", score: 88 },
        ],
      },
      {
        id: "fg-4",
        text: "Systematic Withdrawal Plan (SWP) or annuity route configured?",
        type: "toggle",
        toggles: [
          { label: "Yes", value: "yes", score: 18 },
          { label: "No", value: "no", score: 82 },
          { label: "Unsure", value: "unsure", score: 54 },
        ],
      },
    ],
  },
  {
    id: "corporate-audit",
    title: "Corporate Liability Audit",
    subtitle: "Keyman frameworks & business fragility",
    focus: "Business Owners & SMEs",
    ctaLabel: "Run Liability Audit",
    accent: "from-indigo-400/25 to-violet-400/15",
    icon: "building",
    questions: [
      {
        id: "ca-1",
        text: "Key person insurance covering founders or revenue-critical roles?",
        type: "toggle",
        toggles: [
          { label: "Yes", value: "yes", score: 16 },
          { label: "No", value: "no", score: 86 },
          { label: "Unsure", value: "unsure", score: 56 },
        ],
      },
      {
        id: "ca-2",
        text: "Business continuity plan if a key leader is unavailable for 90+ days?",
        type: "radio",
        options: [
          { label: "Documented and tested", value: "tested", score: 14 },
          { label: "Exists but untested", value: "exists", score: 40 },
          { label: "Informal handover only", value: "informal", score: 68 },
          { label: "No continuity framework", value: "none", score: 92 },
        ],
      },
      {
        id: "ca-3",
        text: "Outstanding business debt exposure (₹ Crores)",
        type: "slider",
        slider: {
          min: 0,
          max: 25,
          step: 1,
          unit: "Cr",
          defaultValue: 2,
          scoreAtMin: 20,
          scoreAtMax: 90,
        },
      },
      {
        id: "ca-4",
        text: "Partner buy-sell or succession funding mechanism in place?",
        type: "toggle",
        toggles: [
          { label: "Yes", value: "yes", score: 15 },
          { label: "No", value: "no", score: 84 },
          { label: "Unsure", value: "unsure", score: 55 },
        ],
      },
    ],
  },
];

export type RiskSuggestionTier = "low" | "moderate" | "high";

export const RISK_MODULE_SUGGESTIONS: Record<
  RiskModuleId,
  Record<RiskSuggestionTier, { headline: string; items: string[] }>
> = {
  "legacy-shield": {
    low: {
      headline: "Legacy structure is well insulated",
      items: [
        "Schedule an annual estate and liability review with Bijal Pathak.",
        "Keep umbrella coverage limits aligned with net-worth growth.",
        "Document beneficiary updates after major life events.",
      ],
    },
    moderate: {
      headline: "Protection gaps need attention",
      items: [
        "Ring-fence personal assets from business exposure via trusts or holding structures.",
        "Add umbrella liability cover above existing life and health policies.",
        "Formalize incapacitation and executor instructions in writing.",
      ],
    },
    high: {
      headline: "Urgent legacy exposure detected",
      items: [
        "Book a priority consultation to separate personal and business balance sheets.",
        "Evaluate Tata AIA high-sum-assured solutions for liability insulation.",
        "Engage legal counsel for estate continuity and asset shielding immediately.",
      ],
    },
  },
  "multi-generational": {
    low: {
      headline: "Healthcare wealth leakage is controlled",
      items: [
        "Review senior health riders annually as medical inflation rises.",
        "Maintain a dedicated healthcare corpus separate from retirement SWP.",
        "Keep family caregivers informed of claim and cashless processes.",
      ],
    },
    moderate: {
      headline: "Senior care costs may erode family wealth",
      items: [
        "Upgrade to comprehensive senior mediclaim with critical illness rider.",
        "Build a 5-year healthcare buffer fund outside market-linked assets.",
        "Explore long-term care and hospital cash benefit riders.",
      ],
    },
    high: {
      headline: "High risk of healthcare-driven wealth drain",
      items: [
        "Immediate review of senior citizen coverage gaps with 9X Wealth.",
        "Structure a family healthcare corpus before retirement withdrawals begin.",
        "Add critical illness and hospital cash policies to protect liquid savings.",
      ],
    },
  },
  "fortune-gap": {
    low: {
      headline: "Retirement cashflow appears resilient",
      items: [
        "Rebalance annually to preserve guaranteed income share above 50%.",
        "Stress-test SWP rates against 7% inflation scenarios.",
        "Keep 12 months of expenses in liquid reserves.",
      ],
    },
    moderate: {
      headline: "Income gap may widen in later retirement",
      items: [
        "Increase guaranteed income via annuities or debt ladders before retiring.",
        "Configure a tax-efficient SWP from hybrid mutual fund portfolios.",
        "Map monthly targets against inflation-adjusted expense projections.",
      ],
    },
    high: {
      headline: "Significant passive income shortfall projected",
      items: [
        "Start a goal-mapped SIP immediately to close the guaranteed income gap.",
        "Delay retirement by 2–3 years or reduce expense targets where possible.",
        "Book a retirement number session with Bijal Pathak for a custom SWP plan.",
      ],
    },
  },
  "corporate-audit": {
    low: {
      headline: "Business continuity risk is manageable",
      items: [
        "Refresh keyman insurance as revenue and leadership roles evolve.",
        "Test the 90-day leadership handover plan every 12 months.",
        "Align partner agreements with current valuation and debt levels.",
      ],
    },
    moderate: {
      headline: "Corporate fragility needs strengthening",
      items: [
        "Implement keyman and partner buy-sell funding via life insurance.",
        "Document revenue-critical role backups and signing authorities.",
        "Reduce personal guarantees on business debt where structurally possible.",
      ],
    },
    high: {
      headline: "Critical business vulnerability exposed",
      items: [
        "Urgent keyman insurance assessment for founders and rainmakers.",
        "Establish succession funding before approaching lenders for expansion.",
        "Schedule a corporate liability workshop with 9X Wealth this week.",
      ],
    },
  },
};

export function getRiskModule(id: RiskModuleId): RiskModule {
  const mod = RISK_MODULES.find((m) => m.id === id);
  if (!mod) return RISK_MODULES[0];
  return mod;
}

export function getSuggestionTier(score: number): RiskSuggestionTier {
  if (score <= 40) return "low";
  if (score <= 65) return "moderate";
  return "high";
}

export function getRiskSuggestions(moduleId: RiskModuleId, score: number) {
  return RISK_MODULE_SUGGESTIONS[moduleId][getSuggestionTier(score)];
}
