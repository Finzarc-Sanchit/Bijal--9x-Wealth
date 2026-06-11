import { cn } from "@/lib/utils";
import Link from "next/link";

/** Editorial wordmark — 9x (navy) + Wealth (gold) with ring accent */
export function EditorialWordmark({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn("group relative inline-flex items-center gap-0.5", className)}
      aria-label="9X Wealth Financial Services — Home"
    >
      <span
        className="pointer-events-none absolute -left-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border border-brand-gold/35 sm:h-10 sm:w-10"
        aria-hidden
      />
      <span className="relative font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]">
        9x
      </span>
      <span className="font-display text-[1.35rem] font-bold tracking-tight text-brand-gold sm:text-[1.5rem]">
        Wealth
      </span>
    </Link>
  );
}
