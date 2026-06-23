import { cn } from "@/lib/utils";

export type MethodologyTonalLayerCardProps = {
  stepNumber: string;
  title: string;
  description: string;
  className?: string;
};

export function MethodologyTonalLayerCard({
  stepNumber,
  title,
  description,
  className,
}: MethodologyTonalLayerCardProps) {
  return (
    <article
      className={cn(
        "h-full rounded-2xl bg-brand-cream px-6 py-7 ring-1 ring-brand-navy/10 transition-colors md:px-8 md:py-8",
        "hover:bg-brand-cream/80",
        className,
      )}
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-brand-muted">
        {stepNumber}
      </p>
      <h3 className="mt-5 font-display text-xl font-medium leading-tight tracking-tight text-brand-navy md:text-2xl">
        {title}
      </h3>
      <p className="mt-8 font-inter text-base leading-relaxed text-brand-navy/80">
        {description}
      </p>
    </article>
  );
}
