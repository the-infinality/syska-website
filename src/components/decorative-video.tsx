import { cn } from "@/lib/utils";

type DecorativeVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

/**
 * Muted, looping background video used as a decorative element beside or
 * behind section content — no controls, no audio, purely atmospheric.
 */
export function DecorativeVideo({
  src,
  poster,
  className,
}: DecorativeVideoProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={cn("h-full w-full object-cover", className)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
