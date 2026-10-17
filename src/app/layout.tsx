import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ScrollRail } from "@/components/scroll-rail";
import { Preloader } from "@/components/preloader";
import { GrainOverlay } from "@/components/grain-overlay";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

// Canela is a licensed typeface (Colophon Foundry) and isn't distributed
// on Google Fonts, so it can't be bundled here without an owned webfont
// license. Fraunces stands in for it — a free, high-contrast editorial
// serif with a close luxury/display character. Once a Canela license is
// bought, drop the .woff2 files in src/app/fonts/canela/ and swap this
// Google-Fonts call for a next/font/local() call using the same
// "--font-heading" variable name — nothing else in the codebase changes.
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Syska | Electronic & Lighting Products",
    template: "%s | Syska",
  },
  description:
    "Buy Syska electronic and LED lighting products online. Energy-efficient, long-lasting lighting solutions for every room.",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#8fae9e",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#05070a",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport = {
  themeColor: "#05070a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col overflow-x-clip">
        <Preloader />
        <GrainOverlay />
        <SmoothScrollProvider>
          <ScrollRail />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}