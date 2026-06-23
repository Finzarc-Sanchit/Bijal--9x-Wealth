import { PracticeAreasGrid } from "@/components/sections/PracticeAreasGrid";
import { PRACTICE_AREAS, PRACTICE_AREAS_META } from "@/data/practice-areas";
import type { StaticImageData } from "next/image";

function practiceAreaImageSrc(src: string | StaticImageData): string {
  return typeof src === "string" ? src : src.src;
}

export function ServicesPractice() {
  return (
    <PracticeAreasGrid
      id="services-practice"
      eyebrow={PRACTICE_AREAS_META.eyebrow}
      heading={PRACTICE_AREAS_META.heading}
      description={PRACTICE_AREAS_META.description}
      items={PRACTICE_AREAS.map((area) => ({
        id: area.id,
        title: area.title,
        description: area.description,
        cta: area.cta,
        href: area.href,
        image: {
          src: practiceAreaImageSrc(area.image.src),
          alt: area.image.alt,
        },
      }))}
    />
  );
}
