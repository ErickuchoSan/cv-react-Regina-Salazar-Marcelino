import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { CONTACT } from '../../data/infantil/contact';
import { PROFILE_INFANTIL } from '../../data/infantil/profile';
import { useDropdown } from '../../hooks/useDropdown';
import { InfantilCVDocument } from '../PDF/InfantilCVDocument';
import { InfantilCVDocumentATS } from '../PDF/InfantilCVDocumentATS';

export const Contacto: React.FC = () => {
    const { isOpen, toggle, close, buttonRef, position } = useDropdown();

    return (
        <>
            <section id="contacto" className="bg-infantil-text px-6 py-14 sm:px-12 sm:py-18 lg:px-18 lg:py-20">
                <div className="mx-auto flex max-w-[960px] flex-wrap items-center justify-between gap-14">
                    <div className="min-w-[240px] flex-1">
                        <p className="mb-2.5 text-[10px] font-medium tracking-[4px] text-infantil-terracotta uppercase">
                            Disponible para nuevas oportunidades
                        </p>
                        <h2 className="mb-9 font-infantil-serif text-[28px] font-light leading-tight text-infantil-bg sm:text-4xl lg:text-[48px]">
                            Contacto
                        </h2>
                        <div className="flex flex-col gap-[18px]">
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="flex items-center gap-3.5"
                                aria-label="Enviar correo a Regina"
                            >
                                <FaEnvelope className="text-infantil-border" size={16} />
                                <span className="text-sm text-infantil-border">{CONTACT.email}</span>
                            </a>
                            <a
                                href={CONTACT.whatsappUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3.5"
                                aria-label="Escribir por WhatsApp a Regina"
                            >
                                <FaWhatsapp className="text-infantil-border" size={16} />
                                <span className="text-sm text-infantil-border">{CONTACT.displayPhone}</span>
                            </a>
                            <a
                                href={CONTACT.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3.5"
                                aria-label="Ver ubicación en Google Maps"
                            >
                                <FaMapMarkerAlt className="text-infantil-border" size={16} />
                                <span className="text-sm text-infantil-border">{CONTACT.location}</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex-shrink-0" data-no-print>
                        <button
                            ref={buttonRef}
                            type="button"
                            onClick={toggle}
                            className="inline-flex items-center gap-3 bg-infantil-bg px-10 py-5 text-[11px] font-medium tracking-[3px] text-infantil-text uppercase transition-colors hover:bg-infantil-button-hover"
                        >
                            <FaDownload size={13} aria-hidden="true" />
                            Descargar CV — PDF
                        </button>

                        {isOpen && (
                            <>
                                <div className="fixed inset-0" style={{ zIndex: 40 }} onClick={close} />
                                <div
                                    className="fixed w-[calc(100vw-2rem)] max-w-72 rounded-xl border border-infantil-border bg-infantil-card shadow-2xl"
                                    style={{ zIndex: 9999, top: position.top, left: Math.min(position.left, window.innerWidth - 288 - 16) }}
                                >
                                    <PDFDownloadLink
                                        document={<InfantilCVDocument />}
                                        fileName="CV_Regina_Salazar_Educacion_Infantil.pdf"
                                        className="block w-full rounded-t-xl px-4 py-3 text-left transition-colors hover:bg-infantil-section-alt"
                                    >
                                        {({ loading }) => (
                                            <div>
                                                <div className="font-medium text-infantil-text">{loading ? 'Generando...' : 'CV Visual'}</div>
                                                <div className="text-xs text-infantil-text-muted">Diseño cálido, para postulación directa</div>
                                            </div>
                                        )}
                                    </PDFDownloadLink>
                                    <PDFDownloadLink
                                        document={<InfantilCVDocumentATS />}
                                        fileName="CV_Regina_Salazar_Educacion_Infantil_ATS.pdf"
                                        className="block w-full rounded-b-xl border-t border-infantil-border px-4 py-3 text-left transition-colors hover:bg-infantil-section-alt"
                                    >
                                        {({ loading }) => (
                                            <div>
                                                <div className="font-medium text-infantil-text">{loading ? 'Generando...' : 'CV Simple (ATS)'}</div>
                                                <div className="text-xs text-infantil-text-muted">Optimizado para portales de empleo</div>
                                            </div>
                                        )}
                                    </PDFDownloadLink>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <footer className="bg-infantil-footer px-6 py-[18px] text-center sm:px-12 lg:px-18">
                <p className="text-[10px] font-light tracking-[2.5px] text-infantil-border/45 uppercase">
                    {CONTACT.name} · {PROFILE_INFANTIL.overline} · 2026
                </p>
            </footer>
        </>
    );
};
