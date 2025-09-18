"use client";

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';

type SectionId = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export default function Header() {
  // progress 0 -> top state, 1 -> fully collapsed floating state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState<SectionId>('home');

  const navItems = useMemo(() => (
    [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'contact', label: 'Contact' },
    ] as { id: SectionId; label: string }[]
  ), []);

  // Smooth scroll progress interpolation
  useEffect(() => {
    const collapseStart = 0; // start collapsing immediately
    const collapseDistance = 160; // px scroll until fully collapsed
    let raf = 0;

    const update = () => {
      const y = window.scrollY || 0;
      const raw = (y - collapseStart) / collapseDistance;
      const clamped = Math.min(1, Math.max(0, raw));
      // ease-out (cubic) for smoother finish
      const eased = 1 - Math.pow(1 - clamped, 3);
      setScrollProgress(eased);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Scrollspy (viewport center line method)
  useEffect(() => {
    const ids: SectionId[] = ['home', 'about', 'services', 'portfolio', 'contact'];
    const elements = ids.map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;

    let ticking = false;
    const calc = () => {
      const vh = window.innerHeight;
      const target = vh * 0.4;
      let current: SectionId | null = null;
      for (const el of elements) {
        const r = el.getBoundingClientRect();
        if (r.top <= target && r.bottom >= target) { current = el.id as SectionId; break; }
      }
      if (!current) {
        let best: SectionId | null = null; let dist = Infinity;
        for (const el of elements) {
          const r = el.getBoundingClientRect();
            const c = r.top + r.height / 2;
            const d = Math.abs(c - target);
            if (d < dist) { dist = d; best = el.id as SectionId; }
        }
        current = best;
      }
      if (current) setActive(current);
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(calc); ticking = true; } };
    calc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', calc);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', calc); };
  }, []);

  // Derived interpolated values
  const height = 80 - (80 - 56) * scrollProgress; // 80 -> 56
  const maxWidthLarge = 1280; // approx for max-w-7xl
  const maxWidthSmall = 960; // approx for max-w-5xl
  const currentMaxWidth = maxWidthLarge - (maxWidthLarge - maxWidthSmall) * scrollProgress;
  const mt = 0 + (16 * scrollProgress); // 0 -> 16px
  const radius = 0 + (24 * scrollProgress); // 0 -> 24px
  const scale = 1 - (1 - 0.98) * scrollProgress; // 1 -> 0.98 subtle
  const shadowOpacity = 0.0 + 0.20 * scrollProgress;
  const borderAlpha = 0.10 + 0.90 * scrollProgress; // appear stronger when floating
  const bgAlpha = 0.10 + (0.35 - 0.10) * scrollProgress; // 0.10 -> 0.35
  const blur = 6 + (18 - 6) * scrollProgress; // 6 -> 18px

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none" data-progress={scrollProgress.toFixed(3)}>
      <div
        className="pointer-events-auto transition-colors duration-300 mx-auto px-3 sm:px-4"
        style={{
          maxWidth: currentMaxWidth,
          marginTop: mt,
          borderRadius: radius,
          transform: `scale(${scale})`,
          boxShadow: shadowOpacity > 0 ? `0 4px 24px -4px rgba(0,0,0,${shadowOpacity})` : 'none',
          border: `1px solid hsl(var(--border-hsl, 215 16% 27%) / ${borderAlpha})`,
          background: `color-mix(in oklab, var(--surface) ${Math.round(bgAlpha * 100)}%, transparent)` ,
          backdropFilter: `blur(${blur}px) saturate(${100 + scrollProgress * 40}%)`,
          WebkitBackdropFilter: `blur(${blur}px) saturate(${100 + scrollProgress * 40}%)`,
          transition: 'border-color 300ms, background 300ms',
        }}
      >
        <div
          className="flex justify-between items-center"
          style={{ height }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span
                className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                style={{ fontSize: `${24 - (24 - 18) * scrollProgress}px` }}
              >
                &lt;AdamAndreean/&gt;
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => {
              const isActive = active === item.id;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    'group relative px-3 py-2 rounded-full text-sm font-medium transition-all ' +
                    (isActive ? 'text-[var(--foreground)]' : 'text-[var(--muted)] hover:text-[var(--accent)]')
                  }
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={
                      'absolute inset-0 -z-0 rounded-full transition-all duration-300 ' +
                      (isActive ? 'bg-[var(--card)]/60 border border-[var(--border)]' : 'opacity-0 group-hover:opacity-100')
                    }
                  />
                  <span
                    className={
                      'pointer-events-none absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)] transition-all duration-300 ' +
                      (isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')
                    }
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button className="md:hidden text-[var(--muted)] hover:text-[var(--accent)] transition-colors" aria-label="Open menu">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
        </div>
      </div>
    </header>
  );
}
