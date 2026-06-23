import { InteriorAlternatingSections } from "@/components/layout/InteriorAlternatingSections";
import type { ReactNode } from "react";

type InteriorPageShellProps = {
  children: ReactNode;
  /** Set false when the page has no full-bleed hero as the first child. */
  heroFirst?: boolean;
};

export async function InteriorPageShell({
  children,
  heroFirst = true,
}: InteriorPageShellProps) {
  return (
    <main id="main-content">
      <InteriorAlternatingSections heroFirst={heroFirst}>
        {children}
      </InteriorAlternatingSections>
    </main>
  );
}
