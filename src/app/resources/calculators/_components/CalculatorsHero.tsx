import { PhotoBannerHero } from "@/components/hero/PhotoBannerHero";
import { CALCULATORS_HERO } from "../_data/content";

export function CalculatorsHero() {
  return (
    <PhotoBannerHero
      backgroundImage={CALCULATORS_HERO.backgroundImage}
      headline={CALCULATORS_HERO.headline}
      description={CALCULATORS_HERO.description}
    />
  );
}
