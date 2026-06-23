import { StepProcessLayout } from "@/components/sections/StepProcessLayout";
import { gridItemsToStepProcessSteps, parseProcessHeading } from "@/lib/grid-to-process";
import { SERVICES_PROCESS } from "../_data/content";

export function ServicesProcess() {
  const [title] = parseProcessHeading(SERVICES_PROCESS.headline);

  return (
    <StepProcessLayout
      id="services-process"
      eyebrow={SERVICES_PROCESS.badge}
      title={title}
      subtitle="These are the stakes. Here is the sequence every mandate follows. Every family mandate follows the same disciplined sequence — conversation first, architecture models next, seamless activation, and lifelong advocacy long after policies are issued."
      steps={gridItemsToStepProcessSteps(SERVICES_PROCESS.items)}
      stepLabelPrefix="Act"
    />
  );
}
