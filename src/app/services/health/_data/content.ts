import type { EditorialConvictionParagraph } from "@/components/sections/EditorialConvictionSection";
import type { FaqItem } from "@/components/sections/EditorialFaqSection";
import type { HeroCtaConfig } from "@/components/hero/InteriorPageHero";
import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { RelatedLink } from "@/components/sections/RelatedLinksSection";

export const HEALTH_METADATA = {
  title: "Private Health Coverage — Family Floater & International Health Insurance · 9X Wealth",
  description:
    "Family floater architecture with international hospitalisation, dedicated claim advocates, and direct hospital relationships for HNI households — Borivali, Mumbai.",
  keywords: [
    "private health insurance Mumbai",
    "family floater HNI India",
    "international health cover India",
    "super top-up health insurance",
    "health claim concierge Mumbai",
    "9X Wealth health coverage",
  ],
} as const;

export const HEALTH_HERO = {
  backgroundImage: {
    src: "/images/health/hero.webp",
    alt: "Premium private hospital corridor evoking discreet healthcare access",
  },
  pillImage: {
    src: "/images/practice-areas/private-health-coverage.jpg",
    alt: "Premium healthcare and medical protection",
  },
  leadWord: "Health cover",
  headlineLines: [" for families who can ", "already afford it."] as const,
  epigraph:
    "Health insurance for the wealthy is not about the bill. It is about a senior advocate on the phone at 2am, a cashless admission to the right hospital, and treatment in the right city — without the family doing the arranging.",
} as const;

export const HEALTH_CTAS = [
  {
    label: "Schedule a Conversation",
    href: "/contact",
    variant: "primary",
  },
] as const satisfies readonly HeroCtaConfig[];

export const HEALTH_CONVICTION = {
  badge: "The thesis",
  headline: "Wealthy families need\nstewardship,\nnot premium savings.",
  paragraphs: [
    "A family worth ₹50 Cr can self-fund most hospitalisations. They do not need health insurance to pay the bill. They need it to navigate the system at 2am, in an unfamiliar city, with the right hospital admitting the patient cashless because someone made the call.",
    "We place a small, fast base policy for routine care, and a tower of super top-up cover above it for the catastrophic events that are statistically rare and financially complete. International cover is built in by default — for the family member already in London for a sabbatical, the parent visiting grandchildren in California, the unexpected referral to Singapore.",
    "And on top of all of it, a senior advocate. Not a call-centre TPA. A named human, reachable any hour, with a direct phone to the medical superintendent at the hospital where you actually want your family admitted.",
  ] as const satisfies readonly EditorialConvictionParagraph[],
} as const;

export const HEALTH_PROCESS = {
  badge: "How we work",
  headline: "Six commitments on every health mandate.",
  items: [
    {
      id: "01",
      title: "A floater base, a top-up tower",
      description:
        "A modest base policy at ₹2–5 Cr handles private hospitalisation. A super top-up tower stacked above takes the family to catastrophic-event protection, often ₹50 Cr+.",
    },
    {
      id: "02",
      title: "International network as standard",
      description:
        "Emergency international hospitalisation built into every floater. Planned overseas treatment in London, Singapore, or the US arranged through GIFT City riders.",
    },
    {
      id: "03",
      title: "Direct hospital relationships",
      description:
        "Pre-authorisations negotiated directly with the medical superintendents at the leading private hospitals. Cashless admission, even at midnight, even for the unusual procedure.",
    },
    {
      id: "04",
      title: "Claim concierge, not a TPA",
      description:
        "Senior advocates own the claim end-to-end. Pre-auth, billing audit, post-discharge reimbursement. One phone number, any hour.",
    },
    {
      id: "05",
      title: "Senior-parent cover, candidly placed",
      description:
        "Parents in their 70s and 80s require dedicated structures. We place senior plans, critical-illness riders, and where insurance is no longer underwritten, we architect a self-funded health corpus.",
    },
    {
      id: "06",
      title: "Annual repricing, no autopilot",
      description:
        "Every year, premiums are re-quoted, network hospitals audited, and dependants reviewed. Policies do not drift; coverage adjusts as the family does.",
    },
  ] as const satisfies readonly GridItem[],
} as const;

export type HealthStickyFeature = {
  id: string;
  title: string;
  description: string;
  image: { src: string; alt: string; };
  bgColor: string;
  textColor: string;
};

