const FIREFLIES = [
  { left: "8%", top: "22%", size: 4, delay: 0, duration: 7 },
  { left: "18%", top: "58%", size: 3, delay: 1.2, duration: 9 },
  { left: "30%", top: "14%", size: 5, delay: 0.6, duration: 8 },
  { left: "42%", top: "72%", size: 3, delay: 2, duration: 10 },
  { left: "54%", top: "34%", size: 4, delay: 1.5, duration: 7.5 },
  { left: "64%", top: "62%", size: 3, delay: 0.3, duration: 9.5 },
  { left: "74%", top: "20%", size: 5, delay: 2.4, duration: 8.5 },
  { left: "86%", top: "48%", size: 3, delay: 1, duration: 11 },
  { left: "92%", top: "68%", size: 4, delay: 0.8, duration: 8 },
  { left: "48%", top: "10%", size: 3, delay: 1.8, duration: 9 },
  { left: "12%", top: "80%", size: 4, delay: 2.6, duration: 7.8 },
  { left: "70%", top: "84%", size: 3, delay: 0.5, duration: 10.5 },
] as const;

/**
 * A scattering of small glowing yellow dots that drift and pulse in
 * place, like fireflies — purely decorative, layered on top of an image
 * and beneath any foreground text/content.
 */
export function FireflyOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {FIREFLIES.map((f, i) => (
        <span
          key={i}
          className="absolute animate-firefly rounded-full bg-amber-300"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            boxShadow:
              "0 0 6px 2px rgba(251,191,36,0.8), 0 0 14px 6px rgba(251,191,36,0.35)",
          }}
        />
      ))}
    </div>
  );
}