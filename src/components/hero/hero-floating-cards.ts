export type HeroFloatingCard = {
  title: string;
  subtitle: string;
  accent: "teal" | "gold" | "navy";
  position: string;
  floatDelay: number;
  rotate: number;
};

export type HeroFloatingBadge = {
  icon: "shield" | "trending" | "message";
  color: string;
  position: string;
  floatDelay: number;
};

/** Positions are relative to phone frame — negative % places cards outside the bezel */
export const HERO_FLOATING_SETS: {
  cards: HeroFloatingCard[];
  badges: HeroFloatingBadge[];
}[] = [
  {
    cards: [
      {
        title: "Portfolio Value",
        subtitle: "Track SIPs & investments in one view",
        accent: "teal",
        position: "left-[-42%] top-[2%] sm:left-[-52%]",
        floatDelay: 0,
        rotate: -4,
      },
      {
        title: "Tata AIA Partner",
        subtitle: "Insurance & wealth under one plan",
        accent: "gold",
        position: "right-[-40%] top-[16%] sm:right-[-50%]",
        floatDelay: 0.5,
        rotate: 3,
      },
      {
        title: "Health Check",
        subtitle: "Free financial wellness score",
        accent: "navy",
        position: "left-[-36%] bottom-[8%] sm:left-[-46%]",
        floatDelay: 1,
        rotate: -2,
      },
    ],
    badges: [
      {
        icon: "trending",
        color: "bg-brand-teal",
        position: "right-[-18%] top-[-2%] sm:right-[-22%]",
        floatDelay: 0.2,
      },
      {
        icon: "shield",
        color: "bg-brand-gold",
        position: "left-[-16%] top-[36%] sm:left-[-20%]",
        floatDelay: 0.7,
      },
    ],
  },
  {
    cards: [
      {
        title: "Retirement Goals",
        subtitle: "Map milestones year by year",
        accent: "navy",
        position: "left-[-42%] top-[4%] sm:left-[-52%]",
        floatDelay: 0,
        rotate: -3,
      },
      {
        title: "Corpus Planning",
        subtitle: "Know if you are on course",
        accent: "teal",
        position: "right-[-40%] top-[18%] sm:right-[-50%]",
        floatDelay: 0.45,
        rotate: 4,
      },
      {
        title: "Golden Years",
        subtitle: "Funded with confidence",
        accent: "gold",
        position: "left-[-34%] bottom-[10%] sm:left-[-44%]",
        floatDelay: 0.9,
        rotate: -2,
      },
    ],
    badges: [
      {
        icon: "shield",
        color: "bg-brand-navy",
        position: "right-[-18%] top-[2%] sm:right-[-22%]",
        floatDelay: 0.3,
      },
      {
        icon: "trending",
        color: "bg-brand-teal",
        position: "left-[-14%] bottom-[28%] sm:left-[-18%]",
        floatDelay: 0.8,
      },
    ],
  },
  {
    cards: [
      {
        title: "Expert Advisory",
        subtitle: "Speak with Bijal Pathak",
        accent: "gold",
        position: "left-[-42%] top-[2%] sm:left-[-52%]",
        floatDelay: 0,
        rotate: -4,
      },
      {
        title: "Borivali, Mumbai",
        subtitle: "Local trusted guidance",
        accent: "teal",
        position: "right-[-40%] top-[20%] sm:right-[-50%]",
        floatDelay: 0.5,
        rotate: 3,
      },
      {
        title: "Book Consultation",
        subtitle: "Insurance & investment advice",
        accent: "navy",
        position: "left-[-36%] bottom-[8%] sm:left-[-46%]",
        floatDelay: 1,
        rotate: -2,
      },
    ],
    badges: [
      {
        icon: "message",
        color: "bg-[#22A559]",
        position: "right-[-16%] top-[0%] sm:right-[-20%]",
        floatDelay: 0.25,
      },
      {
        icon: "shield",
        color: "bg-brand-gold",
        position: "left-[-14%] top-[38%] sm:left-[-18%]",
        floatDelay: 0.75,
      },
    ],
  },
];

export const CARD_ACCENT_STYLES = {
  teal: "border-brand-teal/25 bg-white/95 text-brand-teal",
  gold: "border-brand-gold/35 bg-white/95 text-[#8a6f12]",
  navy: "border-brand-navy/15 bg-white/95 text-brand-navy",
} as const;

export const CARD_ACCENT_DOT = {
  teal: "bg-brand-teal",
  gold: "bg-brand-gold",
  navy: "bg-brand-navy",
} as const;
