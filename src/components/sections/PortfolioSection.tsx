import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    image: '/placeholder-project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Mobile Development',
    description: 'A cross-platform task management application with real-time synchronization.',
    image: '/placeholder-project-2.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    link: '#'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'UI/UX Design',
    description: 'A creative portfolio website for a digital agency with smooth animations.',
    image: '/placeholder-project-3.jpg',
    technologies: ['React', 'Framer Motion', 'GSAP', 'Sass'],
    link: '#'
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    category: 'Web Development',
    description: 'A comprehensive analytics dashboard with real-time data visualization.',
    image: '/placeholder-project-4.jpg',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 5,
    title: 'Food Delivery App',
    category: 'Mobile Development',
    description: 'A food delivery application with GPS tracking and payment integration.',
    image: '/placeholder-project-5.jpg',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'PayPal'],
    link: '#'
  },
  {
    id: 6,
    title: 'Learning Management System',
    category: 'Web Development',
    description: 'An online learning platform with video streaming and progress tracking.',
    image: '/placeholder-project-6.jpg',
    technologies: ['Django', 'React', 'AWS', 'PostgreSQL'],
    link: '#'
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills 
            and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-6xl">🎨</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">
                    {project.category}
                  </span>
                  <a 
                    href={project.link} 
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
