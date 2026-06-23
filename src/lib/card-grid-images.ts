import type { CompactPracticeCardImage } from "@/components/cards/compact-practice-card";

const CARD_GRID_FALLBACK_IMAGES = [
  "/images/process/conversation.jpg",
  "/images/process/architecture.jpg",
  "/images/process/stewardship.jpg",
  "/images/process/activation.jpg",
  "/images/our-conviction.jpg",
  "/images/practice-areas/term-legacy-cover.jpg",
] as const;

export function resolveCardGridImage(
  title: string,
  index: number,
  image?: CompactPracticeCardImage,
): CompactPracticeCardImage {
  if (image) return image;

  return {
    src: CARD_GRID_FALLBACK_IMAGES[index % CARD_GRID_FALLBACK_IMAGES.length],
    alt: title,
  };
}
