import { PhotoBannerHero } from "@/components/hero/PhotoBannerHero";
import { MWPA_GUIDE_HERO } from "../_data/content";

export function MwpaGuideHero() {
  return (
    <PhotoBannerHero
      backgroundImage={MWPA_GUIDE_HERO.backgroundImage}
      headline={MWPA_GUIDE_HERO.headline}
      description={MWPA_GUIDE_HERO.description}
    />
  );
}
