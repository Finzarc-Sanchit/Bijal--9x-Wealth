export const HERO_SCROLL_VH = 350;
export const HERO_SLIDE_COUNT = 3;

/** Oversized background typography per scroll scene */
export const HERO_BACKGROUND_WORDS = [
  "9X WEALTH",
  "WEALTH PLANNED",
  "HAPPINESS INSURED",
] as const;

/** Snap points: portfolio on load, one scroll each to retirement & advisory; next scroll exits */
export const HERO_SNAP_PROGRESS = [0, 0.5, 1] as const;

export type HeroTextColors = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HeroCtaColors = {
  primary: string;
  secondary: string;
};

export type HeroTheme = {
  id: string;
  bg: string;
  accent: string;
  pattern: "grid" | "rings" | "arcs";
  text: HeroTextColors;
  cta: HeroCtaColors;
};

export const HERO_THEMES: HeroTheme[] = [
  {
    id: "portfolio",
    bg: "#faf8f5",
    accent: "#c9a227",
    pattern: "grid",
    text: {
      eyebrow: "text-[#0f5c6b]",
      title: "text-brand-teal",
      description: "text-[#1e3348]",
    },
    cta: {
      primary:
        "bg-brand-teal text-white hover:bg-brand-gold hover:text-brand-navy focus-visible:ring-brand-gold",
      secondary:
        "bg-brand-navy text-white hover:bg-brand-teal hover:text-white focus-visible:ring-brand-teal",
    },
  },
  {
    id: "retirement",
    bg: "#e8f4f6",
    accent: "#1a6b7a",
    pattern: "rings",
    text: {
      eyebrow: "text-[#0a5563]",
      title: "text-brand-navy",
      description: "text-[#0f3d4a]",
    },
    cta: {
      primary:
        "bg-brand-navy text-white hover:bg-brand-teal hover:text-white focus-visible:ring-brand-teal",
      secondary:
        "bg-brand-gold text-brand-navy hover:bg-brand-gold-light hover:text-brand-navy focus-visible:ring-brand-navy",
    },
  },
  {
    id: "advisor",
    bg: "#f5edd8",
    accent: "#c9a227",
    pattern: "arcs",
    text: {
      eyebrow: "text-[#7a5e10]",
      title: "text-[#9a7b10]",
      description: "text-[#3d3422]",
    },
    cta: {
      primary:
        "bg-[#22A559] text-white hover:bg-brand-teal hover:text-white focus-visible:ring-brand-teal",
      secondary:
        "bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
    },
  },
];

export const HERO_SLIDES = [
  {
    eyebrow: "Portfolio",
    title: "Smart Portfolio Management",
    descriptionLines: [
      "See your investments, SIPs, and insurance in one organised dashboard.",
      "Track growth with clarity, rebalance with discipline, and stay aligned to your goals.",
      "Your complete wealth plan — simple to read, easy to act on.",
    ],
    screen: "portfolio" as const,
    ctas: {
      primary: { label: "Take Health Check", href: "#financial-health-check" },
      secondary: { label: "Explore Services", href: "/services" },
    },
  },
  {
    eyebrow: "Retirement",
    title: "Secure Your Future",
    descriptionLines: [
      "Define the retirement you want — when, how much, and what lifestyle matters most.",
      "Map milestones year by year and check whether you are on course or need a correction.",
      "Structured planning so your golden years are funded with confidence, not guesswork.",
    ],
    screen: "retirement" as const,
    ctas: {
      primary: { label: "Plan My Goals", href: "#goal-planning" },
      secondary: { label: "Book Consultation", href: "#consultation-form" },
    },
  },
  {
    eyebrow: "Advisory",
    title: "Expert Advice, Anytime",
    descriptionLines: [
      "Speak directly with Bijal Pathak for insurance, investments, and goal-based guidance.",
      "Tata AIA partner support with plain-language advice — no jargon, no pressure.",
      "Trusted, local expertise in Borivali whenever you need a clear next step.",
    ],
    screen: "advisor" as const,
    ctas: {
      primary: { label: "WhatsApp Bijal", href: "whatsapp", external: true },
      secondary: { label: "Book Consultation", href: "#consultation-form" },
    },
  },
] as const;

