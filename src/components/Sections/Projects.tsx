import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { PROJECTS } from '../../data/projects';

// DRY: Projects usa datos centralizados

export const Projects: React.FC = () => (
    <section id="proyectos" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative" aria-labelledby="projects-title">
        <div className="section-particles" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="section-particle" />
            ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
            <SectionTitle
                title="Logros Destacados"
                subtitle="Experiencia en gestión, coordinación y liderazgo"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {PROJECTS.map((project, index) => (
                    <article key={index} className="project-card glass-card tech-hover-effect flex flex-col h-full">
                        <div className="project-image bg-gradient-to-br from-teal-500 to-cyan-600 text-center p-6 flex justify-center items-center h-48">
                            <project.icon className="text-6xl text-white" aria-hidden="true" />
                        </div>

                        <div className="project-content p-6 flex-grow flex flex-col">
                            <h3 className="project-title text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                                {project.title}
                            </h3>
                            <p className="project-description text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="project-tech flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tag, tIndex) => (
                                    <span key={tIndex} className="tech-tag px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium transition-all duration-300 hover:bg-teal-500 hover:text-white hover:scale-110">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
