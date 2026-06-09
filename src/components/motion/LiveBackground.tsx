"use client";

import { cn } from "@/lib/utils";

export type LiveBackgroundVariant = "cream" | "teal" | "warm" | "navy" | "white";

const variantStyles: Record<
  LiveBackgroundVariant,
  { base: string; orb1: string; orb2: string; orb3: string }
> = {
  cream: {
    base: "bg-brand-cream",
    orb1: "bg-brand-gold/20",
    orb2: "bg-brand-teal/10",
    orb3: "bg-brand-gold/10",
  },
  teal: {
    base: "bg-[#e8f4f6]",
    orb1: "bg-brand-teal/25",
    orb2: "bg-brand-gold/15",
    orb3: "bg-brand-teal/10",
  },
  warm: {
    base: "bg-[#f5edd8]",
    orb1: "bg-brand-gold/25",
    orb2: "bg-brand-teal/10",
    orb3: "bg-brand-gold/15",
  },
  navy: {
    base: "bg-brand-navy",
    orb1: "bg-brand-gold/15",
    orb2: "bg-brand-teal/20",
    orb3: "bg-brand-gold/10",
  },
  white: {
    base: "bg-white",
    orb1: "bg-brand-teal/8",
    orb2: "bg-brand-gold/12",
    orb3: "bg-brand-teal/6",
  },
};

type LiveBackgroundProps = {
  variant?: LiveBackgroundVariant;
  className?: string;
  children?: React.ReactNode;
};

export function LiveBackground({
  variant = "cream",
  className,
  children,
}: LiveBackgroundProps) {
  const styles = variantStyles[variant];

  return (
    <div className={cn("relative overflow-hidden", styles.base, className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className={cn(
            "live-bg-orb absolute -left-[10%] top-[5%] h-[45%] w-[45%] rounded-full blur-3xl",
            styles.orb1,
          )}
        />
        <div
          className={cn(
            "live-bg-orb-delay absolute -right-[5%] top-[25%] h-[40%] w-[40%] rounded-full blur-3xl",
            styles.orb2,
          )}
        />
        <div
          className={cn(
            "live-bg-orb-slow absolute bottom-[-10%] left-[30%] h-[35%] w-[35%] rounded-full blur-3xl",
            styles.orb3,
          )}
        />
        <div className="live-bg-shimmer absolute inset-0 opacity-[0.04]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
