import { NumberedAccordionSection } from "@/components/sections/NumberedAccordionSection";
import { SPECIE_CLASSES } from "../_data/content";

const SPECIE_CLASS_LABELS: Record<string, string> = {
  "01": "Jewellery",
  "02": "Fine art",
  "03": "Watches",
  "04": "Classic motors",
  "05": "Marine & aviation",
  "06": "Kidnap & ransom",
};

export function SpecieCards() {
  return (
    <NumberedAccordionSection
      id="specie-classes"
      badge={SPECIE_CLASSES.badge}
      headline={SPECIE_CLASSES.headline}
      intro="All-risks worldwide cover for the assets ordinary policies overlook."
      backgroundImage={SPECIE_CLASSES.backgroundImage}
      variant="overlay"
      items={SPECIE_CLASSES.items.map((item) => ({
        label: SPECIE_CLASS_LABELS[item.id] ?? item.title,
        title: item.title,
        description: item.description,
      }))}
      defaultOpenIndex={0}
    />
  );
}
