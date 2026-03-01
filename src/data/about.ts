import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaHeart } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { CONTACT } from './contact';
import { METRICS, EDUCATION as PROFILE_EDUCATION } from './profile';

// Datos de la sección "Sobre Mí" - usa datos centralizados de profile.ts

// Re-export METRICS como STATS para compatibilidad con About.tsx
export const STATS = METRICS;

// Adaptar EDUCATION de profile.ts para el formato que usa About.tsx
export const EDUCATION = PROFILE_EDUCATION.map(edu => ({
    degree: edu.degree,
    school: edu.school,
    status: edu.status ? edu.status.replace(' (100% en línea)', '') : edu.period.split(' – ')[1] || edu.period
}));

export interface InfoCard {
    icon: IconType;
    iconBgClass: string;
    iconColorClass: string;
    title: string;
    content: string;
    subContent?: string;
}

export const INFO_CARDS: InfoCard[] = [
    {
        icon: FaBriefcase,
        iconBgClass: 'bg-rose-50 dark:bg-rose-900/30',
        iconColorClass: 'text-rose-500 dark:text-rose-400',
        title: 'Disponibilidad',
        content: 'Tiempo completo • Presencial / Híbrido',
        subContent: 'Zona Sur CDMX – Disponibilidad inmediata'
    },
    {
        icon: FaMapMarkerAlt,
        iconBgClass: 'bg-amber-50 dark:bg-amber-900/30',
        iconColorClass: 'text-amber-500 dark:text-amber-400',
        title: 'Ubicación',
        content: CONTACT.location
    },
    {
        icon: FaHeart,
        iconBgClass: 'bg-teal-50 dark:bg-teal-900/30',
        iconColorClass: 'text-teal-600 dark:text-teal-400',
        title: 'Voluntariado',
        content: 'Fundación Infantil "La Esperanza de los Niños A.C." (9 meses)',
        subContent: 'Apoyo infantil y actividades de desarrollo'
    }
];

// Exportar iconos para uso en componente
export { FaGraduationCap };
