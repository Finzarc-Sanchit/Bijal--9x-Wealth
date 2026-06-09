"use client";

import { useEffect, useRef, useState } from "react";

const SCROLL_DELTA = 8;
const TOP_THRESHOLD = 72;

export function useScrollDirection() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      if (y <= TOP_THRESHOLD) {
        setNavVisible(true);
      } else if (y > lastY.current + SCROLL_DELTA) {
        setNavVisible(false);
      } else if (y < lastY.current - SCROLL_DELTA) {
        setNavVisible(true);
      }

      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, navVisible };
}
