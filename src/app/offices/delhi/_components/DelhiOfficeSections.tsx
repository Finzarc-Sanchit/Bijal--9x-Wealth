import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { EditorialProseSection } from "@/components/sections/EditorialProseSection";
import Link from "next/link";
import {
  DELHI_OFFICE_CONVICTION,
  DELHI_OFFICE_COVERAGE,
  DELHI_OFFICE_DETAILS,
} from "../_data/content";

export function DelhiOfficeSections() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={DELHI_OFFICE_CONVICTION.badge}
        headline={DELHI_OFFICE_CONVICTION.headline}
        paragraphs={DELHI_OFFICE_CONVICTION.paragraphs}
      />
      <EditorialProseSection
        badge={DELHI_OFFICE_DETAILS.badge}
        headline={DELHI_OFFICE_DETAILS.headline}
        paragraphs={DELHI_OFFICE_DETAILS.paragraphs}
        subsections={DELHI_OFFICE_DETAILS.subsections}
      />
      <section className="pb-8">
        <div className="mx-auto max-w-3xl px-4 md:px-12">
          <Link
            href="/contact"
            className="font-inter text-sm font-medium text-brand-teal hover:underline"
          >
            Schedule a Conversation
          </Link>
        </div>
      </section>
      <EditorialCardGrid
        badge={DELHI_OFFICE_COVERAGE.badge}
        headline={DELHI_OFFICE_COVERAGE.headline}
        items={DELHI_OFFICE_COVERAGE.items}
      />
    </>
  );
}
