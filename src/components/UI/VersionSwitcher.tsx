import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import type { CVVersion } from '../../hooks/useVersion';

interface VersionSwitcherProps {
    version: CVVersion;
    onToggle: () => void;
}

export const VersionSwitcher: React.FC<VersionSwitcherProps> = ({ version, onToggle }) => {
    const label = version === 'rh' ? 'Ver versión Educación Infantil' : 'Ver versión Recursos Humanos';

    return (
        <button
            type="button"
            onClick={onToggle}
            data-no-print
            aria-label={label}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-gray-200 bg-white/95 p-3.5 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/95 dark:text-gray-200 sm:px-5 sm:py-3"
        >
            <FaExchangeAlt className="text-base" aria-hidden="true" />
            <span className="hidden sm:inline">{label}</span>
        </button>
    );
};
