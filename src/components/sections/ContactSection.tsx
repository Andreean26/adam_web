import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactForm from '@/components/forms/ContactForm';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactSection() {
  return (
  <section id="contact" className="section-modern relative overflow-hidden">
  {/* Subtle grid pattern */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade" className="text-center mb-16">
          <div className="heading-eyebrow mb-4">Contact</div>
          <h2 className="text-3xl md:text-4xl heading-title text-[var(--foreground)] mb-4">
            Let's <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl muted max-w-3xl mx-auto">Have a project in mind or want to collaborate? Send a message—I'll get back to you soon.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal animation="slideLeft">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-8">Get in touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <EmailIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="muted text-sm">Email</p>
                  <p className="text-[var(--foreground)] font-semibold">fawazzakyadam26@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="muted text-sm">Phone</p>
                  <p className="text-[var(--foreground)] font-semibold">+62 821-3208-2482</p>
                  <a href="https://wa.me/6282132082482" target="_blank">
                    Contact me via WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <LocationOnIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="muted text-sm">Location</p>
                  <p className="text-[var(--foreground)] font-semibold">Surabaya, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-[var(--card)] backdrop-blur-sm border border-[var(--border)] rounded-lg relative overflow-hidden">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
              
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  Response Time
                </h4>
                <p className="muted">
                  I usually respond within 24 hours. For urgent matters, please call or reach me on WhatsApp.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="slideRight" delay={200} className="surface-card surface-hover rounded-xl p-8 relative overflow-hidden">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
            
            <div className="relative z-10">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
