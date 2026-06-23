import { StepProcessLayout } from "@/components/sections/StepProcessLayout";
import { gridItemsToStepProcessSteps, parseProcessHeading } from "@/lib/grid-to-process";
import { WEALTH_ULIPS_PROCESS } from "../_data/content";

export function WealthUlipsProcess() {
  const [title] = parseProcessHeading(WEALTH_ULIPS_PROCESS.headline);

  return (
    <StepProcessLayout
      id="wealth-ulips-process"
      eyebrow={WEALTH_ULIPS_PROCESS.badge}
      title={title}
      subtitle="Four principles applied transparently on every wealth mandate — from alternative benchmarking through wrapper evaluation."
      steps={gridItemsToStepProcessSteps(WEALTH_ULIPS_PROCESS.items)}
    />
  );
}
