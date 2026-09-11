import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scrubs `target` vertically as `container` moves through the viewport —
 * the classic "image drifts slower than the page" parallax effect.
 */
export function useParallaxY(
  containerRef: RefObject<HTMLElement | null>,
  targetRef: RefObject<HTMLElement | null>,
  amount = 20
) {
  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target,
        { yPercent: 0 },
        {
          yPercent: -amount,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [containerRef, targetRef, amount]);
}
