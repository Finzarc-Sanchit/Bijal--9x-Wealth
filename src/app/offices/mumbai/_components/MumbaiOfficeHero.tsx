import { PhotoBannerHero } from "@/components/hero/PhotoBannerHero";
import { MUMBAI_OFFICE_HERO } from "../_data/content";

export function MumbaiOfficeHero() {
  return (
    <PhotoBannerHero
      backgroundImage={MUMBAI_OFFICE_HERO.backgroundImage}
      headline={MUMBAI_OFFICE_HERO.headline}
      description={MUMBAI_OFFICE_HERO.description}
    />
  );
}
