import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaBuilding, FaCalendarAlt, FaChild, FaUsers, FaBullhorn } from 'react-icons/fa';

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    duration: string;
    description: string;
    functions: string[];
    achievements?: string[];
    icon: React.ComponentType<{ className?: string }>;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        role: "Coordinadora Administrativa de Áreas Infantiles",
        company: "Sonora Kids Group",
        period: "Ene 2022 - Feb 2026",
        duration: "4 años",
        description: "Coordinación integral de ludotecas y áreas infantiles en múltiples sucursales.",
        functions: [
            "Supervisión operativa de 12 sucursales presenciales y 11 a distancia, generando reportes de desempeño y control de gestión",
            "Reclutamiento y selección de personal, incluyendo entrevistas, evaluación de candidatos y proceso de onboarding",
            "Diseño e impartición de capacitaciones al personal, asegurando el desarrollo continuo del equipo",
            "Gestión de compras, negociación con proveedores y optimización de recursos operativos",
            "Administración de personal a cargo (40-50 colaboradores), incluyendo altas, bajas y seguimiento",
            "Creación de reportes mensuales en Excel con seguimiento de métricas y KPIs de desempeño"
        ],
        achievements: [],
        icon: FaUsers
    },
    {
        role: "Cuidadora Infantil",
        company: "Sonora Grill Group",
        period: "Ene 2018 - Ene 2022",
        duration: "4 años",
        description: "Atención y cuidado integral de niños en área de ludoteca.",
        functions: [
            "Atención y cuidado de niños de 1 a 10 años en área de ludoteca",
            "Atención directa a padres de familia, resolución de conflictos y manejo de situaciones complejas",
            "Aplicación de protocolos de seguridad y primeros auxilios"
        ],
        achievements: [],
        icon: FaChild
    },
    {
        role: "Auxiliar en Marketing Digital",
        company: "Naré",
        period: "Mayo 2023 - Actualidad",
        duration: "Actualidad",
        description: "Ejecución de estrategias de marketing digital y creación de contenido.",
        functions: [
            "Ejecución de estrategias de marketing",
            "Creación, planeación y desarrollo de contenido para redes sociales",
            "Organización de materiales, calendarios de contenido y reportes de desempeño, crecimiento e interacción",
            "Uso de herramientas (photoshop, canva, illustrator, etc.)",
            "Recopilación de datos de influencer (engagement, demografía, alcance y autenticidad)",
            "Uso de KPIs"
        ],
        icon: FaBullhorn
    }
];

export const Experience: React.FC = () => {
    return (
        <section id="experiencia" className="enhanced-section section-tech-bg py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Experiencia Profesional"
                    subtitle="+6 años en gestión administrativa y cuidado infantil"
                />

                <div className="space-y-8">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div key={index} className="experience-card glass-card tech-hover-effect p-8">
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <exp.icon className="text-white text-2xl" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center text-teal-600 font-medium mt-1">
                                                <FaBuilding className="mr-2" />
                                                {exp.company}
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2 md:mt-0">
                                            <span className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                                <FaCalendarAlt className="mr-2" />
                                                {exp.period} • {exp.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Responsabilidades:</h4>
                                        <ul className="grid md:grid-cols-2 gap-2">
                                            {exp.functions.map((func, i) => (
                                                <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                                    {func}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {exp.achievements && (
                                        <div>
                                            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Logros:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <span key={i} className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm border border-teal-200 dark:border-teal-700">
                                                        ✓ {achievement}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
