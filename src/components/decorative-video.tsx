"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type DecorativeVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

/**
 * Muted, looping background video used as a decorative element beside or
 * behind section content — no controls, no audio, purely atmospheric.
 *
 * Nothing beyond the poster is fetched until the video nears the viewport,
 * and it pauses once scrolled away, so a long page of videos doesn't eat
 * mobile data or block the window load event.
 */
export function DecorativeVideo({
  src,
  poster,
  className,
}: DecorativeVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = src;
            video.load();
          }
          video.play().catch(() => {});
        } else if (video.src) {
          video.pause();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
