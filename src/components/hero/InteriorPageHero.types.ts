export type HeroCtaConfig = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HeroHeadlineLines =
  | readonly [string]
  | readonly [string, string]
  | readonly [string, string, string];

export type InteriorPageHeroProps = {
  id?: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  pillImage: {
    src: string;
    alt: string;
  };
  leadWord: string;
  /** Stacked headline lines after the lead word row (one to three lines) */
  headlineLines: HeroHeadlineLines;
  epigraph: string;
  ctas?: readonly HeroCtaConfig[];
  className?: string;
};
