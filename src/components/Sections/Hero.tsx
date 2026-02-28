import React from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';

export const Hero: React.FC = () => {
    return (
        <section id="inicio" className="hero-humanist-bg min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Organic Background Elements */}
            <div className="organic-blob blob-1" aria-hidden="true" />
            <div className="organic-blob blob-2" aria-hidden="true" />
            <div className="organic-blob blob-3" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Text Content */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase shadow-sm bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300">
                            Recursos Humanos · Capital Humano · Gestión de Talento
                        </span>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight font-serif text-gray-800 dark:text-gray-100">
                            Regina <br />
                            <span className="text-teal-600 dark:text-teal-400">Salazar</span>
                        </h1>

                        <div className="h-1 w-20 bg-rose-400 dark:bg-rose-500 mb-8 mx-auto md:mx-0 rounded-full"></div>

                        <p className="text-xl mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 font-light text-gray-600 dark:text-gray-300">
                            Coordinadora de <strong className="text-gray-800 dark:text-gray-100">Recursos Humanos</strong> con 4+ años gestionando{' '}
                            <strong className="text-gray-800 dark:text-gray-100">nómina</strong>,{' '}
                            <strong className="text-gray-800 dark:text-gray-100">reclutamiento por competencias</strong> y{' '}
                            <strong className="text-gray-800 dark:text-gray-100">desarrollo organizacional</strong>.
                            Resultados comprobados: −25% rotación · −33% tiempo de contratación · 23 sucursales gestionadas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <PDFDownloadLink
                                document={<CVDocument />}
                                fileName="CV_Regina_Salazar_Marcelino.pdf"
                                className="btn-humanist-primary"
                            >
                                {({ loading }) => (
                                    <>
                                        <FaDownload className="mr-2" aria-hidden="true" />
                                        {loading ? 'Generando...' : 'Descargar CV'}
                                    </>
                                )}
                            </PDFDownloadLink>
                            <a href="#contacto" className="btn-humanist-secondary">
                                <FaEnvelope className="mr-2" aria-hidden="true" />
                                Contactar
                            </a>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex justify-center order-1 md:order-2 mb-10 md:mb-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal-300 dark:bg-teal-500 rounded-full blur-2xl opacity-30 dark:opacity-20 transform translate-x-4 translate-y-4" aria-hidden="true"></div>
                            <img
                                src="/assets/images/profile.jpeg"
                                alt="Regina Salazar Marcelino"
                                className="profile-image-humanist relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 z-10"
                            />
                            {/* Floating Badge */}
                            <div className="absolute top-10 -left-6 p-4 rounded-2xl shadow-lg z-20 animate-float-slow hidden sm:block bg-white/90 backdrop-blur-md border border-teal-100 dark:bg-gray-800/90 dark:border-teal-800">
                                <div className="text-center">
                                    <span className="block text-2xl font-bold text-teal-600 dark:text-teal-400">+4</span>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Años Exp.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
