"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

import { buttonVariants } from "@/components/ui/button";
import { useHeroScene } from "@/hooks/use-hero-scene";
import { useScrollEffect } from "@/hooks/use-scroll-effect";
import { cn } from "@/lib/utils";

const SHOP_URL = "https://syska.lk/shop/";
const TEXT_BASE_DELAY = 0.6;

export function Hero() {
  return (
    <>
      <HeroBannerOne />
      <HeroBannerTwo />
      <HeroBannerThree />
    </>
  );
}

function HeroBannerOne() {
  return (
    <section className="relative flex h-svh min-h-[560px] w-full items-center overflow-hidden bg-black sm:min-h-[640px] lg:min-h-[720px]">
      <div className="absolute inset-0 lg:scale-x-185">
        <Image
          src="/images/home/banner-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover lg:object-contain"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/50 sm:via-black/20" />

      <div className="absolute inset-y-0 right-0 hidden w-[45%] items-end justify-center pb-24 sm:flex lg:pb-16">
        <div className="relative h-[55%] w-full max-w-md">
          <Image
            src="/images/home/banner-1-1.png"
            alt="Syska smart LED bulb"
            fill
            priority
            sizes="(min-width: 1024px) 400px, 45vw"
            className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl pt-10 sm:max-w-[44%] sm:pt-16 sm:pl-6 lg:pl-16 xl:max-w-xl xl:pl-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: TEXT_BASE_DELAY,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-eyebrow mb-6 font-semibold uppercase text-brand-blue"
          >
            Energy-Efficient LED Lighting
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: TEXT_BASE_DELAY + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-hero font-heading font-medium italic text-white"
          >
            Light Years Ahead.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: TEXT_BASE_DELAY + 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Smart, energy-efficient lighting solutions built to save up to
            90% more power for every room, every mood.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: TEXT_BASE_DELAY + 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "brand", size: "lg" }),
                "px-8 text-sm font-semibold uppercase tracking-wide"
              )}
            >
              Shop Now
            </a>
            <Link
              href="/contact"
              className="py-3 text-sm font-medium text-white/90 underline underline-offset-4 transition-colors hover:text-brand-green"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroBannerTwo() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  useScrollEffect(sectionRef, bgRef, {
    type: "slideX",
    amount: 100,
    start: "top bottom",
    end: "top top",
  });
  useScrollEffect(sectionRef, productRef, {
    type: "slideX",
    amount: 100,
    start: "top 85%",
    end: "top 10%",
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-svh min-h-[560px] w-full items-center overflow-hidden bg-black sm:min-h-[640px] lg:min-h-[720px]"
    >
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/home/banner-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      <div
        ref={productRef}
        className="absolute inset-y-0 right-0 hidden w-[45%] items-end justify-center pb-24 will-change-transform sm:flex lg:pb-16"
      >
        <div className="relative h-[55%] w-full max-w-md">
          <Image
            src="/images/home/banner-2-1.png"
            alt="Syska decorative lighting"
            fill
            sizes="(min-width: 1024px) 400px, 45vw"
            className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}

function HeroBannerThree() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  useHeroScene(sectionRef, {
    type: "zoomOut",
    background: { ref: bgRef, lag: 0, span: 1 },
    product: { ref: productRef, lag: 0.25, span: 0.75 },
    zoomFrom: 2.8,
    pinDistance: "+=90%",
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-svh min-h-[560px] w-full items-center overflow-hidden bg-black sm:min-h-[640px] lg:min-h-[720px]"
    >
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/home/banner-3.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      <div
        ref={productRef}
        className="absolute inset-y-0 right-0 hidden w-[45%] items-end justify-center pb-24 will-change-transform sm:flex lg:pb-16"
      >
        <div className="relative h-[55%] w-full max-w-md">
          <Image
            src="/images/home/banner-3-1.png"
            alt="Syska ambient lighting"
            fill
            sizes="(min-width: 1024px) 400px, 45vw"
            className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}