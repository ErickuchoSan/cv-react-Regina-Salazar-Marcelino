import { FaBullhorn, FaUsers, FaChild } from 'react-icons/fa';
import type { IconType } from 'react-icons';

// Single Source of Truth: Datos de experiencia profesional

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    duration: string;
    description: string;
    functions: string[];
    achievements?: string[];
    icon: IconType;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        role: "Coordinadora de Recursos Humanos",
        company: "Sonora Kids Group",
        period: "Ene 2022 - Feb 2026",
        duration: "4 años",
        description: "Gestión integral del área de RRHH: reclutamiento, nómina, capacitación y desarrollo organizacional para red de 23 sucursales.",
        functions: [
            "Administración de nómina quincenal para 40-50 colaboradores: altas, bajas, incidencias, vacaciones y cálculo de finiquitos",
            "Reclutamiento end-to-end: publicación en portales (OCC, Indeed, LinkedIn), filtrado de CVs, entrevistas por competencias y proceso de onboarding",
            "Diseño e impartición de 15+ programas de capacitación anuales (inducción, servicio al cliente, protocolos de seguridad) alcanzando 200+ colaboradores",
            "Supervisión de clima laboral mediante encuestas y seguimiento a indicadores de rotación, ausentismo y satisfacción del personal",
            "Negociación estratégica con proveedores de uniformes, material y servicios, generando ahorro del 15% en costos operativos anuales",
            "Elaboración de reportes gerenciales en Excel con dashboards de KPIs: headcount, rotación, costos de personal y métricas de RRHH"
        ],
        achievements: [
            "Reducción de rotación de personal del 25% mediante programas de desarrollo y mejora de clima laboral",
            "Tiempo de contratación optimizado de 45 a 30 días (-33%) con proceso de selección estructurado",
            "Gestión simultánea de 23 sucursales y 50 colaboradores con cero incidencias de nómina",
            "Implementación de dashboards que redujeron tiempo de análisis en 40%"
        ],
        icon: FaUsers
    },
    {
        role: "Auxiliar de Marketing y Employer Branding",
        company: "Naré",
        period: "Mayo 2023 - Actualidad",
        duration: "2 años",
        description: "Comunicación digital, employer branding y apoyo en estrategias de atracción de talento mediante contenido de valor.",
        functions: [
            "Desarrollo de contenido para employer branding: cultura organizacional, vacantes atractivas y vida en la empresa",
            "Creación, planeación y publicación de 20+ piezas de contenido mensual utilizando Canva y herramientas de diseño",
            "Análisis de métricas de redes sociales (engagement, alcance, conversiones) para optimización de estrategias de atracción de talento",
            "Coordinación de calendarios editoriales alineados con objetivos de comunicación interna y employer branding",
            "Apoyo en campañas de atracción de talento mediante contenido digital atractivo y publicaciones estratégicas"
        ],
        achievements: [
            "Incremento del 30% en engagement mediante contenido estratégico de employer branding",
            "Mejora del 25% en alcance orgánico con optimización de horarios de publicación",
            "Producción de 240+ piezas de contenido de alta calidad anualmente"
        ],
        icon: FaBullhorn
    },
    {
        role: "Asistente de Operaciones y Atención al Cliente",
        company: "Sonora Grill Group",
        period: "Ene 2018 - Ene 2022",
        duration: "4 años",
        description: "Atención al cliente, coordinación operativa y aplicación de protocolos de seguridad y calidad en área de servicios.",
        functions: [
            "Atención y servicio a clientes manteniendo un índice de satisfacción del 95% según encuestas internas",
            "Coordinación de actividades grupales y manejo efectivo de grupos de 20-30 personas diarias",
            "Aplicación estricta de protocolos de seguridad e higiene con certificación en Primeros Auxilios por Protección Civil",
            "Resolución de conflictos y comunicación efectiva con clientes, aplicando técnicas de mediación y empatía",
            "Diseño e implementación de actividades recreativas adaptadas a diferentes grupos de edad"
        ],
        achievements: [
            "4 años consecutivos sin incidentes de seguridad",
            "95% de satisfacción de clientes según encuestas internas",
            "Reconocimiento interno por excelencia en servicio al cliente"
        ],
        icon: FaChild
    }
];

// Versión simplificada para PDF (sin iconos, con estructura diferente)
export interface PDFExperienceItem {
    role: string;
    company: string;
    period: string;
    desc: string;
    bullets: string[];
    achievements: string[] | null;
}

export const PDF_EXPERIENCE: PDFExperienceItem[] = [
    {
        role: 'Coordinadora de Recursos Humanos',
        company: 'Sonora Kids Group (Grupo Sonora Grill)',
        period: 'Ene 2022 – Feb 2026',
        desc: 'Gestión integral del área de RRHH: reclutamiento, nómina, capacitación y desarrollo organizacional para red de 23 sucursales.',
        bullets: [
            'Administración de nómina quincenal para 40-50 colaboradores: altas, bajas, incidencias, vacaciones y finiquitos',
            'Reclutamiento end-to-end: publicación en portales (OCC, Indeed), filtrado de CVs, entrevistas por competencias y onboarding',
            'Diseño e impartición de 15+ programas de capacitación anuales (inducción, servicio al cliente, seguridad)',
            'Supervisión de clima laboral y seguimiento a indicadores de rotación, ausentismo y satisfacción',
            'Negociación con proveedores de uniformes, material y servicios generando ahorro del 15% anual',
            'Elaboración de reportes gerenciales en Excel: dashboards de KPIs, headcount y costos de personal',
        ],
        achievements: [
            'Reducción de rotación de personal del 25% mediante programas de desarrollo y clima laboral',
            'Tiempo de contratación optimizado de 45 a 30 días (-33%) con proceso de selección estructurado',
            'Gestión simultánea de 23 sucursales y 50 colaboradores con cero incidencias de nómina',
        ],
    },
    {
        role: 'Auxiliar de Marketing y Employer Branding',
        company: 'Naré',
        period: 'Mayo 2023 – Actualidad',
        desc: 'Comunicación digital, employer branding y apoyo en estrategias de atracción de talento.',
        bullets: [
            'Desarrollo de contenido para employer branding: cultura organizacional, vacantes y vida en la empresa',
            'Creación de 20+ piezas mensuales con Canva para comunicación interna y redes sociales',
            'Análisis de métricas de engagement y alcance para optimización de estrategias de atracción',
            'Coordinación de publicaciones en redes alineadas con objetivos de atracción de talento',
        ],
        achievements: null,
    },
    {
        role: 'Asistente de Operaciones y Atención al Cliente',
        company: 'Sonora Grill Group',
        period: 'Ene 2018 – Ene 2022',
        desc: 'Atención al cliente, coordinación operativa y aplicación de protocolos de seguridad y calidad.',
        bullets: [
            'Atención y servicio a clientes con índice de satisfacción del 95% según encuestas internas',
            'Coordinación de actividades grupales y manejo de grupos de 20-30 personas diarias',
            'Aplicación de protocolos de seguridad con certificación en Primeros Auxilios por Protección Civil',
            'Resolución de conflictos y comunicación efectiva con clientes, logrando 4 años sin incidentes',
        ],
        achievements: null,
    },
];
