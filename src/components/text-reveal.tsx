"use client";

import { useEffect, useRef, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type SplitBy = "words" | "lines" | "chars";

type TextRevealProps = {
  children: string;
  by?: SplitBy;
  className?: string;
  /** Element type to render as. Defaults to "span". */
  as?: ElementType;
  delay?: number;
};

// Text is intentionally much slower to trigger than ScrollReveal (used for
// images) and starts with a bigger base delay — so as a user scrolls,
// imagery settles into place well before copy follows behind it.
const TEXT_LAG_DELAY = 0.45;

export function TextReveal({
  children,
  by = "words",
  className,
  as: Tag = "span",
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = new SplitType(el, { types: by });
    const targets = split[by];
    if (!targets || targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          delay: delay + TEXT_LAG_DELAY,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            once: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [by, delay, children]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}