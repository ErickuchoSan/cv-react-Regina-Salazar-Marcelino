import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import {
    FaMicrosoft, FaRobot, FaUsers, FaCalendarCheck,
    FaHandshake, FaLightbulb, FaComments, FaTasks, FaChartBar,
    FaChild, FaFirstAid, FaFileExcel, FaFileWord, FaFilePowerpoint, FaHeart,
    FaBook, FaGamepad, FaBriefcase
} from 'react-icons/fa';
import { SiCanva, SiMicrosoftoffice } from 'react-icons/si';

interface TechCategoryProps {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    items: { name: string; icon: React.ComponentType<{ className?: string }>; color: string }[];
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, icon: Icon, items }) => (
    <div className="glass-card tech-hover-effect p-6">
        <div className="flex items-center mb-4">
            <Icon className="text-teal-600 text-2xl mr-3" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
                <span key={index} className="tech-tag flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm">
                    <item.icon className={`mr-2 ${item.color}`} />
                    <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                </span>
            ))}
        </div>
    </div>
);

export const Skills: React.FC = () => {
    return (
        <section id="habilidades" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Habilidades"
                    subtitle="Competencias técnicas y personales"
                />

                {/* Main Skills with Progress Bars */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Herramientas Digitales</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {[
                            { icon: FaFileExcel, color: 'text-green-600', name: 'Excel', progress: 70, level: 'Intermedio' },
                            { icon: SiCanva, color: 'text-cyan-500', name: 'Canva', progress: 90, level: 'Avanzado' },
                            { icon: FaRobot, color: 'text-purple-600', name: 'Herramientas IA', progress: 85, level: 'Avanzado' },
                            { icon: FaBriefcase, color: 'text-blue-600', name: 'Microsoft Office', progress: 90, level: 'Avanzado' },
                        ].map((skill, index) => (
                            <div key={index} className="skill-card glass-card tech-hover-effect p-6 text-center">
                                <div className="skill-icon mb-4 inline-block">
                                    <skill.icon className={`text-4xl ${skill.color}`} />
                                </div>
                                <h4 className="skill-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{skill.name}</h4>
                                <div className="skill-bar w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                                    <div
                                        className="skill-progress bg-gradient-to-r from-teal-500 to-cyan-600 h-3 rounded-full relative"
                                        style={{ width: `${skill.progress}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm text-teal-600 font-semibold">{skill.level}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16">
                    <TechCategory
                        title="Herramientas Digitales"
                        icon={FaBriefcase}
                        items={[
                            { name: 'Excel Intermedio', icon: FaFileExcel, color: 'text-green-600' },
                            { name: 'PowerPoint', icon: FaFilePowerpoint, color: 'text-orange-600' },
                            { name: 'Word', icon: FaFileWord, color: 'text-blue-600' },
                            { name: 'Canva', icon: SiCanva, color: 'text-cyan-500' },
                            { name: 'Plataformas IA', icon: FaRobot, color: 'text-purple-600' },
                        ]}
                    />
                    <TechCategory
                        title="Gestión y Operaciones"
                        icon={FaTasks}
                        items={[
                            { name: 'Gestión de Recursos', icon: FaTasks, color: 'text-teal-600' },
                            { name: 'Reportes y Métricas', icon: FaChartBar, color: 'text-indigo-600' },
                            { name: 'Coordinación de Eventos', icon: FaCalendarCheck, color: 'text-pink-600' },
                            { name: 'Gestión de Proveedores', icon: FaHandshake, color: 'text-amber-600' },
                        ]}
                    />
                    <TechCategory
                        title="Liderazgo de Equipos"
                        icon={FaUsers}
                        items={[
                            { name: 'Supervisión de Personal', icon: FaUsers, color: 'text-teal-600' },
                            { name: 'Capacitación', icon: FaLightbulb, color: 'text-yellow-500' },
                            { name: 'Reclutamiento', icon: FaHandshake, color: 'text-green-600' },
                            { name: 'Resolución de Conflictos', icon: FaComments, color: 'text-red-500' },
                        ]}
                    />
                    <TechCategory
                        title="Especialización Infantil"
                        icon={FaChild}
                        items={[
                            { name: 'Técnico Puericultista', icon: FaChild, color: 'text-pink-500' },
                            { name: 'Primeros Auxilios', icon: FaFirstAid, color: 'text-red-600' },
                            { name: 'Atención a Padres', icon: FaUsers, color: 'text-teal-600' },
                            { name: 'Actividades Lúdicas', icon: FaLightbulb, color: 'text-yellow-500' },
                        ]}
                    />
                </div>

                {/* Soft Skills & Competencies */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Competencias Clave</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { icon: FaBook, title: 'Autodidacta', desc: 'Aprendizaje continuo y desarrollo de habilidades por iniciativa propia' },
                            { icon: FaGamepad, title: 'Lúdica', desc: 'Capacidad para crear experiencias recreativas y educativas' },
                            { icon: FaComments, title: 'Comunicación Efectiva', desc: 'Claridad y empatía en la transmisión de ideas' },
                            { icon: FaLightbulb, title: 'Creatividad y Estrategia', desc: 'Enfoque innovador para la resolución de problemas' },
                            { icon: FaUsers, title: 'Liderazgo Colaborativo', desc: 'Guía de equipos fomentando la participación' },
                            { icon: FaHandshake, title: 'Toma de Decisiones', desc: 'Análisis informado para decidir mejor' },
                            { icon: FaChartBar, title: 'Pensamiento Crítico', desc: 'Análisis profundo de situaciones y datos' },
                            { icon: FaTasks, title: 'Evaluación y Seguimiento', desc: 'Control constante de procesos y resultados' },
                            { icon: FaCalendarCheck, title: 'Responsabilidad', desc: 'Compromiso total con objetivos laborales' },
                            { icon: FaLightbulb, title: 'Adaptabilidad', desc: 'Apertura al cambio y aprendizaje continuo' },
                            { icon: FaHeart, title: 'Empatía', desc: 'Conexión genuina con las necesidades del equipo' },
                        ].map((skill, index) => (
                            <div key={index} className="soft-skill-card glass-card tech-hover-effect p-6 text-center">
                                <skill.icon className="text-3xl text-teal-600 mb-4 mx-auto" />
                                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 text-lg">{skill.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
