import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { CalculatorsHero } from "./_components/CalculatorsHero";
import { CalculatorsSections } from "./_components/CalculatorsSections";
import { CALCULATORS_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: CALCULATORS_METADATA.title,
  description: CALCULATORS_METADATA.description,
  keywords: [...CALCULATORS_METADATA.keywords],
};

export default function CalculatorsPage() {
  return (
    <InteriorPageShell>
      <CalculatorsHero />
      <CalculatorsSections />
    </InteriorPageShell>
  );
}
