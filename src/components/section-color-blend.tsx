"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SECTION_COLORS = [
  { id: "section-view-more", color: "#0a1a14" },
  { id: "section-pillars", color: "#0d1b2a" },
  { id: "section-brand-narrative", color: "#0a0f16" },
  { id: "section-featured-spotlight", color: "#0d1b2a" },
  { id: "section-category-showcase", color: "#0a1a14" },
  { id: "section-cta-banner", color: "#000000" },
] as const;

const INITIAL_COLOR = "#070a10";

export function SectionColorBlend() {
  useEffect(() => {
    const tweens = SECTION_COLORS.map(({ id, color }, i) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const fromColor = i === 0 ? INITIAL_COLOR : SECTION_COLORS[i - 1].color;
      return gsap.fromTo(
        document.body,
        { backgroundColor: fromColor },
        {
          backgroundColor: color,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => {
      tweens.forEach((tween) => {
        tween?.scrollTrigger?.kill();
        tween?.kill();
      });
      document.body.style.backgroundColor = "";
    };
  }, []);

  return null;
}