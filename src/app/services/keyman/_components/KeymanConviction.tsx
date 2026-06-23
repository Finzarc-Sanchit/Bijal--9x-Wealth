import { EditorialConvictionSection } from "@/components/sections/EditorialConvictionSection";
import { KEYMAN_CONVICTION } from "../_data/content";

export function KeymanConviction() {
  return (
    <EditorialConvictionSection
      badge={KEYMAN_CONVICTION.badge}
      headline={KEYMAN_CONVICTION.headline}
      paragraphs={KEYMAN_CONVICTION.paragraphs}
    />
  );
}
