// Single Source of Truth: Datos de idiomas

export interface Language {
    name: string;
    level: string;
    details: string[];
}

export const LANGUAGES: Language[] = [
    {
        name: 'Español',
        level: 'Nativo',
        details: ['Lengua materna', 'Comunicación profesional escrita y oral']
    }
];
