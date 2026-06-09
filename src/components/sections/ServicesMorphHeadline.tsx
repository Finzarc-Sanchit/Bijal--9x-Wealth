"use client";

import { InlineMorphHeadline } from "@/components/motion/InlineMorphHeadline";
import { SERVICES_HEADLINE, SERVICES_HERO_IMAGE } from "@/data/services-section";
import { cn } from "@/lib/utils";

export function ServicesMorphHeadline({ className }: { className?: string }) {
  return (
    <InlineMorphHeadline
      className={cn("text-center", className)}
      wordBefore={SERVICES_HEADLINE.wordLeft}
      wordAfter={SERVICES_HEADLINE.wordRight}
      tagline={SERVICES_HEADLINE.tagline}
      image={SERVICES_HERO_IMAGE}
      hashTrigger="services"
    />
  );
}
