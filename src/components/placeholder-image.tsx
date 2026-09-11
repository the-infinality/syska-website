import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  className?: string;
};

/**
 * Stand-in for photography we don't have yet. Swap for a real
 * next/image once real assets are shot/sourced for this slot.
 */
export function PlaceholderImage({ label, className }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-mint-100 to-brand-mint-200",
        className
      )}
    >
      <div className="absolute inset-0 border border-ink/10" />
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <ImageIcon className="size-6 text-ink/25" strokeWidth={1.5} />
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink/35">
          {label}
        </span>
      </div>
    </div>
  );
}
