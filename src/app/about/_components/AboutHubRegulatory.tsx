import { MethodologyTonalLayerRevealGridSection } from "@/components/sections/MethodologyTonalLayerRevealGridSection";
import { ABOUT_HUB_REGULATORY } from "../_data/content";

export function AboutHubRegulatory() {
  return (
    <MethodologyTonalLayerRevealGridSection
      id="about-hub-regulatory"
      headline={ABOUT_HUB_REGULATORY.headline}
      items={ABOUT_HUB_REGULATORY.items}
    />
  );
}
