export type AssessmentWeight = "A" | "B" | "C";

export type AssessmentTier = "excellent" | "moderate" | "critical";

export type QuizAnswer = {
  questionId: number;
  weight: AssessmentWeight;
};

export type QuizLead = {
  name: string;
  mobile: string;
  email: string;
};

export type GoalFormSlug =
  | "child-education"
  | "retirement-planning"
  | "home-downpayment"
  | "general";

export type TierResultCopy = {
  tier: AssessmentTier;
  header: string;
  body: string;
  emailSubject: string;
};
