"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type HeroSceneType = "slideX" | "zoomOut";

type HeroSceneTarget = {
  ref: RefObject<HTMLElement | null>;
  /** 0–1 position within the scene's own timeline where this layer's
   * motion begins — a larger value makes it visibly lag the background. */
  lag?: number;
  /** How much of the timeline this layer's motion takes up (0–1). */
  span?: number;
};

type HeroSceneOptions = {
  type: HeroSceneType;
  background: HeroSceneTarget;
  product?: HeroSceneTarget;
  /** Starting scale for the zoomOut effect — how zoomed-in the image
   * starts before scrolling out to its normal size. Higher = more
   * dramatic zoom. */
  zoomFrom?: number;
  /** How long (relative scroll distance) this scene stays pinned for. */
  pinDistance?: string;
};

/**
 * Drives one pinned "scene" of the hero sequence: the section holds its
 * scroll position for `pinDistance`, during which the background (and
 * optionally a product image, offset by `lag`) animates in per `type` —
 * a horizontal slide, or a zoom-out from a tight crop.
 */
export function useHeroScene(
  sectionRef: RefObject<HTMLElement | null>,
  options: HeroSceneOptions
) {
  useEffect(() => {
    const section = sectionRef.current;
    const bgEl = options.background.ref.current;
    if (!section || !bgEl) return;

    const {
      type,
      background,
      product,
      zoomFrom = 2.2,
      pinDistance = "+=100%",
    } = options;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: pinDistance,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      const applyMotion = (
        el: HTMLElement,
        position: number,
        duration: number,
        scaleFrom: number
      ) => {
        if (type === "slideX") {
          tl.fromTo(
            el,
            { xPercent: -100 },
            { xPercent: 0, ease: "none", duration },
            position
          );
        } else if (type === "zoomOut") {
          tl.fromTo(
            el,
            { scale: scaleFrom, opacity: 0.5 },
            { scale: 1, opacity: 1, ease: "none", duration },
            position
          );
        }
      };

      const bgSpan = background.span ?? 1;
      applyMotion(bgEl, background.lag ?? 0, bgSpan, zoomFrom);

      const productEl = product?.ref.current;
      if (productEl) {
        const productSpan = product?.span ?? bgSpan;
        applyMotion(
          productEl,
          product?.lag ?? 0.2,
          productSpan,
          zoomFrom * 0.85
        );
      }
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
