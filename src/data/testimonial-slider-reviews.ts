import type { Review } from "@/components/ui/testimonial-slider";

const unsplash = (id: string, width: number, height: number) =>
  `https://images.unsplash.com/${id}?w=${width}&h=${height}&fit=crop&q=80`;

/**
 * Homepage testimonial slider dataset.
 * Card 1 is the verified anonymous client quote; cards 2–3 are illustrative placeholders for layout balance.
 */
export const TESTIMONIAL_SLIDER_REVIEWS: Review[] = [
  {
    id: "listed-manufacturing",
    name: "Founder, Listed Manufacturing Group",
    affiliation: "Mumbai · Client since 2017",
    quote:
      "For the first time, our family's protection felt deliberate — not inherited, not improvised. The conversation was unhurried, the math was transparent, and nothing was sold before it was understood.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1681997885823-77f388bfc038?q=80&w=800&h=1000&auto=format&fit=crop",
    thumbnailSrc:
      "https://plus.unsplash.com/premium_photo-1681997885823-77f388bfc038?q=80&w=120&h=150&auto=format&fit=crop",
  },
  {
    id: "piramal-heritage",
    name: "Anand Piramal",
    affiliation: "Managing Director, Piramal Heritage Office",
    quote:
      "Managing multi-carrier term compliance across our family office was an operational bottleneck. Their institutional precision and creditor-proof structuring under MWPA gave our board absolute confidence.",
    imageSrc: unsplash("photo-1507003211169-0a1dd7228f2d", 800, 1000),
    thumbnailSrc: unsplash("photo-1507003211169-0a1dd7228f2d", 120, 150),
  },
  {
    id: "singhania-holdings",
    name: "Aditi K. Singhania",
    affiliation: "Trustee, Singhania Family Holdings",
    quote:
      "They don't treat term mandates as an off-the-shelf product. The succession-calibrated math uncovered structural gaps in our promoter pledge protection that three previous brokerages overlooked entirely.",
    imageSrc: unsplash("photo-1573496359142-b8d87734a5a2", 800, 1000),
    thumbnailSrc: unsplash("photo-1573496359142-b8d87734a5a2", 120, 150),
  },
];
