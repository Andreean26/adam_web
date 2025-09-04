import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    id: 1,
    title: 'Quantum E-Commerce Hub',
    category: 'Web Development',
    description: 'A full-featured e-commerce platform built with quantum-speed Next.js and cosmic payment integration.',
    image: '/placeholder-project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 2,
    title: 'Stellar Task Coordinator',
    category: 'Mobile Development',
    description: 'A cross-platform task management application with real-time galactic synchronization.',
    image: '/placeholder-project-2.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    link: '#'
  },
  {
    id: 3,
    title: 'Cosmic Portfolio Matrix',
    category: 'UI/UX Design',
    description: 'A creative portfolio website for a digital agency with smooth space-time animations.',
    image: '/placeholder-project-3.jpg',
    technologies: ['React', 'Framer Motion', 'GSAP', 'Sass'],
    link: '#'
  },
  {
    id: 4,
    title: 'Nebula Analytics Station',
    category: 'Web Development',
    description: 'A comprehensive analytics dashboard with real-time dimensional data visualization.',
    image: '/placeholder-project-4.jpg',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 5,
    title: 'Intergalactic Food Delivery',
    category: 'Mobile Development',
    description: 'A food delivery application with quantum GPS tracking and cosmic payment integration.',
    image: '/placeholder-project-5.jpg',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'PayPal'],
    link: '#'
  },
  {
    id: 6,
    title: 'Universal Learning Network',
    category: 'Web Development',
    description: 'An online learning platform with holographic video streaming and progress tracking.',
    image: '/placeholder-project-6.jpg',
    technologies: ['Django', 'React', 'AWS', 'PostgreSQL'],
    link: '#'
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-16 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-32 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float-delayed"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade" className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono mb-4 tracking-widest uppercase">
            &lt; Portfolio /&gt;
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent missions that showcase my skills 
            across the digital universe.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 relative"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-purple-400 rounded-full animate-float"></div>
                
                <span className="text-white text-6xl group-hover:scale-110 transition-transform duration-300">🚀</span>
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-cyan-400 font-medium font-mono">
                      {project.category}
                    </span>
                    <a 
                      href={project.link} 
                      className="text-gray-400 hover:text-cyan-400 transition-colors group-hover:text-cyan-400"
                    >
                      <LaunchIcon className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-slate-700/50 border border-cyan-400/20 text-cyan-400 text-xs rounded-full backdrop-blur-sm hover:border-cyan-400/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>

        {/* View More Button */}
        <ScrollReveal animation="scale" delay={400} className="text-center mt-12">
          <button className="relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg overflow-hidden group">
            <span className="relative z-10">Explore All Missions</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
