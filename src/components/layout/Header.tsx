import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Adam
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#home" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="#portfolio" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
