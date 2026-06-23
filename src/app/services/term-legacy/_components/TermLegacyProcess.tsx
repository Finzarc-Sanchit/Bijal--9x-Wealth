import { GlassCardMetricsSection } from "@/components/sections/GlassCardMetricsSection";
import { TERM_LEGACY_PROCESS } from "../_data/content";

export function TermLegacyProcess() {
  return (
    <GlassCardMetricsSection
      headline={TERM_LEGACY_PROCESS.headline}
      leftCopy={TERM_LEGACY_PROCESS.leftCopy}
      items={TERM_LEGACY_PROCESS.items}
      ctas={TERM_LEGACY_PROCESS.ctas}
      eyebrow={TERM_LEGACY_PROCESS.eyebrow}
      className="relative z-20 w-full bg-white shadow-[0_-30px_60px_rgba(10,22,40,0.08)]"
    />
  );
}
