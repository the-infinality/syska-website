import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { ParallaxImage } from "@/components/parallax-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextReveal } from "@/components/text-reveal";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Wide Application",
    description:
      "Energy-efficient LED bulbs for every room: bedroom, living room, kitchen, garage, bathroom, and more.",
  },
  {
    title: "Easy to Install",
    description:
      "The base diameter is 22mm, you can easily install it. The standard light bulbs get full bright and stable lights for your space without waiting after turning the switch on.",
  },
  {
    title: "Energy Saving",
    description:
      "9 Watt, >900 Lumens, Eco-friendly daylight led light bulbs to replace light bulbs 100 watt, consume 90% less energy compared to incandescent bulbs, saving big money on energy bills.[Input Voltage ]- AC 90-300V, 50Hz, [CRI]- >80",
  },
  {
    title: "Long Lasting",
    description:
      "A+ energy efficient led light bulbs equivalent are a great replacement for incandescent, halogen, and CFL lamps, last 20 times longer, up to 50000 hrs lifetime(based on hours of use each day).",
  },
  {
    title: "Designed for your well-being",
    description:
      "Lower Power Consumption, No UV/IR light, safe to use, Replacement for CFL , Wide Operating Voltage, Eco-Friendly, Good for Eyes and Visibility.",
  },
] as const;

const SHOP_URL = "https://syska.lk/shop/";

export function FeaturedSpotlight() {
  return (
    <section
      id="section-featured-spotlight"
      className="relative bg-black py-section-sm sm:py-section"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="order-2 flex items-center justify-center lg:order-1">
            <ParallaxImage
              src="/images/home/feached-1.png"
              alt="Syska 9W LED bulb"
              objectFit="contain"
              containerClassName="h-[320px] w-full max-w-md sm:h-[420px] lg:h-[520px]"
              sizes="(min-width: 1024px) 40vw, 80vw"
            />
          </ScrollReveal>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <ScrollReveal>
              <p className="text-eyebrow mb-4 font-semibold uppercase text-brand-green">
                Featured Product
              </p>
              <TextReveal
                as="h2"
                by="words"
                className="text-section-title font-heading font-medium italic text-ink"
              >
                Improve every room with Syska LED.
              </TextReveal>
              <TextReveal
                as="p"
                by="lines"
                className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-muted"
              >
              Improve the illumination of a room with Syska LED bulb. It ensures maximum savings and is an eco-friendly alternative compared with CFL bulbs. Consume 90% less energy compared to incandescent bulbs, reducing your energy consumption through superior technology. 
              </TextReveal>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-2">
              {FEATURES.map(({ title, description }, i) => (
                <ScrollReveal
                  key={title}
                  delay={i * 0.08}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-0 font-heading text-sm text-brand-green/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {description}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <Link
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "brand", size: "lg" }),
                  "mt-12 px-8 text-sm font-semibold uppercase tracking-wide"
                )}
              >
                Shop Now
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}