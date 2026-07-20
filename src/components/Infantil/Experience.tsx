import React from 'react';
import { INFANTIL_EXPERIENCE, INFANTIL_EXPERIENCE_GROUPED } from '../../data/infantil/experience';

const accentBorder = {
    sage: 'border-infantil-sage',
    terracotta: 'border-infantil-terracotta',
};

const accentLabel = {
    sage: 'text-infantil-sage',
    terracotta: 'text-infantil-terracotta',
};

export const Experience: React.FC = () => (
    <section id="experiencia" className="mx-auto max-w-[960px] px-6 py-14 sm:px-12 sm:py-18 lg:px-18 lg:py-22">
        <header className="mb-12">
            <p className="mb-2.5 text-[10px] font-medium tracking-[4px] text-infantil-terracotta uppercase">Trayectoria</p>
            <h2 className="font-infantil-serif text-[28px] font-light leading-tight text-infantil-text sm:text-4xl lg:text-[44px]">
                Experiencia Profesional
            </h2>
        </header>

        <div className="flex flex-col gap-6">
            {INFANTIL_EXPERIENCE.map((exp) => (
                <article key={exp.company} className={`border-l-[3px] ${accentBorder[exp.accent]} bg-infantil-card px-6 py-6 sm:px-9 sm:py-8`}>
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
                        <p className={`text-[10px] font-medium tracking-[3px] uppercase ${accentLabel[exp.accent]}`}>{exp.company}</p>
                        <span className="text-xs font-normal whitespace-nowrap text-infantil-terracotta">{exp.period}</span>
                    </div>
                    <h3 className="mb-[18px] font-infantil-serif text-xl font-medium leading-tight text-infantil-text sm:text-[26px]">
                        {exp.role}
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                        {exp.bullets.map((b) => (
                            <li key={b} className="relative pl-[18px] text-sm leading-7 text-infantil-text-muted">
                                <span className="absolute left-0 top-[11px] block h-1 w-1 rounded-full bg-infantil-terracotta" />
                                {b}
                            </li>
                        ))}
                    </ul>
                </article>
            ))}

            <div>
                <div className="mb-3 flex items-center gap-4">
                    <p className="whitespace-nowrap text-[10px] font-medium tracking-[3px] text-infantil-label uppercase">
                        {INFANTIL_EXPERIENCE_GROUPED.company}
                    </p>
                    <span className="h-px flex-1 bg-infantil-border-soft" />
                    <span className="whitespace-nowrap text-[11px] text-infantil-label">{INFANTIL_EXPERIENCE_GROUPED.periodRange}</span>
                </div>

                <div className="flex flex-col">
                    {INFANTIL_EXPERIENCE_GROUPED.roles.map((role, idx) => (
                        <div key={role.title}>
                            {idx > 0 && (
                                <div className="mx-6 flex items-center gap-4 py-2.5 sm:mx-9">
                                    <span className="h-px flex-1 bg-infantil-border-soft" />
                                    <span className="whitespace-nowrap bg-infantil-terracotta px-3.5 py-1 text-[9px] font-medium tracking-[2.5px] text-white uppercase">
                                        ↑ Ascenso
                                    </span>
                                    <span className="h-px flex-1 bg-infantil-border-soft" />
                                </div>
                            )}
                            <article
                                className={`border-l-[3px] bg-infantil-card px-6 py-5 sm:px-9 sm:py-7 ${
                                    role.variant === 'prominent' ? 'border-infantil-terracotta' : 'border-infantil-border'
                                }`}
                            >
                                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
                                    <h3
                                        className={`font-infantil-serif leading-tight ${
                                            role.variant === 'prominent'
                                                ? 'text-xl font-semibold text-infantil-text sm:text-2xl'
                                                : 'text-lg font-normal text-infantil-text-muted sm:text-xl'
                                        }`}
                                    >
                                        {role.title}
                                    </h3>
                                    <span
                                        className={`text-xs whitespace-nowrap ${
                                            role.variant === 'prominent' ? 'font-medium text-infantil-terracotta' : 'text-infantil-label'
                                        }`}
                                    >
                                        {role.period}
                                    </span>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    {role.bullets.map((b) => (
                                        <li
                                            key={b}
                                            className={`relative pl-[18px] leading-6 ${
                                                role.variant === 'prominent' ? 'text-sm text-infantil-text-muted' : 'text-[13.5px] text-infantil-text-faint'
                                            }`}
                                        >
                                            <span
                                                className={`absolute left-0 top-[10px] block h-1 w-1 rounded-full ${
                                                    role.variant === 'prominent' ? 'bg-infantil-terracotta' : 'bg-infantil-border'
                                                }`}
                                            />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
