import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { FireflyOverlay } from "@/components/firefly-overlay";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Syska sales team — send a message, email us, or call our customer care line.",
};

const PHONE_NUMBERS = ["+94 755 210 823", "+94 718 185 470"];
const CONTACT_EMAIL = "hello@pinnaclegroup.lk";

export default function ContactPage() {
  return (
    <>
      <section className="relative flex h-[60vh] min-h-[480px] w-full items-end overflow-hidden bg-black">
        <Image
          src="/images/contact/banner.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <FireflyOverlay />

        <div className="relative z-10 px-6 pb-16 sm:px-10 lg:px-16">
          <p className="text-eyebrow mb-4 font-semibold uppercase text-brand-gold">
            Get In Touch
          </p>
          <h1 className="text-hero font-heading font-medium text-white">
            Contact
          </h1>
        </div>
      </section>

      <section className="bg-background py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            <div>
              <Reveal
                direction="right"
                duration={1.1}
                delay={0.2}
                viewportMargin="-200px"
              >
                <p className="text-eyebrow mb-4 font-semibold uppercase text-brand-blue">
                  Leave a Message
                </p>
              </Reveal>
              <Reveal
                direction="right"
                duration={1.1}
                delay={0.7}
                viewportMargin="-200px"
              >
                <h2 className="text-section-title mb-10 font-heading font-medium italic text-ink">
                  Get in touch with our sales team.
                </h2>
              </Reveal>
              <Reveal
                direction="right"
                duration={1.1}
                delay={1.2}
                viewportMargin="-200px"
              >
                <ContactForm />
              </Reveal>
            </div>

            <div className="space-y-10">
              <Reveal
                direction="left"
                duration={1.1}
                delay={0.3}
                viewportMargin="-200px"
              >
                <div>
                  <p className="text-eyebrow mb-4 font-semibold uppercase text-brand-blue">
                    Email Us
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 text-lg font-medium text-ink transition-colors hover:text-brand-blue"
                  >
                    <Mail className="size-5 shrink-0" strokeWidth={1.5} />
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </Reveal>

              <Reveal
                direction="left"
                duration={1.1}
                delay={0.9}
                viewportMargin="-200px"
              >
                <div className="border-t border-border pt-10">
                  <p className="text-eyebrow mb-4 font-semibold uppercase text-brand-blue">
                    Need to Speak With Someone?
                  </p>
                  <p className="mb-4 text-[15px] leading-relaxed text-ink-muted">
                    Our customer care team is ready to pick up the phone.
                  </p>
                  <div className="flex flex-col gap-3">
                    {PHONE_NUMBERS.map((number) => (
                      <a
                        key={number}
                        href={`tel:${number.replace(/\s+/g, "")}`}
                        className="flex items-center gap-3 text-lg font-medium text-ink transition-colors hover:text-brand-blue"
                      >
                        <Phone className="size-5 shrink-0" strokeWidth={1.5} />
                        {number}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}