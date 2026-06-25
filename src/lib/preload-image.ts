const preloaded = new Set<string>();

/** Preload a static image URL once (link rel=preload + Image decode). */
export function preloadImage(src: string): void {
  if (typeof window === "undefined" || !src || preloaded.has(src)) return;

  preloaded.add(src);

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);

  const img = new window.Image();
  img.src = src;
}

export function preloadImages(sources: readonly string[]): void {
  for (const src of sources) {
    preloadImage(src);
  }
}
