"use client";

import { useRef } from "react";
import Image from "next/image";

import { useScrollEffect, type ScrollEffectType } from "@/hooks/use-scroll-effect";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  objectFit?: "cover" | "contain";
  priority?: boolean;
  sizes?: string;
  /** Scroll-scrubbed motion style for the image. Defaults to a vertical drift. */
  effect?: ScrollEffectType;
  /** Drift amount (percent) used by parallaxY and slideX effects. */
  effectAmount?: number;
  /** Starting/ending scale used by the zoomOut effect. */
  zoomFrom?: number;
  zoomTo?: number;
  /** ScrollTrigger start override, for offsetting one image from a sibling. */
  start?: string;
};

/**
 * A next/image wrapped for scroll motion: the container clips overflow,
 * and an inner layer (sized taller than the container so the shift never
 * reveals empty space) animates per `effect` as you scroll past it.
 */
export function ParallaxImage({
  src,
  alt,
  containerClassName,
  imageClassName,
  objectFit = "cover",
  priority,
  sizes = "100vw",
  effect = "parallaxY",
  effectAmount = 20,
  zoomFrom,
  zoomTo,
  start,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useScrollEffect(containerRef, mediaRef, {
    type: effect,
    amount: effectAmount,
    from: zoomFrom,
    to: zoomTo,
    start,
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <div
        ref={mediaRef}
        className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            objectFit === "cover" ? "object-cover" : "object-contain",
            imageClassName
          )}
        />
      </div>
    </div>
  );
}
