// Single Source of Truth: Competencias y herramientas de la versión Educación Infantil

export interface InfantilTag {
    label: string;
    highlighted: boolean;
}

export const INFANTIL_COMPETENCIAS: InfantilTag[] = [
    { label: 'Desarrollo infantil', highlighted: true },
    { label: 'Estimulación temprana', highlighted: true },
    { label: 'Planeación educativa', highlighted: true },
    { label: 'Atención integral al menor', highlighted: true },
    { label: 'Manejo de grupos', highlighted: false },
    { label: 'Actividades lúdicas', highlighted: false },
    { label: 'Material didáctico', highlighted: false },
    { label: 'Comunicación con padres', highlighted: false },
    { label: 'Resolución de conflictos', highlighted: false },
    { label: 'Inteligencia emocional', highlighted: false },
    { label: 'Trabajo en equipo', highlighted: false },
    { label: 'Organización', highlighted: false },
    { label: 'Creatividad', highlighted: false },
    { label: 'Observación del desarrollo', highlighted: false },
    { label: 'Inclusión', highlighted: false },
    { label: 'Adaptabilidad', highlighted: false },
];

export const INFANTIL_HERRAMIENTAS: string[] = [
    'Microsoft Office',
    'Google Workspace',
    'Canva',
    'Material didáctico',
    'Planeación de actividades',
    'Recursos digitales educativos',
];
