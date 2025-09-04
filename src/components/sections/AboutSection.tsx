import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade" className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono mb-4 tracking-widest uppercase">
            &lt; About.Me /&gt;
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Digital <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Explorer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigating the infinite possibilities of code and creativity 
            across the digital universe.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal animation="slideLeft">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-cyan-400">&gt;</span> My Journey Through The IT Developer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience navigating the vast digital cosmos, 
              I've had the privilege of working with startups and established companies to 
              transform their visions into reality. My expertise spans across multiple 
              technological dimensions.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I believe in clean code, user-centered design, and continuous 
              exploration of new frontiers. When I'm not coding, you can find me 
              discovering emerging technologies, contributing to open-source galaxies, 
              or sharing knowledge with fellow space travelers.
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
          <ScrollReveal animation="slideRight" delay={200} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-gray-400 text-sm">Missions Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-gray-400 text-sm">Years in Orbit</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">30+</div>
                <div className="text-gray-400 text-sm">Allied Systems</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
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
