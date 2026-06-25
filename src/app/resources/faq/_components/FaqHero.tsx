import { PhotoBannerHero } from "@/components/hero/PhotoBannerHero";
import { FAQ_HERO } from "../_data/content";

export function FaqHero() {
  return (
    <PhotoBannerHero
      backgroundImage={FAQ_HERO.backgroundImage}
      headline={FAQ_HERO.headline}
      description={FAQ_HERO.description}
    />
  );
}
