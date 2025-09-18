import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutSection() {
  return (
  <section id="about" className="section-modern relative overflow-hidden">
      {/* Minimal soft accents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-16 -left-10 w-48 h-48 bg-[var(--accent)]/10 blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-[var(--accent-2)]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade" className="text-center mb-16">
          <div className="heading-eyebrow mb-4">About Me</div>
          <h2 className="text-3xl md:text-4xl heading-title text-[var(--foreground)] mb-4">
            Building <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Quality Software</span>
          </h2>
          <p className="text-xl muted max-w-3xl mx-auto">
            I help teams and businesses ship reliable, maintainable products with a focus on clarity, performance, and great user experience.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal animation="slideLeft">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">A Practical Approach to Modern Development</h3>
            <p className="muted mb-6 leading-relaxed">
              With 5+ years of hands-on experience, I've partnered with startups and established companies to turn ideas into shipped features.
              I value readable code, thoughtful architecture, and smooth collaboration.
            </p>
            <p className="muted mb-8 leading-relaxed">
              I believe in user-centered design, clean implementation, and iterative delivery.
              Outside of coding, I enjoy learning new tools, contributing to open-source, and sharing knowledge.
            </p>

            {/* Skills */}
            <ScrollReveal animation="stagger" delay={300} className="grid grid-cols-2 gap-4">
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">React & Next.js</span>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300 group-hover:text-green-400 transition-colors">Node.js</span>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300 group-hover:text-purple-400 transition-colors">TypeScript</span>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">PHP</span>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal animation="slideRight" delay={200} className="surface-card surface-hover rounded-2xl p-8 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-[var(--accent)] to-sky-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="muted text-sm">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">5+</div>
                <div className="muted text-sm">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-[var(--accent-2)] to-violet-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">30+</div>
                <div className="muted text-sm">Technologies Used</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="muted text-sm">Commitment</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
