import { PhotoBannerHero } from "@/components/hero/PhotoBannerHero";
import { CAREERS_HERO } from "../_data/content";

export function CareersHero() {
  return (
    <PhotoBannerHero
      backgroundImage={CAREERS_HERO.backgroundImage}
      headline={CAREERS_HERO.headline}
      description={CAREERS_HERO.description}
    />
  );
}
