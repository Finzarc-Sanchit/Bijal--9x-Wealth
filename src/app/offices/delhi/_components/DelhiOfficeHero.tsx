import { PhotoBannerHero } from "@/components/hero/PhotoBannerHero";
import { DELHI_OFFICE_HERO } from "../_data/content";

export function DelhiOfficeHero() {
  return (
    <PhotoBannerHero
      backgroundImage={DELHI_OFFICE_HERO.backgroundImage}
      headline={DELHI_OFFICE_HERO.headline}
      description={DELHI_OFFICE_HERO.description}
    />
  );
}
