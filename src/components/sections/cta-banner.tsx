import Link from "next/link";

import { DecorativeVideo } from "@/components/decorative-video";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextReveal } from "@/components/text-reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SHOP_URL = "https://syska.lk/shop/";

export function CtaBanner() {
  return (
    <section
      id="section-cta-banner"
      className="relative flex h-[85svh] min-h-[520px] w-full items-center overflow-hidden bg-black"
    >
      <DecorativeVideo
        src="/images/home/bulbs.mp4"
        poster="/images/home/bulbs-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />

      <span className="absolute right-6 top-6 z-10 font-heading text-xs text-white/40 sm:right-10 lg:right-16">
        06
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <p className="text-eyebrow mb-4 font-semibold uppercase text-brand-green">
            Upgrade Today
          </p>
          <TextReveal
            as="h2"
            by="words"
            className="text-section-title max-w-xl font-heading font-medium italic text-white"
          >
            Ready to upgrade your lighting?
          </TextReveal>
          <TextReveal
            as="p"
            by="lines"
            delay={0.1}
            className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75"
          >
            Explore the full Syska range and find the right fit for every
            room in your home.
          </TextReveal>
          <Link
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "brand", size: "lg" }),
              "mt-8 px-8 text-sm font-semibold uppercase tracking-wide"
            )}
          >
            Shop the Full Range
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}