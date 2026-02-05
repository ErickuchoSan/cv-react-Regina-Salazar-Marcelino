import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaBuilding, FaCalendarAlt, FaChild, FaBullhorn, FaUsers, FaChartLine } from 'react-icons/fa';

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
        period: "2022 - Actualidad",
        duration: "3 años",
        description: "Coordinación integral de ludotecas y áreas infantiles en múltiples sucursales, combinando gestión operativa, administrativa y de marketing.",
        functions: [
            "Supervisión operativa de 12 sucursales presenciales y 11 a distancia",
            "Generación de reportes de desempeño, control y manejo",
            "Diseño e impartición de capacitaciones al personal",
            "Gestión de compras, proveedores y optimización de recursos",
            "Reclutamiento y selección de personal",
            "Creación de reportes mensuales de campañas en Canva",
            "Seguimiento de métricas y KPIs en Excel",
            "Apoyo en coordinación logística de eventos corporativos"
        ],
        achievements: [
            "Gestión exitosa de 23 sucursales simultáneas",
            "Liderazgo de equipos de 40-50 personas",
            "Implementación de procesos de capacitación estandarizados"
        ],
        icon: FaUsers
    },
    {
        role: "Cuidadora Infantil",
        company: "Sonora Grill Group",
        period: "2018 - 2022",
        duration: "4 años",
        description: "Atención y cuidado integral de niños en área de ludoteca del restaurante, brindando un ambiente seguro y entretenido.",
        functions: [
            "Cuidado y atención a niños de 1 a 10 años",
            "Atención directa a padres de familia",
            "Resolución de conflictos entre niños",
            "Organización, manejo y limpieza del área de trabajo",
            "Actividades lúdicas y educativas"
        ],
        achievements: [
            "Promoción a coordinadora en la misma empresa",
            "Excelente retroalimentación de padres de familia"
        ],
        icon: FaChild
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
