import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        <div className="stars absolute inset-0"></div>
        <div className="twinkling absolute inset-0"></div>
        <div className="clouds absolute inset-0"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-blue-400 rounded-full animate-float-delayed opacity-60"></div>
        
        {/* Hexagon shapes */}
        <div className="absolute top-16 right-1/4 w-8 h-8 border-2 border-cyan-400 rotate-45 animate-spin-slow opacity-30"></div>
        <div className="absolute bottom-20 right-16 w-6 h-6 border-2 border-purple-400 rotate-12 animate-spin-reverse opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal animation="slideLeft" className="text-center lg:text-left">
            {/* Glitch effect subtitle */}
            <div className="text-cyan-400 text-sm md:text-base font-mono mb-4 tracking-widest uppercase animate-pulse">
              &lt; IT Developer /&gt;
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Hello, I'm</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Adam
              </span>
            </h1>
            
            <div className="relative mb-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Crafting digital experiences across the{' '}
                <span className="text-cyan-400 font-semibold">cosmos</span> of modern web technologies.
                Building the future, one line of code at a time.
              </p>
              
              {/* Typing cursor effect */}
              <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-blink ml-1"></span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/assets/documents/CV - Adam Fawazzaky Fardi Andreean new (1).pdf"
                download="CV_Adam_Fawazzaky_Fardi_Andreean.pdf"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
                >
                <span className="relative z-10 flex items-center gap-2">
                  <DownloadIcon className="w-5 h-5" />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              

              <a
                href="https://wa.me/6282132082482"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
                >
                <span className="relative z-10 group-hover:text-slate-900 transition-colors duration-300 flex items-center gap-2">
                  <WhatsAppIcon className="w-5 h-5" />
                  Contact me
                </span>
                <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>

            {/* Tech stack floating elements */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              <span className="px-3 py-1 bg-slate-800/50 border border-cyan-400/30 text-cyan-400 text-xs rounded-full backdrop-blur-sm">React</span>
              <span className="px-3 py-1 bg-slate-800/50 border border-purple-400/30 text-purple-400 text-xs rounded-full backdrop-blur-sm">TypeScript</span>
              <span className="px-3 py-1 bg-slate-800/50 border border-pink-400/30 text-pink-400 text-xs rounded-full backdrop-blur-sm">Next.js</span>
              <span className="px-3 py-1 bg-slate-800/50 border border-pink-400/30 text-red-400 text-xs rounded-full backdrop-blur-sm">CodeIgniter</span>
              <span className="px-3 py-1 bg-slate-800/50 border border-pink-400/30 text-yellow-400 text-xs rounded-full backdrop-blur-sm">Express.js</span>
            </div>
          </ScrollReveal>

          {/* Futuristic Visual */}
          <ScrollReveal animation="slideRight" delay={200} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main holographic circle */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-purple-400/30 animate-spin-reverse"></div>
                <div className="absolute inset-8 rounded-full border border-pink-400/30 animate-spin-slow"></div>
                
                {/* Central hologram */}
                <div className="absolute inset-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-float">🚀</div>
                    <div className="text-cyan-400 font-mono text-sm tracking-wider">INITIALIZING...</div>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-orbit"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-orbit-reverse"></div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-orbit-delayed"></div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-orbit-reverse-delayed"></div>
                </div>
              </div>

              {/* Floating code snippets */}
              <div className="absolute -top-8 -left-4 bg-slate-800/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-2 text-xs font-mono text-cyan-400 animate-float opacity-80">
                const future = () =&gt; { }
              </div>
              <div className="absolute -bottom-8 -right-4 bg-slate-800/80 backdrop-blur-sm border border-purple-400/30 rounded-lg p-2 text-xs font-mono text-purple-400 animate-float-delayed opacity-80">
                npm run universe
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}
