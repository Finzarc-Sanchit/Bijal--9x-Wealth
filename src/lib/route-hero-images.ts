/**
 * LCP / above-fold images per route — preloaded on link hover before navigation.
 * Sync with `_data/content.ts` hero images and EditorialTriColumnHero primary/secondary.
 */
export const ROUTE_PREFETCH_IMAGES: Readonly<Record<string, readonly string[]>> = {
  "/": [
    "/images/hero-wave-bg.png",
    "/images/hero-lady-hand.jpg",
    "/images/hero/hni-panel-1-boardroom.png",
    "/images/hero/hni-panel-4-risk.png",
  ],
  "/services": [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=85&w=1920&auto=format&fit=crop",
  ],
  "/services/global": ["/images/global/hero.webp"],
  "/services/health": ["/images/health/hero.webp"],
  "/services/keyman": ["/images/keyman/hero.webp"],
  "/services/specie": ["/images/specie/hero.webp"],
  "/services/term-legacy": ["/images/term-legacy/hero3.webp"],
  "/services/wealth-ulips": ["/images/wealth-ulips/hero.avif"],
  "/families": [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?fm=jpg&q=85&w=1920&auto=format&fit=crop",
  ],
  "/families/nri": ["/images/nri/hero.webp"],
  "/families/listed-promoters": ["/images/listed-promoters/hero.webp"],
  "/families/business-owners": ["/images/business-owners/hero.webp"],
  "/families/uhni": ["/images/unhi/hero.webp"],
  "/about": [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    "/images/about/office-bg.webp",
  ],
  "/about/practice": [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    "/images/process/conversation.jpg",
  ],
  "/about/team": [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    "/images/about/team/principle.webp",
  ],
  "/about/press": [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?fm=jpg&q=85&w=1920&auto=format&fit=crop",
    "/images/about/press/press.webp",
  ],
  "/resources": [
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?fm=jpg&q=85&w=1920&auto=format&fit=crop",
  ],
  "/resources/mwpa-guide": ["/images/resources/mwpa-guide-hero.avif"],
  "/resources/faq": ["/images/resources/faq-hero.avif"],
  "/resources/calculators": ["/images/resources/calci-hero.avif"],
  "/resources/glossary": ["/images/resources/glossary-hero.webp"],
  "/legal/privacy": [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=85&w=1920&auto=format&fit=crop",
  ],
  "/legal/terms": [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=85&w=1920&auto=format&fit=crop",
  ],
  "/legal/disclosures": [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=85&w=1920&auto=format&fit=crop",
  ],
  "/insights": [
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?fm=jpg&q=85&w=1920&auto=format&fit=crop",
  ],
  "/careers": [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=jpg&q=85&w=1920&auto=format&fit=crop",
  ],
  "/offices/mumbai": ["/images/hero-banner.webp"],
  "/offices/delhi": ["/images/hero-banner.webp"],
  "/offices/bengaluru": ["/images/hero-banner.webp"],
};

export function imagesForPath(pathname: string): readonly string[] {
  const path = pathname.split("?")[0].split("#")[0];
  if (ROUTE_PREFETCH_IMAGES[path]) return ROUTE_PREFETCH_IMAGES[path];

  const segments = path.split("/").filter(Boolean);
  while (segments.length > 0) {
    const candidate = `/${segments.join("/")}`;
    if (ROUTE_PREFETCH_IMAGES[candidate]) return ROUTE_PREFETCH_IMAGES[candidate];
    segments.pop();
  }

  return [];
}

/** @deprecated Use `imagesForPath` — returns first image for a route. */
export function heroImageForPath(pathname: string): string | undefined {
  return imagesForPath(pathname)[0];
}
