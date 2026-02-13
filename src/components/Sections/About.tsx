import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaHeart } from 'react-icons/fa';

export const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="py-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title-humanist">Sobre Mí</h2>
                    <p className="text-stone-500 mt-2 font-light text-lg">Coordinadora de Recursos Humanos</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-stone-800 font-serif">
                            Especialista en Gestión de Áreas Infantiles
                        </h3>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed font-light">
                            <strong>Coordinadora de Recursos Humanos</strong> con 4+ años de experiencia liderando equipos de hasta 50 personas
                            y supervisando 23 sucursales simultáneamente. Especialista en reclutamiento estratégico, desarrollo de talento
                            y optimización de procesos operativos que han logrado <strong className="text-teal-600">reducir costos en 15%</strong> y
                            mejorar la <strong className="text-teal-600">retención de personal en 25%</strong>.
                        </p>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                            Experta en gestión de áreas infantiles con formación técnica como Puericultista y certificación en Primeros Auxilios.
                            Manejo avanzado de herramientas digitales (Excel, IA, Canva) para la gestión eficiente de RRHH y marketing digital.
                            Actualmente cursando Licenciatura en Gestión y Desarrollo Empresarial, combinando experiencia práctica con formación
                            académica continua.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '4+', label: 'Años de Experiencia' },
                                { value: '23', label: 'Sucursales' },
                                { value: '50+', label: 'Colaboradores' },
                                { value: '100%', label: 'Compromiso' }
                            ].map((stat, index) => (
                                <div key={index} className="card-soft p-4 text-center">
                                    <div className="text-3xl font-bold text-teal-600 mb-1">{stat.value}</div>
                                    <div className="text-stone-500 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div className="card-soft p-6 flex items-start">
                            <div className="bg-teal-50 p-3 rounded-full mr-4 text-teal-600">
                                <FaGraduationCap className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-800 mb-2">Educación</h4>
                                <div className="space-y-3">
                                    <div>
                                        <p className="font-semibold text-stone-700">Lic. Gestión y Desarrollo Empresarial</p>
                                        <p className="text-teal-600 text-sm">En curso • UVEG</p>
                                    </div>
                                    <div className="pt-2 border-t border-stone-100">
                                        <p className="font-semibold text-stone-700">Técnico Puericultista</p>
                                        <p className="text-stone-500 text-sm">CETIS #10 • 2018</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-soft p-6 flex items-start">
                            <div className="bg-rose-50 p-3 rounded-full mr-4 text-rose-500">
                                <FaBriefcase className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-800 mb-2">Disponibilidad</h4>
                                <p className="text-stone-600">
                                    <strong>Tiempo completo</strong> • Presencial/Híbrido<br />
                                    <span className="text-sm text-stone-500">Zona Sur CDMX</span>
                                </p>
                            </div>
                        </div>

                        <div className="card-soft p-6 flex items-start">
                            <div className="bg-amber-50 p-3 rounded-full mr-4 text-amber-500">
                                <FaMapMarkerAlt className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-800 mb-2">Ubicación</h4>
                                <p className="text-stone-600">
                                    San Nicolás Totolapan, Magdalena Contreras, CDMX
                                </p>
                            </div>
                        </div>

                        <div className="card-soft p-6 flex items-start">
                            <div className="bg-teal-50 p-3 rounded-full mr-4 text-teal-600">
                                <FaHeart className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-800 mb-2">Voluntariado</h4>
                                <p className="text-stone-600 text-sm">
                                    Fundación Infantil "La Esperanza de los Niños A.C." (9 meses)<br />
                                    <span className="text-teal-600">Actividades de apoyo infantil</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
