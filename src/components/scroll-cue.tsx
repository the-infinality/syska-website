export function ScrollCue() {
  return (
    <div className="flex flex-col items-center gap-3 text-white/70">
      <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
      <span className="relative h-10 w-px overflow-hidden bg-white/25">
        <span className="absolute inset-x-0 top-0 h-3 w-px animate-scroll-indicator bg-white" />
      </span>
    </div>
  );
}