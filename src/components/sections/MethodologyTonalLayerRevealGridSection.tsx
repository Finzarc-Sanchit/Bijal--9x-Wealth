import { Reveal } from "@/components/animations/reveal";
import { MethodologyTonalLayerRevealCard } from "@/components/cards/methodology-tonal-layer-reveal-card";
import type { MethodologyTonalLayerGridItem } from "@/components/sections/MethodologyTonalLayerGridSection";
import { cn } from "@/lib/utils";

export type MethodologyTonalLayerRevealGridSectionProps = {
  id?: string;
  badge?: string;
  headline: string;
  items: readonly MethodologyTonalLayerGridItem[];
  className?: string;
  gridClassName?: string;
};

export function MethodologyTonalLayerRevealGridSection({
  id = "methodology-tonal-layer-reveal-grid",
  badge,
  headline,
  items,
  className,
  gridClassName = "md:grid-cols-2 lg:grid-cols-4",
}: MethodologyTonalLayerRevealGridSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section-py w-full bg-white px-4 md:px-12 lg:px-16", className)}
    >
      <div className="mx-auto w-full">
        <div className="max-w-3xl">
          {badge ? (
            <Reveal>
              <p className="label">{badge}</p>
            </Reveal>
          ) : null}

          <Reveal delay={badge ? 0.08 : 0}>
            <h2
              id={headingId}
              className={cn(
                "font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl lg:text-[2.75rem]",
                badge ? "mt-5" : "mt-0",
              )}
            >
              {headline}
            </h2>
          </Reveal>
        </div>

        <ul
          className={cn(
            "mt-12 grid w-full auto-rows-fr items-stretch gap-5 md:mt-16",
            gridClassName,
          )}
        >
          {items.map((item, index) => {
            const stepNumber =
              item.label ?? String(index + 1).padStart(2, "0");

            return (
              <li key={item.id} className="h-full w-full">
                <Reveal delay={0.1 + index * 0.06} className="h-full w-full">
                  <MethodologyTonalLayerRevealCard
                    stepNumber={stepNumber}
                    title={item.title}
                    description={item.description}
                  />
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
