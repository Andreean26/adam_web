import React from 'react';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
  <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Adam Fawazzaky
            </h3>
    <p className="muted mb-4 max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences. 
              Let's collaborate and build something amazing together.
            </p>
            <div className="flex space-x-4">
      <a href="https://github.com/Andreean26" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors group">
                <GitHubIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
      <a href="https://www.linkedin.com/in/adam-andreean-2739b3222" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent-2)] transition-colors group">
                <LinkedInIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
      {/* <a href="https://www.instagram.com/adam_fawazzaky/" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent-3)] transition-colors group">
                <TwitterIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--accent)]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">About</Link></li>
              <li><Link href="#skills" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Skills</Link></li>
              {/* <li><Link href="#services" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Services</Link></li> */}
              <li><Link href="#portfolio" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--accent-2)]">Get In Touch</h4>
            <ul className="space-y-2 text-[var(--muted)]">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=fawazzakyadam26@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                  >
                  fawazzakyadam26@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[var(--accent-2)] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <a href="https://wa.me/6282132082482" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-2)] transition-colors">
                  +62 821-3208-2482
                </a>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[var(--accent-3)] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <span>Surabaya, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] mt-8 pt-8 text-center">
          <p className="text-[var(--muted)]">
            &copy; 2025 Adam Fawazzaky Fardy Andreean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
