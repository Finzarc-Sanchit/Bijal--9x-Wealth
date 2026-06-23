import { EditorialFaqSection } from "@/components/sections/EditorialFaqSection";
import { HEALTH_FAQ } from "../_data/content";

export function HealthFaq() {
  return (
    <EditorialFaqSection
      badge={HEALTH_FAQ.badge}
      headline={HEALTH_FAQ.headline}
      items={HEALTH_FAQ.items}
    />
  );
}
