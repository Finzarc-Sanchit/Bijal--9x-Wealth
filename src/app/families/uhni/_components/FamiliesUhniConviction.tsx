import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { FAMILIES_UHNI_COMMITMENTS, FAMILIES_UHNI_CONVICTION } from "../_data/content";

export function FamiliesUhniConviction() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={FAMILIES_UHNI_CONVICTION.badge}
        headline={FAMILIES_UHNI_CONVICTION.headline}
        paragraphs={FAMILIES_UHNI_CONVICTION.paragraphs}
      />
      <EditorialCardGrid
        id="families-uhni-commitments"
        badge={FAMILIES_UHNI_COMMITMENTS.badge}
        headline={FAMILIES_UHNI_COMMITMENTS.headline}
        items={FAMILIES_UHNI_COMMITMENTS.items}
      />
    </>
  );
}
