/** Goal slider theme tokens — shared data (no "use client") */

export type GoalBackgroundTheme = {
  base: string;
  orb1: string;
  orb2: string;
  orb3: string;
  accent: string;
};

export const GOAL_BACKGROUND_THEMES: GoalBackgroundTheme[] = [
  {
    base: "from-brand-cream via-[#f9f7f4] to-[#f5f2ed]",
    orb1: "bg-indigo-200/18",
    orb2: "bg-brand-gold/8",
    orb3: "bg-violet-200/14",
    accent: "indigo",
  },
  {
    base: "from-brand-cream via-[#f7f9f8] to-[#f3f6f5]",
    orb1: "bg-brand-teal/12",
    orb2: "bg-cyan-200/14",
    orb3: "bg-brand-gold/8",
    accent: "teal",
  },
  {
    base: "from-brand-cream via-[#f6f8f6] to-[#f2f5f3]",
    orb1: "bg-emerald-200/16",
    orb2: "bg-brand-gold/9",
    orb3: "bg-teal-200/12",
    accent: "emerald",
  },
];

export const GOAL_TAB_STYLES = [
  "bg-white/70 text-brand-navy ring-brand-navy/8 hover:bg-white hover:ring-indigo-200/60",
  "bg-white/70 text-brand-navy ring-brand-navy/8 hover:bg-white hover:ring-brand-teal/30",
  "bg-white/70 text-brand-navy ring-brand-navy/8 hover:bg-white hover:ring-emerald-200/60",
] as const;

export const GOAL_TAB_ACTIVE_STYLES = [
  "bg-white text-brand-navy shadow-[0_12px_32px_-12px_rgba(79,70,229,0.28)] ring-indigo-200/70",
  "bg-white text-brand-navy shadow-[0_12px_32px_-12px_rgba(26,107,122,0.28)] ring-brand-teal/35",
  "bg-white text-brand-navy shadow-[0_12px_32px_-12px_rgba(16,185,129,0.28)] ring-emerald-200/70",
] as const;

export const GOAL_CARD_ACCENTS = {
  reality: {
    icon: "text-rose-600",
    label: "text-white",
    badge: "bg-rose-500/90",
    ring: "ring-rose-100/80 hover:ring-rose-200/90",
    iconBg: "bg-rose-500/15",
    bar: "bg-rose-500",
    glow: "group-hover:shadow-[0_24px_48px_-16px_rgba(244,63,94,0.28)]",
  },
  architecture: {
    icon: "text-brand-teal",
    label: "text-white",
    badge: "bg-brand-teal/90",
    ring: "ring-brand-teal/12 hover:ring-brand-teal/30",
    iconBg: "bg-brand-teal/15",
    bar: "bg-brand-teal",
    glow: "group-hover:shadow-[0_24px_48px_-16px_rgba(26,107,122,0.26)]",
  },
  compounding: {
    icon: "text-violet-600",
    label: "text-white",
    badge: "bg-violet-600/90",
    ring: "ring-violet-100/80 hover:ring-violet-200/90",
    iconBg: "bg-violet-500/15",
    bar: "bg-violet-600",
    glow: "group-hover:shadow-[0_24px_48px_-16px_rgba(124,58,237,0.26)]",
  },
} as const;

export type GoalCardAccentType = keyof typeof GOAL_CARD_ACCENTS;
