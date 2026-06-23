import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { EditorialProseSubsection } from "@/components/sections/EditorialProseSection";

export const MUMBAI_OFFICE_METADATA = {
  title: "Mumbai Office — Principal Practice, Bandra Kurla Complex · 9xWealth",
  description:
    "The principal office of 9xWealth at Maker Maxity, Bandra Kurla Complex. Founded here in 2013 — coordinating cross-border placement, specie underwriting, and UHNI mandates.",
  keywords: [
    "9xWealth Mumbai",
    "insurance broker BKC",
    "Maker Maxity office",
    "principal office Mumbai",
  ],
} as const;

export const MUMBAI_OFFICE_HERO = {
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    alt: "Mumbai skyline and Bandra Kurla Complex",
  },
  pillImage: {
    src: "/images/practice-areas/term-legacy-cover.jpg",
    alt: "9xWealth Mumbai principal office",
  },
  leadWord: "",
  headlineLines: ["Established in", "MMXIII."] as const,
  epigraph:
    "The principal office of 9xWealth, at Maker Maxity, Bandra Kurla Complex. The address from which the practice was founded — and from which the longest-tenured mandates are still served.",
} as const;

export const MUMBAI_OFFICE_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const MUMBAI_OFFICE_CONVICTION = {
  badge: "Principal Office",
  headline: "Mumbai is where the practice\nwas conceived and is still led.",
  paragraphs: [
    "Mumbai is where 9xWealth was conceived and where the practice continues to be led from. The office serves the densest concentration of family offices, listed promoters, and UHNI households in India — and the international flows of the Indian diaspora that route through the city.",
    "From the principal office we coordinate every cross-border placement (GIFT IFSC and Lloyd's of London), every specie underwriting, and every UHNI mandate that requires the senior partnership directly.",
    "Mumbai is also our claims base — the senior advocates who own the matters end-to-end, anywhere in the world, sit in this office.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const MUMBAI_OFFICE_DETAILS = {
  badge: "Office lead",
  headline: "The Founding Partner",
  paragraphs: ["Mumbai · Practice Lead"],
  subsections: [
    {
      title: "Address",
      paragraphs: ["11th Floor, Maker Maxity", "Bandra Kurla Complex", "400051, India"],
    },
    {
      title: "Phone",
      paragraphs: ["+91 22 6157 9000"],
    },
    {
      title: "Email",
      paragraphs: ["practice@9xwealth.in"],
    },
    {
      title: "Hours",
      paragraphs: ["Mon–Fri · 9.30am – 6.30pm", "Sat · 10.00am – 2.00pm"],
    },
  ] as const satisfies readonly EditorialProseSubsection[],
} as const;

export const MUMBAI_OFFICE_COVERAGE = {
  badge: "Coverage from this office",
  headline: "The disciplines led from Mumbai.",
  items: [
    {
      id: "01",
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
    },
    {
      id: "02",
      title: "Specie & High-Value",
      description: "Art, jewellery, classic cars, marine, aviation, and K&R architecture.",
    },
    {
      id: "03",
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
    },
    {
      id: "04",
      title: "UHNI Families",
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
    },
    {
      id: "05",
      title: "Business Owners",
      description: "Keyman, buy-sell, and family-business continuity cover.",
    },
    {
      id: "06",
      title: "Listed Promoters",
      description: "Pledge cover, SEBI considerations, and MWPA on promoter holdings.",
    },
  ] as const satisfies readonly EditorialCard[],
  links: [
    "/services/term-legacy",
    "/services/specie",
    "/services/global",
    "/families/uhni",
    "/families/business-owners",
    "/families/listed-promoters",
  ],
} as const;
