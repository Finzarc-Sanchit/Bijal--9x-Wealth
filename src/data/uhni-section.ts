import { SITE_METRICS } from "@/data/site-metrics";

export const UHNI_SECTION_META = {
  eyebrow: "By Invitation",
  leadIn:
    "Most families begin with these disciplines. A private practice exists for estate-scale mandates.",
  heading: ["The private practice", "for families of ₹100 Cr+ wealth."],
  description: `Of the ${SITE_METRICS.familiesProtected} families we serve, ${SITE_METRICS.uhniMandates} operate at estate scale across India and the Indian diaspora — each with a single relationship that coordinates every protection decision across jurisdictions, generations, and the unexpected things life will inevitably ask you to manage.`,
  image: {
    src: "https://images.unsplash.com/photo-1694009514875-025cd00ed625?fm=jpg&q=85&w=1400&auto=format&fit=crop",
    alt: "Generations of women holding hands",
  },
  caption: "A mandate that outlasts us",
  inclusions: [
    "Dedicated relationship director",
    "Quarterly portfolio reviews at home",
    "Estate & succession architecture",
    "Cross-border coverage (GIFT City, Lloyd's)",
    "Specie cover for art, jewellery, watches",
    "24/7 dedicated claims concierge",
  ],
  ctas: [
    {
      label: "Request a Conversation",
      href: "/contact?type=audience",
      variant: "primary" as const,
    },
    {
      label: "Read about the practice",
      href: "/families/uhni",
      variant: "secondary" as const,
    },
  ],
} as const;
