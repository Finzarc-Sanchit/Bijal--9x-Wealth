"use client";

import { getLenisInstance, subscribeLenisScroll } from "@/lib/lenis-instance";
import { useEffect, useRef, useState } from "react";

const SCROLL_DELTA = 6;
const TOP_THRESHOLD = 48;

function readScrollY(): number {
  return getLenisInstance()?.scroll ?? window.scrollY;
}

/**
 * Global scroll-direction hook for the fixed navbar.
 * Hides on scroll down, shows immediately on scroll up.
 */
export function useScrollDirection() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = readScrollY();

    const update = () => {
      const y = readScrollY();
      setScrolled(y > 24);

      if (y <= TOP_THRESHOLD) {
        setNavVisible(true);
      } else if (y > lastY.current + SCROLL_DELTA) {
        setNavVisible(false);
      } else if (y < lastY.current - SCROLL_DELTA) {
        setNavVisible(true);
      }

      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    const unsubscribeLenis = subscribeLenisScroll(() => {
      onScroll();
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      unsubscribeLenis();
    };
  }, []);

  return { scrolled, navVisible };
}
