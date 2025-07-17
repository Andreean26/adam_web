import React from 'react';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Building responsive and modern websites using the latest technologies like React, Next.js, and TypeScript.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly']
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications that provide native-like experiences.',
    features: ['React Native', 'Flutter', 'PWA Development']
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces that enhance user experience.',
    features: ['User Research', 'Wireframing', 'Prototyping']
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs.',
    features: ['RESTful APIs', 'Database Design', 'Cloud Integration']
  },
  {
    icon: '🚀',
    title: 'DevOps',
    description: 'Streamlining development workflows and deployment processes.',
    features: ['CI/CD Pipelines', 'Docker', 'AWS/Azure']
  },
  {
    icon: '🔧',
    title: 'Consulting',
    description: 'Providing technical guidance and strategic advice for your projects.',
    features: ['Architecture Planning', 'Code Review', 'Team Training']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer a comprehensive range of services to help bring your 
            digital ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
