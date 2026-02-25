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
        role: "Auxiliar en Marketing Digital",
        company: "Naré",
        period: "Mayo 2023 - Actualidad",
        duration: "2 años",
        description: "Ejecución de estrategias de marketing digital, gestión de redes sociales y análisis de métricas para optimizar el alcance y engagement de marca.",
        functions: [
            "Desarrollo e implementación de estrategias de marketing digital alineadas con objetivos de marca, incrementando el engagement promedio en 30%",
            "Creación, planeación y publicación de 20+ piezas de contenido mensual para redes sociales (Instagram, Facebook, TikTok) utilizando Canva, Photoshop e Illustrator",
            "Gestión de calendarios editoriales mensuales con optimización de horarios de publicación basada en análisis de audiencia, mejorando el alcance orgánico en 25%",
            "Análisis de métricas de redes sociales (reach, engagement, conversiones) y elaboración de reportes semanales para toma de decisiones estratégicas",
            "Research y evaluación de influencers potenciales mediante análisis de engagement, demografía de audiencia, alcance y autenticidad de seguidores",
            "Seguimiento de KPIs clave (tasa de engagement, crecimiento de seguidores, CTR) y ajuste de estrategias basado en resultados"
        ],
        achievements: [
            "Incremento del 30% en engagement mediante contenido estratégico",
            "Mejora del 25% en alcance orgánico con optimización de horarios",
            "Producción de 240+ piezas de contenido de alta calidad anualmente",
            "Gestión exitosa de múltiples plataformas sociales simultáneamente"
        ],
        icon: FaBullhorn
    },
    {
        role: "Coordinadora Administrativa de Áreas Infantiles",
        company: "Sonora Kids Group",
        period: "Ene 2022 - Feb 2026",
        duration: "4 años",
        description: "Coordinación integral de ludotecas y áreas infantiles en múltiples sucursales con enfoque en eficiencia operativa y desarrollo de talento.",
        functions: [
            "Supervisión operativa de 23 sucursales (12 presenciales + 11 remotas) con un equipo de 50 colaboradores, generando reportes semanales de KPIs que incrementaron la eficiencia operativa en 20%",
            "Liderazgo de proceso completo de reclutamiento (100+ candidatos anuales), reduciendo el tiempo de contratación de 45 a 30 días mediante optimización del proceso de selección y onboarding",
            "Diseño e impartición de 15+ capacitaciones anuales alcanzando a 200+ colaboradores, logrando una mejora del 25% en retención de personal",
            "Gestión estratégica de compras y negociación con proveedores que generó una reducción del 15% en costos operativos mediante análisis comparativo y mejores condiciones comerciales",
            "Administración integral de nómina y control de personal (40-50 colaboradores), incluyendo altas, bajas, seguimiento de asistencias y evaluaciones de desempeño",
            "Implementación de sistema de reportes mensuales en Excel con dashboards automatizados que redujeron el tiempo de análisis en 40% y mejoraron la toma de decisiones gerenciales"
        ],
        achievements: [
            "Reducción del 15% en costos operativos mediante optimización de procesos",
            "Mejora del 25% en retención de personal tras programa de capacitación",
            "Reducción del 40% en tiempo de análisis con dashboards automatizados",
            "Gestión exitosa de 23 sucursales y 50 colaboradores simultáneamente"
        ],
        icon: FaUsers
    },
    {
        role: "Cuidadora Infantil",
        company: "Sonora Grill Group",
        period: "Ene 2018 - Ene 2022",
        duration: "4 años",
        description: "Atención y cuidado profesional de niños en área de ludoteca con enfoque en seguridad, desarrollo infantil y excelencia en servicio a clientes.",
        functions: [
            "Atención y cuidado de 20-30 niños diarios (edades 1-10 años) en área de ludoteca, garantizando un ambiente seguro, educativo y recreativo",
            "Atención directa y personalizada a padres de familia, logrando un índice de satisfacción del 95% mediante comunicación efectiva y resolución proactiva de inquietudes",
            "Resolución de conflictos y manejo de situaciones complejas con padres y niños, aplicando técnicas de mediación y empatía que mantuvieron un ambiente positivo",
            "Aplicación estricta de protocolos de seguridad, higiene y primeros auxilios con constancia de protección civil, manteniendo 4 años consecutivos sin incidentes",
            "Diseño e implementación de actividades lúdicas y educativas adaptadas a diferentes grupos de edad, promoviendo el desarrollo psicomotriz y social"
        ],
        achievements: [
            "4 años consecutivos sin incidentes de seguridad",
            "95% de satisfacción de padres de familia según encuestas internas",
            "Atención exitosa de 25,000+ visitas de niños durante el período",
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
        role: 'Auxiliar en Marketing Digital',
        company: 'Naré',
        period: 'Mayo 2023 – Actualidad',
        desc: 'Gestión integral de marca digital, estrategia de contenidos y análisis de métricas de desempeño.',
        bullets: [
            'Diseño e implementación de estrategias de marketing digital que incrementaron el engagement en 30%',
            'Creación mensual de 20+ piezas para redes sociales con Canva, Photoshop e Illustrator',
            'Gestión de calendarios editoriales con mejora del 25% en alcance orgánico',
            'Research y evaluación de influencers (engagement, demografía, autenticidad)',
            'Seguimiento de KPIs (CTR, crecimiento, conversiones) y ajuste dinámico de estrategias',
        ],
        achievements: null,
    },
    {
        role: 'Coordinadora Administrativa – Área de RRHH',
        company: 'Sonora Kids Group',
        period: 'Ene 2022 – Feb 2026',
        desc: 'Liderazgo de procesos de recursos humanos, administración de personal y coordinación operativa de 23 sucursales.',
        bullets: [
            'Supervisión de 23 sucursales (12 presenciales / 11 remotas) con equipo de 50 colaboradores',
            'Dirección del ciclo completo de reclutamiento y selección (100+ candidatos/año); tiempo de contratación reducido de 45 a 30 días',
            'Diseño e impartición de 15+ programas de capacitación anuales para 200+ colaboradores',
            'Control de nómina, altas, bajas y asistencias para 40–50 colaboradores de manera simultánea',
            'Negociación con proveedores que generó reducción del 15% en costos operativos',
            'Implementación de dashboards en Excel para reportes de RRHH, reduciendo tiempos de análisis en 40%',
        ],
        achievements: [
            'Retención de personal mejorada en 25% mediante planes de capacitación continua',
            'Eficiencia operativa incrementada en 20% en la red de sucursales',
            'Reducción de costos operativos en 15% vía negociación estratégica con proveedores',
        ],
    },
    {
        role: 'Cuidadora Infantil Certificada',
        company: 'Sonora Grill Group',
        period: 'Ene 2018 – Ene 2022',
        desc: 'Atención profesional de menores, comunicación asertiva con padres y aplicación de protocolos de seguridad.',
        bullets: [
            'Atención diaria a grupos de 20–30 niños (1–10 años) con 4 años consecutivos sin incidentes',
            'Índice de satisfacción del 95% en padres mediante comunicación empática y efectiva',
            'Aplicación de protocolos de primeros auxilios y seguridad, minimizando riesgos',
            'Diseño de actividades lúdicas por edad para estimular el desarrollo psicomotriz y social',
        ],
        achievements: null,
    },
];
