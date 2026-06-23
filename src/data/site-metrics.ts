export const SITE_METRICS = {
  familiesProtected: "2,400+",
  uhniMandates: "142", // PENDING_CLIENT_VERIFY
  yearsInPractice: "12",
  premiumsCrore: "10,000+",
} as const;

/** Parse display metrics like "2,400+" into count-up animation values. */
export function parseMetricDisplay(display: string): { value: number; suffix: string } {
  const suffix = display.endsWith("+") ? "+" : "";
  const value = Number.parseInt(display.replace(/[^0-9]/g, ""), 10);
  return { value, suffix };
}
