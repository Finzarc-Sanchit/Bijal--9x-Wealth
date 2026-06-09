import { RiskCalculatorPage } from "@/components/site/RiskCalculatorPage";
import { getSiteContent } from "@/lib/content/store";
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

export default async function RiskCalculator() {
  const content = await getSiteContent();
  return <RiskCalculatorPage content={content} />;
}
