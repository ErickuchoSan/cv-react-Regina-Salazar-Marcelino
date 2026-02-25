import React from 'react';
import type { IconType } from 'react-icons';

// DRY: Componente reutilizable para items de contacto

interface ContactCardProps {
    href: string;
    icon: IconType;
    iconBgClass: string;
    iconColorClass: string;
    title: string;
    value: string;
    ariaLabel: string;
    external?: boolean;
}

export const ContactCard: React.FC<ContactCardProps> = ({
    href,
    icon: Icon,
    iconBgClass,
    iconColorClass,
    title,
    value,
    ariaLabel,
    external = false,
}) => (
    <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4 no-underline block"
        aria-label={ariaLabel}
    >
        <div className={`contact-icon w-12 h-12 ${iconBgClass} rounded-lg flex items-center justify-center ${iconColorClass} flex-shrink-0`}>
            <Icon className="text-xl" aria-hidden="true" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
            <span className={`${iconColorClass.replace('dark:', 'hover:')} transition-colors text-sm`}>
                {value}
            </span>
        </div>
    </a>
);
