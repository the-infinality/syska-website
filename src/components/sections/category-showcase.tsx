import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { DecorativeVideo } from "@/components/decorative-video";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextReveal } from "@/components/text-reveal";

const CATEGORIES = [
  { label: "LED Lighting", video: "/images/home/c-1.mp4", poster: "/images/home/c-1-poster.jpg" },
  { label: "Accessories", video: "/images/home/c-2.mp4", poster: "/images/home/c-2-poster.jpg" },
  { label: "Personal Care", video: "/images/home/c-3.mp4", poster: "/images/home/c-3-poster.jpg" },
  { label: "Home Appliances", video: "/images/home/c-4.mp4", poster: "/images/home/c-4-poster.jpg" },
  { label: "Wires & Cables", video: "/images/home/c-5.mp4", poster: "/images/home/c-5-poster.jpg" },
] as const;

const SHOP_URL = "https://syska.lk/shop/";

export function CategoryShowcase() {
  return (
    <section
      id="section-category-showcase"
      className="relative bg-black pt-section-sm sm:pt-section"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <ScrollReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-eyebrow mb-4 font-semibold uppercase text-brand-green">
              Explore the Range
            </p>
            <TextReveal
              as="h2"
              by="words"
              className="text-section-title max-w-2xl font-heading font-medium italic text-ink"
            >
              A category for every corner of your home.
            </TextReveal>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            Five ranges, one standard of quality hover to see each in
            motion.
          </p>
        </ScrollReveal>

        <div className="mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-16 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:pb-16 [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map(({ label, video, poster }, i) => (
            <ScrollReveal
              key={label}
              delay={i * 0.08}
              className="group relative aspect-[3/4.5] w-[68vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 sm:w-[42vw] lg:w-auto lg:shrink"
            >
              <Link
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <DecorativeVideo
                  src={video}
                  poster={poster}
                  className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />
                <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-brand-green/40 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute right-4 top-4 font-heading text-xs text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <span className="font-heading text-lg italic text-white sm:text-xl">
                    {label}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-white/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-green" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}