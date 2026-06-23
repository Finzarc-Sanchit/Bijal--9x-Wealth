import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { SPECIE_CTAS, SPECIE_HERO } from "../_data/content";

export function SpecieHero() {
  return (
    <InnerPageHero
      backgroundImage={SPECIE_HERO.backgroundImage}
      pillImage={SPECIE_HERO.pillImage}
      leadWord={SPECIE_HERO.leadWord}
      headlineLines={SPECIE_HERO.headlineLines}
      epigraph={SPECIE_HERO.epigraph}
      ctas={SPECIE_CTAS}
    />
  );
}
