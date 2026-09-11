"use client";

import { RotatingBadge } from "@/components/rotating-badge";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollCue } from "@/components/scroll-cue";

/**
 * Single fixed vertical rail on the left edge holding the rotating badge,
 * the scroll-progress readout, and the scroll cue — all aligned on the
 * same line instead of being scattered at different positions.
 */
export function ScrollRail() {
  return (
    <div className="pointer-events-none fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 flex-col items-center gap-8 mix-blend-difference lg:flex">
      <RotatingBadge />
      <ScrollProgress />
      <ScrollCue />
    </div>
  );
}