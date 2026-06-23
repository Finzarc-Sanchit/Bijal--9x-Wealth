import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { ProtectionShowcaseItem } from "@/components/sections/ProtectionShowcase";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";
import { resolveCardGridImage } from "@/lib/card-grid-images";

type ProtectionItemSource = EditorialCard | GridItem;

function protectionBody(item: ProtectionItemSource) {
  if (!("subtitle" in item) || !item.subtitle) return item.description;
  if (item.description.toLowerCase().startsWith(item.subtitle.toLowerCase())) {
    return item.description;
  }
  return `${item.subtitle}. ${item.description}`;
}

export function editorialCardsToProtectionItems(
  items: readonly ProtectionItemSource[],
  options?: { href?: string; cta?: string },
): ProtectionShowcaseItem[] {
  const href = options?.href ?? "/contact";
  const cta = options?.cta ?? "Schedule a conversation";

  return items.map((item, index) => {
    const image = resolveCardGridImage(item.title, index, item.image);

    return {
      id: item.id,
      title: item.title,
      body: protectionBody(item),
      src: image.src,
      alt: image.alt,
      href,
      cta,
    };
  });
}

export function relatedLinksToProtectionItems(
  items: readonly RelatedLink[],
  options?: { cta?: string },
): ProtectionShowcaseItem[] {
  const cta = options?.cta ?? "Explore this practice";

  return items.map((item, index) => {
    const image = resolveCardGridImage(item.title, index);

    return {
      id: `link-${index}`,
      title: item.title,
      body: item.description,
      src: image.src,
      alt: image.alt,
      href: item.href,
      cta,
    };
  });
}
