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
        "flex h-full flex-col rounded-2xl bg-brand-cream px-6 py-7 ring-1 ring-brand-navy/10 transition-colors md:px-8 md:py-8",
        "hover:bg-brand-cream/80",
        className,
      )}
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-brand-muted">
        {stepNumber}
      </p>

      {/* Reserved a min-height standard context track on the header 
        so single-line and dual-line variants occupy identical vertical footprints 
      */}
      <h3 className="mt-5 min-h-[3.5rem] sm:min-h-[4rem] font-display text-xl font-medium leading-tight tracking-tight text-brand-navy md:text-2xl">
        {title}
      </h3>

      {/* Appended mt-auto / grow to anchor description text baseline tracks 
        identically relative to neighboring grid layout blocks 
      */}
      <p className="mt-auto pt-6 font-inter text-base leading-relaxed text-brand-navy/80 grow">
        {description}
      </p>
    </article>
  );
}