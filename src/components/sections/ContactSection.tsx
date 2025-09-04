import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-16 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float-delayed"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade" className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono mb-4 tracking-widest uppercase">
            &lt; Contact.quantum /&gt;
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Initiate <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Contact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to launch your project? Let's establish a connection and 
            transform your ideas into digital reality.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal animation="slideLeft">
            <h3 className="text-2xl font-bold text-white mb-8">
              <span className="text-cyan-400">&gt;</span> Establish Connection
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <EmailIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Quantum Mail</p>
                  <p className="text-white font-semibold">fawazzakyadam26@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Stellar Communication</p>
                  <p className="text-white font-semibold">+62 821-3208-2482</p>
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
                  <p className="text-gray-400 text-sm">Cosmic Coordinates</p>
                  <p className="text-white font-semibold">Surabaya, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg relative overflow-hidden">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
              
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  Quantum Response Protocol
                </h4>
                <p className="text-gray-300">
                  I typically respond within 24 hours via quantum transmission. 
                  For urgent galactic matters, initiate direct stellar communication.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="slideRight" delay={200} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 relative overflow-hidden">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
            
            <div className="relative z-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Quantum Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
                    placeholder="john@universe.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Mission Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
                    placeholder="Cosmic Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Transmission Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors resize-none text-white placeholder-gray-400"
                    placeholder="Tell me about your galactic project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold overflow-hidden group"
                >
                  <span className="relative z-10">Send Transmission</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
