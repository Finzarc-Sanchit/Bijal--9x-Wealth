"use client";

import { scrollToTopInstant } from "@/lib/scroll-to-top";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

function isInternalRouteChange(href: string, pathname: string): boolean {
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return false;
    if (url.pathname === pathname && url.hash) return false;
    return url.pathname !== pathname;
  } catch {
    return false;
  }
}

/**
 * Resets scroll before paint on App Router client navigations.
 * Skips the initial mount (full page load / browser scroll restoration)
 * and back/forward (popstate) so history position is preserved.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const isFirstNavigation = useRef(true);
  const skipFromPopState = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      skipFromPopState.current = true;
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest("a[href]");
      if (!anchor || anchor.getAttribute("target") === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      if (isInternalRouteChange(href, pathname)) {
        scrollToTopInstant();
      }
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onDocumentClick, true);

    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onDocumentClick, true);
    };
  }, [pathname]);

  useLayoutEffect(() => {
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }

    if (skipFromPopState.current) {
      skipFromPopState.current = false;
      return;
    }

    scrollToTopInstant();
  }, [pathname]);

  return null;
}
