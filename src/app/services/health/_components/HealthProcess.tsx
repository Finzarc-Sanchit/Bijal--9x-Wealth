import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { HEALTH_PROCESS, HEALTH_STICKY_FEATURES } from "../_data/content";

export function HealthProcess() {
  return (
    <StickyFeatureSection
      id="how-we-work"
      badge={HEALTH_PROCESS.badge}
      headline={HEALTH_PROCESS.headline}
      subtitle="Our structural framework for managing your healthcare solutions."
      features={HEALTH_STICKY_FEATURES}
    />
  );
}
