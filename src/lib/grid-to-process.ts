import type { GridItem } from "@/components/sections/NumberedProcessGrid";
import type { StepProcessStep } from "@/components/sections/StepProcessLayout";
import type { ProcessStep } from "@/data/process-section";
import { resolveCardGridImage } from "@/lib/card-grid-images";

export function gridItemsToProcessSteps(items: readonly GridItem[]): ProcessStep[] {
  return items.map((item, index) => ({
    id: item.id,
    number: item.id,
    title: item.title,
    body: item.description,
    image: resolveCardGridImage(item.title, index, item.image),
  }));
}

export function gridItemsToStepProcessSteps(items: readonly GridItem[]): StepProcessStep[] {
  return gridItemsToProcessSteps(items).map((step) => ({
    id: step.id,
    title: step.title,
    description: step.body,
    imageSrc: step.image.src,
    imageAlt: step.image.alt,
  }));
}

export function parseProcessHeading(
  heading: string | readonly [string, string],
): readonly [string, string] {
  if (typeof heading !== "string") {
    return heading;
  }

  const parts = heading.split("\n").map((part) => part.trim()).filter(Boolean);
  if (parts.length >= 2) {
    return [parts[0], parts.slice(1).join(" ")];
  }

  return [heading, ""];
}
