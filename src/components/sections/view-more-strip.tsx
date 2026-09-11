import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";

const SHOP_URL = "https://syska.lk/shop/";

const MARQUEE_ITEMS = [
  "Looking for new range of LED lighting solutions? ",
];

export function ViewMoreStrip() {
  return (
    <section
      id="section-view-more"
      className="relative bg-black px-6 pt-10 sm:px-10 sm:pt-16 lg:px-16"
    >
      <ScrollReveal>
        <Link
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-green/40 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-8px_rgba(143,174,158,0.4)] sm:px-8 sm:py-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-navy/20 via-transparent to-brand-green/10" />

          <div className="relative flex flex-1 overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
                (item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="flex items-center gap-10 whitespace-nowrap font-heading text-xl italic text-white/80 sm:text-2xl"
                  >
                    {item}
                    <span className="text-brand-green">✺</span>
                  </span>
                )
              )}
            </div>
          </div>

          <span className="relative z-10 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm transition-all duration-300 group-hover:border-brand-green/50 group-hover:bg-brand-green/10 group-hover:text-brand-green">
            View More
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Link>
      </ScrollReveal>
    </section>
  );
}