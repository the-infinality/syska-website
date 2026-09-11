"use client";

import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";

const DIRECTION_OFFSET = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  none: { y: 0, x: 0 },
} as const;

type RevealProps = {
  children: ReactNode;
  direction?: keyof typeof DIRECTION_OFFSET;
  delay?: number;
  /** Duration of the fade/slide-in, in seconds. Defaults to 0.7. */
  duration?: number;
  /** Passed to framer-motion's `whileInView` viewport margin. A larger
   * negative value makes the element wait longer, further into the
   * scroll, before its reveal is triggered — combined with `delay` this
   * produces a pronounced scroll-then-wait lag. */
  viewportMargin?: string;
  className?: string;
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  viewportMargin = "-80px",
  className,
}: RevealProps) {
  const offset = DIRECTION_OFFSET[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}