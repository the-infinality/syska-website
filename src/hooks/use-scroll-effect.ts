import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type ScrollEffectType = "parallaxY" | "slideX" | "zoomOut" | "none";

type ScrollEffectOptions = {
  type: ScrollEffectType;
  /** Drift amount (percent) used by parallaxY and slideX. */
  amount?: number;
  /** Starting/ending scale used by zoomOut. */
  from?: number;
  to?: number;
  /** ScrollTrigger start/end overrides — used to offset one image's
   * motion so it visibly lags a sibling image using the same effect. */
  start?: string;
  end?: string;
};

/**
 * Drives one of three scroll-scrubbed motion styles on `target` as
 * `container` moves through the viewport: a vertical drift (parallaxY), a
 * horizontal slide (slideX), or a scale-down (zoomOut). Pass "none" to
 * skip animation entirely.
 */
export function useScrollEffect(
  containerRef: RefObject<HTMLElement | null>,
  targetRef: RefObject<HTMLElement | null>,
  options: ScrollEffectOptions
) {
  const {
    type,
    amount = 20,
    from = 1.4,
    to = 1,
    start = "top bottom",
    end = "bottom top",
  } = options;

  useEffect(() => {
    if (type === "none") return;

    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const ctx = gsap.context(() => {
      const scrollTrigger = {
        trigger: container,
        start,
        end,
        scrub: true,
      };

      if (type === "parallaxY") {
        gsap.fromTo(
          target,
          { yPercent: 0 },
          { yPercent: -amount, ease: "none", scrollTrigger }
        );
      } else if (type === "slideX") {
        gsap.fromTo(
          target,
          { xPercent: -amount },
          { xPercent: 0, ease: "none", scrollTrigger }
        );
      } else if (type === "zoomOut") {
        gsap.fromTo(
          target,
          { scale: from },
          { scale: to, ease: "none", scrollTrigger }
        );
      }
    });

    return () => ctx.revert();
  }, [containerRef, targetRef, type, amount, from, to, start, end]);
}