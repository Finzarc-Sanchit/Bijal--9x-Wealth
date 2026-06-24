import { StatsSection } from "@/components/sections/StatsSection";
import { ABOUT_HUB_STATS } from "../_data/content";

export function AboutHubStats() {
  return (
    <StatsSection
      id={ABOUT_HUB_STATS.id}
      ariaLabel="Stewardship in numbers"
      headline={ABOUT_HUB_STATS.headline}
      leftCopy={ABOUT_HUB_STATS.leftCopy}
      stats={ABOUT_HUB_STATS.stats}
      primaryCta={ABOUT_HUB_STATS.primaryCta}
      secondaryCta={ABOUT_HUB_STATS.secondaryCta}
    />
  );
}
