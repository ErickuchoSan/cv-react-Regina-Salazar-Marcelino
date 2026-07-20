// Single Source of Truth: Experiencia profesional de la versión Educación Infantil

export interface InfantilExperienceEntry {
    company: string;
    role: string;
    period: string;
    accent: 'sage' | 'terracotta';
    bullets: string[];
}

export interface InfantilGroupedRole {
    title: string;
    period: string;
    variant: 'muted' | 'prominent';
    bullets: string[];
}

export interface InfantilGroupedExperience {
    company: string;
    periodRange: string;
    roles: InfantilGroupedRole[];
}

export const INFANTIL_EXPERIENCE: InfantilExperienceEntry[] = [
    {
        company: 'Jardín de Niños "Esperanza"',
        role: 'Asistente educativa / Puericultista',
        period: 'mar 2018 – jun 2019',
        accent: 'sage',
        bullets: [
            'Elaboración de planeaciones pedagógicas y material didáctico adaptado a cada grupo',
            'Diseño e implementación de actividades lúdicas para niñas y niños de 2 a 6 años',
            'Apoyo al desarrollo cognitivo, emocional y social',
        ],
    },
    {
        company: 'Instituto de la Mujer',
        role: 'Apoyo en programas infantiles',
        period: 'ago 2019 – ago 2020',
        accent: 'sage',
        bullets: [
            'Elaboración de documentos de protección infantil',
            'Coordinación de programas y actividades recreativas para niñas y niños',
            'Atención ocasional a menores en eventos institucionales',
        ],
    },
];

export const INFANTIL_EXPERIENCE_GROUPED: InfantilGroupedExperience = {
    company: 'Sonora Grill Prime',
    periodRange: 'abr 2020 – feb 2026',
    roles: [
        {
            title: 'Asistente Infantil / Niñera de Ludoteca',
            period: 'abr 2020 – may 2024',
            variant: 'muted',
            bullets: [
                'Atención directa a niñas y niños, gestión de juegos y dinámicas grupales',
                'Comunicación y atención a madres y padres de familia',
                'Garantía de seguridad infantil, resolución de conflictos e inclusión',
            ],
        },
        {
            title: 'Coordinadora de Ludoteca',
            period: 'may 2024 – feb 2026',
            variant: 'prominent',
            bullets: [
                'Supervisión de personal y coordinación operativa de la ludoteca',
                'Diseño y coordinación de actividades; capacitación del equipo de trabajo',
                'Atención a padres de familia y gestión de ambientes seguros e inclusivos',
            ],
        },
    ],
};
