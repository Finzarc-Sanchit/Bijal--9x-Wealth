import { StepProcessLayout } from "@/components/sections/StepProcessLayout";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { gridItemsToStepProcessSteps, parseProcessHeading } from "@/lib/grid-to-process";
import { FAMILIES_NRI_CONSIDERATIONS, FAMILIES_NRI_CONVICTION } from "../_data/content";

export function FamiliesNriConviction() {
  const [title] = parseProcessHeading(FAMILIES_NRI_CONSIDERATIONS.headline);

  return (
    <>
      <TermLegacyConvictionSection
        badge={FAMILIES_NRI_CONVICTION.badge}
        headline={FAMILIES_NRI_CONVICTION.headline}
        paragraphs={FAMILIES_NRI_CONVICTION.paragraphs}
      />
      <StepProcessLayout
        id="families-nri-considerations"
        eyebrow={FAMILIES_NRI_CONSIDERATIONS.badge}
        title={title}
        subtitle={FAMILIES_NRI_CONSIDERATIONS.subtitle}
        steps={gridItemsToStepProcessSteps(FAMILIES_NRI_CONSIDERATIONS.items)}
      />
    </>
  );
}
