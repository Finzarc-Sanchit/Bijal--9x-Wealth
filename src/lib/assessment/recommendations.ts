import type { AssessmentTier, AssessmentWeight, QuizAnswer } from "@/lib/assessment/types";
import { countWeights, resolveTier } from "@/lib/assessment/scoring";

const WEIGHT_POINTS: Record<AssessmentWeight, number> = {
  A: 100,
  B: 62,
  C: 28,
};

export type HealthSuggestion = {
  id: string;
  title: string;
  detail: string;
  priority: "high" | "medium" | "low";
};

const QUESTION_SUGGESTIONS: Record<
  number,
  Record<AssessmentWeight, { title: string; detail: string; priority: HealthSuggestion["priority"] }>
> = {
  1: {
    A: {
      title: "Keep your surplus working",
      detail:
        "You already prioritise tax-efficient growth. Review ELSS, PPF, or NPS limits annually so surplus cash does not sit idle.",
      priority: "low",
    },
    B: {
      title: "Align milestones with a written plan",
      detail:
        "Retirement and education goals need separate timelines. Split monthly surplus across dedicated SIP buckets for each milestone.",
      priority: "medium",
    },
    C: {
      title: "Start with a simple monthly budget",
      detail:
        "Track inflows and fixed expenses for 60 days, then automate a small SIP—even ₹2,000—to build discipline before optimising tax.",
      priority: "high",
    },
  },
  2: {
    A: {
      title: "Maintain standalone health cover",
      detail:
        "Personal health insurance protects you between jobs. Schedule an annual sum-insured review as medical costs rise.",
      priority: "low",
    },
    B: {
      title: "Add a personal health top-up",
      detail:
        "Corporate cover may not follow you after a job change. A super top-up policy can fill gaps at lower cost than full replacement.",
      priority: "medium",
    },
    C: {
      title: "Build a medical emergency buffer",
      detail:
        "Without dedicated cover, one hospital bill can wipe out savings. Prioritise a family floater plan before aggressive investing.",
      priority: "high",
    },
  },
  3: {
    A: {
      title: "Term cover looks adequate",
      detail:
        "Revisit cover when income or liabilities change—marriage, home loan, or a new child usually means increasing sum assured.",
      priority: "low",
    },
    B: {
      title: "Upgrade to pure term cover",
      detail:
        "Endowment policies rarely meet the 10× income benchmark. Consider a clean term plan and route savings into growth assets separately.",
      priority: "high",
    },
    C: {
      title: "Secure income replacement first",
      detail:
        "A term plan sized to 10–15× annual income protects dependents. This should come before new investments or luxury spends.",
      priority: "high",
    },
  },
  4: {
    A: {
      title: "Protect your SIP streak",
      detail:
        "Automate SIPs on salary day and avoid pausing during market dips—consistency matters more than timing entries.",
      priority: "low",
    },
    B: {
      title: "Automate monthly investing",
      detail:
        "Move from occasional lumpsums to a fixed SIP date. Even modest monthly amounts compound better than irregular top-ups.",
      priority: "medium",
    },
    C: {
      title: "Start one disciplined SIP",
      detail:
        "Open a single diversified equity fund SIP aligned to a 7+ year goal. Increase by 10% each year you get a raise.",
      priority: "high",
    },
  },
  5: {
    A: {
      title: "Equity allocation supports inflation",
      detail:
        "Your growth mix helps beat rising costs. Rebalance once a year so equity does not drift beyond your comfort level.",
      priority: "low",
    },
    B: {
      title: "Reduce FD-heavy idle cash",
      detail:
        "Savings accounts and FDs may not beat long-term inflation. Gradually shift a portion of long-term money into diversified funds.",
      priority: "medium",
    },
    C: {
      title: "Address inflation exposure urgently",
      detail:
        "Heavy cash and FD reliance erodes purchasing power. Build a phased plan to move long-term savings into inflation-beating assets.",
      priority: "high",
    },
  },
};

const TIER_SUGGESTIONS: Record<AssessmentTier, HealthSuggestion> = {
  excellent: {
    id: "tier-excellent",
    title: "Optimise what is already working",
    detail:
      "Book a review with Bijal Pathak to fine-tune tax efficiency, portfolio overlap, and insurance riders—small tweaks can add meaningful upside.",
    priority: "low",
  },
  moderate: {
    id: "tier-moderate",
    title: "Close protection gaps this quarter",
    detail:
      "Your foundation is forming, but blindspots in cover or idle cash could delay milestones. A 30-minute consultation can prioritise fixes.",
    priority: "medium",
  },
  critical: {
    id: "tier-critical",
    title: "Schedule a priority consultation",
    detail:
      "Multiple indicators need attention. Speak with 9X Wealth in Borivali to stabilise protection and investing before markets or emergencies force costly decisions.",
    priority: "high",
  },
};

export function computeHealthScore(answers: QuizAnswer[]): number {
  if (answers.length === 0) return 0;
  const total = answers.reduce((sum, answer) => sum + WEIGHT_POINTS[answer.weight], 0);
  return Math.round(total / answers.length);
}

export function scoreLabel(score: number): string {
  if (score >= 85) return "Excellent";
  if (score >= 65) return "Good";
  if (score >= 45) return "Needs attention";
  return "At risk";
}

export function getSuggestionsForAnswers(answers: QuizAnswer[]): HealthSuggestion[] {
  const tier = resolveTier(answers);
  const counts = countWeights(answers);

  const fromQuestions = answers
    .map((answer) => {
      const copy = QUESTION_SUGGESTIONS[answer.questionId]?.[answer.weight];
      if (!copy) return null;
      return {
        id: `q${answer.questionId}-${answer.weight}`,
        title: copy.title,
        detail: copy.detail,
        priority: copy.priority,
      } satisfies HealthSuggestion;
    })
    .filter((item): item is HealthSuggestion => item !== null);

  const prioritized = fromQuestions.sort((a, b) => {
    const rank = { high: 0, medium: 1, low: 2 };
    return rank[a.priority] - rank[b.priority];
  });

  const tierSuggestion = TIER_SUGGESTIONS[tier];

  const unique = new Map<string, HealthSuggestion>();
  for (const item of [...prioritized.slice(0, 4), tierSuggestion]) {
    unique.set(item.id, item);
  }

  return Array.from(unique.values()).slice(0, 5);
}

export function getScoreColor(score: number): string {
  if (score >= 85) return "#1a6b7a";
  if (score >= 65) return "#c9a227";
  if (score >= 45) return "#b45309";
  return "#b91c1c";
}
