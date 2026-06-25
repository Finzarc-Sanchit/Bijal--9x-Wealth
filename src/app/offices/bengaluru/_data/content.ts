import type { OfficePracticeSectionProps } from "@/components/sections/OfficePracticeSection";
import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
export const BENGALURU_OFFICE_METADATA = {
  title: "Bengaluru Office — South India Practice, UB City · 9xWealth",
  description:
    "The Bengaluru office serves founders, operators, and second-generation family heads across Karnataka, Tamil Nadu, and Telangana.",
  keywords: [
    "9xWealth Bengaluru",
    "insurance broker UB City",
    "South India practice",
  ],
} as const;

export const BENGALURU_OFFICE_HERO = {
  backgroundImage: {
    src: "/images/hero-banner.webp",
    alt: "Bengaluru cityscape",
  },
  headline: "Where new wealth meets old discipline.",
  description:
    "The Bengaluru office serves a generation of founders, operators, and second-generation family heads — across Karnataka, Tamil Nadu, and Telangana. New money, conventional structures, considered counsel.",
} as const;

export const BENGALURU_OFFICE_PRACTICE = {
  id: "bengaluru-office-practice",
  badge: "South India Practice",
  paragraphs: [
    "The Bengaluru practice was opened to serve a generation of founders building enduring companies — and discovering that the wealth that came with them needed the same architecture that older Bombay families had relied on for decades.",
    "From UB City we serve startup founders considering keyman cover for the first time, second-generation family operators stepping into formal roles, and UHNI households across the southern states. The practice is led with the same standard as Mumbai, with deep local relationships into the institutions and hospitals of the region.",
    "A meaningful share of our cross-border NRI mandates — particularly Bay Area and Singapore — are coordinated from this office.",
  ],
  officeLead: {
    badge: "Office lead",
    name: "The South India Partner",
    role: "Bengaluru · Practice Lead",
  },
  contact: {
    address: ["UB City, Vittal Mallya Road", "Lavelle Nagar", "560001, India"],
    phone: "+91 80 4567 1200",
    phoneHref: "tel:+918045671200",
    email: "practice@9xwealth.in",
    hours: ["Mon–Fri · 9.30am – 6.30pm", "Sat · 10.00am – 2.00pm"],
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=UB+City+Vittal+Mallya+Road+Bengaluru",
  },
} as const satisfies Omit<OfficePracticeSectionProps, "className">;
export const BENGALURU_OFFICE_COVERAGE = {
  badge: "Coverage from this office",
  headline: "The disciplines led from Bengaluru.",
  items: [
    {
      id: "01",
      title: "Keyman & Enterprise",
      description: "Buy-sell agreements, partner protection, and family-business continuity cover.",
      image: {
        src: "/images/practice-areas/keyman-enterprise.jpg",
        alt: "Business succession and enterprise protection",
      },
    },
    {
      id: "02",
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      image: {
        src: "/images/practice-areas/term-legacy-cover.jpg",
        alt: "Family legacy and financial protection planning",
      },
    },
    {
      id: "03",
      title: "Private Health Coverage",
      description:
        "Family floater with international hospitalisation and dedicated claim advocates.",
      image: {
        src: "/images/practice-areas/private-health-coverage.jpg",
        alt: "Premium healthcare and medical protection",
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
    "/services/keyman",
    "/services/term-legacy",
    "/services/health",
    "/families/business-owners",
    "/families/nri",
    "/services/wealth-ulips",
  ],
} as const;
