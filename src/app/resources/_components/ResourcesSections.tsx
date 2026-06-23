import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import Link from "next/link";
import { RESOURCES_CARDS, RESOURCES_CONVICTION } from "../_data/content";

export function ResourcesSections() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={RESOURCES_CONVICTION.badge}
        headline={RESOURCES_CONVICTION.headline}
        paragraphs={RESOURCES_CONVICTION.paragraphs}
      />
      <EditorialCardGrid
        badge={RESOURCES_CARDS.badge}
        headline={RESOURCES_CARDS.headline}
        items={RESOURCES_CARDS.items}
      />
      <section className="w-full px-4 pb-16 md:px-12 lg:px-16">
        <div className="mx-auto w-full">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {RESOURCES_CARDS.items.map((item, index) => (
              <li key={item.id}>
                <Link
                  href={RESOURCES_CARDS.links[index].href}
                  className="flex min-h-[44px] items-center font-inter text-sm font-medium text-brand-teal hover:underline"
                >
                  Read {item.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
