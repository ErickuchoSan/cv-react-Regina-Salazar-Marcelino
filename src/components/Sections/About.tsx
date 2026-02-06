import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaHeart } from 'react-icons/fa';

export const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Sobre Mí"
                    subtitle="Coordinadora de Recursos Humanos"
                />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                            Especialista en Gestión de Áreas Infantiles
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Coordinadora Administrativa con más de 2 años de experiencia en gestión de personal, reclutamiento y selección.
                            Especializada en supervisión de equipos de 40-50 personas, optimización de procesos y administración de recursos.
                            Dominio medio de Excel, avanzado en herramientas de IA y plataformas digitales para la gestión eficiente de RRHH.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Actualmente trabajo como <strong className="text-teal-600">Coordinadora Administrativa de Recursos Humanos</strong> en
                            Sonora Kids Group, donde superviso 23 sucursales (12 presenciales + 11 a distancia),
                            lidero equipos de 40-50 personas y coordino capacitaciones, marketing y eventos corporativos.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '6+', label: 'Años de Experiencia' },
                                { value: '23', label: 'Sucursales Supervisadas' },
                                { value: '50+', label: 'Personas a Cargo' },
                                { value: '100%', label: 'Compromiso' }
                            ].map((stat, index) => (
                                <div key={index} className="stat-item glass-card tech-hover-effect p-4">
                                    <div className="text-3xl font-bold text-teal-600">{stat.value}</div>
                                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaGraduationCap className="text-teal-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Educación</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">Lic. Gestión y Desarrollo Empresarial</p>
                                    <p className="text-teal-600 text-sm font-medium">En curso • Universidad Virtual del Estado de Guanajuato</p>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">Técnico Puericultista</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">CETIS #10 • 2018</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaBriefcase className="text-teal-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Disponibilidad</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <strong>Tiempo completo</strong> • Presencial/Híbrido<br />
                                <span className="text-sm text-teal-600">Zona Sur CDMX</span>
                            </p>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaMapMarkerAlt className="text-teal-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Ubicación</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                San Nicolás Totolapan, Magdalena Contreras, CDMX
                            </p>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaHeart className="text-teal-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Voluntariado</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Fundación Infantil "La Esperanza de los Niños A.C." (9 meses)<br />
                                <span className="text-teal-600">Actividades de apoyo infantil sin fines de lucro</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
