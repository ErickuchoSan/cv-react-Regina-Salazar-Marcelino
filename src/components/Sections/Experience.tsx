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
        role: "Auxiliar en Marketing Digital",
        company: "Naré",
        period: "Mayo 2023 - Actualidad",
        duration: "Actualidad",
        description: "Ejecución de estrategias de marketing digital, gestión de redes sociales y análisis de métricas para optimizar el alcance y engagement de marca.",
        functions: [
            "Desarrollo e implementación de estrategias de marketing digital alineadas con objetivos de marca, incrementando el engagement promedio en 30%",
            "Creación, planeación y publicación de 20+ piezas de contenido mensual para redes sociales (Instagram, Facebook, TikTok) utilizando Canva, Photoshop e Illustrator",
            "Gestión de calendarios editoriales mensuales con optimización de horarios de publicación basada en análisis de audiencia, mejorando el alcance orgánico en 25%",
            "Análisis de métricas de redes sociales (reach, engagement, conversiones) y elaboración de reportes semanales para toma de decisiones estratégicas",
            "Research y evaluación de influencers potenciales mediante análisis de engagement, demografía de audiencia, alcance y autenticidad de seguidores",
            "Seguimiento de KPIs clave (tasa de engagement, crecimiento de seguidores, CTR) y ajuste de estrategias basado en resultados"
        ],
        achievements: [
            "Incremento del 30% en engagement mediante contenido estratégico",
            "Mejora del 25% en alcance orgánico con optimización de horarios",
            "Producción de 240+ piezas de contenido de alta calidad anualmente",
            "Gestión exitosa de múltiples plataformas sociales simultáneamente"
        ],
        icon: FaBullhorn
    },
    {
        role: "Coordinadora Administrativa de Áreas Infantiles",
        company: "Sonora Kids Group",
        period: "Ene 2022 - Feb 2026",
        duration: "4 años",
        description: "Coordinación integral de ludotecas y áreas infantiles en múltiples sucursales con enfoque en eficiencia operativa y desarrollo de talento.",
        functions: [
            "Supervisión operativa de 23 sucursales (12 presenciales + 11 remotas) con un equipo de 50 colaboradores, generando reportes semanales de KPIs que incrementaron la eficiencia operativa en 20%",
            "Liderazgo de proceso completo de reclutamiento (100+ candidatos anuales), reduciendo el tiempo de contratación de 45 a 30 días mediante optimización del proceso de selección y onboarding",
            "Diseño e impartición de 15+ capacitaciones anuales alcanzando a 200+ colaboradores, logrando una mejora del 25% en retención de personal",
            "Gestión estratégica de compras y negociación con proveedores que generó una reducción del 15% en costos operativos mediante análisis comparativo y mejores condiciones comerciales",
            "Administración integral de nómina y control de personal (40-50 colaboradores), incluyendo altas, bajas, seguimiento de asistencias y evaluaciones de desempeño",
            "Implementación de sistema de reportes mensuales en Excel con dashboards automatizados que redujeron el tiempo de análisis en 40% y mejoraron la toma de decisiones gerenciales"
        ],
        achievements: [
            "Reducción del 15% en costos operativos mediante optimización de procesos",
            "Mejora del 25% en retención de personal tras programa de capacitación",
            "Reducción del 40% en tiempo de análisis con dashboards automatizados",
            "Gestión exitosa de 23 sucursales y 50 colaboradores simultáneamente"
        ],
        icon: FaUsers
    },
    {
        role: "Cuidadora Infantil",
        company: "Sonora Grill Group",
        period: "Ene 2018 - Ene 2022",
        duration: "4 años",
        description: "Atención y cuidado profesional de niños en área de ludoteca con enfoque en seguridad, desarrollo infantil y excelencia en servicio a clientes.",
        functions: [
            "Atención y cuidado de 20-30 niños diarios (edades 1-10 años) en área de ludoteca, garantizando un ambiente seguro, educativo y recreativo",
            "Atención directa y personalizada a padres de familia, logrando un índice de satisfacción del 95% mediante comunicación efectiva y resolución proactiva de inquietudes",
            "Resolución de conflictos y manejo de situaciones complejas con padres y niños, aplicando técnicas de mediación y empatía que mantuvieron un ambiente positivo",
            "Aplicación estricta de protocolos de seguridad, higiene y primeros auxilios según certificación profesional, manteniendo 4 años consecutivos sin incidentes",
            "Diseño e implementación de actividades lúdicas y educativas adaptadas a diferentes grupos de edad, promoviendo el desarrollo psicomotriz y social"
        ],
        achievements: [
            "4 años consecutivos sin incidentes de seguridad (récord de la sucursal)",
            "95% de satisfacción de padres de familia según encuestas internas",
            "Atención exitosa de 25,000+ visitas de niños durante el período",
            "Reconocimiento interno por excelencia en servicio al cliente"
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

                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div key={index} className="experience-card glass-card tech-hover-effect p-8">
                            <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
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
