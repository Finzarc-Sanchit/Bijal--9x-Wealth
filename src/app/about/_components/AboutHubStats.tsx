import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { ABOUT_HUB_STATS } from "../_data/content";

export function AboutHubStats() {
  return (
    <EditorialCardGrid
      headline={ABOUT_HUB_STATS.headline}
      items={ABOUT_HUB_STATS.items}
      id="about-hub-stats"
    />
  );
}
