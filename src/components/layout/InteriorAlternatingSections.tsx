import { cn } from "@/lib/utils";
import { Children, isValidElement, type ReactNode } from "react";

type InteriorAlternatingSectionsProps = {
  children: ReactNode;
  /** When true, the first child is treated as a full-bleed hero and is not wrapped. */
  heroFirst?: boolean;
};

/**
 * Wraps interior page sections in alternating cream / white bands.
 * First post-hero section uses `bg-brand-cream`, then toggles each section.
 */
export function InteriorAlternatingSections({
  children,
  heroFirst = true,
}: InteriorAlternatingSectionsProps) {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <>
      {items.map((child, index) => {
        if (heroFirst && index === 0) {
          return child;
        }

        const stripeIndex = heroFirst ? index - 1 : index;

        return (
          <div
            key={child.key ?? `interior-section-${index}`}
            className={cn(stripeIndex % 2 === 0 ? "bg-brand-cream" : "bg-white")}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
