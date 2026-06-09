export const CONSULTATION_PREFILL_EVENT = "consultation:prefill-goal";

export function scrollToConsultation(slug: import("@/lib/assessment/types").GoalFormSlug) {
  window.dispatchEvent(new CustomEvent(CONSULTATION_PREFILL_EVENT, { detail: slug }));
  document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
}
