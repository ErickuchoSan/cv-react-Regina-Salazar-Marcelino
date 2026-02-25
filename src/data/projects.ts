import { FaUsers, FaChild, FaCalendarCheck } from 'react-icons/fa';
import type { IconType } from 'react-icons';

// Single Source of Truth: Datos de proyectos/logros

export interface Project {
    title: string;
    description: string;
    tech: string[];
    icon: IconType;
}

export const PROJECTS: Project[] = [
    {
        title: "Coordinación de Ludotecas",
        description: "Supervisión operativa de 23 sucursales (12 presenciales y 11 a distancia). Gestión integral de áreas infantiles con equipos de hasta 50 personas.",
        tech: ["Liderazgo", "Gestión", "Capacitación", "Reportes", "Excel"],
        icon: FaChild
    },
    {
        title: "Gestión de Recursos Humanos",
        description: "Reclutamiento y selección de personal, diseño e impartición de capacitaciones, gestión de proveedores y optimización de recursos.",
        tech: ["Reclutamiento", "Capacitación", "Proveedores", "Organización"],
        icon: FaUsers
    },
    {
        title: "Marketing y Eventos",
        description: "Creación de reportes mensuales de campañas en Canva, seguimiento de métricas en Excel y coordinación logística de eventos corporativos.",
        tech: ["Canva", "Excel", "Marketing", "Eventos", "Métricas"],
        icon: FaCalendarCheck
    }
];
