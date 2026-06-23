import { EditorialConvictionSection } from "@/components/sections/EditorialConvictionSection";
import { HEALTH_CONVICTION } from "../_data/content";

export function HealthConviction() {
  return (
    <EditorialConvictionSection
      badge={HEALTH_CONVICTION.badge}
      headline={HEALTH_CONVICTION.headline}
      paragraphs={HEALTH_CONVICTION.paragraphs}
    />
  );
}
