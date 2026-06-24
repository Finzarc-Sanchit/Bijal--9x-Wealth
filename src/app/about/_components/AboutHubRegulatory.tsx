import { MethodologyTonalLayerGridSection } from "@/components/sections/MethodologyTonalLayerGridSection";
import { ABOUT_HUB_REGULATORY } from "../_data/content";

export function AboutHubRegulatory() {
  return (
    <MethodologyTonalLayerGridSection
      id="about-hub-regulatory"
      headline={ABOUT_HUB_REGULATORY.headline}
      items={ABOUT_HUB_REGULATORY.items}
    />
  );
}
