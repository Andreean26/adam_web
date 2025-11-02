"use client";

import React, { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import projects, { Project } from '@/assets/data/projects';

export default function PortfolioSection() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  useEffect(() => {
    if (open || lightboxOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open, lightboxOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          setOpen(false);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  const onOpen = (project: Project) => {
    setActiveProject(project);
    setActiveImage(0);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setTimeout(() => setActiveProject(null), 200);
  };

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setLightboxImage(''), 200);
  };

  return (
  <section id="portfolio" className="section-modern relative overflow-hidden">
  {/* Subtle grid pattern */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade" className="text-center mb-16">
          <div className="heading-eyebrow mb-4">
            &lt; Portfolio /&gt;
          </div>
          <h2 className="text-3xl md:text-4xl heading-title text-[var(--foreground)] mb-4">
            My <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-xl muted max-w-3xl mx-auto">Selected projects that highlight my approach to design, engineering, and delivery.</p>
        </ScrollReveal>

        <ScrollReveal animation="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpen(project)}
              className="group surface-card surface-hover rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 relative cursor-pointer"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-[var(--card)] to-transparent relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--accent)] font-medium font-mono">
                      {project.category}
                    </span>
                    {/* <a
                      href={project.link}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors group-hover:text-[var(--accent)]"
                    >
                      <LaunchIcon className="w-5 h-5" />
                    </a> */}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-[var(--accent)] text-xs rounded-full hover:border-[color-mix(in_oklab,var(--accent),var(--border)_70%)] transition-colors"
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
          <button className="relative px-8 py-3 rounded-lg overflow-hidden group surface-card surface-hover font-semibold">
            <span className="relative z-10 text-[var(--foreground)]">View All Projects</span>
            <div className="absolute inset-0 pointer-events-none"></div>
          </button>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {open && activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-modal-backdrop-in" />
          <div
            className="relative z-10 w-full max-w-6xl max-h-[90vh] bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl animate-modal-content-in overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="sticky top-3 right-3 ml-auto mr-3 w-9 h-9 grid place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] bg-[color-mix(in_oklab,var(--surface),transparent_10%)] backdrop-blur-md z-20"
            >
              <CloseIcon fontSize="small" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0 lg:gap-6">
              {/* Left: gallery */}
              <div className="p-4 md:p-6">
                <div 
                  className="aspect-[3/2] w-full rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] flex items-center justify-center cursor-zoom-in group relative"
                  onClick={() => openLightbox((activeProject.images && activeProject.images[activeImage]) || activeProject.image)}
                >
                  <img
                    src={(activeProject.images && activeProject.images[activeImage]) || activeProject.image}
                    alt={`${activeProject.title} preview ${activeImage + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Zoom indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                      🔍 Click to zoom
                    </div>
                  </div>
                </div>
                {/* Thumbnails */}
                <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                  {(activeProject.images || []).map((img, idx) => (
                    <button
                      key={idx}
                      aria-label={`Show image ${idx + 1}`}
                      onClick={() => setActiveImage(idx)}
                      className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border ${
                        activeImage === idx ? 'border-[var(--accent)]' : 'border-[var(--border)]'
                      }`}
                    >
                      <img src={img} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: details */}
              <div className="p-4 md:p-6 border-t lg:border-t-0 lg:border-l border-[var(--border)] bg-[var(--card)]">
                <div className="text-sm text-[var(--accent)] font-mono">{activeProject.category}</div>
                <h3 className="text-2xl font-bold mt-1 mb-2 text-[var(--foreground)]">{activeProject.title}</h3>
                {(activeProject.client || activeProject.role || activeProject.period) && (
                  <div className="mb-3 text-sm text-[var(--muted)] flex flex-wrap gap-x-4 gap-y-1">
                    {activeProject.client && <span><span className="text-[var(--foreground)]">Client:</span> {activeProject.client}</span>}
                    {activeProject.role && <span><span className="text-[var(--foreground)]">Role:</span> {activeProject.role}</span>}
                    {activeProject.period && <span><span className="text-[var(--foreground)]">Period:</span> {activeProject.period}</span>}
                  </div>
                )}

                <p className="muted mb-4">{activeProject.description}</p>

                {activeProject.highlights && activeProject.highlights.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-[var(--foreground)] mb-2">Highlights</div>
                    <ul className="list-disc list-inside text-[var(--muted)] space-y-1">
                      {activeProject.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-4">
                  <div className="text-sm font-semibold text-[var(--foreground)] mb-2">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 rounded-full text-xs bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <LaunchIcon className="w-5 h-5" />
                    </a>
                  )}
                  {activeProject.repository && (
                    <a
                      href={activeProject.repository}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository <LaunchIcon className="w-5 h-5" />
                    </a>
                  )}
                  {!activeProject.live && !activeProject.repository && (
                    <a
                      href={activeProject.link}
                      className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit project <LaunchIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for full-screen image preview */}
      {lightboxOpen && lightboxImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-modal-backdrop-in"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            aria-label="Close lightbox"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 transition-all duration-200 z-10"
          >
            <CloseIcon fontSize="medium" />
          </button>

          {/* Image container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] animate-modal-content-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Full screen preview"
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image info overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              Press ESC or click outside to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
