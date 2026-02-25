import React from 'react';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';
import { EXPERIENCE_DATA } from '../../data/experience';

// DRY: Experience usa datos centralizados

export const Experience: React.FC = () => (
    <section id="experiencia" className="py-20 relative bg-white/50">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h2 className="section-title-humanist">Experiencia Profesional</h2>
                <p className="text-stone-500 mt-2 font-light text-lg">+4 años en gestión administrativa y cuidado infantil</p>
            </div>

            <div className="space-y-6">
                {EXPERIENCE_DATA.map((exp, index) => (
                    <article key={index} className="card-soft p-8 hover:border-teal-200 border-l-4 border-l-teal-500">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="flex-shrink-0 hidden md:block">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 shadow-sm">
                                    <exp.icon className="text-2xl" aria-hidden="true" />
                                </div>
                            </div>

                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-800">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center text-teal-700 font-medium mt-1">
                                            <FaBuilding className="mr-2" aria-hidden="true" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-2 md:mt-0">
                                        <span className="bg-stone-100 text-stone-600 px-4 py-1.5 rounded-full text-sm font-medium flex items-center">
                                            <FaCalendarAlt className="mr-2" aria-hidden="true" />
                                            {exp.period} • {exp.duration}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-bold text-stone-800 mb-3 text-sm uppercase tracking-wide">Responsabilidades Principales</h4>
                                    <ul className="grid md:grid-cols-2 gap-y-2 gap-x-8">
                                        {exp.functions.map((func, i) => (
                                            <li key={i} className="flex items-start text-sm text-stone-600">
                                                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                                                {func}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {exp.achievements && (
                                    <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-100">
                                        <h4 className="font-bold text-teal-800 mb-3 text-sm flex items-center">
                                            <span className="mr-2" aria-hidden="true">🏆</span> Logros Destacados
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <span key={i} className="bg-white text-teal-700 px-3 py-1 rounded-full text-sm border border-teal-100 shadow-sm">
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
