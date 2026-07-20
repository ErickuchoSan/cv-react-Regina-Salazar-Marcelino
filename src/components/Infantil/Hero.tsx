import React from 'react';
import { PROFILE_INFANTIL } from '../../data/infantil/profile';

const NAV_LINKS = [
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#competencias', label: 'Competencias' },
    { href: '#formacion', label: 'Formación' },
];

export const Hero: React.FC = () => (
    <section className="relative overflow-hidden px-6 py-[clamp(56px,8vw,96px)] pt-[clamp(72px,10vw,120px)] text-center sm:px-12 lg:px-18">
        <div aria-hidden className="pointer-events-none absolute -top-25 -right-20 h-[440px] w-[440px] rounded-full border border-infantil-terracotta/10" />
        <div aria-hidden className="pointer-events-none absolute -top-14 -right-8 h-[280px] w-[280px] rounded-full border border-infantil-terracotta/[0.07]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-25 -left-20 h-[380px] w-[380px] rounded-full border border-infantil-sage/[0.09]" />

        <div className="relative mx-auto max-w-3xl">
            <p className="mb-7 text-[11px] font-normal tracking-[5px] text-infantil-terracotta uppercase">
                {PROFILE_INFANTIL.overline}
            </p>

            <h1 className="mb-11 font-infantil-serif text-[clamp(52px,10vw,96px)] font-light leading-none tracking-tight text-infantil-text">
                {PROFILE_INFANTIL.nameLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                ))}
            </h1>

            <div className="mb-9 flex items-center justify-center gap-5">
                <span className="h-px w-20 bg-infantil-border" />
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C4724A" strokeWidth="1.2" strokeLinecap="round">
                    <circle cx="9" cy="9" r="2.8" />
                    <line x1="9" y1="1" x2="9" y2="4.5" />
                    <line x1="9" y1="13.5" x2="9" y2="17" />
                    <line x1="1" y1="9" x2="4.5" y2="9" />
                    <line x1="13.5" y1="9" x2="17" y2="9" />
                    <line x1="3.22" y1="3.22" x2="5.73" y2="5.73" />
                    <line x1="12.27" y1="12.27" x2="14.78" y2="14.78" />
                    <line x1="14.78" y1="3.22" x2="12.27" y2="5.73" />
                    <line x1="5.73" y1="12.27" x2="3.22" y2="14.78" />
                </svg>
                <span className="h-px w-20 bg-infantil-border" />
            </div>

            <p className="mb-5 font-infantil-serif text-[clamp(18px,2.8vw,22px)] italic text-infantil-text-muted">
                {PROFILE_INFANTIL.tagline}
            </p>

            <p className="mx-auto mb-13 max-w-xl text-[15px] font-light leading-8 text-infantil-text-muted">
                {PROFILE_INFANTIL.summary}
            </p>

            <nav className="flex flex-wrap justify-center gap-2.5">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="border border-infantil-border px-[26px] py-[13px] text-[10px] font-medium tracking-[2.5px] text-infantil-text uppercase transition-colors hover:bg-infantil-section-alt"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contacto"
                    className="border border-infantil-terracotta bg-infantil-terracotta px-[26px] py-[13px] text-[10px] font-medium tracking-[2.5px] text-white uppercase transition-colors hover:border-infantil-terracotta-hover hover:bg-infantil-terracotta-hover"
                >
                    Contacto
                </a>
            </nav>
        </div>
    </section>
);
