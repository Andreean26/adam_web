'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'slideUp' | 'slideLeft' | 'slideRight' | 'fade' | 'scale' | 'stagger';
  delay?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  animation = 'slideUp',
  delay = 0,
  threshold = 0.1,
  className = '',
  as: Component = 'div',
}: ScrollRevealProps) {
  const elementRef = useScrollReveal({ threshold });

  const getAnimationClass = () => {
    switch (animation) {
      case 'slideLeft':
        return 'reveal-left';
      case 'slideRight':
        return 'reveal-right';
      case 'fade':
        return 'reveal-fade';
      case 'scale':
        return 'reveal-scale';
      case 'stagger':
        return 'reveal-stagger';
      default:
        return 'reveal';
    }
  };

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Component
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}
