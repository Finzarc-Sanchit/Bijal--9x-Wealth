"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

export type EditorialInlineNode =
  | { type: "text"; value: string; }
  | { type: "highlight"; value: string; };

/** Plain string, or inline nodes for emphasis without changing paragraph typography */
export type EditorialConvictionParagraph = string | readonly EditorialInlineNode[];

export type EditorialConvictionProps = {
  badge?: string;
  headline: string;
  paragraphs: readonly EditorialConvictionParagraph[];
  className?: string;
  id?: string;
};

const PARAGRAPH_CLASS =
  "font-inter text-base leading-relaxed text-brand-navy/75 md:text-lg md:leading-[1.75]";

function EditorialParagraphContent({
  paragraph,
}: {
  paragraph: EditorialConvictionParagraph;
}) {
  if (typeof paragraph === "string") {
    return paragraph;
  }

  return paragraph.map((node, index) =>
    node.type === "highlight" ? (
      <span key={`${node.type}-${index}`} className="editorial-highlight">
        {node.value}
      </span>
    ) : (
      <span key={`${node.type}-${index}`}>{node.value}</span>
    )
  );
}

function paragraphKey(paragraph: EditorialConvictionParagraph, index: number): string {
  if (typeof paragraph === "string") {
    return `p-${index}-${paragraph.slice(0, 24)}`;
  }

  return `p-${index}-${paragraph.map((node) => node.value.slice(0, 12)).join("-")}`;
}

export function EditorialConvictionSection({
  badge,
  headline,
  paragraphs,
  className,
  id = "editorial-conviction",
}: EditorialConvictionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section-py", className)}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-16">
        {/* Adjusted grid column layout below to expand the right column's space allocation */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-24">
          <div className="max-w-2xl">
            {badge ? (
              <Reveal>
                <p className="label">{badge}</p>
              </Reveal>
            ) : null}

            <Reveal delay={badge ? 0.08 : 0}>
              <h2
                id={headingId}
                className={cn(
                  "font-display text-3xl font-light leading-[1.15] tracking-tight text-brand-navy md:text-4xl lg:text-[2.75rem]",
                  badge ? "mt-5" : "mt-0"
                )}
              >
                {headline.split("\n").map((line, index, lines) => (
                  <span key={`${line}-${index}`}>
                    {line}
                    {index < lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-6 md:gap-7">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraphKey(paragraph, index)} delay={0.12 + index * 0.08}>
                <p className={PARAGRAPH_CLASS}>
                  <EditorialParagraphContent paragraph={paragraph} />
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}