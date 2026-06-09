import type { AssessmentWeight } from "@/lib/assessment/types";

export type QuizQuestion = {
  id: number;
  questionText: string;
  options: { text: string; weight: AssessmentWeight }[];
};

export const QUIZ_UI = {
  sectionEyebrow: "Financial wellness",
  sectionTitleBlack: "Take the 2-Minute",
  sectionTitleBlue: "Financial Health Checkup",
  sectionSubtitle:
    "Answer 5 quick questions to evaluate if your current savings, investments, and family safety nets are fully protected against inflation and emergencies.",
  startCta: "Start Checkup",
  startCtaSub: "Free · 2 minutes · Instant score",
  progressLabel: (current: number, total: number) => `Question ${current} of ${total}`,
  backButton: "← Previous Question",
  nextButton: "Continue →",
  leadGateTitle: "Analyzing Your Financial Health Indicators...",
  leadGateSubtitle:
    "Where should Bijal Pathak dispatch your personalized scorecard and tactical risk report?",
  leadGateCta: "Get My Score Now",
  disclaimer:
    "This checkup is illustrative and does not constitute financial advice. Mutual fund investments are subject to market risks. Insurance products are subject to terms and conditions.",
} as const;

export const WELLNESS_PILLARS = [
  {
    id: "savings",
    title: "Savings & Surplus",
    subtitle: "Tax-efficient growth",
    gradient: "from-sky-100 to-blue-50",
    accent: "bg-brand-teal",
  },
  {
    id: "investments",
    title: "Investments & SIPs",
    subtitle: "Disciplined compounding",
    gradient: "from-indigo-100 to-violet-50",
    accent: "bg-indigo-600",
  },
  {
    id: "safety",
    title: "Family Safety Nets",
    subtitle: "Health & term cover",
    gradient: "from-emerald-100 to-teal-50",
    accent: "bg-emerald-600",
  },
  {
    id: "inflation",
    title: "Inflation Protection",
    subtitle: "Beat rising costs",
    gradient: "from-amber-100 to-orange-50",
    accent: "bg-amber-600",
  },
  {
    id: "emergency",
    title: "Emergency Funds",
    subtitle: "Crisis-ready reserves",
    gradient: "from-rose-100 to-pink-50",
    accent: "bg-rose-500",
  },
  {
    id: "legacy",
    title: "Legacy Planning",
    subtitle: "Income replacement",
    gradient: "from-cyan-100 to-sky-50",
    accent: "bg-cyan-600",
  },
] as const;

/** Expand-on-hover items for the checkup intro row */
export const WELLNESS_FOCUS_WINS = [
  {
    id: "savings",
    logoLabel: "Savings",
    name: "Savings & Surplus",
    description:
      "See whether your monthly surplus is working hard enough through tax-efficient instruments and disciplined allocation.",
    metric: "Tax-efficient growth",
    metricHighlight: "Core checkup pillar",
    tags: [
      { label: "Wealth building", type: "category" as const },
      { label: "Question 1", type: "category" as const },
    ],
    image: "/images/wellness/wellness-savings.png",
    imageAlt: "Family reviewing monthly savings and budget at home",
    tone: "teal" as const,
    iconKey: "piggybank" as const,
  },
  {
    id: "investments",
    logoLabel: "SIP",
    name: "Investments & SIPs",
    description:
      "Measure how consistently you invest toward long-term goals—and whether idle cash is eroding your compounding curve.",
    metric: "Monthly discipline",
    metricHighlight: "Linked to Q4 · SIP habits",
    tags: [
      { label: "Mutual funds", type: "category" as const },
      { label: "Long-term", type: "category" as const },
    ],
    image: "/images/wellness/wellness-investments.png",
    imageAlt: "Reviewing SIP investment growth on a smartphone",
    tone: "navy" as const,
    iconKey: "trending" as const,
  },
  {
    id: "safety",
    logoLabel: "Cover",
    name: "Family Safety Nets",
    description:
      "Check if health and term protection are sized for your income, liabilities, and dependents—not just corporate cover.",
    metric: "10× income rule",
    metricHighlight: "Linked to Q2 & Q3",
    tags: [
      { label: "Insurance", type: "category" as const },
      { label: "Protection", type: "category" as const },
    ],
    image: "/images/wellness/wellness-safety.png",
    imageAlt: "Family protected with health and term insurance planning",
    tone: "gold" as const,
    iconKey: "shield" as const,
  },
  {
    id: "inflation",
    logoLabel: "Inflation",
    name: "Inflation Protection",
    description:
      "Understand if FD-heavy savings can keep pace with rising living costs over the next decade.",
    metric: "10-year outlook",
    metricHighlight: "Linked to Q5 · Inflation",
    tags: [
      { label: "Equity allocation", type: "category" as const },
      { label: "Risk readiness", type: "category" as const },
    ],
    image: "/images/wellness/wellness-inflation.png",
    imageAlt: "Household budget planning against rising living costs",
    tone: "cream" as const,
    iconKey: "wallet" as const,
  },
  {
    id: "emergency",
    logoLabel: "Emergency",
    name: "Emergency Funds",
    description:
      "Stress-test how you would fund a sudden medical or income shock without breaking investments.",
    metric: "Crisis readiness",
    metricHighlight: "Linked to Q2 · Medical",
    tags: [
      { label: "Liquidity", type: "category" as const },
      { label: "Borivali advisory", type: "location" as const },
    ],
    image: "/images/wellness/wellness-emergency.png",
    imageAlt: "Organising health insurance and emergency fund documents",
    tone: "teal" as const,
    iconKey: "umbrella" as const,
  },
  {
    id: "legacy",
    logoLabel: "Legacy",
    name: "Legacy Planning",
    description:
      "Review income replacement and milestone planning so dependents stay secure if life takes an unexpected turn.",
    metric: "Income replacement",
    metricHighlight: "Linked to Q1 · Life goals",
    tags: [
      { label: "Family goals", type: "category" as const },
      { label: "Mumbai", type: "location" as const },
    ],
    image: "/images/wellness/wellness-legacy.png",
    imageAlt: "Multi-generational family legacy and long-term planning",
    tone: "navy" as const,
    iconKey: "heart" as const,
  },
] as const;

