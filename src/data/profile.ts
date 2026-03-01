// Single Source of Truth: Perfil profesional centralizado
// Este archivo es la ÚNICA fuente de verdad para datos del perfil

import { CONTACT } from './contact';

// ─── Resumen Profesional ─────────────────────────────────────────────────────
// Usado en: Hero, About, CVDocument, CVDocumentATS
export const PROFILE = {
    // Versión corta para Hero
    shortSummary: `Coordinadora de Recursos Humanos con 4+ años gestionando nómina, reclutamiento por competencias y desarrollo organizacional.`,

    // Versión completa para PDFs y About
    fullSummary: `Profesional de Recursos Humanos con más de 4 años de experiencia en gestión integral de RRHH: reclutamiento y selección, administración de nómina, capacitación y desarrollo organizacional. He liderado equipos de hasta 50 colaboradores y coordinado operaciones en 23 sucursales. Resultados comprobados: reducción del 25% en rotación de personal, optimización del 33% en tiempos de contratación y ahorro del 15% en costos operativos. Dominio de Excel avanzado, portales de empleo y herramientas digitales. Licenciatura en Gestión Empresarial en curso.`,

    // Highlights para párrafo del Hero
    highlights: {
        role: 'Recursos Humanos',
        yearsExp: '4+',
        skills: ['nómina', 'reclutamiento por competencias', 'desarrollo organizacional'],
        results: '−25% rotación · −33% tiempo de contratación · 23 sucursales',
    },
} as const;

// ─── Métricas Clave ──────────────────────────────────────────────────────────
// Usado en: Hero (móvil), About, CVDocument, CVDocumentATS
export interface Metric {
    value: string;
    label: string;
    labelShort: string; // Para espacios reducidos
}

export const METRICS: Metric[] = [
    { value: '4+', label: 'Años en RR.HH.', labelShort: 'Años RH' },
    { value: '23', label: 'Sucursales Gestionadas', labelShort: 'Sucursales' },
    { value: '50+', label: 'Colaboradores a Cargo', labelShort: 'Colaboradores' },
    { value: '−25%', label: 'Reducción en Rotación', labelShort: 'Rotación' },
];

// Métricas para PDF (con formato de líneas)
export const PDF_METRICS = [
    { value: '4+', label: 'Años de\nExperiencia' },
    { value: '23', label: 'Sucursales\nGestionadas' },
    { value: '50+', label: 'Colaboradores\na cargo' },
    { value: '−25%', label: 'Reducción\nRotación' },
];

// ─── Disponibilidad ──────────────────────────────────────────────────────────
// Usado en: About, CVDocument, CVDocumentATS
export const AVAILABILITY = {
    status: 'Disponibilidad inmediata',
    type: 'Tiempo completo',
    modality: 'Presencial / Híbrido',
    zone: 'Zona Sur CDMX',
    // Combinaciones pre-formateadas
    get full() {
        return `${this.type} • ${this.modality}`;
    },
    get withZone() {
        return `${this.zone} – ${this.status}`;
    },
} as const;

// ─── Badges/Tags del Hero ────────────────────────────────────────────────────
// Usado en: Hero section
export const HERO_BADGES = [
    'Recursos Humanos',
    'Capital Humano',
    'Gestión de Talento',
] as const;

// ─── Educación ───────────────────────────────────────────────────────────────
// Usado en: About, CVDocument, CVDocumentATS
export interface Education {
    degree: string;
    school: string;
    period: string;
    status?: string;
}

export const EDUCATION: Education[] = [
    {
        degree: 'Lic. en Gestión y Desarrollo Empresarial',
        school: 'UVEG',
        period: '2024 – Actualidad',
        status: 'En curso (100% en línea)',
    },
    {
        degree: 'Técnico Puericultista',
        school: 'CETIS #10',
        period: '2015 – 2018',
    },
];

// ─── Idiomas y Certificaciones ───────────────────────────────────────────────
export const LANGUAGES_CERTS = [
    'Español (Nativo)',
    'Primeros Auxilios – Protección Civil',
    'Manejo de Contenido Digital',
] as const;

// ─── Re-exportar CONTACT para conveniencia ───────────────────────────────────
export { CONTACT };
