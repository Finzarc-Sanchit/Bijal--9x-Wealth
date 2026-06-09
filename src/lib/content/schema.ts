import { z } from "zod";

export const contactSchema = z.object({
  phone: z.string(),
  phoneHref: z.string(),
  whatsapp: z.string(),
  whatsappHref: z.string(),
  email: z.string().email(),
  address: z.object({
    line1: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),
});

export const socialSchema = z.object({
  facebook: z.string().url(),
  instagram: z.string().url(),
  linkedin: z.string().url(),
  tataAiaPortal: z.string().url(),
});

export const serviceSchema = z.object({
  title: z.string(),
  description: z.string(),
  items: z.array(z.string()),
});

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const siteContentSchema = z.object({
  site: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    headline: z.string(),
    headlineLine1: z.string().optional(),
    headlineLine2: z.string().optional(),
    verticalWords: z.array(z.string()).optional(),
    subheadline: z.string(),
    primaryCta: z.string(),
    secondaryCta: z.string(),
    videoUrl: z.string().url().optional(),
    videoPoster: z.string().url().optional(),
  }),
  mission: z.string(),
  vision: z.string(),
  about: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    whyChoose: z.string(),
    journey: z.string(),
    credentials: z.array(z.string()),
    imageUrl: z.string().optional(),
  }),
  services: z.array(serviceSchema),
  products: z.array(productSchema),
  trustBadges: z.array(z.string()),
  testimonials: z.array(
    z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string().optional(),
      image: z.string().url().optional(),
    }),
  ),
  contact: contactSchema,
  social: socialSchema,
  disclaimer: z.string(),
  updatedAt: z.string().optional(),
});

export type SiteContent = z.infer<typeof siteContentSchema>;
export type TemplateVariant = "classic" | "modern" | "bold";

export const TEMPLATE_VARIANTS: {
  id: TemplateVariant;
  name: string;
  description: string;
}[] = [
  {
    id: "classic",
    name: "Classic Executive",
    description: "Traditional navy & gold — trusted financial firm aesthetic",
  },
  {
    id: "modern",
    name: "Modern Minimal",
    description: "Hims-inspired hero — scroll-pinned phone mockup with 3 wealth slides",
  },
  {
    id: "bold",
    name: "Bold Premium",
    description: "Dark luxury theme with gold gradients and strong typography",
  },
];
