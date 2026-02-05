import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaUsers, FaChild, FaCalendarCheck } from 'react-icons/fa';

export const PROJECTS = [
    {
        title: "Coordinación de Ludotecas",
        description: "Supervisión operativa de 23 sucursales (12 presenciales y 11 a distancia). Gestión integral de áreas infantiles con equipos de hasta 50 personas.",
        tech: ["Liderazgo", "Gestión", "Capacitación", "Reportes", "Excel"],
        icon: FaChild
    },
    {
        title: "Gestión de Recursos Humanos",
        description: "Reclutamiento y selección de personal, diseño e impartición de capacitaciones, gestión de proveedores y optimización de recursos.",
        tech: ["Reclutamiento", "Capacitación", "Proveedores", "Organización"],
        icon: FaUsers
    },
    {
        title: "Marketing y Eventos",
        description: "Creación de reportes mensuales de campañas en Canva, seguimiento de métricas en Excel y coordinación logística de eventos corporativos.",
        tech: ["Canva", "Excel", "Marketing", "Eventos", "Métricas"],
        icon: FaCalendarCheck
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Logros Destacados"
                    subtitle="Experiencia en gestión, coordinación y liderazgo"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="project-card glass-card tech-hover-effect flex flex-col h-full">
                            <div className="project-image bg-gradient-to-br from-teal-500 to-cyan-600 text-center p-6 flex justify-center items-center h-48">
                                <project.icon className="text-6xl text-white" />
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
