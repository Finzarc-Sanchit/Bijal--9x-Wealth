import { Reveal } from "@/components/animations/reveal";
import { MethodologyTonalLayerCard } from "@/components/cards/methodology-tonal-layer-card";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { cn } from "@/lib/utils";
import { FAMILIES_UHNI_COMMITMENTS, FAMILIES_UHNI_CONVICTION } from "../_data/content";

export function FamiliesUhniConviction() {
  const headingId = "families-uhni-commitments-heading";

  return (
    <>
      <TermLegacyConvictionSection
        badge={FAMILIES_UHNI_CONVICTION.badge}
        headline={FAMILIES_UHNI_CONVICTION.headline}
        paragraphs={FAMILIES_UHNI_CONVICTION.paragraphs}
      />
      <section
        id="families-uhni-commitments"
        aria-labelledby={headingId}
        className="w-full section-py px-4 md:px-12 lg:px-16"
      >
        <div className="mx-auto w-full">
          <div className="max-w-3xl">
            {FAMILIES_UHNI_COMMITMENTS.badge ? (
              <Reveal>
                <p className="label">{FAMILIES_UHNI_COMMITMENTS.badge}</p>
              </Reveal>
            ) : null}

            <Reveal delay={FAMILIES_UHNI_COMMITMENTS.badge ? 0.08 : 0}>
              <h2
                id={headingId}
                className={cn(
                  "font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl lg:text-[2.75rem]",
                  FAMILIES_UHNI_COMMITMENTS.badge ? "mt-5" : "mt-0",
                )}
              >
                {FAMILIES_UHNI_COMMITMENTS.headline}
              </h2>
            </Reveal>
          </div>

          <ul className="mt-12 grid w-full gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {FAMILIES_UHNI_COMMITMENTS.items.map((item, index) => (
              <li key={item.id} className="h-full w-full">
                <Reveal delay={0.1 + index * 0.06} className="h-full w-full">
                  <MethodologyTonalLayerCard
                    stepNumber={item.id}
                    title={item.title}
                    description={item.description}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
