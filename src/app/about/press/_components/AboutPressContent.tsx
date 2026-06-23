import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { ThreeCardConviction } from "@/components/sections/ThreeCardConviction";
import {
  ABOUT_PRESS_ENQUIRIES,
  ABOUT_PRESS_RECOGNITION,
  ABOUT_PRESS_REGULATORY,
} from "../_data/content";

export function AboutPressContent() {
  return (
    <>
      <EditorialCardGrid
        headline={ABOUT_PRESS_REGULATORY.headline}
        items={ABOUT_PRESS_REGULATORY.items}
        id="about-press-regulatory"
      />
      <ThreeCardConviction
        id="about-press-recognition"
        eyebrow={ABOUT_PRESS_RECOGNITION.badge}
        title={ABOUT_PRESS_RECOGNITION.headline}
        subtitle="Peer and press acknowledgements across three recent years."
        background={{
          src: "/images/our-conviction-1.webp",
          alt: "Editorial background for press recognition",
        }}
        cards={ABOUT_PRESS_RECOGNITION.items.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
        }))}
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
