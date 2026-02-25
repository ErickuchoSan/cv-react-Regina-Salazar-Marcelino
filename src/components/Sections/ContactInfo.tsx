import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { ContactCard } from '../UI/ContactCard';
import { CONTACT } from '../../data/contact';

// SoC: Componente separado para información de contacto estática

export const ContactInfo: React.FC = () => (
    <div>
        <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            Información de Contacto
        </h3>
        <div className="space-y-6">
            <ContactCard
                href={`mailto:${CONTACT.email}`}
                icon={FaEnvelope}
                iconBgClass="bg-teal-100 dark:bg-teal-900"
                iconColorClass="text-teal-600 dark:text-teal-300"
                title="Email"
                value={CONTACT.email}
                ariaLabel="Enviar correo a Regina"
            />
            <ContactCard
                href={CONTACT.whatsappUrl()}
                icon={FaWhatsapp}
                iconBgClass="bg-green-100 dark:bg-green-900"
                iconColorClass="text-green-600 dark:text-green-300"
                title="WhatsApp"
                value={CONTACT.displayPhone}
                ariaLabel="Escribir por WhatsApp a Regina"
                external
            />
            <ContactCard
                href={CONTACT.mapsUrl}
                icon={FaMapMarkerAlt}
                iconBgClass="bg-rose-100 dark:bg-rose-900"
                iconColorClass="text-rose-500 dark:text-rose-300"
                title="Ubicación"
                value={CONTACT.location}
                ariaLabel="Ver ubicación en Google Maps"
                external
            />
        </div>
    </div>
);
