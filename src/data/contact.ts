// Single Source of Truth: Datos de contacto centralizados
export const CONTACT = {
    name: 'Regina Salazar Marcelino',
    role: 'Coordinadora de Recursos Humanos',
    email: 'regina.salazar.ma@gmail.com',
    phone: '525630154490',
    displayPhone: '56 3015 4490',
    location: 'Magdalena Contreras, CDMX',
    mapsUrl: 'https://www.google.com/maps/search/Magdalena+Contreras+CDMX',
    whatsappUrl: (message?: string) => {
        const defaultMsg = 'Hola Regina, vi tu portafolio y me gustaría contactarte.';
        return `https://wa.me/525630154490?text=${encodeURIComponent(message || defaultMsg)}`;
    },
    description: 'Profesional de Recursos Humanos especializada en reclutamiento, nómina, capacitación y desarrollo organizacional.',
} as const;
