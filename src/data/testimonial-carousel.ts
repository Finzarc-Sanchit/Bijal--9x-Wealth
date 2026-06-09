import type { SiteContent } from "@/lib/content/schema";

/** Stock portraits for carousel visuals — illustrative only; quotes come from verified content. */
export const TESTIMONIAL_PORTRAITS = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=480&q=80",
    alt: "Professional woman smiling",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&q=80",
    alt: "Business professional portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=480&q=80",
    alt: "Woman in casual professional attire",
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=480&q=80",
    alt: "Man in professional setting",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=480&q=80",
    alt: "Woman with warm smile",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&q=80",
    alt: "Man smiling outdoors",
  },
] as const;

export type TestimonialCarouselItem = {
  image: { src: string; alt: string };
  quote: string;
  author: string;
  role?: string;
};

export function buildTestimonialCarouselItems(
  testimonials: SiteContent["testimonials"],
): TestimonialCarouselItem[] {
  if (testimonials.length === 0) return [];

  return TESTIMONIAL_PORTRAITS.map((portrait, index) => {
    const testimonial = testimonials[index % testimonials.length];
    return {
      image: portrait,
      quote: testimonial.quote,
      author: testimonial.author,
      role: testimonial.role,
    };
  });
}
