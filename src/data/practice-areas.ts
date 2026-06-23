import type { StaticImageData } from "next/image";

export type PracticeArea = {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: {
    src: string | StaticImageData;
    alt: string;
  };
};

export const PRACTICE_AREAS_META = {
  eyebrow: "AREAS OF PRACTICE",
  heading: ["Six disciplines.", "One coherent architecture."],
  description:
    "Once the method is clear, the architecture spans six disciplines. From family protection and health coverage to global risk architecture, every solution is designed to safeguard wealth, preserve legacy, and create long-term certainty.",
} as const;

/** Paths resolve from `public/images/practice-areas/` at runtime */
export const PRACTICE_AREAS = [
  {
    id: "term-legacy",
    title: "Term & Legacy Cover",
    description:
      "High-sum term insurance structured through MWPA, HUF, or trust frameworks to ensure wealth reaches the intended beneficiaries while remaining tax-efficient and protected from external claims.",
    cta: "Explore Term & Legacy Cover",
    href: "/services/term-legacy",
    image: {
      src: "/images/practice-areas/term-legacy-cover.jpg",
      alt: "Family legacy and financial protection planning",
    },
  },
  {
    id: "health",
    title: "Private Health Coverage",
    description:
      "Comprehensive family floater plans with international treatment access, dedicated claims advocacy, and preferred relationships with leading private healthcare institutions.",
    cta: "Explore Health Coverage",
    href: "/services/health",
    image: {
      src: "/images/practice-areas/private-health-coverage.jpg",
      alt: "Premium healthcare and medical protection",
    },
  },
  {
    id: "keyman",
    title: "Keyman & Enterprise",
    description:
      "Business continuity solutions including keyman insurance, partner protection, and buy-sell arrangements designed to preserve ownership structures and protect family enterprises.",
    cta: "Explore Business Protection",
    href: "/services/keyman",
    image: {
      src: "/images/practice-areas/keyman-enterprise.jpg",
      alt: "Business succession and enterprise protection",
    },
  },
  {
    id: "wealth-ulips",
    title: "Wealth & ULIPs",
    description:
      "Data-driven evaluation of ULIPs, guaranteed-return products, and wealth accumulation strategies, benchmarked against direct investment alternatives for complete transparency.",
    cta: "Explore Wealth Solutions",
    href: "/services/wealth-ulips",
    image: {
      src: "/images/practice-areas/wealth-ulips.jpg",
      alt: "Investment growth and wealth planning",
    },
  },
  {
    id: "global",
    title: "Global Solutions",
    description:
      "Cross-border protection through GIFT City IFSC and international markets, tailored for NRIs, globally mobile families, and multi-jurisdiction estate planning needs.",
    cta: "Explore Global Coverage",
    href: "/services/global",
    image: {
      src: "/images/practice-areas/global-solutions.jpg",
      alt: "International insurance and global family planning",
    },
  },
  {
    id: "specie",
    title: "Specie & High-Value",
    description:
      "Specialised protection for jewellery, fine art, collector vehicles, marine and aviation assets, alongside bespoke risk-management solutions for globally connected families.",
    cta: "Explore High-Value Asset Cover",
    href: "/services/specie",
    image: {
      src: "/images/practice-areas/specie-high-value.jpg",
      alt: "Luxury assets and specialty insurance coverage",
    },
  },
] satisfies readonly PracticeArea[];
