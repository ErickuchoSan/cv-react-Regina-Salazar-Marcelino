// Paleta de colores compartida para los documentos PDF de la versión Educación Infantil

export const INFANTIL_PDF_COLORS = {
    bg: '#FAF7F2',
    card: '#FDFAF6',
    sectionAlt: '#F0EBE1',
    text: '#2C2416',
    textMuted: '#6B5744',
    textFaint: '#8A7A6A',
    label: '#9B8B7A',
    terracotta: '#C4724A',
    sage: '#7B9E87',
    sageDark: '#4A7560',
    border: '#D4C5B0',
    borderSoft: '#E8DFD5',
    white: '#ffffff',
} as const;

export type InfantilPDFColorKey = keyof typeof INFANTIL_PDF_COLORS;
