import type { AssessmentTier, AssessmentWeight, QuizAnswer } from "./types";

type WeightCounts = Record<AssessmentWeight, number>;

export function countWeights(answers: QuizAnswer[]): WeightCounts {
  const counts: WeightCounts = { A: 0, B: 0, C: 0 };
  for (const answer of answers) {
    counts[answer.weight] += 1;
  }
  return counts;
}

/**
 * Majority A → excellent; majority C → critical; majority B or tie → moderate.
 * Tie-break order when counts equal: B > A > C (per product spec).
 */
export function resolveTier(answers: QuizAnswer[]): AssessmentTier {
  const counts = countWeights(answers);
  const max = Math.max(counts.A, counts.B, counts.C);
  const leaders = (["A", "B", "C"] as AssessmentWeight[]).filter((w) => counts[w] === max);

  if (leaders.length === 1) {
    if (leaders[0] === "A") return "excellent";
    if (leaders[0] === "C") return "critical";
    return "moderate";
  }

  // Tie — prefer moderate (B), then excellent (A), then critical (C)
  if (leaders.includes("B")) return "moderate";
  if (leaders.includes("A")) return "excellent";
  return "critical";
}
