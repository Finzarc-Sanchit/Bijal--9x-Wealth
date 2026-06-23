import {
  EditorialConvictionSection,
  type EditorialConvictionProps,
} from "@/components/sections/EditorialConvictionSection";
import { cn } from "@/lib/utils";

export type TermLegacyConvictionSectionProps = EditorialConvictionProps & {
  sticky?: boolean;
};

export function TermLegacyConvictionSection({
  sticky = false,
  className,
  ...props
}: TermLegacyConvictionSectionProps) {
  return (
    <EditorialConvictionSection
      {...props}
      className={cn(
        sticky && "sticky top-[calc(100vh-100%)] z-10 w-full bg-brand-cream",
        className,
      )}
    />
  );
}
