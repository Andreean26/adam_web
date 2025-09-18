"use client";

import React, { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeToggle() {
  // Default to 'dark' on both server and initial client render to avoid hydration mismatch
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // On mount, resolve actual theme from localStorage or system preference
    const stored = (typeof window !== 'undefined' && (localStorage.getItem('theme') as 'light' | 'dark')) || null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved: 'light' | 'dark' = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(resolved);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof localStorage !== 'undefined') localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[color-mix(in oklab,var(--accent),var(--border)70%)] hover:text-[var(--accent)] transition-all"
    >
      {/* Render icon consistently after mount to prevent hydration mismatches */}
      {mounted && (theme === 'dark' ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      ))}
    </button>
  );
}
