import React, { useState } from 'react';
import { FaDownload, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';
import { CVDocumentATS } from '../PDF/CVDocumentATS';

type CVVersion = 'visual' | 'ats';

export const Hero: React.FC = () => {
    const [cvVersion, setCvVersion] = useState<CVVersion>('visual');
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const cvOptions = [
        { value: 'visual' as CVVersion, label: 'CV Visual', desc: 'Diseño moderno con sidebar' },
        { value: 'ats' as CVVersion, label: 'CV Simple', desc: 'Optimizado para portales de empleo' },
    ];

    const selectedOption = cvOptions.find(o => o.value === cvVersion)!;

    return (
        <section id="inicio" className="hero-humanist-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Organic Background Elements */}
            <div className="organic-blob blob-1" aria-hidden="true" />
            <div className="organic-blob blob-2" aria-hidden="true" />
            <div className="organic-blob blob-3" aria-hidden="true" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 md:py-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Text Content */}
                    <div className="text-center md:text-left order-2 md:order-1">

                        {/* Badge - responsivo: una línea en desktop, dos en móvil */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                            <span className="inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 whitespace-nowrap">
                                Recursos Humanos
                            </span>
                            <span className="inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 whitespace-nowrap">
                                Capital Humano
                            </span>
                            <span className="inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 whitespace-nowrap">
                                Gestión de Talento
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight font-serif text-gray-800 dark:text-gray-100">
                            Regina <br />
                            <span className="text-teal-600 dark:text-teal-400">Salazar</span>
                        </h1>

                        <div className="h-1 w-20 bg-rose-400 dark:bg-rose-500 mb-6 mx-auto md:mx-0 rounded-full"></div>

                        <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 font-light text-gray-600 dark:text-gray-300">
                            Coordinadora de <strong className="text-gray-800 dark:text-gray-100">Recursos Humanos</strong> con 4+ años gestionando{' '}
                            <strong className="text-gray-800 dark:text-gray-100">nómina</strong>,{' '}
                            <strong className="text-gray-800 dark:text-gray-100">reclutamiento por competencias</strong> y{' '}
                            <strong className="text-gray-800 dark:text-gray-100">desarrollo organizacional</strong>.{' '}
                            Resultados: −25% rotación · −33% tiempo de contratación · 23 sucursales.
                        </p>

                        {/* Métricas rápidas - solo móvil/tablet */}
                        <div className="grid grid-cols-3 gap-3 mb-8 md:hidden">
                            {[
                                { value: '4+', label: 'Años RH' },
                                { value: '23', label: 'Sucursales' },
                                { value: '−25%', label: 'Rotación' },
                            ].map((m) => (
                                <div key={m.label} className="text-center p-2 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-teal-100 dark:border-teal-800 shadow-sm">
                                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">{m.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{m.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Botones de acción con selector de CV */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                            {/* Selector + Botón de descarga */}
                            <div className="flex items-stretch">
                                {/* Selector de versión */}
                                <div className="relative">
                                    <button
                                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                                        className="h-full px-3 flex items-center gap-2 bg-teal-700 dark:bg-teal-800 text-white rounded-l-full border-r border-teal-600 dark:border-teal-700 hover:bg-teal-800 dark:hover:bg-teal-900 transition-colors"
                                        aria-label="Seleccionar versión de CV"
                                    >
                                        <FaChevronDown className={`text-xs transition-transform ${isSelectOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Dropdown */}
                                    {isSelectOpen && (
                                        <div className="absolute left-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                                            {cvOptions.map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => {
                                                        setCvVersion(option.value);
                                                        setIsSelectOpen(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-3 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors ${
                                                        cvVersion === option.value ? 'bg-teal-50 dark:bg-teal-900/30' : ''
                                                    }`}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium text-gray-800 dark:text-gray-100">{option.label}</span>
                                                        {cvVersion === option.value && (
                                                            <span className="text-teal-600 dark:text-teal-400 text-sm">✓</span>
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">{option.desc}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Botón de descarga */}
                                <PDFDownloadLink
                                    document={cvVersion === 'visual' ? <CVDocument /> : <CVDocumentATS />}
                                    fileName={cvVersion === 'visual' ? 'CV_Regina_Salazar_Marcelino.pdf' : 'CV_Regina_Salazar_ATS.pdf'}
                                    className="btn-humanist-primary rounded-l-none justify-center"
                                >
                                    {({ loading }) => (
                                        <>
                                            <FaDownload className="mr-2" aria-hidden="true" />
                                            {loading ? 'Generando...' : `Descargar ${selectedOption.label}`}
                                        </>
                                    )}
                                </PDFDownloadLink>
                            </div>

                            <a href="#contacto" className="btn-humanist-secondary justify-center">
                                <FaEnvelope className="mr-2" aria-hidden="true" />
                                Contactar
                            </a>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex justify-center order-1 md:order-2 mb-4 md:mb-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal-300 dark:bg-teal-500 rounded-full blur-2xl opacity-30 dark:opacity-20 transform translate-x-4 translate-y-4" aria-hidden="true"></div>
                            <img
                                src="/assets/images/profile.jpeg"
                                alt="Regina Salazar Marcelino – Coordinadora de Recursos Humanos"
                                className="profile-image-humanist relative w-52 h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96 z-10"
                            />
                            {/* Floating Badge - solo sm en adelante */}
                            <div className="absolute top-10 -left-6 p-3 sm:p-4 rounded-2xl shadow-lg z-20 animate-float-slow hidden sm:block bg-white/90 backdrop-blur-md border border-teal-100 dark:bg-gray-800/90 dark:border-teal-800">
                                <div className="text-center">
                                    <span className="block text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400">+4</span>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Años Exp.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Cerrar dropdown al hacer clic fuera */}
            {isSelectOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsSelectOpen(false)}
                    aria-hidden="true"
                />
            )}
        </section>
    );
};
