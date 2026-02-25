import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaLanguage } from 'react-icons/fa';

export const Languages: React.FC = () => {
    const languages = [
        {
            name: 'Español',
            level: 'Nativo',
            details: ['Lengua materna', 'Comunicación profesional escrita y oral']
        }
    ];

    return (
        <section id="idiomas" className="enhanced-section section-tech-bg py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Idiomas"
                    subtitle="Competencias Lingüísticas"
                />

                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        {languages.map((lang, index) => (
                            <div key={index} className="glass-card tech-hover-effect p-6">
                                <div className="flex items-center mb-4">
                                    <FaLanguage className="text-teal-600 text-2xl mr-3" />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{lang.name}</h3>
                                        <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                                            {lang.level}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-1">
                                    {lang.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
