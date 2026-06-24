import type { OfficePracticeSectionProps } from "@/components/sections/OfficePracticeSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
export const DELHI_OFFICE_METADATA = {
  title: "New Delhi Office — North India Practice, Gurugram · 9xWealth",
  description:
    "The North India practice serves listed-company promoters, family offices, and multi-generational households across Delhi-NCR and the northern states.",
  keywords: [
    "9xWealth Delhi",
    "insurance broker Gurugram",
    "North India practice",
    "listed promoters cover",
  ],
} as const;

export const DELHI_OFFICE_HERO = {
  backgroundImage: {
    src: "/images/hero-banner.webp",
    alt: "Delhi NCR skyline",
  },
  headline: "For the families that hold the listings.",
  description:
    "The North India practice serves listed-company promoters, family offices, and multi-generational households across Delhi, Gurugram, Punjab, and the northern states. Pledge cover, D&O, succession architecture.",
} as const;

export const DELHI_OFFICE_PRACTICE = {
  id: "delhi-office-practice",
  badge: "North India Practice",
  paragraphs: [
    "The North India practice was opened to serve a concentration of listed-company promoters and multi-generation family offices that historically relied on private bankers and chartered accountants for insurance counsel — and rarely on dedicated brokerage.",
    "From DLF Cyber Park we serve mandates for promoters of listed entities, family offices in Lutyens' Delhi and Chanakyapuri, and households across the agro and industrial belts of the northern states. The practice carries strong specialist coverage in pledge cover, D&O, and trust-owned succession structures.",
    "The relationship with Lloyd's of London is co-managed from this office, alongside Mumbai, given the concentration of large-sum mandates we place.",
  ],
  officeLead: {
    badge: "Office lead",
    name: "The North India Partner",
    role: "Delhi-NCR · Practice Lead",
  },
  contact: {
    address: ["Tower B, DLF Cyber Park", "Golf Course Road, Gurugram", "122002, India"],
    phone: "+91 11 4012 8800",
    phoneHref: "tel:+911140128800",
    email: "practice@9xwealth.in",
    hours: ["Mon–Fri · 9.30am – 6.30pm", "Sat · 10.00am – 2.00pm"],
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=DLF+Cyber+Park+Golf+Course+Road+Gurugram",
  },
} as const satisfies Omit<OfficePracticeSectionProps, "className">;
export const DELHI_OFFICE_COVERAGE = {
  badge: "Coverage from this office",
  headline: "The disciplines led from Delhi-NCR.",
  items: [
    {
      id: "01",
      title: "Keyman & Enterprise",
      description: "Buy-sell agreements, partner protection, and family-business continuity cover.",
    },
    {
      id: "02",
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
    },
    {
      id: "03",
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
    },
    {
      id: "04",
      title: "Listed Promoters",
      description: "Pledge cover, SEBI considerations, and MWPA on promoter holdings.",
    },
    {
      id: "05",
      title: "Business Owners",
      description: "Keyman, buy-sell, and family-business continuity cover.",
    },
    {
      id: "06",
      title: "Specie & High-Value",
      description: "Art, jewellery, classic cars, marine, aviation, and K&R architecture.",
    },
  ] as const satisfies readonly EditorialCard[],
  links: [
    "/services/keyman",
    "/services/term-legacy",
    "/services/global",
    "/families/listed-promoters",
    "/families/business-owners",
    "/services/specie",
  ],
} as const;
