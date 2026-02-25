import React from 'react';
import { STATS, EDUCATION, INFO_CARDS, FaGraduationCap } from '../../data/about';

export const About: React.FC = () => (
    <section id="sobre-mi" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300" aria-labelledby="about-title">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <header className="text-center mb-16">
                <h2 id="about-title" className="section-title-humanist">Sobre Mí</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 font-light text-lg">Coordinadora de Recursos Humanos</p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                <div>
                    <h3 className="text-2xl font-bold mb-6 font-serif text-gray-800 dark:text-gray-100">
                        Especialista en Gestión de Áreas Infantiles
                    </h3>
                    <p className="text-lg mb-6 leading-relaxed font-light text-gray-600 dark:text-gray-300">
                        <strong className="text-gray-800 dark:text-gray-100">Coordinadora de Recursos Humanos</strong> con 4+ años de experiencia liderando equipos de hasta 50 personas
                        y supervisando 23 sucursales simultáneamente. Especialista en reclutamiento estratégico, desarrollo de talento
                        y optimización de procesos operativos que han logrado <strong className="text-teal-600 dark:text-teal-400">reducir costos en 15%</strong> y
                        mejorar la <strong className="text-teal-600 dark:text-teal-400">retención de personal en 25%</strong>.
                    </p>
                    <p className="text-lg mb-8 leading-relaxed font-light text-gray-600 dark:text-gray-300">
                        Experta en gestión de áreas infantiles con formación técnica como Puericultista y certificación en Primeros Auxilios.
                        Manejo avanzado de herramientas digitales (Excel, IA, Canva) para la gestión eficiente de RRHH y marketing digital.
                        Actualmente cursando Licenciatura en Gestión y Desarrollo Empresarial, combinando experiencia práctica con formación
                        académica continua.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {STATS.map((stat, index) => (
                            <div key={index} className="card-soft p-4 text-center">
                                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">{stat.value}</div>
                                <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6">
                    {/* Educación */}
                    <article className="card-soft p-6 flex items-start">
                        <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-full mr-4 text-teal-600 dark:text-teal-400">
                            <FaGraduationCap className="text-xl" aria-hidden="true" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">Educación</h4>
                            <div className="space-y-3">
                                {EDUCATION.map((edu, index) => (
                                    <div key={index} className={index > 0 ? 'pt-2 border-t border-gray-100 dark:border-gray-700' : ''}>
                                        <p className="font-semibold text-gray-700 dark:text-gray-200">{edu.degree}</p>
                                        <p className={edu.status === 'En curso' ? 'text-teal-600 dark:text-teal-400 text-sm' : 'text-gray-500 dark:text-gray-400 text-sm'}>
                                            {edu.status === 'En curso' ? `En curso • ${edu.school}` : `${edu.school} • ${edu.status}`}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* Info Cards dinámicas */}
                    {INFO_CARDS.map((card, index) => (
                        <article key={index} className="card-soft p-6 flex items-start">
                            <div className={`p-3 rounded-full mr-4 ${card.iconBgClass} ${card.iconColorClass}`}>
                                <card.icon className="text-xl" aria-hidden="true" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">{card.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {card.title === 'Disponibilidad' ? (
                                        <>
                                            <strong className="text-gray-800 dark:text-gray-100">Tiempo completo</strong> • Presencial/Híbrido<br />
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{card.subContent}</span>
                                        </>
                                    ) : card.title === 'Voluntariado' ? (
                                        <span className="text-sm">
                                            {card.content}<br />
                                            <span className="text-teal-600 dark:text-teal-400">{card.subContent}</span>
                                        </span>
                                    ) : (
                                        card.content
                                    )}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
