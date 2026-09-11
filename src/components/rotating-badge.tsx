"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Decorative circular badge that spins continuously. Positioning is owned
 * by ScrollRail so it lines up with the other scroll-chrome elements.
 */
export function RotatingBadge() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      rotation: 360,
      repeat: -1,
      duration: 16,
      ease: "none",
      transformOrigin: "50% 50%",
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 100 100" className="size-16 text-white">
      <defs>
        <path
          id="badge-circle"
          d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          fill="none"
        />
      </defs>
      <text fontSize="8.5" letterSpacing="3" fill="currentColor">
        <textPath href="#badge-circle">
          SYSKA • LIGHT YEARS AHEAD • SYSKA • LIGHT YEARS AHEAD •
        </textPath>
      </text>
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}