import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaHeart } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { CONTACT } from './contact';

// Single Source of Truth: Datos de la sección "Sobre Mí"

export interface Stat {
    value: string;
    label: string;
}

export const STATS: Stat[] = [
    { value: '4+', label: 'Años en RR.HH.' },
    { value: '23', label: 'Sucursales Gestionadas' },
    { value: '50+', label: 'Colaboradores a Cargo' },
    { value: '−25%', label: 'Reducción en Rotación' }
];

export interface Education {
    degree: string;
    school: string;
    status: string;
}

export const EDUCATION: Education[] = [
    { degree: 'Lic. en Gestión y Desarrollo Empresarial', school: 'UVEG', status: 'En curso' },
    { degree: 'Técnico Puericultista', school: 'CETIS #10', status: '2018' }
];

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
