"use client";

import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'Laravel', level: 80 },
      { name: 'GO', level: 80 },
      { name: 'CodeIgniter', level: 85 },
      { name: 'RESTful API', level: 90 },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 95 },
      { name: 'Flutter', level: 75 },
      { name: 'Kotlin', level: 70 },
      { name: 'Progressive Web Apps', level: 80 },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MySQL', level: 95 },
      { name: 'MongoDB', level: 70 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'Firebase', level: 80 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 70 },
    ],
  },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-modern relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade" className="text-center mb-16">
          <div className="heading-eyebrow mb-4">Skills & Expertise</div>
          <h2 className="text-3xl md:text-4xl heading-title text-[var(--foreground)] mb-4">
            Technical <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Proficiency</span>
          </h2>
          <p className="text-xl muted max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various technologies.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal 
              key={categoryIndex} 
              animation="slideUp" 
              delay={categoryIndex * 100}
              className="surface-card rounded-xl p-6 md:p-8 relative overflow-hidden group"
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 flex items-center">
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full mr-3"></span>
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-[var(--foreground)]">
                          {skill.name}
                        </span>
                        <span className="text-sm text-[var(--accent)]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[var(--card)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional certifications or achievements */}
        <ScrollReveal animation="fade" delay={400} className="mt-12 text-center">
          <div className="surface-card rounded-xl p-8 inline-block">
            <p className="text-[var(--muted)] mb-4">Constantly learning and expanding my skill set</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-full text-sm text-[var(--accent)]">
                Problem Solving
              </span>
              <span className="px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-full text-sm text-[var(--accent-2)]">
                Team Collaboration
              </span>
              <span className="px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-full text-sm text-[var(--accent-3)]">
                Agile Methodology
              </span>
              <span className="px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-full text-sm text-cyan-400">
                Clean Code
              </span>
                <span className="px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-full text-sm text-green-400">
                Critical Thinking
                </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
