import { EditorialFaqSection } from "@/components/sections/EditorialFaqSection";
import { SPECIE_FAQ } from "../_data/content";

export function SpecieFaq() {
  return (
    <EditorialFaqSection
      badge={SPECIE_FAQ.badge}
      headline={SPECIE_FAQ.headline}
      items={SPECIE_FAQ.items}
    />
  );
}
