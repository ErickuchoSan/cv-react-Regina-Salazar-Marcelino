import React from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';

export const Hero: React.FC = () => {
    return (
        <section id="inicio" className="hero-tech-bg min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="circuit-nodes">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="circuit-node" />
                ))}
            </div>
            <div className="tech-particles">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="tech-particle" />
                ))}
            </div>
            <div className="tech-waves">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="tech-wave" />
                ))}
            </div>
            <div className="scan-line" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                            Regina Salazar Marcelino
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-300 mb-6 animate-fade-in-delay">
                            Coordinadora de Recursos Humanos | Puericultista | +6 años de experiencia
                        </p>
                        <p className="text-lg text-gray-300 mb-8 max-w-xl animate-fade-in-delay-2">
                            Especialista en gestión de áreas infantiles, liderazgo de equipos de 40+ personas
                            y coordinación operativa. Experiencia en supervisión de sucursales, capacitación de personal
                            y marketing digital. Actualmente cursando Licenciatura en Gestión y Desarrollo Empresarial.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-delay-3">
                            <PDFDownloadLink
                                document={<CVDocument />}
                                fileName="CV_Regina_Salazar_Marcelino.pdf"
                                className="btn-tech-primary"
                            >
                                {({ loading }) => (
                                    <>
                                        <FaDownload className="mr-2" />
                                        {loading ? 'Generando...' : 'Descargar CV'}
                                    </>
                                )}
                            </PDFDownloadLink>
                            <a href="#contacto" className="btn-tech-secondary">
                                <FaEnvelope className="mr-2" />
                                Contactar
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="profile-glow"></div>
                            <img
                                src="/assets/images/profile.jpeg"
                                alt="Regina Salazar Marcelino"
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-teal-400/50 shadow-2xl z-10"
                            />
                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                                +6 años
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
