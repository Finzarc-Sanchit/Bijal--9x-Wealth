import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { WEALTH_ULIPS_WRAPPERS } from "../_data/content";

export interface MethodologyTonalLayerCardProps {
  stepNumber: string;
  title: string;
  description: string;
  className?: string;
}

function MethodologyTonalLayerCard({
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
