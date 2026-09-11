import Image from "next/image";
import { ArrowUp } from "lucide-react";

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook", src: "/facebook.png" },
  { href: "#", label: "Instagram", src: "/instagram.png" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 border-b border-white/15 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.14em] text-white/70">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, label, src }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-blue"
                >
                  <Image src={src} alt="" width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="sm:text-right">
            <p className="mb-4 text-sm uppercase tracking-[0.14em] text-white/70">
              Go to Top
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-brand-green hover:text-brand-green sm:ml-auto"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Syska.lk. All Rights Reserved</p>
          
        </div>
      </div>
    </footer>
  );
}