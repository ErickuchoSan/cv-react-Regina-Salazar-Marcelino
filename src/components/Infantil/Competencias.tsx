import React from 'react';
import { INFANTIL_COMPETENCIAS } from '../../data/infantil/skills';

export const Competencias: React.FC = () => (
    <section id="competencias" className="bg-infantil-section-alt px-6 py-14 sm:px-12 sm:py-18 lg:px-18 lg:py-20">
        <div className="mx-auto max-w-[960px]">
            <header className="mb-10">
                <p className="mb-2.5 text-[10px] font-medium tracking-[4px] text-infantil-terracotta uppercase">Perfil</p>
                <h2 className="font-infantil-serif text-[28px] font-light leading-tight text-infantil-text sm:text-4xl lg:text-[44px]">
                    Competencias
                </h2>
            </header>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(155px,1fr))] gap-2.5">
                {INFANTIL_COMPETENCIAS.map((tag) => (
                    <div
                        key={tag.label}
                        className={
                            tag.highlighted
                                ? 'border border-infantil-sage/35 bg-infantil-sage/12 px-4 py-3 text-center text-[13px] leading-tight text-infantil-sage-dark'
                                : 'border border-infantil-border bg-infantil-card px-4 py-3 text-center text-[13px] leading-tight text-infantil-text-muted'
                        }
                    >
                        {tag.label}
                    </div>
                ))}
            </div>
        </div>
    </section>
);
