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

// Tree Component - Optimized Simple SVG
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
    lg: "w-28 h-36"
  };

  const trees = {
    1: ( // Simple Pine tree
      <>
        <rect x="47" y="85" width="6" height="15" fill="currentColor" className="text-[var(--accent-3)]" />
        <path d="M50,30 L25,60 L35,60 L15,85 L85,85 L65,60 L75,60 Z" 
          fill="currentColor" className="text-[var(--accent)]" />
      </>
    ),
    2: ( // Simple Round tree
      <>
        <rect x="46" y="75" width="8" height="25" fill="currentColor" className="text-[var(--accent-3)]" />
        <circle cx="50" cy="55" r="22" fill="currentColor" className="text-[var(--accent)]" />
      </>
    ),
    3: ( // Simple Bushy tree
      <>
        <rect x="46" y="80" width="8" height="20" fill="currentColor" className="text-[var(--accent-3)]" />
        <ellipse cx="50" cy="50" rx="28" ry="30" fill="currentColor" className="text-[var(--accent)]" />
      </>
    )
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${sizes[size]} ${className} animate-sway`}
      style={{ 
        transformOrigin: 'bottom center',
        willChange: 'transform'
      }}
    >
      {trees[variant]}
    </svg>
  );
}

// Grass Component - Optimized (reduced from 60 to 20 blades)
export function Grass({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 h-12 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 100"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Grass blades pattern - optimized */}
        {Array.from({ length: 20 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 60},100 Q${i * 60 + 2},80 ${i * 60},60`}
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-[var(--accent)]"
            style={{
              animation: `grass-wave ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
              willChange: 'transform'
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Falling Leaves Component - Optimized (reduced from 8 to 4)
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
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-leaf-fall text-[var(--accent)]"
          style={{
            left: `${20 + i * 25}%`,
            animationDelay: `${i * 3}s`,
            animationDuration: '15s',
            fontSize: '1.2rem',
            opacity: 0.5,
            willChange: 'transform, opacity'
          }}
        >
          🍃
        </div>
      ))}
    </div>
  );
}

// Clouds Component - Optimized (reduced to 2 clouds)
export function Clouds({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none ${className}`}>
      {[0, 1].map((i) => (
        <div
          key={i}
          className="absolute text-white/30 text-6xl"
          style={{
            top: `${30 + i * 40}px`,
            animation: `cloud-drift ${50 + i * 20}s linear infinite`,
            animationDelay: `${i * 20}s`,
            willChange: 'transform'
          }}
        >
          ☁️
        </div>
      ))}
    </div>
  );
}

// Birds Component - Optimized (single bird)
export function Birds({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-20 left-0 right-0 h-20 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute text-[var(--foreground)]/40 text-2xl"
        style={{
          animation: 'bird-fly 30s linear infinite',
          willChange: 'transform, opacity'
        }}
      >
        🦅
      </div>
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
