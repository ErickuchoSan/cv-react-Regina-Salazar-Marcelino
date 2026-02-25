import {
    FaRobot, FaUsers, FaCalendarCheck,
    FaHandshake, FaLightbulb, FaComments, FaTasks, FaChartBar,
    FaChild, FaFirstAid, FaFileExcel, FaFileWord, FaFilePowerpoint, FaHeart,
    FaBook, FaGamepad
} from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';
import type { IconType } from 'react-icons';

// Single Source of Truth: Skills y competencias

export interface DigitalSkill {
    icon: IconType;
    color: string;
    name: string;
    level: string;
}

export const DIGITAL_SKILLS: DigitalSkill[] = [
    { icon: FaFileExcel, color: 'text-green-600', name: 'Excel', level: 'Intermedio' },
    { icon: SiCanva, color: 'text-cyan-500', name: 'Canva', level: 'Avanzado' },
    { icon: FaRobot, color: 'text-purple-600', name: 'Herramientas IA', level: 'Avanzado' },
    { icon: FaFileWord, color: 'text-blue-600', name: 'Microsoft Office', level: 'Avanzado' },
];

export interface SoftSkill {
    icon: IconType;
    color: string;
    name: string;
}

export const SOFT_SKILLS: SoftSkill[] = [
    { icon: FaComments, color: 'text-blue-600', name: 'Comunicación Efectiva' },
    { icon: FaLightbulb, color: 'text-yellow-500', name: 'Creatividad y Estrategia' },
    { icon: FaUsers, color: 'text-teal-600', name: 'Liderazgo Colaborativo' },
    { icon: FaHandshake, color: 'text-amber-600', name: 'Toma de Decisiones' },
    { icon: FaChartBar, color: 'text-indigo-600', name: 'Pensamiento Crítico' },
    { icon: FaTasks, color: 'text-purple-600', name: 'Evaluación y Seguimiento' },
    { icon: FaCalendarCheck, color: 'text-pink-600', name: 'Responsabilidad' },
    { icon: FaLightbulb, color: 'text-green-500', name: 'Adaptabilidad' },
    { icon: FaHeart, color: 'text-red-500', name: 'Empatía' },
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
            { name: 'Excel Intermedio', icon: FaFileExcel, color: 'text-green-600' },
            { name: 'PowerPoint', icon: FaFilePowerpoint, color: 'text-orange-600' },
            { name: 'Word', icon: FaFileWord, color: 'text-blue-600' },
            { name: 'Canva', icon: SiCanva, color: 'text-cyan-500' },
            { name: 'Plataformas IA', icon: FaRobot, color: 'text-purple-600' },
        ],
    },
    {
        title: 'Gestión y Operaciones',
        icon: FaTasks,
        items: [
            { name: 'Gestión de Recursos', icon: FaTasks, color: 'text-teal-600' },
            { name: 'Reportes y Métricas', icon: FaChartBar, color: 'text-indigo-600' },
            { name: 'Coordinación de Eventos', icon: FaCalendarCheck, color: 'text-pink-600' },
            { name: 'Gestión de Proveedores', icon: FaHandshake, color: 'text-amber-600' },
        ],
    },
    {
        title: 'Liderazgo de Equipos',
        icon: FaUsers,
        items: [
            { name: 'Supervisión de Personal', icon: FaUsers, color: 'text-teal-600' },
            { name: 'Capacitación', icon: FaLightbulb, color: 'text-yellow-500' },
            { name: 'Reclutamiento', icon: FaHandshake, color: 'text-green-600' },
            { name: 'Resolución de Conflictos', icon: FaComments, color: 'text-red-500' },
        ],
    },
    {
        title: 'Certificaciones y Formación',
        icon: FaFirstAid,
        items: [
            { name: 'Primeros Auxilios (Protección Civil)', icon: FaFirstAid, color: 'text-red-600' },
            { name: 'Técnico Puericultista', icon: FaChild, color: 'text-pink-500' },
            { name: 'Atención al Cliente', icon: FaUsers, color: 'text-teal-600' },
            { name: 'Comunicación Efectiva', icon: FaComments, color: 'text-blue-500' },
        ],
    },
];

export interface Competency {
    icon: IconType;
    title: string;
    desc: string;
}

export const COMPETENCIES: Competency[] = [
    { icon: FaBook, title: 'Autodidacta', desc: 'Aprendizaje continuo y desarrollo de habilidades por iniciativa propia' },
    { icon: FaGamepad, title: 'Lúdica', desc: 'Capacidad para crear experiencias recreativas y educativas' },
    { icon: FaComments, title: 'Comunicación Efectiva', desc: 'Claridad y empatía en la transmisión de ideas' },
    { icon: FaLightbulb, title: 'Creatividad y Estrategia', desc: 'Enfoque innovador para la resolución de problemas' },
    { icon: FaUsers, title: 'Liderazgo Colaborativo', desc: 'Guía de equipos fomentando la participación' },
    { icon: FaHandshake, title: 'Toma de Decisiones', desc: 'Análisis informado para decidir mejor' },
    { icon: FaChartBar, title: 'Pensamiento Crítico', desc: 'Análisis profundo de situaciones y datos' },
    { icon: FaTasks, title: 'Evaluación y Seguimiento', desc: 'Control constante de procesos y resultados' },
    { icon: FaCalendarCheck, title: 'Responsabilidad', desc: 'Compromiso total con objetivos laborales' },
    { icon: FaLightbulb, title: 'Adaptabilidad', desc: 'Apertura al cambio y aprendizaje continuo' },
    { icon: FaHeart, title: 'Empatía', desc: 'Conexión genuina con las necesidades del equipo' },
];

// Skills para PDF - Enfocados a RRHH y Gestión de Talento
export const PDF_SKILLS = [
    'Excel (Tablas dinámicas, BUSCARV)',
    'Microsoft Office 365',
    'Google Workspace',
    'Canva Pro',
    'Herramientas IA (ChatGPT, Gemini)',
    'Sistemas de Nómina',
    'Portales de Empleo (OCC, Indeed, LinkedIn)',
];
export const PDF_COMPETENCIAS = [
    'Reclutamiento y Selección',
    'Gestión de Nómina',
    'Capacitación y Desarrollo',
    'Administración de Personal',
    'Clima Laboral',
    'Liderazgo de Equipos',
    'Negociación con Proveedores',
    'Análisis de KPIs',
];
