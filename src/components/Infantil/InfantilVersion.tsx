import React from 'react';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Competencias } from './Competencias';
import { Formacion } from './Formacion';
import { Contacto } from './Contacto';

export const InfantilVersion: React.FC = () => (
    <div className="min-h-screen bg-infantil-bg font-infantil-sans text-infantil-text">
        <div className="h-1 bg-linear-to-r from-infantil-sage to-infantil-terracotta" />
        <Hero />
        <div className="mx-auto max-w-[960px] px-6 sm:px-12 lg:px-18">
            <div className="h-px bg-linear-to-r from-transparent via-infantil-border to-transparent" />
        </div>
        <Experience />
        <div className="mx-auto max-w-[960px] px-6 sm:px-12 lg:px-18">
            <div className="h-px bg-linear-to-r from-transparent via-infantil-border to-transparent" />
        </div>
        <Competencias />
        <Formacion />
        <Contacto />
    </div>
);
