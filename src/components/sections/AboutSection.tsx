import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a developer passionate about creating innovative solutions 
            and beautiful user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I've had the 
              privilege of working with startups and established companies to 
              bring their digital visions to life. My expertise spans across 
              front-end and back-end technologies.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in clean code, user-centered design, and continuous 
              learning. When I'm not coding, you can find me exploring new 
              technologies, contributing to open-source projects, or sharing 
              knowledge with the developer community.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">React & Next.js</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Node.js</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-gray-700">TypeScript</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Python</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
