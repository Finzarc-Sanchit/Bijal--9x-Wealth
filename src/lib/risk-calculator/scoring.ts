import type { RiskQuestion, RiskSliderConfig } from "@/data/risk-calculator";

export type RiskAnswerValue = string | number;

export type RiskAnswer = {
  questionId: string;
  value: RiskAnswerValue;
  score: number;
};

export function sliderScore(value: number, config: RiskSliderConfig): number {
  const range = config.max - config.min;
  if (range <= 0) return config.scoreAtMin;
  const ratio = (value - config.min) / range;
  return Math.round(config.scoreAtMin + ratio * (config.scoreAtMax - config.scoreAtMin));
}

export function scoreFromAnswer(question: RiskQuestion, value: RiskAnswerValue): number {
  if (question.type === "slider" && question.slider && typeof value === "number") {
    return sliderScore(value, question.slider);
  }
  if (question.type === "radio" && question.options && typeof value === "string") {
    return question.options.find((o) => o.value === value)?.score ?? 50;
  }
  if (question.type === "toggle" && question.toggles && typeof value === "string") {
    return question.toggles.find((t) => t.value === value)?.score ?? 50;
  }
  return 50;
}

export function computeVulnerabilityScore(answers: RiskAnswer[]): number {
  if (answers.length === 0) return 0;
  const total = answers.reduce((sum, a) => sum + a.score, 0);
  return Math.round(total / answers.length);
}

export function riskColorForScore(score: number): string {
  if (score <= 40) return "#1a6b7a";
  if (score <= 65) return "#c9a227";
  return "#dc2626";
}

export function riskLabelForScore(score: number): string {
  if (score <= 40) return "Well Protected";
  if (score <= 65) return "Moderate Exposure";
  return "Action Required";
}

export function formatSliderValue(value: number, unit: string): string {
  if (unit === "Cr") return `₹${value} Cr`;
  if (unit === "L") return `₹${value} L`;
  if (unit === "%") return `${value}%`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  return `₹${value.toLocaleString("en-IN")}`;
}
