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
        description: "Responsable integral del área de Capital Humano: reclutamiento y selección por competencias, gestión de nómina, capacitación, control de indicadores de RRHH y desarrollo organizacional para una red activa de 23 sucursales.",
        functions: [
            "Gestión completa de nómina quincenal (altas, bajas, incidencias, finiquitos y liquidaciones) para una plantilla de 40–50 colaboradores, garantizando exactitud y puntualidad en cada período",
            "Reclutamiento end-to-end: publicación de vacantes en OCC, Indeed y LinkedIn, aplicación de entrevistas por competencias, coordinación de exámenes psicométricos y proceso de onboarding estructurado",
            "Diseño e impartición de 15+ programas de capacitación anuales: inducción, servicio al cliente, protocolos de seguridad e higiene y desarrollo de habilidades, alcanzando a 200+ colaboradores",
            "Supervisión continua del clima organizacional mediante encuestas de satisfacción, análisis de indicadores de rotación y ausentismo, y planes de acción de mejora",
            "Negociación estratégica con proveedores de uniformes, consumibles y servicios generales, logrando reducción del 15% en costos operativos anuales",
            "Elaboración de dashboards gerenciales en Excel con KPIs de RRHH: headcount, tasa de rotación, costo por contratación, ausentismo y tiempo promedio de cobertura de vacantes",
            "Coordinación de 23 sucursales (12 presenciales + 11 a distancia), asegurando cumplimiento de normas laborales y operativas en cada unidad"
        ],
        achievements: [
            "Reducción del 25% en rotación de personal mediante programas de engagement y mejora del clima laboral",
            "Tiempo de cobertura de vacantes optimizado de 45 a 30 días (–33%) implementando proceso de selección por competencias",
            "Cero incidencias de nómina en 4 años de gestión simultánea de 23 sucursales y hasta 50 colaboradores",
            "Dashboards de RRHH que redujeron el tiempo de análisis de indicadores en un 40%",
            "Ahorro acumulado del 15% en costos de proveedores mediante negociación estructurada"
        ],
        icon: FaUsers
    },
    {
        role: "Auxiliar de Marketing y Employer Branding",
        company: "Naré",
        period: "Mayo 2023 - Actualidad",
        duration: "2+ años",
        description: "Apoyo en estrategias de comunicación interna, employer branding y atracción de talento a través de contenido digital de alto impacto. Generación de identidad de marca empleadora sólida y coherente.",
        functions: [
            "Desarrollo de contenido orientado a employer branding: cultura organizacional, publicación de vacantes atractivas y narrativa de vida en la empresa",
            "Producción de 20+ piezas de contenido mensual en Canva para redes sociales, comunicación interna y campañas de atracción de talento",
            "Análisis de métricas digitales (engagement, alcance orgánico, conversiones) para optimizar la estrategia de atracción de candidatos",
            "Coordinación de calendarios editoriales alineados con los objetivos de comunicación interna y RRHH",
            "Campaña activa de employer branding que posicionó a la empresa como lugar deseable para trabajar"
        ],
        achievements: [
            "Incremento del 30% en engagement en publicaciones de cultura y vacantes",
            "Mejora del 25% en alcance orgánico con optimización de horarios y formatos de publicación",
            "Producción anual de 240+ piezas de contenido de alta calidad para atracción de talento"
        ],
        icon: FaBullhorn
    },
    {
        role: "Asistente de Operaciones y Atención al Cliente",
        company: "Sonora Grill Group",
        period: "Ene 2018 - Ene 2022",
        duration: "4 años",
        description: "Coordinación operativa, atención y gestión de grupos de clientes, aplicación rigurosa de protocolos de seguridad e higiene y resolución de conflictos con alto índice de satisfacción.",
        functions: [
            "Atención personalizada a clientes manteniendo un índice de satisfacción del 95% validado por encuestas internas",
            "Coordinación y supervisión de grupos de 20–30 personas diarias, organizando actividades con dinámica y empatía",
            "Cumplimiento y supervisión de protocolos de seguridad e higiene con certificación vigente en Primeros Auxilios por Protección Civil",
            "Gestión y resolución de conflictos con clientes aplicando técnicas de mediación, escucha activa y comunicación asertiva",
            "Diseño e implementación de actividades recreativas inclusivas adaptadas a distintos grupos de edad y necesidades"
        ],
        achievements: [
            "4 años consecutivos sin incidentes de seguridad gracias a la aplicación estricta de protocolos",
            "95% de satisfacción de clientes sostenido durante 4 años según encuestas internas periódicas",
            "Reconocimiento interno por excelencia en servicio al cliente y liderazgo de grupos"
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
        desc: 'Responsable integral del área de Capital Humano: reclutamiento por competencias, gestión de nómina, capacitación, indicadores de RRHH y desarrollo organizacional para red de 23 sucursales.',
        bullets: [
            'Gestión de nómina quincenal (altas, bajas, incidencias, vacaciones, finiquitos y liquidaciones) para plantilla de 40–50 colaboradores, garantizando exactitud y puntualidad en cada período',
            'Reclutamiento end-to-end: publicación en OCC, Indeed y LinkedIn, entrevistas por competencias, exámenes psicométricos y onboarding estructurado',
            'Diseño e impartición de 15+ programas de capacitación anuales (inducción, servicio al cliente, seguridad e higiene) para 200+ colaboradores',
            'Supervisión de clima organizacional mediante encuestas, análisis de rotación/ausentismo y planes de mejora',
            'Negociación con proveedores de uniformes y servicios logrando reducción del 15% en costos operativos anuales',
            'Elaboración de dashboards en Excel con KPIs: headcount, rotación, costo por contratación y tiempo de cobertura de vacantes',
        ],
        achievements: [
            'Reducción del 25% en rotación de personal con programas de engagement y mejora de clima laboral',
            'Tiempo de cobertura de vacantes optimizado de 45 a 30 días (–33%) con proceso de selección por competencias',
            'Cero incidencias de nómina en 4 años gestionando simultáneamente 23 sucursales y hasta 50 colaboradores',
        ],
    },
    {
        role: 'Auxiliar de Marketing y Employer Branding',
        company: 'Naré',
        period: 'Mayo 2023 – Actualidad',
        desc: 'Comunicación interna, employer branding y estrategias de atracción de talento mediante contenido digital de alto impacto.',
        bullets: [
            'Diseño de contenido para employer branding: cultura organizacional, vacantes atractivas y vida en la empresa',
            'Producción de 20+ piezas de contenido mensual en Canva para redes sociales y campañas de atracción de talento',
            'Análisis de métricas de engagement y alcance para optimizar estrategias de atracción de candidatos',
            'Coordinación de calendario editorial alineado con objetivos de comunicación interna y RRHH',
        ],
        achievements: [
            'Incremento del 30% en engagement en publicaciones de cultura organizacional y vacantes',
            'Mejora del 25% en alcance orgánico optimizando horarios y formatos de publicación',
            'Producción de 240+ piezas de contenido anuales para atracción de talento',
        ],
    },
    {
        role: 'Asistente de Operaciones y Atención al Cliente',
        company: 'Sonora Grill Group',
        period: 'Ene 2018 – Ene 2022',
        desc: 'Coordinación operativa, atención al cliente, gestión de grupos y aplicación de protocolos de seguridad e higiene.',
        bullets: [
            'Atención a clientes con índice de satisfacción del 95% sostenido durante 4 años según encuestas internas',
            'Coordinación de grupos de 20–30 personas diarias con enfoque en experiencia y actividades recreativas',
            'Supervisión y cumplimiento de protocolos de seguridad e higiene con certificación en Primeros Auxilios (Protección Civil)',
            'Resolución de conflictos con mediación, escucha activa y comunicación asertiva logrando 4 años sin incidentes',
        ],
        achievements: [
            '4 años consecutivos sin incidentes de seguridad aplicando protocolos de Protección Civil',
            '95% de satisfacción de clientes sostenido durante toda la estadía según encuestas internas',
            'Reconocimiento interno por excelencia en servicio al cliente y liderazgo de grupos',
        ],
    },
];
