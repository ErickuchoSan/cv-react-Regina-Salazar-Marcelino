import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '../../data/contact';

// SoC: Componente separado para formulario de contacto con estado

export const ContactForm: React.FC = () => {
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
        const text = `Hola Regina, te escribo desde tu portafolio web.\n\n*Nombre:* ${fullName}\n*Asunto:* ${formData.subject}\n*Mensaje:* ${formData.message}`;
        window.open(CONTACT.whatsappUrl(text), '_blank');
    };

    return (
        <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                Envíame un Mensaje
            </h3>
            <form className="form-container" onSubmit={handleSubmit} noValidate>
                {/* Nombre */}
                <div className="form-field mb-4">
                    <label htmlFor="name" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nombre *
                    </label>
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
                        <label htmlFor="apellidoPaterno" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Apellido Paterno *
                        </label>
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
                        <label htmlFor="apellidoMaterno" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Apellido Materno
                        </label>
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
                    <label htmlFor="subject" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Asunto *
                    </label>
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
                    <label htmlFor="message" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Mensaje *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input form-textarea w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all h-32 resize-none"
                        required
                        placeholder="Cuéntame sobre la vacante o tu mensaje..."
                    />
                </div>

                <button type="submit" className="btn-tech-primary w-full justify-center">
                    Enviar por WhatsApp
                    <FaWhatsapp className="ml-2 text-lg" aria-hidden="true" />
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center">
                    Al dar clic se abrirá WhatsApp con tu mensaje listo para enviar.
                </p>
            </form>
        </div>
    );
};
