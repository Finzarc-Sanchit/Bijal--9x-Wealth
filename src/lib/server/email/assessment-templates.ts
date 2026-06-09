import { CONTACT } from "@/lib/constants";
import type { AssessmentTier } from "@/lib/assessment/types";

type EmailTemplate = {
  subject: string;
  body: (name: string) => string;
};

export const ASSESSMENT_EMAIL_TEMPLATES: Record<AssessmentTier, EmailTemplate> = {
  excellent: {
    subject: "Your 9X Wealth Financial Health Report [Excellent Tier]",
    body: (name) => `Dear ${name},

Thank you for completing the 9X Wealth Financial Health Checkup.

Our assessment engine shows that your financial ecosystem is in an excellent tier. Your reliance on automated compounding systems (SIPs) and your proactive allocation toward risk mitigation channels demonstrate outstanding discipline.

To ensure your capital is operating at maximum efficiency, Bijal Pathak recommends looking into:
1. Advanced capital gains tax optimization metrics.
2. Portfolio rebalancing structures to lock in equity returns safely.
3. Tailored adjustments for legacy wealth transmission.

If you would like to run a macro-audit on your current investments, you can book a priority coordination sync directly at ${CONTACT.email} or WhatsApp ${CONTACT.phone}.

To your compounding growth,
Bijal Pathak
Founder, 9X Wealth Financial Services`,
  },
  moderate: {
    subject: "Action Required: Your 9X Wealth Financial Assessment Report",
    body: (name) => `Dear ${name},

Your personalized 9X Wealth Financial Health scorecard is ready for review.

Based on your selections, your profile indicates a Moderate Risk status. While you have built a baseline level of capital preservation, you are currently exposed to specific vulnerabilities:
1. Corporate Health Insurance Reliance: Depending solely on employer health covers leaves your family exposed during sudden career transitions or policy terminations.
2. Inflation Drag: Keeping excessive capital locked in fixed deposits or traditional schemes allows inflation (~6-7% annually) to quietly erode your future purchasing power.
3. Under-insured Risk: If your total life cover is beneath 10x your annual income, your family's future standard of living is vulnerable.

Let's address these exposure gaps systematically. Bijal Pathak has opened a select number of complimentary validation call slots this week specifically for moderate-risk profiles.

Secure your strategy slot directly here: ${CONTACT.phone}.

Best regards,
Bijal Pathak
Founder, 9X Wealth Financial Services`,
  },
  critical: {
    subject: "URGENT ALERT: Your Priority Financial Diagnostic Report",
    body: (name) => `Dear ${name},

Please review this diagnostic evaluation with care.

Your financial health checkup indicates a Critical Exposure status. Your current savings are systematically losing value to rising lifestyle inflation, and your family lacks the structural security of dedicated income-replacement protections (Term Plans) and independent health safety nets.

Left uncorrected, a single major health crisis or sudden market downturn could force you to liquidate your hard-earned personal savings or accumulate debt.

This baseline can be turned around quickly with structured, data-backed discipline. Bijal Pathak has flagged your file for an urgent priority call allocation.

Please call our desk directly at ${CONTACT.phone} or WhatsApp us to organize an immediate corrective wealth architecture roadmap.

Sincerely,
Bijal Pathak
Founder, 9X Wealth Financial Services`,
  },
};
