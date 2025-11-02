import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';

export default function HeroSection() {
  return (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid pattern */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Minimal geometric accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-10 w-24 h-24 bg-[var(--accent)]/10 blur-3xl rounded-full"></div>
        <div className="absolute -top-10 right-10 w-40 h-40 bg-[var(--accent-2)]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-[var(--accent-3)]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal animation="slideLeft" className="text-center lg:text-left">
            <div className="heading-eyebrow mb-4">IT Developer</div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl heading-title mb-6 leading-tight">
              <span className="text-[var(--foreground)]">Hello, I'm</span>{' '}
              <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)] bg-clip-text text-transparent animate-gradient-x">
                Adam Fawazzaky
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

          {/* Visual */}
          <ScrollReveal animation="slideRight" delay={200} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Soft halo */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--accent-2)]/20 blur-2xl"></div>
                {/* Border ring */}
                <div className="absolute inset-0 rounded-full border border-[var(--border)]/80"></div>
                {/* Portrait */}
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/images/hero/Adam Fawazzaky Fardy Andreean.jpg"
                    alt="Adam portrait"
                    fill
                    className="object-cover"
                    priority
                  />
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
