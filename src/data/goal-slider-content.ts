import type { GoalFormSlug } from "@/lib/assessment/types";

export type GoalCardImageKey = "reality" | "architecture" | "compounding";

export type GoalSliderItem = {
  index: 0 | 1 | 2;
  tabLabel: string;
  tabEmoji: string;
  tabShortLabel: string;
  problemText: string;
  strategyText: string;
  formulaText: string;
  actionButtonText: string;
  formTargetSlug: Exclude<GoalFormSlug, "general">;
  cardImages: Record<GoalCardImageKey, { src: string; alt: string }>;
};

export const GOAL_SLIDER_UI = {
  sectionEyebrow: "Goal-based planning",
  sectionTitle: "Plan for Life's Biggest Milestones",
  sectionSubtitle:
    "Explore how structured investing and protection can help you reach education, retirement, and home goals with less stress.",
  realityLabel: "The Reality Alert",
  architectureLabel: "The 9X Architecture",
  compoundingLabel: "The Compounding Variable",
  formulaDisclaimer:
    "Illustrative projection only. Mutual fund investments are subject to market risks. Past performance does not guarantee future returns.",
} as const;

export const GOAL_SLIDER_CONTENT: GoalSliderItem[] = [
  {
    index: 0,
    tabEmoji: "🎓",
    tabShortLabel: "Child's Education",
    tabLabel: "🎓 Child's Higher Education",
    cardImages: {
      reality: {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0e?w=640&q=80",
        alt: "Student preparing for higher education",
      },
      architecture: {
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=640&q=80",
        alt: "Structured education planning and guidance",
      },
      compounding: {
        src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&q=80",
        alt: "Long-term investment growth for education goals",
      },
    },
    problemText:
      "Educational inflation in India is outpacing standard consumer indices, driving up the cost of professional milestones (Engineering, MBA, Medical degrees) by 10% to 12% every single year. A degree that costs ₹10 Lakhs today will easily demand ₹30+ Lakhs by the time your child is ready to step into university.",
    strategyText:
      "Instead of scrambling for high-interest education loans later, we engineer a long-term, goal-mapped Equity Mutual Fund portfolio. By starting when your child is young, we harness exponential compounding to ensure the market builds your target corpus for you, smoothly absorbing future inflation spikes.",
    formulaText:
      "A disciplined monthly SIP of ₹10,000 sustained for an investment horizon of 15 years can potentially accumulate a substantial corpus of ₹50 Lakhs (modeled on a conservative 12% CAGR framework).",
    actionButtonText: "Plan My Child's Education Fund",
    formTargetSlug: "child-education",
  },
  {
    index: 1,
    tabEmoji: "🏝️",
    tabShortLabel: "Retirement",
    tabLabel: "🏝️ Early Retirement Planning",
    cardImages: {
      reality: {
        src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=640&q=80",
        alt: "Retirement savings and future security planning",
      },
      architecture: {
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=640&q=80",
        alt: "Advisor discussing retirement strategy with a client",
      },
      compounding: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80",
        alt: "Wealth growth analytics for retirement planning",
      },
    },
    problemText:
      "With medical advances extending life expectancy alongside climbing healthcare premiums and zero institutional pensions, inflation is an absolute retirement killer. A retirement corpus that looks massive on paper today will rapidly run out within 10 to 12 years of exiting your career if left unmanaged.",
    strategyText:
      "We construct a dual-engine retirement architecture: High-efficiency compounding via diversified equity vehicles pre-retirement, transitioning systematically into a bulletproof, highly tax-optimized Systematic Withdrawal Plan (SWP) post-retirement to protect your lifestyle autonomy forever.",
    formulaText:
      "The cost of procrastination is steep: due to the mechanics of compound interest, every 5-year delay in starting your retirement portfolio can effectively double the required monthly investment amount to hit the exact same wealth target.",
    actionButtonText: "Calculate My Retirement Number",
    formTargetSlug: "retirement-planning",
  },
  {
    index: 2,
    tabEmoji: "🏡",
    tabShortLabel: "Dream Home",
    tabLabel: "🏡 Accumulating Your Dream Home",
    cardImages: {
      reality: {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&q=80",
        alt: "Home ownership and mortgage planning considerations",
      },
      architecture: {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&q=80",
        alt: "Structured down-payment and home purchase planning",
      },
      compounding: {
        src: "https://images.unsplash.com/photo-1560520653-9a0d4c89eb11?w=640&q=80",
        alt: "Building home down-payment wealth over time",
      },
    },
    problemText:
      "Relying entirely on a massive housing loan is a wealth trap—paying back a bank over a 20-year home loan tenure means you end up paying double the actual property value just in compounding bank interest charges.",
    strategyText:
      "We introduce a tactical solution: a structured 3-to-5-year hybrid asset allocation model engineered to accumulate an aggressive down-payment surplus. By minimizing your principal debt baseline before approaching lenders, you keep your future monthly EMIs stress-free and manageable.",
    formulaText:
      "Smart, goal-aligned short-term investing lets market compound gains build out your home down-payment allocation, saving your family lakhs in bank interest losses over the next two decades.",
    actionButtonText: "Start My Down Payment Plan",
    formTargetSlug: "home-downpayment",
  },
];

export const CONSULTATION_GOAL_OPTIONS: { value: GoalFormSlug; label: string }[] = [
  { value: "child-education", label: "Child's Higher Education" },
  { value: "retirement-planning", label: "Early Retirement Planning" },
  { value: "home-downpayment", label: "Dream Home Down Payment" },
  { value: "general", label: "General Consultation" },
];
