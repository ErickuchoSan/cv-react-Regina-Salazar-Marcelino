import React from 'react';
import { Navbar } from './Layout/Navbar';
import { Hero } from './Sections/Hero';
import { About } from './Sections/About';
import { Experience } from './Sections/Experience';
import { Skills } from './Sections/Skills';
import { Languages } from './Sections/Languages';
import { Projects } from './Sections/Projects';
import { Contact } from './Sections/Contact';
import { Footer } from './Sections/Footer';

export const RHVersion: React.FC = () => (
    <div className="min-h-screen">
        <Navbar />
        <main>
            <Hero />
            <Experience />
            <About />
            <Projects />
            <Skills />
            <Languages />
            <Contact />
        </main>
        <Footer />
    </div>
);
