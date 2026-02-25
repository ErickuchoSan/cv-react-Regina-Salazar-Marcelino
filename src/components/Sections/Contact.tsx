import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

// KISS + SoC: Componente simple que orquesta ContactInfo y ContactForm

export const Contact: React.FC = () => (
    <section id="contacto" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
        <div className="section-particles" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="section-particle" />
            ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionTitle
                title="Contáctame"
                subtitle="¿Tienes una oportunidad laboral? ¡Me encantaría escuchar sobre ella!"
            />

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    </section>
);
