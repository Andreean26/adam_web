"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
import { Mountains, Tree, Clouds, Birds } from '@/components/ui/NatureDecorations';

export default function HeroSection() {
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

  const isLightMode = theme === 'light';

  return (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Conditional background based on theme */}
      {isLightMode ? (
        <>
          {/* Nature Theme - Light Mode - Optimized */}
          <Mountains className="z-[1] opacity-50" />
          <Clouds className="z-[2]" />
          <Birds className="z-[2]" />
          
          {/* Trees decoration - reduced from 4 to 2 */}
          <Tree variant={1} size="lg" className="absolute bottom-20 left-10 z-[3]" />
          <Tree variant={3} size="lg" className="absolute bottom-20 right-20 z-[3]" />
        </>
      ) : (
        <>
          {/* Tech Theme - Dark Mode */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-24 left-10 w-24 h-24 bg-[var(--accent)]/10 blur-3xl rounded-full"></div>
            <div className="absolute -top-10 right-10 w-40 h-40 bg-[var(--accent-2)]/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-[var(--accent-3)]/10 blur-3xl rounded-full"></div>
          </div>
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal animation="slideLeft" className="text-center lg:text-left">
            <div className="heading-eyebrow mb-2 mt-4">IT Developer</div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl heading-title mb-6 leading-tight">
              <span className="text-[var(--foreground)]">Hello, I'm</span>{' '}
              <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)] bg-clip-text text-transparent animate-gradient-x">
                Adam F. Andreean
              </span>
            </h1>
            
            <div className="relative mb-8">
              <p className="text-lg md:text-xl muted leading-relaxed font-light">
                Full Stack Developer specializing in building exceptional web and mobile applications.
                I transform ideas into elegant, scalable solutions with modern technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
              // solve untracked cv download
                href="/assets/documents/Adam Fawazzaky Fardy Andreean ATS CV.pdf"
                download="CV_Adam_Fawazzaky_Fardy_Andreean.pdf"
                className="group relative px-8 py-4 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 surface-card surface-hover"
                >
                <span className="relative z-10 flex items-center gap-2">
                  <DownloadIcon className="w-5 h-5 text-[var(--accent)]" />
                  <span className="text-[var(--foreground)]">Download CV</span>
                </span>
                <div className="absolute inset-0 pointer-events-none"></div>
              </a>
              

              <a
                href="https://wa.me/6282132082482"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                >
                <span className="relative z-10 transition-colors duration-300 flex items-center gap-2">
                  <WhatsAppIcon className="w-5 h-5" />
                  Contact me
                </span>
                <div className="absolute inset-0 bg-[var(--accent)]/10"></div>
              </a>
            </div>

            {/* Tech stack floating elements */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              <span className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-[var(--accent)] text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-[var(--accent-2)] text-xs rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-[var(--accent-3)] text-xs rounded-full">Next.js</span>
              <span className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-red-400 text-xs rounded-full">CodeIgniter</span>
              <span className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-yellow-400 text-xs rounded-full">Express.js</span>
            </div>
          </ScrollReveal>

          {/* Visual - Artistic Hero Image */}
          <ScrollReveal animation="slideRight" delay={200} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated gradient orbs in background */}
                <div className="absolute -inset-8 opacity-60">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl animate-float"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl animate-float-delayed"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-full blur-3xl"></div>
                </div>

                {/* Geometric shapes */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Rotating border rings */}
                  <div className="absolute inset-0 rounded-[3rem] border-2 border-[var(--accent)]/20 animate-spin-slow"></div>
                  <div className="absolute inset-4 rounded-[2.5rem] border-2 border-[var(--accent-2)]/20 animate-spin-reverse"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-[var(--accent)] rounded-tl-2xl"></div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-[var(--accent-2)] rounded-br-2xl"></div>
                </div>

                {/* Main image container with unique shape */}
                <div className="absolute inset-8 group perspective-1000">
                  {/* Glassmorphism card effect */}
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent-2)]/10 z-10"></div>
                    
                    {/* Image */}
                    <div className="absolute inset-0 bg-[var(--card)]">
                      <Image
                        src="/images/hero/adam hero.jpg"
                        alt="Adam Fawazzaky - Full Stack Developer"
                        fill
                        sizes="(max-width: 768px) 320px, 384px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRscHC0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA9QB2ptbgN0xAABcIX/9k="
                      />
                    </div>

                    {/* Animated border shimmer */}
                    <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>

                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--card)] to-transparent z-10"></div>
                  </div>

                  {/* Floating tech badges */}
                  <div className="absolute -right-4 top-1/4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-float z-20">
                    ⚛️ React
                  </div>
                  <div className="absolute -left-4 top-2/3 bg-gradient-to-br from-purple-500 to-violet-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-float-delayed z-20">
                    🚀 Next.js
                  </div>
                  <div className="absolute -right-2 bottom-1/4 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-float z-20">
                    💻 Full Stack
                  </div>
                </div>

                {/* Decorative dots pattern */}
                <div className="absolute -bottom-4 -right-4 grid grid-cols-3 gap-2 opacity-40">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-2)]"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-3)]"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-2)]"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-3)]"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-3)]"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-2)]"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--surface)] to-transparent"></div>
    </section>
  );
}