export const WELLNESS_CARD_TONES = {
  teal: {
    collapsed: "ring-brand-teal/15 bg-[#f4f9fa]",
    expanded: "bg-brand-navy",
    badge: "bg-brand-teal/20 text-brand-teal ring-brand-teal/25",
  },
  navy: {
    collapsed: "ring-brand-navy/10 bg-[#f3f5f8]",
    expanded: "bg-[#0d1a2d]",
    badge: "bg-white/12 text-white/90 ring-white/15",
  },
  gold: {
    collapsed: "ring-brand-gold/25 bg-[#faf6eb]",
    expanded: "bg-[#1a1608]",
    badge: "bg-brand-gold/20 text-brand-gold ring-brand-gold/30",
  },
  cream: {
    collapsed: "ring-brand-navy/8 bg-brand-cream",
    expanded: "bg-brand-navy",
    badge: "bg-brand-cream/15 text-brand-cream ring-white/10",
  },
} as const;

export const WELLNESS_FOCUS_UI = {
  eyebrow: "Checkup focus areas",
  hint: "Hover a pillar to explore what we evaluate",
  hintTouch: "Tap a pillar to explore",
} as const;

export const FINANCIAL_HEALTH_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionText: "What is your primary financial focus right now?",
    options: [
      {
        text: "Saving tax and growing my surplus money systematically.",
        weight: "A",
      },
      {
        text: "Planning for critical life milestones like early retirement or my children's future education.",
        weight: "B",
      },
      {
        text: "Protecting my family immediately from unexpected health or life emergencies.",
        weight: "B",
      },
      {
        text: "I don't have a specific focus yet; I just want to stop bleeding cash and start saving.",
        weight: "C",
      },
    ],
  },
  {
    id: 2,
    questionText:
      "If an unexpected, high-expense medical emergency occurs tomorrow, how will you cover it?",
    options: [
      {
        text: "I have a dedicated personal health insurance policy separate from my company.",
        weight: "A",
      },
      {
        text: "My corporate/office health insurance covers me completely.",
        weight: "B",
      },
      {
        text: "I will have to withdraw from my personal savings, liquidate investments, or borrow money.",
        weight: "C",
      },
    ],
  },
  {
    id: 3,
    questionText: "Is your current Term Life Insurance cover equal to at least 10 times your annual income?",
    options: [
      {
        text: "Yes, I have calculated my liabilities and am fully covered by a clean Term Plan.",
        weight: "A",
      },
      {
        text: "I have a traditional endowment policy or a small policy, but it is less than 10x my income.",
        weight: "B",
      },
      {
        text: "No, I do not have a term insurance policy at the moment.",
        weight: "C",
      },
    ],
  },
  {
    id: 4,
    questionText: "How regularly are you investing money toward your long-term wealth goals?",
    options: [
      {
        text: "Every single month without fail via automated, disciplined SIPs or asset allocations.",
        weight: "A",
      },
      {
        text: "Occasionally, whenever I have extra disposable cash left over at the end of the month.",
        weight: "B",
      },
      {
        text: "Rarely or never. Most of my cash stays idle in my accounts.",
        weight: "C",
      },
    ],
  },
  {
    id: 5,
    questionText:
      "How confident are you that your current savings will beat inflation over the next 10 years?",
    options: [
      {
        text: "Very confident—the majority of my long-term capital is allocated in equity and mutual funds.",
        weight: "A",
      },
      {
        text: "Unsure—most of my money is sitting in standard savings accounts or Fixed Deposits (FDs).",
        weight: "B",
      },
      {
        text: "Not confident at all. I am deeply concerned about rising living costs eroding my savings.",
        weight: "C",
      },
    ],
  },
];

export const TIER_RESULTS = {
  excellent: {
    header: "Excellent Financial Health Status!",
    body: "You have built a highly disciplined financial foundation. Gaps are minimal. Let's look into advanced tax-efficiency adjustments and portfolio optimization.",
    emailSubject: "Your 9X Wealth Financial Health Report [Excellent Tier]",
  },
  moderate: {
    header: "Moderate Risk Warning Indicator",
    body: "You have successfully initiated your savings journey, but critical blindspots in your protective assets or inflation-exposed holdings could derail your long-term milestone targets.",
    emailSubject: "Action Required: Your 9X Wealth Financial Assessment Report",
  },
  critical: {
    header: "Critical System Attention Required",
    body: "Your wealth architecture is heavily exposed to compound inflation drag and unexpected lifestyle liabilities. Immediate corrective rebalancing is recommended.",
    emailSubject: "URGENT ALERT: Your Priority Financial Diagnostic Report",
  },
} as const;
