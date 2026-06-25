import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { MethodologyTonalLayerRevealGridSection } from "@/components/sections/MethodologyTonalLayerRevealGridSection";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import {
  ABOUT_PRESS_ENQUIRIES,
  ABOUT_PRESS_RECOGNITION,
  ABOUT_PRESS_REGULATORY,
} from "../_data/content";

export function AboutPressContent() {
  return (
    <>
      <MethodologyTonalLayerRevealGridSection
        headline={ABOUT_PRESS_REGULATORY.headline}
        items={ABOUT_PRESS_REGULATORY.items}
        id="about-press-regulatory"
      />
      <EditorialCardGrid
        id="about-press-recognition"
        badge={ABOUT_PRESS_RECOGNITION.badge}
        headline={ABOUT_PRESS_RECOGNITION.headline}
        items={ABOUT_PRESS_RECOGNITION.items}
      />
      <TermLegacyConvictionSection
        badge={ABOUT_PRESS_ENQUIRIES.badge}
        headline={ABOUT_PRESS_ENQUIRIES.headline}
        paragraphs={ABOUT_PRESS_ENQUIRIES.paragraphs}
        id="about-press-enquiries"
      />
    </>
  );
}
