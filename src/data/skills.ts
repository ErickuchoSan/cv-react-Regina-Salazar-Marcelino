import {
    FaRobot, FaUsers, FaCalendarCheck,
    FaHandshake, FaLightbulb, FaComments, FaTasks, FaChartBar,
    FaChild, FaFirstAid, FaFileExcel, FaFileWord, FaFilePowerpoint, FaHeart,
    FaBook, FaSearch, FaClipboardList, FaUserCheck
} from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';
import type { IconType } from 'react-icons';

// Single Source of Truth: Skills y competencias – optimizado para RH y Gestión Administrativa

export interface DigitalSkill {
    icon: IconType;
    color: string;
    name: string;
    level: string;
}

export const DIGITAL_SKILLS: DigitalSkill[] = [
    { icon: FaFileExcel, color: 'text-green-600', name: 'Excel Avanzado', level: 'Avanzado' },
    { icon: SiCanva, color: 'text-cyan-500', name: 'Canva Pro', level: 'Avanzado' },
    { icon: FaRobot, color: 'text-purple-600', name: 'Herramientas IA', level: 'Avanzado' },
    { icon: FaFileWord, color: 'text-blue-600', name: 'Microsoft Office 365', level: 'Avanzado' },
];

export interface SoftSkill {
    icon: IconType;
    color: string;
    name: string;
}

export const SOFT_SKILLS: SoftSkill[] = [
    { icon: FaComments, color: 'text-blue-600', name: 'Comunicación Efectiva' },
    { icon: FaLightbulb, color: 'text-yellow-500', name: 'Pensamiento Analítico' },
    { icon: FaUsers, color: 'text-teal-600', name: 'Liderazgo de Equipos' },
    { icon: FaHandshake, color: 'text-amber-600', name: 'Negociación y Persuasión' },
    { icon: FaChartBar, color: 'text-indigo-600', name: 'Orientación a Resultados' },
    { icon: FaTasks, color: 'text-purple-600', name: 'Gestión de Prioridades' },
    { icon: FaCalendarCheck, color: 'text-pink-600', name: 'Responsabilidad y Ética' },
    { icon: FaLightbulb, color: 'text-green-500', name: 'Adaptabilidad al Cambio' },
    { icon: FaHeart, color: 'text-red-500', name: 'Inteligencia Emocional' },
];

export interface TechCategoryData {
    title: string;
    icon: IconType;
    items: { name: string; icon: IconType; color: string }[];
}

export const TECH_CATEGORIES: TechCategoryData[] = [
    {
        title: 'Herramientas Digitales',
        icon: FaFileWord,
        items: [
            { name: 'Excel (Tablas dinámicas, BUSCARV, KPIs)', icon: FaFileExcel, color: 'text-green-600' },
            { name: 'PowerPoint', icon: FaFilePowerpoint, color: 'text-orange-600' },
            { name: 'Word / Google Docs', icon: FaFileWord, color: 'text-blue-600' },
            { name: 'Canva Pro', icon: SiCanva, color: 'text-cyan-500' },
            { name: 'IAs Generativas (ChatGPT / Gemini)', icon: FaRobot, color: 'text-purple-600' },
        ],
    },
    {
        title: 'Gestión de Talento y Selección',
        icon: FaSearch,
        items: [
            { name: 'Reclutamiento por competencias', icon: FaUserCheck, color: 'text-teal-600' },
            { name: 'Portales de empleo (OCC, Indeed, LinkedIn)', icon: FaSearch, color: 'text-blue-600' },
            { name: 'Entrevistas por competencias', icon: FaComments, color: 'text-indigo-600' },
            { name: 'Onboarding estructurado', icon: FaClipboardList, color: 'text-green-600' },
        ],
    },
    {
        title: 'Administración de RR.HH.',
        icon: FaTasks,
        items: [
            { name: 'Gestión de nómina (altas/bajas/incidencias)', icon: FaTasks, color: 'text-teal-600' },
            { name: 'Control de indicadores: rotación y ausentismo', icon: FaChartBar, color: 'text-indigo-600' },
            { name: 'Coordinación de capacitación', icon: FaCalendarCheck, color: 'text-pink-600' },
            { name: 'Negociación con proveedores', icon: FaHandshake, color: 'text-amber-600' },
        ],
    },
    {
        title: 'Formación y Certificaciones',
        icon: FaFirstAid,
        items: [
            { name: 'Primeros Auxilios – Protección Civil', icon: FaFirstAid, color: 'text-red-600' },
            { name: 'Técnico Puericultista – CETIS #10', icon: FaChild, color: 'text-pink-500' },
            { name: 'Atención al Cliente de Alto Impacto', icon: FaUsers, color: 'text-teal-600' },
            { name: 'Comunicación Organizacional', icon: FaComments, color: 'text-blue-500' },
        ],
    },
];

export interface Competency {
    icon: IconType;
    title: string;
    desc: string;
}

export const COMPETENCIES: Competency[] = [
    { icon: FaBook, title: 'Aprendizaje Continuo', desc: 'Formación constante y actualización en tendencias de RRHH y gestión empresarial' },
    { icon: FaClipboardList, title: 'Gestión de Procesos', desc: 'Estructuración y mejora continua de procesos administrativos y de RR.HH.' },
    { icon: FaComments, title: 'Comunicación Efectiva', desc: 'Claridad, asertividad y empatía en la comunicación con colaboradores y directivos' },
    { icon: FaLightbulb, title: 'Resolución de Problemas', desc: 'Enfoque práctico e innovador para resolver situaciones administrativas complejas' },
    { icon: FaUsers, title: 'Liderazgo de Equipos', desc: 'Conducción de equipos multidisciplinarios con visión colaborativa y orientación a resultados' },
    { icon: FaHandshake, title: 'Negociación Eficaz', desc: 'Negociación con proveedores y manejo de conflictos internos con resultados favorables' },
    { icon: FaChartBar, title: 'Análisis de Indicadores', desc: 'Interpretación de KPIs de RRHH para la toma de decisiones estratégicas' },
    { icon: FaTasks, title: 'Organización y Seguimiento', desc: 'Gestión simultánea de múltiples procesos con control y seguimiento riguroso' },
    { icon: FaCalendarCheck, title: 'Confiabilidad', desc: 'Alta responsabilidad en el manejo de información confidencial y cumplimiento de plazos' },
    { icon: FaLightbulb, title: 'Adaptabilidad', desc: 'Facilidad para adaptarse a cambios organizacionales y nuevas metodologías de trabajo' },
    { icon: FaHeart, title: 'Inteligencia Emocional', desc: 'Conexión genuina con las necesidades del equipo y gestión de emociones en entornos de alta presión' },
];

// Skills para PDF – Enfocados a RRHH, Gestión Administrativa y Talento
export const PDF_SKILLS = [
    'Excel Avanzado (Tablas dinámicas, BUSCARV)',
    'Microsoft Office 365',
    'Google Workspace',
    'Canva Pro',
    'IAs Generativas',
    'Sistemas de Nómina',
    'Portales de Empleo (OCC, Indeed, LinkedIn)',
];

export const PDF_COMPETENCIAS = [
    'Reclutamiento y Selección por Competencias',
    'Gestión Integral de Nómina',
    'Capacitación y Desarrollo Organizacional',
    'Administración de Personal',
    'Clima y Cultura Organizacional',
    'Liderazgo y Gestión de Equipos',
    'Negociación con Proveedores',
    'Análisis de KPIs de RRHH',
];
