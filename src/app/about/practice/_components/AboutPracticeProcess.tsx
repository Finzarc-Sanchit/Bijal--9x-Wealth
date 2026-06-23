import { StepProcessLayout } from "@/components/sections/StepProcessLayout";
import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { editorialCardsToStickyFeatures } from "@/lib/editorial-to-sticky";
import { gridItemsToStepProcessSteps } from "@/lib/grid-to-process";
import {
  ABOUT_PRACTICE_PRINCIPLES,
  ABOUT_PRACTICE_PROCESS,
} from "../_data/content";

export function AboutPracticeProcess() {
  return (
    <>
      <StepProcessLayout
        id="about-practice-process"
        eyebrow={ABOUT_PRACTICE_PROCESS.badge}
        title={ABOUT_PRACTICE_PROCESS.headline}
        subtitle="The four-act engagement every family mandate follows — considered, never rushed."
        steps={gridItemsToStepProcessSteps(ABOUT_PRACTICE_PROCESS.items)}
        stepLabelPrefix="Act"
      />
      <StickyFeatureSection
        id="about-practice-principles"
        badge={ABOUT_PRACTICE_PRINCIPLES.badge}
        headline={ABOUT_PRACTICE_PRINCIPLES.headline}
        subtitle="The standards we hold to without exception."
        features={editorialCardsToStickyFeatures(ABOUT_PRACTICE_PRINCIPLES.items)}
      />
    </>
  );
}
