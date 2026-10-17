"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getLenis } from "@/components/smooth-scroll-provider";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact Us" },
] as const;

const SHOP_URL = "https://syska.lk/shop/";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(59,130,246,0.15)]"
          : "bg-gradient-to-b from-black/60 to-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-10 lg:px-16">
        <Link href="/" className="shrink-0" aria-label="Syska home">
          <Image
            src="/logo.png"
            alt="Syska"
            width={140}
            height={55}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "border-b-2 pb-1 text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-brand-blue",
                pathname === link.href
                  ? "border-white"
                  : "border-transparent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "brand", size: "lg" }),
              "px-6 text-sm font-semibold uppercase tracking-wide"
            )}
          >
            Shop Now
          </a>
        </div>

        <Sheet
          onOpenChange={(open) => {
            const lenis = getLenis();
            if (!lenis) return;
            if (open) lenis.stop();
            else lenis.start();
          }}
        >
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="size-11 text-white hover:bg-white/10 hover:text-white md:hidden [&_svg]:size-5"
              />
            }
          >
            <Menu />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white">
            <SheetHeader>
              <SheetTitle className="text-white">
                <Image
                  src="/logo.png"
                  alt="Syska"
                  width={120}
                  height={47}
                  className="h-7 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-white/5 hover:text-brand-blue",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-white/90"
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                );
              })}
            </nav>
            <div className="mt-auto p-4">
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "brand", size: "lg" }),
                  "w-full text-sm font-semibold uppercase tracking-wide"
                )}
              >
                Shop Now
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}