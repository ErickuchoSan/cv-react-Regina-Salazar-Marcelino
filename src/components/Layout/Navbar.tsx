import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '../../data/navigation';

export const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 w-full z-50 border-b shadow-sm transition-all duration-300 bg-white/90 backdrop-blur-md border-gray-200 dark:bg-gray-900/90 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold font-serif text-gray-800 dark:text-gray-100">
                            Regina <span className="text-teal-600 dark:text-teal-400">Salazar</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-3 py-2 text-sm font-medium transition-colors duration-300 relative group text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full transition-all duration-300 text-gray-500 hover:text-teal-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-teal-400 dark:hover:bg-gray-800"
                            aria-label="Cambiar tema"
                        >
                            {theme === 'light' ? <FaMoon className="text-lg" aria-hidden="true" /> : <FaSun className="text-lg" aria-hidden="true" />}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2.5 rounded-full transition-all duration-300 text-gray-600 hover:text-teal-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-teal-400 dark:hover:bg-gray-800"
                            aria-label="Abrir menú de navegación"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <FaTimes className="text-xl" aria-hidden="true" /> : <FaBars className="text-xl" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-b bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 text-gray-600 hover:text-teal-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-teal-400 dark:hover:bg-gray-800"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
