"use client";

import { useEffect, useState } from 'react';

// Mountain Background Component
export function Mountains({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 300"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* Far mountains - lighter */}
        <path
          d="M0,150 L200,80 L400,120 L600,60 L800,100 L1000,70 L1200,110 L1200,300 L0,300 Z"
          fill="currentColor"
          className="text-[var(--accent)]/10"
        />
        {/* Middle mountains */}
        <path
          d="M0,180 L150,120 L350,160 L550,100 L750,140 L950,110 L1200,150 L1200,300 L0,300 Z"
          fill="currentColor"
          className="text-[var(--accent)]/20"
        />
        {/* Near mountains - darker */}
        <path
          d="M0,220 L100,170 L300,210 L500,150 L700,190 L900,160 L1200,200 L1200,300 L0,300 Z"
          fill="currentColor"
          className="text-[var(--accent)]/30"
        />
      </svg>
    </div>
  );
}

// Tree Component - Realistic SVG
export function Tree({ 
  size = "md", 
  className = "",
  variant = 1 
}: { 
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: 1 | 2 | 3;
}) {
  const sizes = {
    sm: "w-12 h-16",
    md: "w-20 h-28",
    lg: "w-32 h-40"
  };

  const trees = {
    1: ( // Pine tree
      <>
        <path d="M50,90 L50,100" stroke="currentColor" strokeWidth="3" className="text-[var(--accent-3)]" />
        <path d="M50,30 L30,50 L35,50 L20,70 L25,70 L15,90 L85,90 L75,70 L80,70 L65,50 L70,50 Z" 
          fill="currentColor" className="text-[var(--accent)]" />
      </>
    ),
    2: ( // Round tree
      <>
        <rect x="45" y="70" width="10" height="30" fill="currentColor" className="text-[var(--accent-3)]" />
        <circle cx="50" cy="50" r="25" fill="currentColor" className="text-[var(--accent-2)]" />
        <circle cx="50" cy="60" r="20" fill="currentColor" className="text-[var(--accent)]" />
      </>
    ),
    3: ( // Bushy tree
      <>
        <path d="M50,80 L50,100" stroke="currentColor" strokeWidth="4" className="text-[var(--accent-3)]" />
        <ellipse cx="50" cy="45" rx="30" ry="25" fill="currentColor" className="text-[var(--accent)]" />
        <ellipse cx="50" cy="60" rx="25" ry="20" fill="currentColor" className="text-[var(--accent-2)]" />
      </>
    )
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${sizes[size]} ${className} animate-sway`}
      style={{ transformOrigin: 'bottom center' }}
    >
      {trees[variant]}
    </svg>
  );
}

// Grass Component
export function Grass({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 h-12 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 100"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Grass blades pattern */}
        {Array.from({ length: 60 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 20},100 Q${i * 20 + 2},80 ${i * 20},60`}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-[var(--accent)]"
            style={{
              animation: `grass-wave ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.05}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Falling Leaves Component
export function FallingLeaves() {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    };
    
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  // Only show in light mode
  if (theme !== 'light') return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-leaf-fall text-[var(--accent)]"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
            fontSize: `${1 + Math.random()}rem`,
            opacity: 0.6
          }}
        >
          🍃
        </div>
      ))}
    </div>
  );
}

// Clouds Component
export function Clouds({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute text-white/30 text-6xl"
          style={{
            top: `${20 + i * 30}px`,
            animation: `cloud-drift ${40 + i * 20}s linear infinite`,
            animationDelay: `${i * 15}s`
          }}
        >
          ☁️
        </div>
      ))}
    </div>
  );
}

// Birds Component
export function Birds({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-20 left-0 right-0 h-20 overflow-hidden pointer-events-none ${className}`}>
      {[0, 1].map((i) => (
        <div
          key={i}
          className="absolute text-[var(--foreground)]/40 text-2xl"
          style={{
            animation: `bird-fly ${25 + i * 10}s linear infinite`,
            animationDelay: `${i * 12}s`
          }}
        >
          🦅
        </div>
      ))}
    </div>
  );
}

// Sun/Moon indicator
export function SunMoon() {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    };
    
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  if (theme !== 'light') return null;

  return (
    <div className="fixed top-20 right-20 pointer-events-none z-[1]">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-yellow-300 rounded-full blur-2xl opacity-30 animate-pulse" />
        <div className="absolute inset-2 bg-yellow-400 rounded-full flex items-center justify-center text-4xl">
          ☀️
        </div>
      </div>
    </div>
  );
}
