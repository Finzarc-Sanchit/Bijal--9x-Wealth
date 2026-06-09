import { Shield, TrendingUp, Wallet, type LucideIcon } from "lucide-react";

export type ServiceDetailCopy = {
  id: string;
  label: string;
  icon: LucideIcon;
  summary: string;
  highlights: string[];
  paragraphs: string[];
  ctaLabel: string;
};

/** Verified service copy — aligned with docs/CONTENT.md and site defaults */
export const SERVICE_DETAIL_COPY: ServiceDetailCopy[] = [
  {
    id: "insurance",
    label: "Insurance",
    icon: Shield,
    summary:
      "Life, health, and term coverage through Tata AIA Life Insurance — explained in plain language for every age group.",
    highlights: [
      "Param Rakshak Plus",
      "Sampoorna Raksha Supreme",
      "Health & Critical Illness plans",
    ],
    paragraphs: [
      "Protect your family with Tata AIA solutions tailored to your life stage — from term cover and guaranteed income plans to health and critical illness protection.",
      "Bijal specialises in making insurance accessible for seniors and offers women-centric options such as Param Rakshak Plus for Women, with no jargon and no pressure.",
      "Every recommendation is matched to your budget, dependents, and long-term goals — with full transparency on premiums, benefits, and policy terms.",
    ],
    ctaLabel: "Discuss insurance options",
  },
  {
    id: "investments",
    label: "Investments",
    icon: TrendingUp,
    summary:
      "Disciplined wealth building with mutual funds, SIPs, and complementary instruments — structured for your risk profile and timeline.",
    highlights: [
      "Mutual Funds & SIPs",
      "NFO & PMS guidance",
      "Fixed Deposits & NPS",
    ],
    paragraphs: [
      "Build wealth steadily through SIPs and diversified mutual fund portfolios aligned to your goals — whether you are starting small or scaling up contributions.",
      "Get guidance on new fund offers, portfolio management services, fixed deposits, and National Pension System options as part of a balanced plan.",
      "Regular reviews help you stay on course — with clear reporting, rebalancing discipline, and decisions rooted in your comfort with market volatility.",
    ],
    ctaLabel: "Plan my investments",
  },
  {
    id: "wealth-planning",
    label: "Wealth Planning",
    icon: Wallet,
    summary:
      "Goal-based strategies for retirement, child education, and tax efficiency — mapped to milestones you can track year by year.",
    highlights: [
      "Retirement planning",
      "Child education funds",
      "Tax efficiency strategies",
    ],
    paragraphs: [
      "Define the life you want — when you wish to retire, how much you will need, and what milestones matter most — then map a realistic path to get there.",
      "Education funding, legacy planning, and protection needs are woven into one coherent plan so your insurance and investments work together, not in silos.",
      "Tax-efficient structuring (including premium planning above ₹5 lakh where applicable) is reviewed with your accountant in mind — always with full compliance.",
    ],
    ctaLabel: "Start goal planning",
  },
];

export function getServiceDetailByIndex(index: number) {
  return SERVICE_DETAIL_COPY[index] ?? SERVICE_DETAIL_COPY[0];
}

export function getServiceDetailById(id: string) {
  return SERVICE_DETAIL_COPY.find((item) => item.id === id);
}
