import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { CoverEstimator } from "./CoverEstimator";
import { CALCULATORS_RELATED } from "../_data/content";

export function CalculatorsSections() {
  return (
    <>
      <CoverEstimator />
      <RelatedLinksSection
        badge={CALCULATORS_RELATED.badge}
        headline={CALCULATORS_RELATED.headline}
        items={CALCULATORS_RELATED.items}
      />
    </>
  );
}