export const HERO_SLIDE_TRANSITION = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

function clamp01(progress: number) {
  return Math.min(1, Math.max(0, progress));
}

export function smoothstep(t: number) {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
}

export function lerpAtProgress(
  progress: number,
  keyframes: readonly [number, number][],
) {
  const p = clamp01(progress);
  if (p <= keyframes[0][0]) return keyframes[0][1];
  for (let i = 0; i < keyframes.length - 1; i++) {
    const [t0, v0] = keyframes[i];
    const [t1, v1] = keyframes[i + 1];
    if (p >= t0 && p <= t1) {
      const t = (p - t0) / (t1 - t0);
      return v0 + (v1 - v0) * smoothstep(t);
    }
  }
  return keyframes[keyframes.length - 1][1];
}

/** Crossfade weights for the three laptop photo angles */
export function getLaptopImageWeights(progress: number): [number, number, number] {
  const p = clamp01(progress);
  const band = 0.26;
  const peak = (center: number) => clamp01(1 - Math.abs(p - center) / band);
  const raw = [peak(0), peak(0.5), peak(1)];
  const sum = raw[0] + raw[1] + raw[2] || 1;
  return [raw[0] / sum, raw[1] / sum, raw[2] / sum];
}

export function getLaptopTransform(progress: number) {
  const xPercent = lerpAtProgress(progress, [
    [0, 34],
    [0.5, 0],
    [1, -34],
  ]);
  const scale = lerpAtProgress(progress, [
    [0, 1],
    [0.5, 1.1],
    [1, 1],
  ]);
  const transitionBlur =
    Math.max(
      clamp01(1 - Math.abs(progress - 0.25) / 0.12),
      clamp01(1 - Math.abs(progress - 0.75) / 0.12),
    ) * 3;
  return { xPercent, scale, blur: transitionBlur };
}

export function getBackgroundWordWeights(progress: number): [number, number, number] {
  return getLaptopImageWeights(progress);
}

export function getHeroScrollProgress(container: HTMLElement) {
  const range = container.offsetHeight - window.innerHeight;
  if (range <= 0) return 0;
  return clamp01((window.scrollY - container.offsetTop) / range);
}

export function heroStepToScrollProgress(step: number) {
  const clamped = Math.min(HERO_SLIDE_COUNT - 1, Math.max(0, step));
  return HERO_SNAP_PROGRESS[clamped] ?? 0;
}

export function heroScrollProgressToStep(progress: number) {
  const p = clamp01(progress);
  let best = 0;
  let minDist = Infinity;
  for (let i = 0; i < HERO_SNAP_PROGRESS.length; i++) {
    const dist = Math.abs(p - HERO_SNAP_PROGRESS[i]);
    if (dist < minDist) {
      minDist = dist;
      best = i;
    }
  }
  return best;
}

export function heroScrollTargetForSlide(slideIndex: number) {
  return heroStepToScrollProgress(slideIndex);
}

/** @deprecated — use activeIndex-driven animations in HimsStyleHero */
export function mapHeroScrollProgress(raw: number) {
  return clamp01(raw);
}

/** @deprecated */
export function heroSlideOpacity(progress: number, index: number, total = HERO_SLIDE_COUNT) {
  const step = heroScrollProgressToStep(progress);
  return step === index ? 1 : 0;
}

export function heroActiveIndex(progress: number) {
  return heroScrollProgressToStep(progress);
}

/** @deprecated */
export function heroBgOpacity(progress: number, index: number, total = HERO_SLIDE_COUNT) {
  return heroSlideOpacity(progress, index, total);
}

/** @deprecated */
export function heroSlideLift() {
  return 0;
}
