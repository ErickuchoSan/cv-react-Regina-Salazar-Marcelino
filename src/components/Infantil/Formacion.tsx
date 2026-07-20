import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { INFANTIL_EDUCATION, INFANTIL_CERTIFICACIONES, INFANTIL_IDIOMAS } from '../../data/infantil/education';
import { INFANTIL_HERRAMIENTAS } from '../../data/infantil/skills';

const eduAccent = {
    terracotta: 'border-infantil-terracotta',
    sage: 'border-infantil-sage',
};

export const Formacion: React.FC = () => (
    <section id="formacion" className="mx-auto max-w-[960px] px-6 py-14 sm:px-12 sm:py-18 lg:px-18 lg:py-22">
        <div className="flex flex-wrap items-start gap-14">
            <div className="min-w-[260px] flex-[2]">
                <header className="mb-7">
                    <p className="mb-2 text-[10px] font-medium tracking-[4px] text-infantil-terracotta uppercase">Formación académica</p>
                    <h2 className="font-infantil-serif text-2xl font-light leading-tight text-infantil-text sm:text-[36px]">Educación</h2>
                </header>
                <div className="flex flex-col gap-3.5">
                    {INFANTIL_EDUCATION.map((edu) => (
                        <div key={edu.school} className={`border-l-[3px] ${eduAccent[edu.accent]} bg-infantil-card px-6 py-5`}>
                            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                <p className="text-[10px] font-medium tracking-[2.5px] text-infantil-label uppercase">{edu.school}</p>
                                {edu.inProgress && (
                                    <span className="border border-infantil-sage/35 bg-infantil-sage/12 px-2.5 py-0.5 text-[9px] font-semibold tracking-[1.5px] text-infantil-sage uppercase">
                                        En curso
                                    </span>
                                )}
                            </div>
                            <p className="font-infantil-serif text-lg font-medium leading-snug text-infantil-text">{edu.degree}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex min-w-[220px] flex-1 flex-col gap-11">
                <div>
                    <header className="mb-5">
                        <p className="mb-2 text-[10px] font-medium tracking-[4px] text-infantil-terracotta uppercase">Recursos</p>
                        <h3 className="font-infantil-serif text-[22px] font-light leading-tight text-infantil-text sm:text-3xl">Herramientas</h3>
                    </header>
                    <ul className="flex flex-col gap-2.5">
                        {INFANTIL_HERRAMIENTAS.map((tool) => (
                            <li key={tool} className="flex items-center gap-3 text-sm text-infantil-text-muted">
                                <span className="block h-1.5 w-1.5 flex-shrink-0 rounded-full border-[1.5px] border-infantil-terracotta" />
                                {tool}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <header className="mb-5">
                        <p className="mb-2 text-[10px] font-medium tracking-[4px] text-infantil-terracotta uppercase">Reconocimientos</p>
                        <h3 className="font-infantil-serif text-[22px] font-light leading-tight text-infantil-text sm:text-3xl">Certificaciones</h3>
                    </header>
                    <ul className="flex flex-col gap-2.5">
                        {INFANTIL_CERTIFICACIONES.map((cert) => (
                            <li key={cert} className="flex items-start gap-2.5 text-sm leading-snug text-infantil-text-muted">
                                <FaCheck className="mt-1 flex-shrink-0 text-infantil-sage" size={11} />
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <header className="mb-4">
                        <p className="mb-2 text-[10px] font-medium tracking-[4px] text-infantil-terracotta uppercase">Comunicación</p>
                        <h3 className="font-infantil-serif text-[22px] font-light leading-tight text-infantil-text sm:text-3xl">Idiomas</h3>
                    </header>
                    {INFANTIL_IDIOMAS.map((lang) => (
                        <div key={lang.language} className="flex items-center gap-4">
                            <p className="text-sm font-normal text-infantil-text-muted">{lang.language}</p>
                            <span className="h-px flex-1 bg-infantil-border" />
                            <span className="text-[11px] tracking-[2px] text-infantil-label uppercase">{lang.level}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
