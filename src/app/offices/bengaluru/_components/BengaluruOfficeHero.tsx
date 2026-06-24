import { PhotoBannerHero } from "@/components/hero/PhotoBannerHero";
import { BENGALURU_OFFICE_HERO } from "../_data/content";

export function BengaluruOfficeHero() {
  return (
    <PhotoBannerHero
      backgroundImage={BENGALURU_OFFICE_HERO.backgroundImage}
      headline={BENGALURU_OFFICE_HERO.headline}
      description={BENGALURU_OFFICE_HERO.description}
    />
  );
}
