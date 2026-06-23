import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { GLOBAL_PRODUCTS } from "../_data/content";

export function GlobalCards() {
  return (
    <EditorialCardGrid
      badge={GLOBAL_PRODUCTS.badge}
      headline={GLOBAL_PRODUCTS.headline}
      items={GLOBAL_PRODUCTS.items}
    />
  );
}
