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
            Passionate <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Full Stack Developer</span>
          </h2>
          <p className="text-xl muted max-w-3xl mx-auto">
            A dedicated software developer specializing in web development, mobile applications, and IoT solutions with a strong foundation in modern technologies.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal animation="slideLeft">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Crafting Digital Solutions with Precision</h3>
            <p className="muted mb-6 leading-relaxed">
             I’m a fresh graduate software developer specializing in building end-to-end web applications. My experience ranges from designing RESTful APIs with authentication, file upload, and database migration to creating responsive React interfaces for healthcare and industrial use cases.   </p>
            <p className="muted mb-6 leading-relaxed">
             In my latest project, I built a microservice-based interior design platform using Node.js/Express and MySQL, integrated Firebase/Firestore for real-time messaging, and deployed it to a VPS with optimized queries and indexing. Earlier, at Polytron, I developed a production monitoring page (Andon) with interactive data visualization to support faster decision-making.          </p>
            <p className="muted mb-8 leading-relaxed">
            I value clean structure, teamwork, and continuous learning — and I’m always looking for chances to build useful products with modern JavaScript and PHP stacks.       
            </p>

            {/* Core Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-4">Core Technologies</h4>
              <ScrollReveal animation="stagger" delay={300} className="grid grid-cols-2 gap-4">
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">React & Next.js</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors">React Native</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-sky-400 transition-colors">Flutter</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-rose-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-red-400 transition-colors">Laravel</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-purple-400 transition-colors">TypeScript</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-green-400 transition-colors">Node.js</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">PHP & MySQL</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-teal-400 transition-colors">Arduino & IoT</span>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Stats & Highlights */}
          <ScrollReveal animation="slideRight" delay={200} className="surface-card surface-hover rounded-2xl p-8 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
            
            <div className="relative z-10">
              {/* Education & Experience */}
              <div className="mb-8 pb-8 border-b border-[var(--border)]">
                <h4 className="text-xl font-bold text-[var(--foreground)] mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">Universitas Bina Nusantara (BINUS)</p>
                    <p className="text-sm text-[var(--accent)]">Bachelor's in Computer Science</p>
                    <p className="text-sm muted">2021 - 2025 | GPA: 3.48/4.00</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">SMA Negeri 17 Surabaya</p>
                    <p className="text-sm text-[var(--accent)]">Science Major</p>
                    <p className="text-sm muted">2017 - 2020</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[var(--accent)] to-sky-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">15+</div>
                  <div className="muted text-sm">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">2+</div>
                  <div className="muted text-sm">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-2)] to-violet-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">10+</div>
                  <div className="muted text-sm">Technologies</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
                  <div className="muted text-sm">Dedication</div>
                </div>
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
