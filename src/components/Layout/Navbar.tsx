import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '../../data/navigation';

// DRY: Navbar usa datos de navegación centralizados

export const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-stone-800 font-serif">
                            Regina <span className="text-teal-600">Salazar</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-stone-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-stone-400 hover:text-teal-600 transition-colors duration-300"
                            aria-label="Cambiar tema"
                        >
                            {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-stone-600 hover:text-teal-600 transition-colors duration-300"
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
                <div className="md:hidden bg-white border-b border-stone-100">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-3 rounded-md text-base font-medium text-stone-600 hover:text-teal-600 hover:bg-stone-50 transition-all duration-300"
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
