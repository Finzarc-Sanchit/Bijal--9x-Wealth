import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { FAQ_CTAS, FAQ_HERO } from "../_data/content";

export function FaqHero() {
  return (
    <InnerPageHero
      backgroundImage={FAQ_HERO.backgroundImage}
      pillImage={FAQ_HERO.pillImage}
      leadWord={FAQ_HERO.leadWord}
      headlineLines={FAQ_HERO.headlineLines}
      epigraph={FAQ_HERO.epigraph}
      ctas={FAQ_CTAS}
    />
  );
}
