"use client";

import { imagesForPath } from "@/lib/route-hero-images";
import { preloadImages } from "@/lib/preload-image";
import { useEffect } from "react";

function preloadForHref(href: string): void {
  if (!href.startsWith("/") || href.startsWith("//")) return;

  const path = href.split("?")[0].split("#")[0];
  const sources = imagesForPath(path);
  if (sources.length > 0) preloadImages(sources);
}

/**
 * Preloads route hero images on link hover/focus so LCP images are warm before navigation.
 */
export function RouteImagePrefetch() {
  useEffect(() => {
    const onPointerOver = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      preloadForHref(anchor.getAttribute("href") ?? "");
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLAnchorElement) || !target.href) return;

      try {
        const url = new URL(target.href);
        if (url.origin !== window.location.origin) return;
        preloadForHref(url.pathname);
      } catch {
        /* ignore malformed href */
      }
    };

    document.addEventListener("pointerover", onPointerOver, true);
    document.addEventListener("focusin", onFocusIn, true);

    return () => {
      document.removeEventListener("pointerover", onPointerOver, true);
      document.removeEventListener("focusin", onFocusIn, true);
    };
  }, []);

  return null;
}
