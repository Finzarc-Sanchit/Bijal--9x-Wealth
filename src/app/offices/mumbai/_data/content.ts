import type { OfficePracticeSectionProps } from "@/components/sections/OfficePracticeSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
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
    src: "/images/hero-banner.webp",
    alt: "Mumbai skyline and Bandra Kurla Complex",
  },
  headline: "Established in 2013.",
  description:
    "The principal office of 9xWealth, at Maker Maxity, Bandra Kurla Complex. The address from which the practice was founded — and from which the longest-tenured mandates are still served.",
} as const;

export const MUMBAI_OFFICE_PRACTICE = {
  id: "mumbai-office-practice",
  badge: "Principal Office",
  paragraphs: [
    "Mumbai is where 9xWealth was conceived and where the practice continues to be led from. The office serves the densest concentration of family offices, listed promoters, and UHNI households in India — and the international flows of the Indian diaspora that route through the city.",
    "From the principal office we coordinate every cross-border placement (GIFT IFSC and Lloyd's of London), every specie underwriting, and every UHNI mandate that requires the senior partnership directly.",
    "Mumbai is also our claims base — the senior advocates who own the matters end-to-end, anywhere in the world, sit in this office.",
  ],
  officeLead: {
    badge: "Office lead",
    name: "The Founding Partner",
    role: "Mumbai · Practice Lead",
  },
  contact: {
    address: ["11th Floor, Maker Maxity", "Bandra Kurla Complex", "400051, India"],
    phone: "+91 22 6157 9000",
    phoneHref: "tel:+912261579000",
    email: "practice@9xwealth.in",
    hours: ["Mon–Fri · 9.30am – 6.30pm", "Sat · 10.00am – 2.00pm"],
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Maker+Maxity+Bandra+Kurla+Complex+Mumbai",
  },
} as const satisfies Omit<OfficePracticeSectionProps, "className">;
export const MUMBAI_OFFICE_COVERAGE = {
  badge: "Coverage from this office",
  headline: "The disciplines led from Mumbai.",
  items: [
    {
      id: "01",
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      image: {
        src: "/images/practice-areas/term-legacy-cover.jpg",
        alt: "Family legacy and financial protection planning",
      },
    },
    {
      id: "02",
      title: "Specie & High-Value",
      description: "Art, jewellery, classic cars, marine, aviation, and K&R architecture.",
      image: {
        src: "/images/practice-areas/specie-high-value.jpg",
        alt: "Luxury assets and specialty insurance coverage",
      },
    },
    {
      id: "03",
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
      image: {
        src: "/images/practice-areas/global-solutions.jpg",
        alt: "International insurance and global family planning",
      },
    },
    {
      id: "04",
      title: "UHNI Families",
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
      image: {
        src: "/images/unhi/hero.webp",
        alt: "Ultra-high-net-worth family protection and succession planning",
      },
    },
    {
      id: "05",
      title: "Business Owners",
      description: "Keyman, buy-sell, and family-business continuity cover.",
      image: {
        src: "/images/business-owners/hero.webp",
        alt: "Business succession and enterprise protection",
      },
    },
    {
      id: "06",
      title: "Listed Promoters",
      description: "Pledge cover, SEBI considerations, and MWPA on promoter holdings.",
      image: {
        src: "/images/listed-promoters/hero.webp",
        alt: "Listed promoter and enterprise protection",
      },
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
