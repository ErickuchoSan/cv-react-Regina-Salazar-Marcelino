import React, { useState } from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const PHONE_NUMBER = '525630154490'; // WhatsApp needs country code, no spaces
const EMAIL = 'regina.salazar.ma@gmail.com';
const MAPS_URL = 'https://www.google.com/maps/search/Magdalena+Contreras+CDMX';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const fullName = `${formData.name} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`.trim();
        const text = `Hola Regina 👋, te escribo desde tu portafolio web.\n\n*Nombre:* ${fullName}\n*Asunto:* ${formData.subject}\n*Mensaje:* ${formData.message}`;
        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${encoded}`, '_blank');
    };

    return (
        <section id="contacto" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
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
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Información de Contacto</h3>
                        <div className="space-y-6">
                            {/* Email */}
                            <a
                                href={`mailto:${EMAIL}`}
                                className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4 no-underline block"
                                aria-label="Enviar correo a Regina"
                            >
                                <div className="contact-icon w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-300 flex-shrink-0">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Email</h4>
                                    <span className="text-teal-600 hover:text-teal-700 transition-colors text-sm">
                                        {EMAIL}
                                    </span>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Hola Regina 👋, te escribo desde tu portafolio web. Tengo una oportunidad laboral para ti.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4 no-underline block"
                                aria-label="Escribir por WhatsApp a Regina"
                            >
                                <div className="contact-icon w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-300 flex-shrink-0">
                                    <FaWhatsapp className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">WhatsApp</h4>
                                    <span className="text-green-600 hover:text-green-700 transition-colors text-sm">
                                        56 3015 4490
                                    </span>
                                </div>
                            </a>

                            {/* Maps */}
                            <a
                                href={MAPS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4 no-underline block"
                                aria-label="Ver ubicación en Google Maps"
                            >
                                <div className="contact-icon w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center text-rose-500 dark:text-rose-300 flex-shrink-0">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Ubicación</h4>
                                    <span className="text-rose-500 hover:text-rose-600 transition-colors text-sm">
                                        Magdalena Contreras, CDMX
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* WhatsApp Form */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Envíame un Mensaje</h3>
                        <form className="form-container" onSubmit={handleSubmit} noValidate>
                            {/* Nombre */}
                            <div className="form-field mb-4">
                                <label htmlFor="name" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                    required
                                    placeholder="Tu nombre"
                                />
                            </div>

                            {/* Apellidos */}
                            <div className="form-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div className="form-field">
                                    <label htmlFor="apellidoPaterno" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Apellido Paterno *</label>
                                    <input
                                        type="text"
                                        id="apellidoPaterno"
                                        name="apellidoPaterno"
                                        value={formData.apellidoPaterno}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        required
                                        placeholder="Apellido paterno"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="apellidoMaterno" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Apellido Materno</label>
                                    <input
                                        type="text"
                                        id="apellidoMaterno"
                                        name="apellidoMaterno"
                                        value={formData.apellidoMaterno}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        placeholder="Apellido materno"
                                    />
                                </div>
                            </div>

                            {/* Asunto */}
                            <div className="form-field mb-4">
                                <label htmlFor="subject" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Asunto *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                    required
                                    placeholder="Ej. Oferta de trabajo – Coordinadora RH"
                                />
                            </div>

                            {/* Mensaje */}
                            <div className="form-field mb-6">
                                <label htmlFor="message" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input form-textarea w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all h-32 resize-none"
                                    required
                                    placeholder="Cuéntame sobre la vacante o tu mensaje..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-tech-primary w-full justify-center">
                                Enviar por WhatsApp
                                <FaWhatsapp className="ml-2 text-lg" />
                            </button>
                            <p className="text-xs text-gray-400 mt-3 text-center">
                                Al dar clic se abrirá WhatsApp con tu mensaje listo para enviar.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
