import { PhotoBannerHero } from "@/components/hero/PhotoBannerHero";
import { INSIGHTS_HERO } from "../_data/content";

export function InsightsHero() {
  return (
    <PhotoBannerHero
      backgroundImage={INSIGHTS_HERO.backgroundImage}
      headline={INSIGHTS_HERO.headline}
      description={INSIGHTS_HERO.description}
    />
  );
}
