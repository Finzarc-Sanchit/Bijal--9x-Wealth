"use client";

import { cn } from "@/lib/utils";
import { Award } from "lucide-react";

export function AboutAchievementsTicker({
  achievements,
  className,
}: {
  achievements: string[];
  className?: string;
}) {
  if (achievements.length === 0) return null;

  const items = [...achievements, ...achievements];

  return (
    <div
      className={cn("relative w-full", className)}
      aria-label="Professional achievements"
    >
      <div className="overflow-hidden py-2">
        <div className="about-achievements-track flex w-max items-center justify-center gap-3">
          {items.map((achievement, index) => (
            <span
              key={`${achievement}-${index}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-semibold text-brand-navy shadow-sm backdrop-blur-sm sm:text-sm"
            >
              <Award className="h-3.5 w-3.5 shrink-0 text-brand-gold" strokeWidth={2.25} />
              {achievement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
