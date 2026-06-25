"use client";

import { trackPathnameChange } from "@/lib/site-intro-skip";
import { scrollToTopInstant } from "@/lib/scroll-to-top";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * Resets scroll before paint on App Router client navigations.
 * Skips the initial mount (full page load / browser scroll restoration)
 * and back/forward (popstate) so history position is preserved.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  trackPathnameChange(pathname);
  const isFirstNavigation = useRef(true);
  const skipFromPopState = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      skipFromPopState.current = true;
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

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