export const HEALTH_STICKY_FEATURES = [
  {
    id: "01",
    title: HEALTH_PROCESS.items[0].title,
    description: HEALTH_PROCESS.items[0].description,
    image: {
      src: "/images/health/process/process-1.webp",
      alt: "Family floater and super top-up health cover architecture",
    },
    bgColor: "bg-white ring-1 ring-brand-navy/10 shadow-[0_8px_30px_-12px_rgba(10,22,40,0.1)]",
    textColor: "text-brand-navy/70",
  },
  {
    id: "02",
    title: HEALTH_PROCESS.items[1].title,
    description: HEALTH_PROCESS.items[1].description,
    image: {
      src: "/images/health/process/process-2.webp",
      alt: "International hospital network and overseas treatment access",
    },
    bgColor: "bg-brand-cream ring-1 ring-brand-navy/10",
    textColor: "text-brand-navy/70",
  },
  {
    id: "03",
    title: HEALTH_PROCESS.items[2].title,
    description: HEALTH_PROCESS.items[2].description,
    image: {
      src: "/images/health/process/process-3.webp",
      alt: "Direct relationships with leading private hospitals",
    },
    bgColor: "bg-white ring-1 ring-brand-navy/10 shadow-[0_8px_30px_-12px_rgba(10,22,40,0.1)]",
    textColor: "text-brand-navy/70",
  },
  {
    id: "04",
    title: HEALTH_PROCESS.items[3].title,
    description: HEALTH_PROCESS.items[3].description,
    image: {
      src: "/images/health/process/process-4.webp",
      alt: "Dedicated senior claim advocate coordinating hospital admission",
    },
    bgColor: "bg-brand-cream ring-1 ring-brand-navy/10",
    textColor: "text-brand-navy/70",
  },
  {
    id: "05",
    title: HEALTH_PROCESS.items[4].title,
    description: HEALTH_PROCESS.items[4].description,
    image: {
      src: "/images/health/process/process-5.webp",
      alt: "Senior-parent health cover and dedicated placement structures",
    },
    bgColor: "bg-white ring-1 ring-brand-navy/10 shadow-[0_8px_30px_-12px_rgba(10,22,40,0.1)]",
    textColor: "text-brand-navy/70",
  },
  {
    id: "06",
    title: HEALTH_PROCESS.items[5].title,
    description: HEALTH_PROCESS.items[5].description,
    image: {
      src: "/images/health/process/process-6.webp",
      alt: "Annual health policy review and repricing",
    },
    bgColor: "bg-brand-cream ring-1 ring-brand-navy/10",
    textColor: "text-brand-navy/70",
  },
] as const satisfies readonly HealthStickyFeature[];

export const HEALTH_FAQ = {
  badge: "Frequently asked",
  headline: "Private health, candidly answered.",
  items: [
    {
      question: "What is the right base sum insured for a family floater at our scale?",
      answer:
        "For HNI households, our default base is ₹2 Cr to ₹5 Cr per family with a ₹50 Cr–₹100 Cr super top-up overlay. The base handles routine private hospitalisation; the top-up covers catastrophic events and overseas treatment.",
    },
    {
      question: "Does the cover travel internationally?",
      answer:
        "Yes — our placements include emergency international hospitalisation as standard, and we structure planned-overseas-treatment riders for families that prefer specific institutions in Singapore, London, or the United States.",
    },
    {
      question: "How do claim concierges differ from a regular TPA?",
      answer:
        "Standard TPAs process paperwork. Our claim advocates own the matter — pre-authorisation negotiation, hospital coordination, billing audit, and post-discharge reimbursement. They are reachable at any hour, and they have direct phones to medical superintendents at the network hospitals we work with most.",
    },
    {
      question: "Can pre-existing conditions be covered?",
      answer:
        "Most insurers impose two-to-four-year waits on disclosed pre-existing conditions. We pre-screen the medical history, identify carriers that take a more favourable view of specific conditions (diabetes, hypertension, prior surgeries), and place with the right one — sometimes at a small loading.",
    },
    {
      question: "What about parents in their 70s and 80s?",
      answer:
        "Senior parental cover is a separate market. We place dedicated senior-citizen plans, GIFT City policies for parents with international exposure, and where the medical history precludes new cover, we structure self-funded health corpora supported by critical-illness and home-care policies.",
    },
    {
      question: "How frequently is the architecture reviewed?",
      answer:
        "Annually. Premiums are re-quoted, network hospitals are audited, and any new family members or dependants are folded in. We do not let policies drift on auto-renewal.",
    },
  ] as const satisfies readonly FaqItem[],
} as const;

export const HEALTH_RELATED = {
  badge: "Continue reading",
  headline: "Connected to this page.",
  items: [
    {
      title: "Term & Legacy Cover",
      description:
        "High-sum term policies under MWPA, HUF, or trust — creditor-proof and tax-efficient.",
      href: "/services/term-legacy",
    },
    {
      title: "Global Solutions",
      description: "Dollar-denominated cover via GIFT City IFSC and Lloyd's of London.",
      href: "/services/global",
    },
    {
      title: "Specie & High-Value",
      description: "Art, jewellery, classic cars, marine, aviation, and K&R architecture.",
      href: "/services/specie",
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
