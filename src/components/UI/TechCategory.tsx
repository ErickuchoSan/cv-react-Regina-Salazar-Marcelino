import React from 'react';
import type { IconType } from 'react-icons';

// DRY: Componente reutilizable para categorías de tecnologías

interface TechItem {
    name: string;
    icon: IconType;
    color: string;
}

interface TechCategoryProps {
    title: string;
    icon: IconType;
    items: TechItem[];
}

export const TechCategory: React.FC<TechCategoryProps> = ({ title, icon: Icon, items }) => (
    <div className="glass-card tech-hover-effect p-6">
        <div className="flex items-center mb-4">
            <Icon className="text-teal-600 text-2xl mr-3" aria-hidden="true" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
                <span key={index} className="tech-tag flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm">
                    <item.icon className={`mr-2 ${item.color}`} aria-hidden="true" />
                    <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                </span>
            ))}
        </div>
    </div>
);
