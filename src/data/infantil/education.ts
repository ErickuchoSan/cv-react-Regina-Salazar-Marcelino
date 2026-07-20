// Single Source of Truth: Educación, certificaciones e idiomas de la versión Educación Infantil

export interface InfantilEducationEntry {
    school: string;
    degree: string;
    accent: 'terracotta' | 'sage';
    inProgress?: boolean;
}

export const INFANTIL_EDUCATION: InfantilEducationEntry[] = [
    {
        school: 'UVEG',
        degree: 'Licenciatura en Gestión y Desarrollo Empresarial',
        accent: 'terracotta',
        inProgress: true,
    },
    {
        school: 'CETIS #10',
        degree: 'Técnico Puericultista',
        accent: 'sage',
    },
];

export const INFANTIL_CERTIFICACIONES: string[] = [
    'Certificado en Puericultura',
    'Curso de Estimulación Temprana',
    'Certificación en Primeros Auxilios',
    'Protección Civil',
];

export const INFANTIL_IDIOMAS = [
    { language: 'Español', level: 'Nativo' },
] as const;
