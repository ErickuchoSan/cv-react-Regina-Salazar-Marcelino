// Single Source of Truth: Links de navegación
export interface NavLink {
    href: string;
    label: string;
}

export const NAV_LINKS: NavLink[] = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
];

// Footer usa un subset sin Proyectos
export const FOOTER_LINKS: NavLink[] = NAV_LINKS.filter(link => link.href !== '#proyectos');
