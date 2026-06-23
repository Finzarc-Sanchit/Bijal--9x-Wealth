import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { StickyFeature } from "@/components/ui/sticky-scroll-cards-section";
import { resolveCardGridImage } from "@/lib/card-grid-images";

type StickyFeatureSource = EditorialCard | GridItem;

const STICKY_TONES = [
  {
    bgColor:
      "bg-white ring-1 ring-brand-navy/10 shadow-[0_8px_30px_-12px_rgba(10,22,40,0.1)]",
    textColor: "text-brand-navy/70",
  },
  {
    bgColor: "bg-brand-cream ring-1 ring-brand-navy/10",
    textColor: "text-brand-navy/70",
  },
] as const;

function stickyDescription(item: StickyFeatureSource) {
  if (!("subtitle" in item) || !item.subtitle) return item.description;
  if (item.description.toLowerCase().startsWith(item.subtitle.toLowerCase())) {
    return item.description;
  }
  return `${item.subtitle}. ${item.description}`;
}

export function editorialCardsToStickyFeatures(
  items: readonly StickyFeatureSource[],
): StickyFeature[] {
  return items.map((item, index) => {
    const tone = STICKY_TONES[index % STICKY_TONES.length];

    return {
      id: item.id,
      title: item.title,
      description: stickyDescription(item),
      image: resolveCardGridImage(item.title, index, item.image),
      bgColor: tone.bgColor,
      textColor: tone.textColor,
    };
  });
}
