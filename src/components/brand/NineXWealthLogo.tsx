import { cn } from "@/lib/utils";

type NineXWealthLogoProps = {
  className?: string;
  variant?: "full" | "mark";
  /** "light" = white text for dark backgrounds */
  tone?: "default" | "light";
};

const COLORS = {
  default: { text: "#0A1628", accent: "#22A559" },
  light: { text: "#FAF8F5", accent: "#22A559" },
};

/** Scalable vector logo — sharp at any resolution */
export function NineXWealthLogo({
  className,
  variant = "full",
  tone = "default",
}: NineXWealthLogoProps) {
  const { text, accent } = COLORS[tone];

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-auto w-auto", className)}
        role="img"
        aria-label="9X Wealth"
      >
        <text
          x="0"
          y="62"
          fontFamily="var(--font-inter-family), ui-sans-serif, sans-serif"
          fontSize="52"
          fontWeight="600"
          fill={text}
        >
          9
        </text>
        <g transform="translate(38, 6)">
          <rect
            x="6"
            y="10"
            width="10"
            height="52"
            rx="2"
            transform="rotate(-45 11 36)"
            fill={accent}
          />
          <path d="M6 64 L38 10 L52 24 L20 78 Z" fill={text} />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 480 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-auto", className)}
      role="img"
      aria-label="9X Wealth Financial Services"
    >
      <text
        x="0"
        y="72"
        fontFamily="var(--font-inter-family), ui-sans-serif, sans-serif"
        fontSize="72"
        fontWeight="600"
        fill={text}
      >
        9
      </text>
      <g transform="translate(52, 8)">
        <rect
          x="8"
          y="12"
          width="14"
          height="72"
          rx="2"
          transform="rotate(-45 15 48)"
          fill={accent}
        />
        <path d="M8 88 L52 12 L72 32 L28 108 Z" fill={text} />
        <path d="M52 12 L72 32 L68 36 L48 16 Z" fill={text} />
      </g>
      <text
        x="130"
        y="68"
        fontFamily="var(--font-inter-family), ui-sans-serif, sans-serif"
        fontSize="56"
        fontWeight="700"
        fill={text}
      >
        Wealth
      </text>
      <text
        x="130"
        y="98"
        fontFamily="var(--font-inter-family), ui-sans-serif, sans-serif"
        fontSize="18"
        fontWeight="400"
        fill={text}
      >
        Financial Services
      </text>
    </svg>
  );
}
