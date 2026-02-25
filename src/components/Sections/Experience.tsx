import React from 'react';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';
import { EXPERIENCE_DATA } from '../../data/experience';

export const Experience: React.FC = () => (
    <section id="experiencia" className="py-20 relative transition-colors duration-300 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="section-title-humanist">Experiencia Profesional</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 font-light text-lg">+4 años en gestión administrativa y cuidado infantil</p>
            </div>

            <div className="space-y-6">
                {EXPERIENCE_DATA.map((exp, index) => (
                    <article key={index} className="card-soft p-6 md:p-8 border-l-4 border-l-teal-500 hover:border-teal-300 dark:hover:border-teal-600">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="flex-shrink-0 hidden md:block">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                                    <exp.icon className="text-2xl" aria-hidden="true" />
                                </div>
                            </div>

                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center font-medium mt-1 text-teal-700 dark:text-teal-400">
                                            <FaBuilding className="mr-2" aria-hidden="true" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-2 md:mt-0">
                                        <span className="px-4 py-1.5 rounded-full text-sm font-medium flex items-center bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                                            <FaCalendarAlt className="mr-2" aria-hidden="true" />
                                            {exp.period} • {exp.duration}
                                        </span>
                                    </div>
                                </div>

                                <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                                    {exp.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-bold mb-3 text-sm uppercase tracking-wide text-gray-800 dark:text-gray-200">Responsabilidades Principales</h4>
                                    <ul className="grid md:grid-cols-2 gap-y-2 gap-x-8">
                                        {exp.functions.map((func, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                                                {func}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {exp.achievements && (
                                    <div className="p-4 rounded-xl border bg-teal-50/50 border-teal-100 dark:bg-teal-900/20 dark:border-teal-800">
                                        <h4 className="font-bold mb-3 text-sm flex items-center text-teal-800 dark:text-teal-300">
                                            <span className="mr-2" aria-hidden="true">🏆</span> Logros Destacados
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full text-sm border shadow-sm bg-white text-teal-700 border-teal-100 dark:bg-gray-800 dark:text-teal-300 dark:border-teal-700">
                                                    {achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
