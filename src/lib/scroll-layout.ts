/** Re-measure scroll/pin layouts after intro unmount or major DOM height changes. */
export function refreshScrollLayout() {
  if (typeof window === "undefined") return;

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.dispatchEvent(new Event("resize"));

  void import("gsap/ScrollTrigger")
    .then(({ ScrollTrigger }) => {
      ScrollTrigger.refresh();
    })
    .catch(() => {
      /* GSAP not loaded — sticky hero uses CSS scroll only */
    });
}

/** Wait for paint + splash unmount before refreshing scroll measurements. */
export function refreshScrollLayoutAfterIntro() {
  if (typeof window === "undefined") return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      refreshScrollLayout();
      window.setTimeout(refreshScrollLayout, 120);
    });
  });
}
