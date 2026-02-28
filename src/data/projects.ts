import { FaUsers, FaChartLine, FaCalendarCheck } from 'react-icons/fa';
import type { IconType } from 'react-icons';

// Single Source of Truth: Datos de proyectos/logros destacados

export interface Project {
    title: string;
    description: string;
    tech: string[];
    icon: IconType;
}

export const PROJECTS: Project[] = [
    {
        title: "Gestión Integral de Capital Humano",
        description: "Administración completa del área de RR.HH. para una red de 23 sucursales: nómina, reclutamiento por competencias, capacitación, clima laboral y KPIs de gestión de personal para equipos de hasta 50 colaboradores.",
        tech: ["Nómina", "Reclutamiento", "Capacitación", "KPIs", "Excel"],
        icon: FaUsers
    },
    {
        title: "Optimización de Indicadores de RRHH",
        description: "Diseño e implementación de dashboards gerenciales con indicadores clave: rotación, ausentismo, tiempo de cobertura de vacantes y costo por contratación. Logro: −25% en rotación y −33% en tiempo de contratación.",
        tech: ["Excel Avanzado", "Dashboards", "KPIs", "Análisis de Datos", "Reportes"],
        icon: FaChartLine
    },
    {
        title: "Employer Branding y Atracción de Talento",
        description: "Desarrollo de estrategias de employer branding para proyectar una imagen de marca empleadora atractiva: contenido digital, publicación estratégica de vacantes y campañas que incrementaron el engagement en un 30%.",
        tech: ["Canva", "Employer Branding", "Redes Sociales", "Métricas", "Contenido"],
        icon: FaCalendarCheck
    }
];
