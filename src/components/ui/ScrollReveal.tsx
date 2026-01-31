'use client';

import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'slideUp' | 'slideLeft' | 'slideRight' | 'fade' | 'scale' | 'stagger';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
  viewport?: { once?: boolean; margin?: string; amount?: number | "some" | "all" };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function ScrollReveal({
  children,
  animation = 'slideUp',
  delay = 0,
  duration = 0.5,
  threshold,
  className = '',
  as: Component = 'div',
  viewport = { once: true, margin: "0px 0px -100px 0px" },
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // If threshold is provided, it overrides viewport.amount
  const finalViewport = threshold !== undefined
    ? { ...viewport, amount: threshold }
    : viewport;

  const variants: Record<string, Variants> = {
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    stagger: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  };

  const selectedVariant = variants[animation] || variants.slideUp;

  // Convert delay from ms to seconds for framer-motion
  const delayInSeconds = delay / 1000;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComponent = motion.create(Component as any);

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={finalViewport}
      variants={shouldReduceMotion ? { visible: { opacity: 1 } } : selectedVariant}
      transition={{ duration, delay: delayInSeconds, ease: "easeOut" }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
