"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Live 00–100 scroll readout with a gradient fill track. Positioning is
 * owned by ScrollRail so it lines up with the other scroll-chrome elements.
 */
export function ScrollProgress() {
  const numberRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const pct = Math.round(self.progress * 100);
        if (numberRef.current) {
          numberRef.current.textContent = String(pct).padStart(2, "0");
        }
        if (fillRef.current) {
          fillRef.current.style.height = `${self.progress * 100}%`;
        }
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <span
        ref={numberRef}
        className="font-mono text-xs tabular-nums text-white"
      >
        00
      </span>
      <div className="relative h-28 w-px bg-white/30">
        <div
          ref={fillRef}
          className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-brand-blue to-brand-green"
          style={{ height: "0%" }}
        />
      </div>
    </div>
  );
}