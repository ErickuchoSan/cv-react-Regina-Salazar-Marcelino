// Paleta de colores compartida para documentos PDF
// Single Source of Truth para colores de CVDocument y CVDocumentATS

// ─── Colores CV Visual (con sidebar) ───────────────────────────────────────────
export const CV_COLORS = {
    // Sidebar – Azul marino profesional
    sidebar: '#1a2e4a',
    sidebarAlt: '#223355',
    sidebarLine: '#2d4a73',
    sidebarText: '#cdd8e8',
    sidebarMuted: '#8fa8c8',
    accent: '#4fb3d8',      // Azul claro / turquesa
    accentWarm: '#f0b429',  // Ámbar dorado para logros
    // Cuerpo principal
    white: '#ffffff',
    bgAlt: '#f7f9fc',
    bgSection: '#edf2f8',
    textDark: '#0f1c2e',
    textMain: '#1e3048',
    textSub: '#4a6080',
    textMuted: '#7a92ab',
    border: '#dce6f0',
    // Badges
    badgeBg: '#e8f4fd',
    badgeBorder: '#b3d8f0',
    badgeText: '#1a4a6e',
    // Logros
    achieveBg: '#fffbeb',
    achieveBorder: '#fbbf24',
    achieveText: '#92400e',
} as const;

// ─── Colores CV ATS (minimalista, una columna) ─────────────────────────────────
export const ATS_COLORS = {
    primary: '#1a365d',      // Azul oscuro profesional
    accent: '#2b6cb0',       // Azul medio
    text: '#1a202c',         // Casi negro
    textSub: '#4a5568',      // Gris oscuro
    textMuted: '#718096',    // Gris medio
    border: '#e2e8f0',       // Gris claro
    white: '#ffffff',
    achieveBg: '#fffbeb',
    achieveText: '#92400e',
} as const;

// Type helpers
export type CVColorKey = keyof typeof CV_COLORS;
export type ATSColorKey = keyof typeof ATS_COLORS;
