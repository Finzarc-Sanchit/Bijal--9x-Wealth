import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { EditorialProseSection } from "@/components/sections/EditorialProseSection";
import Link from "next/link";
import {
  BENGALURU_OFFICE_CONVICTION,
  BENGALURU_OFFICE_COVERAGE,
  BENGALURU_OFFICE_DETAILS,
} from "../_data/content";

export function BengaluruOfficeSections() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={BENGALURU_OFFICE_CONVICTION.badge}
        headline={BENGALURU_OFFICE_CONVICTION.headline}
        paragraphs={BENGALURU_OFFICE_CONVICTION.paragraphs}
      />
      <EditorialProseSection
        badge={BENGALURU_OFFICE_DETAILS.badge}
        headline={BENGALURU_OFFICE_DETAILS.headline}
        paragraphs={BENGALURU_OFFICE_DETAILS.paragraphs}
        subsections={BENGALURU_OFFICE_DETAILS.subsections}
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
        badge={BENGALURU_OFFICE_COVERAGE.badge}
        headline={BENGALURU_OFFICE_COVERAGE.headline}
        items={BENGALURU_OFFICE_COVERAGE.items}
      />
    </>
  );
}
