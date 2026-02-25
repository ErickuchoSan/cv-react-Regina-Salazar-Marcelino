import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaChild } from 'react-icons/fa';
import { CONTACT } from '../../data/contact';
import { FOOTER_LINKS } from '../../data/navigation';

// DRY: Footer usa datos centralizados

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {CONTACT.name.split(' ')[0]} {CONTACT.name.split(' ')[1]}
                        </h3>
                        <p className="text-gray-400 mb-4">
                            {CONTACT.description}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-xl"
                                aria-label="Enviar correo electrónico"
                            >
                                <FaEnvelope aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Enlaces rápidos">
                        <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-400">
                                <FaEnvelope className="mr-3 text-teal-500" aria-hidden="true" />
                                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                                    {CONTACT.email}
                                </a>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaPhone className="mr-3 text-teal-500" aria-hidden="true" />
                                <span>{CONTACT.displayPhone}</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaMapMarkerAlt className="mr-3 text-teal-500" aria-hidden="true" />
                                <span>{CONTACT.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {currentYear} {CONTACT.name}. Todos los derechos reservados.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center">
                            Hecho con <FaHeart className="text-teal-500 mx-1" aria-hidden="true" /> y <FaChild className="text-cyan-500 mx-1" aria-hidden="true" />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
