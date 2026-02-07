import React, { useState } from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Mensaje enviado (simulación)');
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
                            <div className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4">
                                <div className="contact-icon w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-300">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Email</h4>
                                    <a href="mailto:regina.salazar.ma@gmail.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                                        regina.salazar.ma@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4">
                                <div className="contact-icon w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-300">
                                    <FaPhone className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Teléfono</h4>
                                    <a href="tel:+525630154490" className="text-teal-600 hover:text-teal-700 transition-colors">
                                        56 3015 4490
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4">
                                <div className="contact-icon w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-300">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Ubicación</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Magdalena Contreras, CDMX
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Envíame un Mensaje</h3>
                        <form className="form-container" onSubmit={handleSubmit} noValidate>
                            <div className="form-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div className="form-field">
                                    <label htmlFor="name" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        required
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        required
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="form-field mb-6">
                                <label htmlFor="subject" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Asunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                    placeholder="Asunto del mensaje"
                                />
                            </div>

                            <div className="form-field mb-6">
                                <label htmlFor="message" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input form-textarea w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all h-32 resize-none"
                                    required
                                    placeholder="Tu mensaje..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-tech-primary w-full justify-center">
                                Enviar Mensaje
                                <FaEnvelope className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
