import type { EditorialCard } from "@/components/sections/EditorialCardGrid";
import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { FaqItem } from "@/components/sections/EditorialFaqSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const SPECIE_METADATA = {
  title: "Specie & High-Value Cover — Art, Jewellery, Yachts, K&R · 9X Wealth",
  description:
    "All-risks worldwide cover for jewellery, art, watches, classic motors, marine and aviation hull, and discreet K&R for families with international exposure.",
  keywords: [
    "specie insurance India",
    "fine art insurance Mumbai",
    "jewellery insurance HNI",
    "yacht insurance India",
    "kidnap ransom insurance",
    "9X Wealth specie cover",
  ],
} as const;

export const SPECIE_HERO = {
  backgroundImage: {
    src: "/images/specie/hero.webp",
    alt: "Fine art gallery evoking high-value asset stewardship",
  },
  pillImage: {
    src: "/images/practice-areas/specie-high-value.jpg",
    alt: "Luxury assets and specialty insurance coverage",
  },
  leadWord: "For the assets ",
  headlineLines: ["that rarely insure", "themselves."] as const,
  epigraph:
    "All-risks worldwide cover for jewellery, art, watches, and classic motors. Marine and aviation hull. Discreet K&R for families with international exposure. Underwritten quietly, by name.",
} as const;

export const SPECIE_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const SPECIE_CONVICTION = {
  badge: "The thesis",
  headline: "The most valuable possessions are\noften\nthe most overlooked.",
  paragraphs: [
    "Most household policies in India cap jewellery at 25% of building sum insured, exclude pieces over a small threshold, and refuse cover outside the home. That is fine for an ordinary household. It is not adequate for a family whose jewellery alone exceeds the value of most homes.",
    "Specie insurance — the discipline that began with bullion in vaults and was extended to fine art, watches, classic cars, and rare wines — is built around the proposition that all-risks worldwide cover is the right default, and exclusions are negotiated narrowly and transparently.",
    "We place these covers through pre-existing relationships with named underwriters in London and Mumbai. The valuations are documented to the standard the insurer requires. The cover travels — to vaults, to galleries, to private exhibitions, to weddings. And the underwriting proceeds quietly, under NDA, exactly the way the family expects.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const SPECIE_CLASSES = {
  badge: "Six classes",
  headline: "Cover that goes where ordinary policies do not.",
  backgroundImage: {
    src: "/images/specie/six-classes.webp",
    alt: "Fine art gallery evoking high-value asset stewardship",
  },
  items: [
    {
      id: "01",
      title: "Jewellery & precious objects",
      description:
        "All-risks worldwide cover, valued via accredited gemmologists, refreshed for material movements. Covers vault, transit, travel, and home wear.",
    },
    {
      id: "02",
      title: "Fine art & antiquities",
      description:
        "Single-piece or schedule-wide cover. Includes loan to museums, private exhibition, transit, and conservation. Title-defect cover available for premium pieces.",
    },
    {
      id: "03",
      title: "Watches & timepieces",
      description:
        "Schedule-based or blanket cover for collections. Particularly important when pieces travel between residences or are worn in public.",
    },
    {
      id: "04",
      title: "Classic cars & motor collections",
      description:
        "Agreed-value cover where the payout matches the appraised value. Concours and rally use endorsed where required. Storage and transit included.",
    },
    {
      id: "05",
      title: "Yachts, aircraft, marine",
      description:
        "Hull and machinery, P&I, and crew liability for personal yachts. Aviation cover for private aircraft including hull, war risks, and passenger liability.",
    },
    {
      id: "06",
      title: "Kidnap & ransom (K&R)",
      description:
        "Indemnity for ransom, negotiator and crisis-response services, and confidential cover that does not appear in any public schedule. Discreet underwriting only.",
    },
  ] as const satisfies readonly EditorialCard[],
} as const;

export const SPECIE_FAQ = {
  badge: "Frequently asked",
  headline: "Specie cover, candidly answered.",
  items: [
    {
      question: "What does specie insurance actually cover?",
      answer:
        "Specie cover is all-risks insurance for high-value moveable property — jewellery, fine art, watches, classic cars, rare wines, and similar. The policy covers physical loss or damage from any cause not specifically excluded, anywhere in the world, including transit and storage.",
    },
    {
      question: "How is jewellery and art valued for cover?",
      answer:
        "We coordinate appraisals through accredited partners — gemmological laboratories for jewellery, ICAS-accredited art valuers for paintings and objets, and category specialists for watches and classic cars. Valuations are documented to the standard insurers require, and refreshed every two-to-three years for material movements.",
    },
    {
      question: "Are pieces covered while travelling or on loan to galleries?",
      answer:
        "Yes — well-structured specie policies provide worldwide cover including transit, public exhibition, and private loan to museums or galleries. We extend or restrict the policy's territorial scope based on the family's actual movement patterns.",
    },
    {
      question: "What does kidnap-and-ransom (K&R) cover involve?",
      answer:
        "K&R policies indemnify ransom payments, related expenses (negotiator fees, travel, security, lost income), and provide access to a global crisis-response firm. Cover is offered with strict confidentiality — even the existence of the policy is undisclosed within the household. We place K&R primarily for families with international travel exposure to specific jurisdictions.",
    },
    {
      question: "Can yachts, aircraft, and classic cars be covered?",
      answer:
        "Yes. Marine and aviation hull cover, plus specialised classic-car cover with agreed-value clauses (so the payout matches the appraised value, not market depreciation). We work with global underwriters for these classes and coordinate with your asset-management firm.",
    },
    {
      question: "How discrete is the underwriting process?",
      answer:
        "Highly. Our specie placements proceed through pre-existing relationships with named underwriters under NDA. There are no broker bids in the open market, no third-party intermediaries beyond our coverholder partners, and no public footprint. Most clients prefer it that way.",
    },
  ] as const satisfies readonly FaqItem[],
} as const;

export const SPECIE_RELATED = {
  badge: "Continue reading",
  headline: "Connected to this page.",
  items: [
    {
      title: "Private Health Coverage",
      description:
        "Family floater with international hospitalisation and dedicated claim advocates.",
      href: "/services/health",
    },
    {
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
      href: "/services/global",
    },
    {
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: "/services/term-legacy",
    },
    {
      title: "UHNI Families",
      description:
        "For families of ₹100 Cr+ — relationship director, quarterly home reviews, succession architecture.",
      href: "/families/uhni",
    },
    {
      title: "NRI & Global Indian Households",
      description: "Cross-border tax, GIFT City products, currency hedging, FATCA/CRS.",
      href: "/families/nri",
    },
    {
      title: "Glossary",
      description: "A–Z of insurance, estate, and succession terms used across our practice.",
      href: "/resources/glossary",
    },
  ] as const satisfies readonly RelatedLink[],
} as const;
