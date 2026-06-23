/** Instant scroll reset — bypasses CSS `scroll-behavior` and avoids smooth animation. */
export function scrollToTopInstant(): void {
  if (typeof window === "undefined") return;

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  try {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  } catch {
    window.scrollTo(0, 0);
  }
}
