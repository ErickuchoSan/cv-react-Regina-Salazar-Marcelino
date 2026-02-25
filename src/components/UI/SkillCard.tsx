import React from 'react';
import type { IconType } from 'react-icons';

// DRY: Componente reutilizable para mostrar skills con icono

interface SkillCardProps {
    icon: IconType;
    name: string;
    color: string;
    level?: string;
    description?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name, color, level, description }) => (
    <article className="skill-card glass-card tech-hover-effect p-6 text-center">
        <div className="skill-icon mb-4 inline-block">
            <Icon className={`text-4xl ${color}`} aria-hidden="true" />
        </div>
        <h4 className="skill-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            {name}
        </h4>
        {level && (
            <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                {level}
            </span>
        )}
        {description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{description}</p>
        )}
    </article>
);
