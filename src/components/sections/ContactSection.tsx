import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function ContactSection() {
  return (
    <section id="contact" className="section-modern relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade" className="text-center mb-16">
          <div className="heading-eyebrow mb-4">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl heading-title text-[var(--foreground)] mb-6">
            Let's <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Work Together</span>
          </h2>
          <p className="text-xl muted max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below.
          </p>
        </ScrollReveal>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <ScrollReveal animation="slideUp" delay={100}>
            <a 
              href="https://mail.google.com/mail/?view=cm&to=fawazzakyadam26@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group surface-card surface-hover rounded-xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:scale-105 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <EmailIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Email</h3>
                <p className="muted text-sm mb-3">Drop me a line</p>
                <p className="text-[var(--accent)] font-semibold text-sm break-all">
                  fawazzakyadam26@gmail.com
                </p>
              </div>
            </a>
          </ScrollReveal>

          {/* Phone/WhatsApp Card */}
          <ScrollReveal animation="slideUp" delay={200}>
            <a 
              href="https://wa.me/6282132082482"
              target="_blank"
              rel="noopener noreferrer"
              className="group surface-card surface-hover rounded-xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:scale-105 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">WhatsApp</h3>
                <p className="muted text-sm mb-3">Let's have a chat</p>
                <p className="text-[var(--accent)] font-semibold">
                  +62 821-3208-2482
                </p>
              </div>
            </a>
          </ScrollReveal>

          {/* Location Card */}
          <ScrollReveal animation="slideUp" delay={300}>
            <div className="group surface-card surface-hover rounded-xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LocationOnIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Location</h3>
                <p className="muted text-sm mb-3">Based in</p>
                <p className="text-[var(--accent)] font-semibold">
                  Surabaya, Indonesia
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Social Links & Availability */}
        <ScrollReveal animation="fade" delay={400}>
          <div className="surface-card rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
            
            <div className="relative z-10 text-center">
              {/* Availability Status */}
              <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-[var(--card)] border border-[var(--border)] rounded-full">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-[var(--foreground)] font-semibold">Open to work — available for freelance and project-based roles.</span>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Connect With Me</h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/Andreean26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[var(--card)] border border-[var(--border)] rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent transition-all duration-300 hover:scale-110 group"
                  >
                    <GitHubIcon className="w-6 h-6 text-[var(--foreground)] group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adam-andreean-2739b3222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[var(--card)] border border-[var(--border)] rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:border-transparent transition-all duration-300 hover:scale-110 group"
                  >
                    <LinkedInIcon className="w-6 h-6 text-[var(--foreground)] group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/andreeanadam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[var(--card)] border border-[var(--border)] rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 hover:scale-110 group"
                  >
                    <InstagramIcon className="w-6 h-6 text-[var(--foreground)] group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Response Time Info */}
              <p className="muted text-lg max-w-2xl mx-auto">
                I typically respond within <span className="text-[var(--accent)] font-semibold">24 hours</span>. 
                For urgent matters, WhatsApp is the fastest way to reach me.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
