import React from 'react';
import type { CVVersion } from '../../hooks/useVersion';

interface VersionSwitcherProps {
    version: CVVersion;
    onToggle: () => void;
}

export const VersionSwitcher: React.FC<VersionSwitcherProps> = ({ version, onToggle }) => (
    <button
        type="button"
        onClick={onToggle}
        data-no-print
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-gray-200 bg-white/95 px-5 py-3 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/95 dark:text-gray-200"
    >
        {version === 'rh' ? 'Ver versión Educación Infantil' : 'Ver versión Recursos Humanos'}
    </button>
);
