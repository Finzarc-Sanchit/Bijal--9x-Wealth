import { PhotoBannerHero } from "@/components/hero/PhotoBannerHero";
import { GLOSSARY_HERO } from "../_data/content";

export function GlossaryHero() {
  return (
    <PhotoBannerHero
      backgroundImage={GLOSSARY_HERO.backgroundImage}
      headline={GLOSSARY_HERO.headline}
      description={GLOSSARY_HERO.description}
    />
  );
}
