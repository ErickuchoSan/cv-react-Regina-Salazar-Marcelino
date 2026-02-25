import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { SkillCard } from '../UI/SkillCard';
import { TechCategory } from '../UI/TechCategory';
import { DIGITAL_SKILLS, SOFT_SKILLS, TECH_CATEGORIES, COMPETENCIES } from '../../data/skills';

// KISS + DRY: Skills refactorizado usando datos centralizados y componentes reutilizables

export const Skills: React.FC = () => (
    <section id="habilidades" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="section-particles" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="section-particle" />
            ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
            <SectionTitle
                title="Habilidades"
                subtitle="Competencias técnicas y personales"
            />

            {/* Herramientas Digitales */}
            <section className="mb-16" aria-labelledby="digital-skills-title">
                <h3 id="digital-skills-title" className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
                    Herramientas Digitales
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {DIGITAL_SKILLS.map((skill, index) => (
                        <SkillCard
                            key={index}
                            icon={skill.icon}
                            name={skill.name}
                            color={skill.color}
                            level={skill.level}
                        />
                    ))}
                </div>
            </section>

            {/* Habilidades Blandas */}
            <section className="mb-16" aria-labelledby="soft-skills-title">
                <h3 id="soft-skills-title" className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
                    Habilidades Blandas
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {SOFT_SKILLS.map((skill, index) => (
                        <SkillCard
                            key={index}
                            icon={skill.icon}
                            name={skill.name}
                            color={skill.color}
                        />
                    ))}
                </div>
            </section>

            {/* Tech Categories */}
            <section className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16">
                {TECH_CATEGORIES.map((category, index) => (
                    <TechCategory
                        key={index}
                        title={category.title}
                        icon={category.icon}
                        items={category.items}
                    />
                ))}
            </section>

            {/* Competencias Clave */}
            <section aria-labelledby="competencies-title">
                <h3 id="competencies-title" className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
                    Competencias Clave
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {COMPETENCIES.map((skill, index) => (
                        <SkillCard
                            key={index}
                            icon={skill.icon}
                            name={skill.title}
                            color="text-teal-600"
                            description={skill.desc}
                        />
                    ))}
                </div>
            </section>
        </div>
    </section>
);
