import { RiskCalculatorExperience } from "@/components/risk-calculator/RiskCalculatorExperience";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Risk Calculator | 9X Wealth — Advanced Risk Intelligence",
    description:
      "Analyze your risk matrix across legacy protection, retirement continuity, income gaps, and corporate liability with Bijal Pathak's interactive risk calculator.",
    keywords: [
      "risk calculator",
      "wealth protection assessment",
      "retirement risk Mumbai",
      "HNI insurance planning",
      "9X Wealth Borivali",
    ],
  };
}

export default function RiskCalculator() {
  return (
    <div className="risk-calc-page min-h-screen bg-surface text-brand-navy">
      <main className="pt-[88px] pb-16 sm:pt-[92px] sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RiskCalculatorExperience />
        </div>
      </main>
    </div>
  );
}
