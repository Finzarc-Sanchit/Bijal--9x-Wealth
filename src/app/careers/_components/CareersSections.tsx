import { StepProcessLayout } from "@/components/sections/StepProcessLayout";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { EditorialProseSection } from "@/components/sections/EditorialProseSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { gridItemsToStepProcessSteps } from "@/lib/grid-to-process";
import {
  CAREERS_APPLY,
  CAREERS_CONVICTION,
  CAREERS_RELATED,
  CAREERS_ROLES,
  CAREERS_VALUES,
} from "../_data/content";

export function CareersSections() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={CAREERS_CONVICTION.badge}
        headline={CAREERS_CONVICTION.headline}
        paragraphs={CAREERS_CONVICTION.paragraphs}
      />
      <StepProcessLayout
        id="careers-values"
        eyebrow={CAREERS_VALUES.badge}
        title={CAREERS_VALUES.headline}
        subtitle="Four values applied without exception across every mandate and every hire."
        steps={gridItemsToStepProcessSteps(CAREERS_VALUES.items)}
        stepLabelPrefix="Value"
      />
      <EditorialCardGrid
        badge={CAREERS_ROLES.badge}
        headline={CAREERS_ROLES.headline}
        items={CAREERS_ROLES.items}
      />
      <EditorialProseSection
        badge={CAREERS_APPLY.badge}
        headline={CAREERS_APPLY.headline}
        paragraphs={CAREERS_APPLY.paragraphs}
      />
      <RelatedLinksSection
        badge={CAREERS_RELATED.badge}
        headline={CAREERS_RELATED.headline}
        items={CAREERS_RELATED.items}
      />
    </>
  );
}
