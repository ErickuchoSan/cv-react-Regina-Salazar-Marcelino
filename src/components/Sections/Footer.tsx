import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaChild } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Regina Salazar
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Coordinadora Administrativa especializada en gestión de áreas infantiles, liderazgo de equipos y operaciones.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="mailto:regina.salazar.ma@gmail.com"
                                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-xl"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Inicio', href: '#inicio' },
                                { name: 'Sobre Mí', href: '#sobre-mi' },
                                { name: 'Experiencia', href: '#experiencia' },
                                { name: 'Habilidades', href: '#habilidades' },
                                { name: 'Contacto', href: '#contacto' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-400">
                                <FaEnvelope className="mr-3 text-teal-500" />
                                <a href="mailto:regina.salazar.ma@gmail.com" className="hover:text-white transition-colors">
                                    regina.salazar.ma@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaPhone className="mr-3 text-teal-500" />
                                <span>56 3015 4490</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaMapMarkerAlt className="mr-3 text-teal-500" />
                                <span>Magdalena Contreras, CDMX</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {currentYear} Regina Salazar Marcelino. Todos los derechos reservados.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center">
                            Hecho con <FaHeart className="text-teal-500 mx-1" /> y <FaChild className="text-cyan-500 mx-1" />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
