import { StepProcessLayout } from "@/components/sections/StepProcessLayout";
import { gridItemsToStepProcessSteps, parseProcessHeading } from "@/lib/grid-to-process";
import { GLOBAL_PROCESS } from "../_data/content";

export function GlobalProcess() {
  const [title] = parseProcessHeading(GLOBAL_PROCESS.headline);

  return (
    <StepProcessLayout
      id="global-process"
      eyebrow={GLOBAL_PROCESS.badge}
      title={title}
      subtitle="Four commitments govern every cross-border mandate — from IFSCA registration through multi-currency claims advocacy."
      steps={gridItemsToStepProcessSteps(GLOBAL_PROCESS.items)}
    />
  );
}
