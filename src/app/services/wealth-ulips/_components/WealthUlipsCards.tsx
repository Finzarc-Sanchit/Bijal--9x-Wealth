import { Reveal } from "@/components/animations/reveal";
import { MethodologyTonalLayerCard } from "@/components/cards/methodology-tonal-layer-card";
import { cn } from "@/lib/utils";
import { WEALTH_ULIPS_WRAPPERS } from "../_data/content";

export function WealthUlipsCards() {
  const headingId = "wealth-ulips-wrappers-heading";

  return (
    <section
      id="wealth-ulips-wrappers"
      aria-labelledby={headingId}
      className="w-full section-py px-4 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full">
        <div className="max-w-3xl">
          {WEALTH_ULIPS_WRAPPERS.badge ? (
            <Reveal>
              <p className="label">{WEALTH_ULIPS_WRAPPERS.badge}</p>
            </Reveal>
          ) : null}

          <Reveal delay={WEALTH_ULIPS_WRAPPERS.badge ? 0.08 : 0}>
            <h2
              id={headingId}
              className={cn(
                "font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl lg:text-[2.75rem]",
                WEALTH_ULIPS_WRAPPERS.badge ? "mt-5" : "mt-0",
              )}
            >
              {WEALTH_ULIPS_WRAPPERS.headline}
            </h2>
          </Reveal>
        </div>

        <ul className="mt-12 grid w-full gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {WEALTH_ULIPS_WRAPPERS.items.map((item, index) => {
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <li key={item.id} className="h-full w-full">
                <Reveal delay={0.1 + index * 0.06} className="h-full w-full">
                  <MethodologyTonalLayerCard
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
