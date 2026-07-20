# CV Infantil Version + Switch — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a second, fully independent version of the CV web app (educación infantil focus, warm cream/terracotta/sage design) alongside the existing RH version, with a persistent floating button to switch between them and a dedicated PDF pair (design + ATS) for the new version.

**Architecture:** `App.tsx` holds a `version: 'rh' | 'infantil'` state (via a `useVersion` hook, persisted to `localStorage`) and conditionally renders one of two independent component trees — `RHVersion` (today's site, moved unchanged) or `InfantilVersion` (new, built from the approved Claude Design mockup). A `VersionSwitcher` floating button, rendered outside both trees, is always visible and toggles the state. Each version data-drives its own components from `src/data/*` and has its own `@react-pdf/renderer` documents.

**Tech Stack:** React 19, TypeScript (strict, `verbatimModuleSyntax`), Vite, Tailwind CSS v4 (`@theme` tokens), `@react-pdf/renderer`, `react-icons`.

**Testing note:** this project has no test runner installed (no vitest/jest, no `*.test.*` files) — it's a presentational content site verified today via `npm run build` (`tsc -b && vite build`) and manual browser checks. This plan follows that existing convention: every task's verification step is a TypeScript/build check, and visual/interactive correctness is verified with the Playwright MCP browser tools at the two checkpoints where something becomes visible (Task 4, Task 20). Do not introduce a new test framework — that would be scope creep the user didn't ask for.

**Deviation from the design spec:** §3 of the spec called for a React Context (`VersionContext`) to hold the switch state. This plan uses a plain hook (`useVersion`, Task 2) called once in `App.tsx` and passed down as props to `VersionSwitcher` instead — same persisted, shared toggle behavior, but only two components ever need the value, so Context is unused machinery (this also matches the codebase's existing `useTheme` hook, which solves the identical dark/light toggle problem the same way). No behavior change versus the approved spec, just a simpler implementation.

**Reference documents (read before starting):**
- Design spec: `docs/superpowers/specs/2026-07-19-cv-infantil-version-design.md`
- Approved mockup markup (visual source of truth): `Regina Salazar CV.dc.html` (Claude Design export shared by the user)

**Tailwind note:** this project uses Tailwind v4.1.18. Gradient utilities are named `bg-linear-to-r` (not the v3 name `bg-gradient-to-r`). Custom `@theme` color tokens automatically get `bg-*`/`text-*`/`border-*` utilities, including opacity modifiers (`bg-infantil-sage/12`). Tailwind v4's spacing utilities accept arbitrary numbers (integer or decimal, e.g. `pl-4.5` = 18px) computed from `--spacing: 0.25rem` — if any such class doesn't compile as expected during Task 20's build check, replace it with the bracket arbitrary equivalent (e.g. `pl-[18px]`) and note it in the task's commit message.

---

## Task 1: Theming — fonts and color tokens

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

- [ ] **Step 1: Add Google Fonts link for Cormorant Garamond + DM Sans**

In `index.html`, add this line right after the existing Inter `<link>` (do not remove or change the Inter line):

```html
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Add infantil color/font tokens to the Tailwind theme**

In `src/index.css`, inside the existing `@theme { ... }` block, add these lines right after `--color-bg-soft: #fdfbf7;` (keep everything else in the block unchanged):

```css
  /* Infantil version — warm palette from the approved Claude Design mockup */
  --color-infantil-bg: #FAF7F2;
  --color-infantil-card: #FDFAF6;
  --color-infantil-section-alt: #F0EBE1;
  --color-infantil-text: #2C2416;
  --color-infantil-text-muted: #6B5744;
  --color-infantil-text-faint: #8A7A6A;
  --color-infantil-label: #9B8B7A;
  --color-infantil-terracotta: #C4724A;
  --color-infantil-terracotta-hover: #B5633C;
  --color-infantil-sage: #7B9E87;
  --color-infantil-sage-dark: #4A7560;
  --color-infantil-border: #D4C5B0;
  --color-infantil-border-soft: #E8DFD5;
  --color-infantil-button-hover: #EDE7DC;
  --color-infantil-footer: #231E12;

  --font-infantil-serif: 'Cormorant Garamond', serif;
  --font-infantil-sans: 'DM Sans', sans-serif;
```

- [ ] **Step 3: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0, no TypeScript or CSS errors.

- [ ] **Step 4: Commit**

```bash
git add index.html src/index.css
git commit -m "feat: add infantil theme fonts and color tokens"
```

---

## Task 2: `useVersion` hook

**Files:**
- Create: `src/hooks/useVersion.ts`

- [ ] **Step 1: Write the hook**

Follow the exact same pattern as the existing `src/hooks/useTheme.ts` (localStorage-backed toggle):

```typescript
import { useState, useEffect } from 'react';

export type CVVersion = 'rh' | 'infantil';

const STORAGE_KEY = 'cv-version';

export function useVersion() {
    const [version, setVersion] = useState<CVVersion>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'rh' || saved === 'infantil') return saved;
        }
        return 'rh';
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, version);
    }, [version]);

    const toggleVersion = () => {
        setVersion((prev) => (prev === 'rh' ? 'infantil' : 'rh'));
    };

    return { version, toggleVersion };
}
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0. The hook isn't imported anywhere yet — that's fine, TypeScript doesn't error on unused exports.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useVersion.ts
git commit -m "feat: add useVersion hook for RH/infantil toggle"
```

---

## Task 3: `VersionSwitcher` floating button

**Files:**
- Create: `src/components/UI/VersionSwitcher.tsx`

- [ ] **Step 1: Write the component**

```typescript
import type { CVVersion } from '../../hooks/useVersion';

interface VersionSwitcherProps {
    version: CVVersion;
    onToggle: () => void;
}

export const VersionSwitcher = ({ version, onToggle }: VersionSwitcherProps) => (
    <button
        type="button"
        onClick={onToggle}
        data-no-print
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-gray-200 bg-white/95 px-5 py-3 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/95 dark:text-gray-200"
    >
        {version === 'rh' ? 'Ver versión Educación Infantil' : 'Ver versión Recursos Humanos'}
    </button>
);
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/UI/VersionSwitcher.tsx
git commit -m "feat: add VersionSwitcher floating toggle button"
```

---

## Task 4: Extract `RHVersion` from `App.tsx`

**Files:**
- Create: `src/components/RHVersion.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `RHVersion.tsx` with today's `App.tsx` content, unchanged**

```typescript
import { Navbar } from './Layout/Navbar';
import { Hero } from './Sections/Hero';
import { About } from './Sections/About';
import { Experience } from './Sections/Experience';
import { Skills } from './Sections/Skills';
import { Languages } from './Sections/Languages';
import { Projects } from './Sections/Projects';
import { Contact } from './Sections/Contact';
import { Footer } from './Sections/Footer';

export const RHVersion = () => (
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
```

- [ ] **Step 2: Replace `src/App.tsx` to render only `RHVersion` for now**

This is an intermediate state — the toggle gets wired in Task 19, once `InfantilVersion` exists. For now this is a pure refactor with zero behavior change:

```typescript
import { RHVersion } from './components/RHVersion';

function App() {
    return <RHVersion />;
}

export default App;
```

- [ ] **Step 3: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 4: Regression check — confirm the RH site looks identical**

Run: `npm run dev` in the background, then use the Playwright MCP tools:
1. `mcp__playwright__browser_navigate` to `http://localhost:5173`
2. `mcp__playwright__browser_snapshot` to confirm the Navbar, Hero, Experience, About, Projects, Skills, Languages, Contact and Footer sections are all present and unchanged from before this refactor.
3. Stop the dev server.

Expected: page renders identically to how it did before this task (this is a pure move, no visual change should occur).

- [ ] **Step 5: Commit**

```bash
git add src/components/RHVersion.tsx src/App.tsx
git commit -m "refactor: extract RHVersion component from App.tsx"
```

---

## Task 5: Infantil data — `profile.ts`

**Files:**
- Create: `src/data/infantil/profile.ts`

- [ ] **Step 1: Write the profile data**

Content is exact text from the approved mockup (`Regina Salazar CV.dc.html` lines 49, 52, 72, 75) — do not paraphrase:

```typescript
// Single Source of Truth: Perfil de la versión Educación Infantil

export const PROFILE_INFANTIL = {
    overline: 'Técnico Puericultista',
    nameLines: ['Regina Salazar', 'Marcelino'],
    tagline: 'Compromiso, empatía y vocación por acompañar el desarrollo integral de niñas y niños.',
    summary: 'Profesional con más de 7 años de experiencia directa en entornos educativos y de cuidado infantil. Combina liderazgo, empatía y creatividad con una profunda vocación por el bienestar y el aprendizaje de menores de distintas edades.',
} as const;
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/data/infantil/profile.ts
git commit -m "feat: add infantil profile data"
```

---

## Task 6: Infantil data — `experience.ts`

**Files:**
- Create: `src/data/infantil/experience.ts`

- [ ] **Step 1: Write the experience data**

This does **not** reuse the RH `ExperienceItem` interface (that one has `duration`, `icon`, and separate `achievements` fields the mockup doesn't use). Two shapes: standalone entries, and one grouped entry (Sonora Grill Prime) with two roles and a promotion marker.

```typescript
// Single Source of Truth: Experiencia profesional de la versión Educación Infantil

export interface InfantilExperienceEntry {
    company: string;
    role: string;
    period: string;
    accent: 'sage' | 'terracotta';
    bullets: string[];
}

export interface InfantilGroupedRole {
    title: string;
    period: string;
    variant: 'muted' | 'prominent';
    bullets: string[];
}

export interface InfantilGroupedExperience {
    company: string;
    periodRange: string;
    roles: InfantilGroupedRole[];
}

export const INFANTIL_EXPERIENCE: InfantilExperienceEntry[] = [
    {
        company: 'Jardín de Niños "Esperanza"',
        role: 'Asistente educativa / Puericultista',
        period: 'mar 2018 – jun 2019',
        accent: 'sage',
        bullets: [
            'Elaboración de planeaciones pedagógicas y material didáctico adaptado a cada grupo',
            'Diseño e implementación de actividades lúdicas para niñas y niños de 2 a 6 años',
            'Apoyo al desarrollo cognitivo, emocional y social',
        ],
    },
    {
        company: 'Instituto de la Mujer',
        role: 'Apoyo en programas infantiles',
        period: 'ago 2019 – ago 2020',
        accent: 'sage',
        bullets: [
            'Elaboración de documentos de protección infantil',
            'Coordinación de programas y actividades recreativas para niñas y niños',
            'Atención ocasional a menores en eventos institucionales',
        ],
    },
];

export const INFANTIL_EXPERIENCE_GROUPED: InfantilGroupedExperience = {
    company: 'Sonora Grill Prime',
    periodRange: 'abr 2020 – feb 2026',
    roles: [
        {
            title: 'Asistente Infantil / Niñera de Ludoteca',
            period: 'abr 2020 – may 2024',
            variant: 'muted',
            bullets: [
                'Atención directa a niñas y niños, gestión de juegos y dinámicas grupales',
                'Comunicación y atención a madres y padres de familia',
                'Garantía de seguridad infantil, resolución de conflictos e inclusión',
            ],
        },
        {
            title: 'Coordinadora de Ludoteca',
            period: 'may 2024 – feb 2026',
            variant: 'prominent',
            bullets: [
                'Supervisión de personal y coordinación operativa de la ludoteca',
                'Diseño y coordinación de actividades; capacitación del equipo de trabajo',
                'Atención a padres de familia y gestión de ambientes seguros e inclusivos',
            ],
        },
    ],
};
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/data/infantil/experience.ts
git commit -m "feat: add infantil experience data"
```

---

## Task 7: Infantil data — `skills.ts`

**Files:**
- Create: `src/data/infantil/skills.ts`

- [ ] **Step 1: Write competencias and herramientas**

```typescript
// Single Source of Truth: Competencias y herramientas de la versión Educación Infantil

export interface InfantilTag {
    label: string;
    highlighted: boolean;
}

export const INFANTIL_COMPETENCIAS: InfantilTag[] = [
    { label: 'Desarrollo infantil', highlighted: true },
    { label: 'Estimulación temprana', highlighted: true },
    { label: 'Planeación educativa', highlighted: true },
    { label: 'Atención integral al menor', highlighted: true },
    { label: 'Manejo de grupos', highlighted: false },
    { label: 'Actividades lúdicas', highlighted: false },
    { label: 'Material didáctico', highlighted: false },
    { label: 'Comunicación con padres', highlighted: false },
    { label: 'Resolución de conflictos', highlighted: false },
    { label: 'Inteligencia emocional', highlighted: false },
    { label: 'Trabajo en equipo', highlighted: false },
    { label: 'Organización', highlighted: false },
    { label: 'Creatividad', highlighted: false },
    { label: 'Observación del desarrollo', highlighted: false },
    { label: 'Inclusión', highlighted: false },
    { label: 'Adaptabilidad', highlighted: false },
];

export const INFANTIL_HERRAMIENTAS: string[] = [
    'Microsoft Office',
    'Google Workspace',
    'Canva',
    'Material didáctico',
    'Planeación de actividades',
    'Recursos digitales educativos',
];
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/data/infantil/skills.ts
git commit -m "feat: add infantil competencias and herramientas data"
```

---

## Task 8: Infantil data — `education.ts`

**Files:**
- Create: `src/data/infantil/education.ts`

- [ ] **Step 1: Write educación, certificaciones and idiomas**

```typescript
// Single Source of Truth: Educación, certificaciones e idiomas de la versión Educación Infantil

export interface InfantilEducationEntry {
    school: string;
    degree: string;
    accent: 'terracotta' | 'sage';
    inProgress?: boolean;
}

export const INFANTIL_EDUCATION: InfantilEducationEntry[] = [
    {
        school: 'UVEG',
        degree: 'Licenciatura en Gestión y Desarrollo Empresarial',
        accent: 'terracotta',
        inProgress: true,
    },
    {
        school: 'CETIS #10',
        degree: 'Técnico Puericultista',
        accent: 'sage',
    },
];

export const INFANTIL_CERTIFICACIONES: string[] = [
    'Certificado en Puericultura',
    'Curso de Estimulación Temprana',
    'Certificación en Primeros Auxilios',
    'Protección Civil',
];

export const INFANTIL_IDIOMAS = [
    { language: 'Español', level: 'Nativo' },
] as const;
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/data/infantil/education.ts
git commit -m "feat: add infantil education, certifications and languages data"
```

---

## Task 9: Infantil data — `contact.ts`

**Files:**
- Create: `src/data/infantil/contact.ts`

- [ ] **Step 1: Re-export the real contact data**

The infantil version uses the same real email/phone/location as the RH version — only the displayed role/tagline differ, and those come from `profile.ts` (Task 5), not from here.

```typescript
export { CONTACT } from '../contact';
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/data/infantil/contact.ts
git commit -m "feat: re-export shared contact data for infantil version"
```

---

## Task 10: PDF colors — `pdfColorsInfantil.ts`

**Files:**
- Create: `src/components/PDF/styles/pdfColorsInfantil.ts`

- [ ] **Step 1: Write the color palette for PDF documents**

Same hex values as the web theme tokens (Task 1), following the existing `pdfColors.ts` pattern:

```typescript
// Paleta de colores compartida para los documentos PDF de la versión Educación Infantil

export const INFANTIL_PDF_COLORS = {
    bg: '#FAF7F2',
    card: '#FDFAF6',
    sectionAlt: '#F0EBE1',
    text: '#2C2416',
    textMuted: '#6B5744',
    textFaint: '#8A7A6A',
    label: '#9B8B7A',
    terracotta: '#C4724A',
    sage: '#7B9E87',
    sageDark: '#4A7560',
    border: '#D4C5B0',
    borderSoft: '#E8DFD5',
    white: '#ffffff',
} as const;

export type InfantilPDFColorKey = keyof typeof INFANTIL_PDF_COLORS;
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/PDF/styles/pdfColorsInfantil.ts
git commit -m "feat: add infantil PDF color palette"
```

---

## Task 11: Infantil component — `Hero.tsx`

**Files:**
- Create: `src/components/Infantil/Hero.tsx`

- [ ] **Step 1: Write the Hero section**

Translates mockup lines 39-85 to Tailwind, using the tokens from Task 1 and data from Task 5:

```typescript
import { PROFILE_INFANTIL } from '../../data/infantil/profile';

const NAV_LINKS = [
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#competencias', label: 'Competencias' },
    { href: '#formacion', label: 'Formación' },
];

export const Hero = () => (
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
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/Infantil/Hero.tsx
git commit -m "feat: add infantil Hero component"
```

---

## Task 12: Infantil component — `Experience.tsx`

**Files:**
- Create: `src/components/Infantil/Experience.tsx`

- [ ] **Step 1: Write the Experience section**

Translates mockup lines 92-177 (standalone cards + the grouped Sonora Grill Prime block with the "↑ Ascenso" badge):

```typescript
import { INFANTIL_EXPERIENCE, INFANTIL_EXPERIENCE_GROUPED } from '../../data/infantil/experience';

const accentBorder = {
    sage: 'border-infantil-sage',
    terracotta: 'border-infantil-terracotta',
};

const accentLabel = {
    sage: 'text-infantil-sage',
    terracotta: 'text-infantil-terracotta',
};

export const Experience = () => (
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
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/Infantil/Experience.tsx
git commit -m "feat: add infantil Experience component"
```

---

## Task 13: Infantil component — `Competencias.tsx`

**Files:**
- Create: `src/components/Infantil/Competencias.tsx`

- [ ] **Step 1: Write the Competencias section**

Translates mockup lines 184-210:

```typescript
import { INFANTIL_COMPETENCIAS } from '../../data/infantil/skills';

export const Competencias = () => (
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
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/Infantil/Competencias.tsx
git commit -m "feat: add infantil Competencias component"
```

---

## Task 14: Infantil component — `Formacion.tsx`

**Files:**
- Create: `src/components/Infantil/Formacion.tsx`

- [ ] **Step 1: Write the Formación section**

Translates mockup lines 212-305 (Educación column + Herramientas/Certificaciones/Idiomas column). Uses `FaCheck` from `react-icons/fa`, already a project dependency:

```typescript
import { FaCheck } from 'react-icons/fa';
import { INFANTIL_EDUCATION, INFANTIL_CERTIFICACIONES, INFANTIL_IDIOMAS } from '../../data/infantil/education';
import { INFANTIL_HERRAMIENTAS } from '../../data/infantil/skills';

const eduAccent = {
    terracotta: 'border-infantil-terracotta',
    sage: 'border-infantil-sage',
};

export const Formacion = () => (
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
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/Infantil/Formacion.tsx
git commit -m "feat: add infantil Formacion component"
```

---

## Task 15: PDF — `InfantilCVDocumentATS.tsx`

**Files:**
- Create: `src/components/PDF/InfantilCVDocumentATS.tsx`

- [ ] **Step 1: Write the ATS-friendly single-column PDF**

Follows the exact structural pattern of the existing `src/components/PDF/CVDocumentATS.tsx`, fed by infantil data instead. Uses react-pdf's built-in `Helvetica`/`Times-Roman` fonts (no external font registration — the existing `CVDocumentATS.tsx` registers a custom Roboto from a CDN URL, but there's no verified equivalent CDN URL for Cormorant Garamond/DM Sans, so this avoids a fragile network dependency at PDF-generation time):

```typescript
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import { CONTACT } from '../../data/infantil/contact';
import { PROFILE_INFANTIL } from '../../data/infantil/profile';
import { INFANTIL_COMPETENCIAS, INFANTIL_HERRAMIENTAS } from '../../data/infantil/skills';
import { INFANTIL_EDUCATION, INFANTIL_CERTIFICACIONES, INFANTIL_IDIOMAS } from '../../data/infantil/education';
import { INFANTIL_EXPERIENCE, INFANTIL_EXPERIENCE_GROUPED } from '../../data/infantil/experience';
import { INFANTIL_PDF_COLORS as C } from './styles/pdfColorsInfantil';

const S = StyleSheet.create({
    page: { flexDirection: 'column', backgroundColor: C.white, fontFamily: 'Helvetica', paddingVertical: 40, paddingHorizontal: 50 },
    header: { marginBottom: 20, borderBottomWidth: 2, borderBottomColor: C.terracotta, paddingBottom: 15 },
    name: { fontFamily: 'Times-Roman', fontSize: 24, color: C.text, marginBottom: 4 },
    role: { fontSize: 12, color: C.terracotta, fontWeight: 500, marginBottom: 10 },
    contactRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 15 },
    contactItem: { fontSize: 9, color: C.textMuted },
    contactLink: { fontSize: 9, color: C.terracotta, textDecoration: 'none' },
    section: { marginBottom: 16 },
    secTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: C.terracotta,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: C.border,
        paddingBottom: 4,
    },
    summary: { fontSize: 10, color: C.textMuted, lineHeight: 1.6, textAlign: 'justify' },
    inlineList: { fontSize: 9, color: C.text, lineHeight: 1.5 },
    expItem: { marginBottom: 14 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
    expRole: { fontSize: 11, fontWeight: 700, color: C.text },
    expPeriod: { fontSize: 9, color: C.label },
    expCompany: { fontSize: 10, color: C.sage, fontWeight: 500, marginBottom: 4 },
    bulletRow: { flexDirection: 'row', marginBottom: 2, paddingLeft: 8 },
    bulletDot: { fontSize: 9, color: C.textMuted, marginRight: 6 },
    bulletText: { fontSize: 9, color: C.textMuted, lineHeight: 1.4, flex: 1 },
    groupBanner: { fontSize: 10, fontWeight: 700, color: C.label, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8, marginTop: 4 },
    ascensoBadge: {
        fontSize: 8,
        fontWeight: 700,
        color: C.white,
        backgroundColor: C.terracotta,
        alignSelf: 'flex-start',
        paddingVertical: 2,
        paddingHorizontal: 8,
        marginVertical: 6,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    eduRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    eduDeg: { fontSize: 10, fontWeight: 500, color: C.text },
    eduDate: { fontSize: 9, color: C.label },
    eduSch: { fontSize: 9, color: C.textMuted },
    footer: { marginTop: 'auto', paddingTop: 10, borderTopWidth: 1, borderTopColor: C.border },
    footerText: { fontSize: 8, color: C.label, textAlign: 'center' },
});

export const InfantilCVDocumentATS = () => (
    <Document>
        <Page size="A4" style={S.page}>
            <View style={S.header}>
                <Text style={S.name}>{CONTACT.name}</Text>
                <Text style={S.role}>{PROFILE_INFANTIL.overline}</Text>
                <View style={S.contactRow}>
                    <Link src={`mailto:${CONTACT.email}`} style={S.contactLink}>{CONTACT.email}</Link>
                    <Text style={S.contactItem}>|</Text>
                    <Link src={`https://wa.me/${CONTACT.phone}`} style={S.contactLink}>{CONTACT.displayPhone}</Link>
                    <Text style={S.contactItem}>|</Text>
                    <Text style={S.contactItem}>{CONTACT.location}</Text>
                </View>
            </View>

            <View style={S.section}>
                <Text style={S.secTitle}>Perfil Profesional</Text>
                <Text style={S.summary}>{PROFILE_INFANTIL.summary}</Text>
            </View>

            <View style={S.section}>
                <Text style={S.secTitle}>Competencias</Text>
                <Text style={S.inlineList}>{INFANTIL_COMPETENCIAS.map((c) => c.label).join(' • ')}</Text>
            </View>

            <View style={S.section}>
                <Text style={S.secTitle}>Herramientas</Text>
                <Text style={S.inlineList}>{INFANTIL_HERRAMIENTAS.join(' • ')}</Text>
            </View>

            <View style={S.section}>
                <Text style={S.secTitle}>Experiencia Profesional</Text>

                {INFANTIL_EXPERIENCE.map((exp) => (
                    <View key={exp.company} style={S.expItem} wrap={false}>
                        <View style={S.expHeader}>
                            <Text style={S.expRole}>{exp.role}</Text>
                            <Text style={S.expPeriod}>{exp.period}</Text>
                        </View>
                        <Text style={S.expCompany}>{exp.company}</Text>
                        {exp.bullets.map((b) => (
                            <View key={b} style={S.bulletRow}>
                                <Text style={S.bulletDot}>•</Text>
                                <Text style={S.bulletText}>{b}</Text>
                            </View>
                        ))}
                    </View>
                ))}

                <Text style={S.groupBanner}>
                    {INFANTIL_EXPERIENCE_GROUPED.company} ({INFANTIL_EXPERIENCE_GROUPED.periodRange})
                </Text>
                {INFANTIL_EXPERIENCE_GROUPED.roles.map((role, idx) => (
                    <View key={role.title}>
                        {idx > 0 && <Text style={S.ascensoBadge}>↑ Ascenso</Text>}
                        <View style={S.expItem} wrap={false}>
                            <View style={S.expHeader}>
                                <Text style={S.expRole}>{role.title}</Text>
                                <Text style={S.expPeriod}>{role.period}</Text>
                            </View>
                            {role.bullets.map((b) => (
                                <View key={b} style={S.bulletRow}>
                                    <Text style={S.bulletDot}>•</Text>
                                    <Text style={S.bulletText}>{b}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>

            <View style={S.section}>
                <Text style={S.secTitle}>Educación</Text>
                {INFANTIL_EDUCATION.map((edu) => (
                    <View key={edu.school} style={{ marginTop: 4 }}>
                        <View style={S.eduRow}>
                            <Text style={S.eduDeg}>{edu.degree}</Text>
                            {edu.inProgress && <Text style={S.eduDate}>En curso</Text>}
                        </View>
                        <Text style={S.eduSch}>{edu.school}</Text>
                    </View>
                ))}
            </View>

            <View style={S.section}>
                <Text style={S.secTitle}>Certificaciones e Idiomas</Text>
                <Text style={S.inlineList}>
                    {[...INFANTIL_CERTIFICACIONES, ...INFANTIL_IDIOMAS.map((l) => `${l.language} (${l.level})`)].join(' • ')}
                </Text>
            </View>

            <View style={S.footer}>
                <Text style={S.footerText}>{CONTACT.name} · {PROFILE_INFANTIL.overline}</Text>
            </View>
        </Page>
    </Document>
);
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/PDF/InfantilCVDocumentATS.tsx
git commit -m "feat: add infantil ATS PDF document"
```

---

## Task 16: PDF — `InfantilCVDocument.tsx`

**Files:**
- Create: `src/components/PDF/InfantilCVDocument.tsx`

- [ ] **Step 1: Write the design-forward PDF**

Single-column but visually richer than the ATS version: terracotta top bar, bordered cards per role, chip-style competencias, two-column footer sections — the "visual" counterpart to `CVDocument.tsx`, styled with the infantil palette instead of the RH navy sidebar (a sidebar layout isn't part of the approved mockup):

```typescript
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import { CONTACT } from '../../data/infantil/contact';
import { PROFILE_INFANTIL } from '../../data/infantil/profile';
import { INFANTIL_COMPETENCIAS, INFANTIL_HERRAMIENTAS } from '../../data/infantil/skills';
import { INFANTIL_EDUCATION, INFANTIL_CERTIFICACIONES, INFANTIL_IDIOMAS } from '../../data/infantil/education';
import { INFANTIL_EXPERIENCE, INFANTIL_EXPERIENCE_GROUPED } from '../../data/infantil/experience';
import { INFANTIL_PDF_COLORS as C } from './styles/pdfColorsInfantil';

const S = StyleSheet.create({
    page: { flexDirection: 'column', backgroundColor: C.bg, fontFamily: 'Helvetica', paddingBottom: 40 },
    topBar: { height: 6, backgroundColor: C.terracotta },
    header: { paddingHorizontal: 50, paddingTop: 34, paddingBottom: 20 },
    overline: { fontSize: 9, letterSpacing: 2, color: C.terracotta, textTransform: 'uppercase', marginBottom: 8 },
    name: { fontFamily: 'Times-Roman', fontSize: 30, color: C.text, marginBottom: 6 },
    tagline: { fontFamily: 'Times-Italic', fontSize: 11, color: C.textMuted, marginBottom: 14, lineHeight: 1.5 },
    contactRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
    contactText: { fontSize: 9, color: C.textMuted },
    contactLink: { fontSize: 9, color: C.terracotta, textDecoration: 'none' },
    body: { paddingHorizontal: 50 },
    section: { marginBottom: 18 },
    secLabel: { fontSize: 9, letterSpacing: 2, color: C.terracotta, textTransform: 'uppercase', marginBottom: 4 },
    secTitle: { fontFamily: 'Times-Roman', fontSize: 16, color: C.text, marginBottom: 10 },
    summary: { fontSize: 10, color: C.textMuted, lineHeight: 1.6 },
    card: { backgroundColor: C.card, borderLeftWidth: 3, paddingVertical: 10, paddingHorizontal: 14, marginBottom: 10 },
    cardSage: { borderLeftColor: C.sage },
    cardTerracotta: { borderLeftColor: C.terracotta },
    cardMuted: { borderLeftColor: C.border },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
    cardCompany: { fontSize: 9, letterSpacing: 1, color: C.sage, textTransform: 'uppercase' },
    cardPeriod: { fontSize: 9, color: C.terracotta },
    cardRole: { fontFamily: 'Times-Roman', fontSize: 13, color: C.text, marginBottom: 6 },
    bulletRow: { flexDirection: 'row', marginBottom: 2, paddingLeft: 4 },
    bulletDot: { fontSize: 9, color: C.terracotta, marginRight: 5 },
    bulletText: { fontSize: 9, color: C.textMuted, lineHeight: 1.4, flex: 1 },
    groupHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6, marginTop: 4 },
    groupLabel: { fontSize: 9, letterSpacing: 1, color: C.label, textTransform: 'uppercase' },
    groupPeriod: { fontSize: 9, color: C.label, marginLeft: 'auto' },
    ascensoBadge: {
        fontSize: 8,
        fontWeight: 700,
        color: '#ffffff',
        backgroundColor: C.terracotta,
        alignSelf: 'flex-start',
        paddingVertical: 2,
        paddingHorizontal: 8,
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
    chip: { borderWidth: 1, paddingVertical: 4, paddingHorizontal: 8, fontSize: 8 },
    chipHighlighted: { borderColor: C.sage, backgroundColor: '#EEF3EF', color: C.sageDark },
    chipDefault: { borderColor: C.border, backgroundColor: C.card, color: C.textMuted },
    twoCol: { flexDirection: 'row', gap: 30 },
    col: { flex: 1 },
    listItem: { fontSize: 9, color: C.textMuted, marginBottom: 4 },
    eduDeg: { fontFamily: 'Times-Roman', fontSize: 10, color: C.text },
    eduSchool: { fontSize: 8, color: C.label, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 },
    footer: { marginTop: 'auto', paddingTop: 14, paddingHorizontal: 50 },
    footerText: { fontSize: 8, color: C.label, textAlign: 'center' },
});

export const InfantilCVDocument = () => (
    <Document>
        <Page size="A4" style={S.page}>
            <View style={S.topBar} />

            <View style={S.header}>
                <Text style={S.overline}>{PROFILE_INFANTIL.overline}</Text>
                <Text style={S.name}>{CONTACT.name}</Text>
                <Text style={S.tagline}>{PROFILE_INFANTIL.tagline}</Text>
                <View style={S.contactRow}>
                    <Link src={`mailto:${CONTACT.email}`} style={S.contactLink}>{CONTACT.email}</Link>
                    <Text style={S.contactText}>·</Text>
                    <Link src={`https://wa.me/${CONTACT.phone}`} style={S.contactLink}>{CONTACT.displayPhone}</Link>
                    <Text style={S.contactText}>·</Text>
                    <Text style={S.contactText}>{CONTACT.location}</Text>
                </View>
            </View>

            <View style={S.body}>
                <View style={S.section}>
                    <Text style={S.secLabel}>Perfil</Text>
                    <Text style={S.summary}>{PROFILE_INFANTIL.summary}</Text>
                </View>

                <View style={S.section}>
                    <Text style={S.secLabel}>Trayectoria</Text>
                    <Text style={S.secTitle}>Experiencia Profesional</Text>

                    {INFANTIL_EXPERIENCE.map((exp) => (
                        <View key={exp.company} style={[S.card, exp.accent === 'sage' ? S.cardSage : S.cardTerracotta]} wrap={false}>
                            <View style={S.cardHeader}>
                                <Text style={S.cardCompany}>{exp.company}</Text>
                                <Text style={S.cardPeriod}>{exp.period}</Text>
                            </View>
                            <Text style={S.cardRole}>{exp.role}</Text>
                            {exp.bullets.map((b) => (
                                <View key={b} style={S.bulletRow}>
                                    <Text style={S.bulletDot}>•</Text>
                                    <Text style={S.bulletText}>{b}</Text>
                                </View>
                            ))}
                        </View>
                    ))}

                    <View style={S.groupHeader}>
                        <Text style={S.groupLabel}>{INFANTIL_EXPERIENCE_GROUPED.company}</Text>
                        <Text style={S.groupPeriod}>{INFANTIL_EXPERIENCE_GROUPED.periodRange}</Text>
                    </View>
                    {INFANTIL_EXPERIENCE_GROUPED.roles.map((role, idx) => (
                        <View key={role.title} wrap={false}>
                            {idx > 0 && <Text style={S.ascensoBadge}>↑ Ascenso</Text>}
                            <View style={[S.card, role.variant === 'prominent' ? S.cardTerracotta : S.cardMuted]}>
                                <View style={S.cardHeader}>
                                    <Text style={S.cardRole}>{role.title}</Text>
                                    <Text style={S.cardPeriod}>{role.period}</Text>
                                </View>
                                {role.bullets.map((b) => (
                                    <View key={b} style={S.bulletRow}>
                                        <Text style={S.bulletDot}>•</Text>
                                        <Text style={S.bulletText}>{b}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View style={S.section}>
                    <Text style={S.secLabel}>Perfil</Text>
                    <Text style={S.secTitle}>Competencias</Text>
                    <View style={S.chipRow}>
                        {INFANTIL_COMPETENCIAS.map((tag) => (
                            <Text key={tag.label} style={[S.chip, tag.highlighted ? S.chipHighlighted : S.chipDefault]}>
                                {tag.label}
                            </Text>
                        ))}
                    </View>
                </View>

                <View style={[S.section, S.twoCol]}>
                    <View style={S.col}>
                        <Text style={S.secLabel}>Formación académica</Text>
                        <Text style={S.secTitle}>Educación</Text>
                        {INFANTIL_EDUCATION.map((edu) => (
                            <View key={edu.school} style={{ marginBottom: 8 }}>
                                <Text style={S.eduSchool}>{edu.school}{edu.inProgress ? ' · En curso' : ''}</Text>
                                <Text style={S.eduDeg}>{edu.degree}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={S.col}>
                        <Text style={S.secLabel}>Recursos</Text>
                        <Text style={S.secTitle}>Herramientas</Text>
                        {INFANTIL_HERRAMIENTAS.map((tool) => (
                            <Text key={tool} style={S.listItem}>• {tool}</Text>
                        ))}
                    </View>
                </View>

                <View style={[S.section, S.twoCol]}>
                    <View style={S.col}>
                        <Text style={S.secLabel}>Reconocimientos</Text>
                        <Text style={S.secTitle}>Certificaciones</Text>
                        {INFANTIL_CERTIFICACIONES.map((cert) => (
                            <Text key={cert} style={S.listItem}>✓ {cert}</Text>
                        ))}
                    </View>
                    <View style={S.col}>
                        <Text style={S.secLabel}>Comunicación</Text>
                        <Text style={S.secTitle}>Idiomas</Text>
                        {INFANTIL_IDIOMAS.map((lang) => (
                            <Text key={lang.language} style={S.listItem}>{lang.language} — {lang.level}</Text>
                        ))}
                    </View>
                </View>
            </View>

            <View style={S.footer}>
                <Text style={S.footerText}>{CONTACT.name} · {PROFILE_INFANTIL.overline}</Text>
            </View>
        </Page>
    </Document>
);
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/PDF/InfantilCVDocument.tsx
git commit -m "feat: add infantil design PDF document"
```

---

## Task 17: Infantil component — `Contacto.tsx`

**Files:**
- Create: `src/components/Infantil/Contacto.tsx`

- [ ] **Step 1: Write the Contacto section + footer**

Translates mockup lines 307-360. The download button reuses the existing `useDropdown` hook (`src/hooks/useDropdown.ts`) — same interaction pattern already used in `src/components/Sections/Hero.tsx` for the RH version's two-PDF-option menu:

```typescript
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { CONTACT } from '../../data/infantil/contact';
import { PROFILE_INFANTIL } from '../../data/infantil/profile';
import { useDropdown } from '../../hooks/useDropdown';
import { InfantilCVDocument } from '../PDF/InfantilCVDocument';
import { InfantilCVDocumentATS } from '../PDF/InfantilCVDocumentATS';

export const Contacto = () => {
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
                            <div className="flex items-center gap-3.5">
                                <FaEnvelope className="text-infantil-border" size={16} />
                                <span className="text-sm text-infantil-border">{CONTACT.email}</span>
                            </div>
                            <div className="flex items-center gap-3.5">
                                <FaWhatsapp className="text-infantil-border" size={16} />
                                <span className="text-sm text-infantil-border">{CONTACT.displayPhone}</span>
                            </div>
                            <div className="flex items-center gap-3.5">
                                <FaMapMarkerAlt className="text-infantil-border" size={16} />
                                <span className="text-sm text-infantil-border">{CONTACT.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0" data-no-print>
                        <button
                            ref={buttonRef}
                            type="button"
                            onClick={toggle}
                            className="inline-flex items-center gap-3 bg-infantil-bg px-10 py-5 text-[11px] font-medium tracking-[3px] text-infantil-text uppercase transition-colors hover:bg-infantil-button-hover"
                        >
                            <FaDownload size={13} />
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
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/Infantil/Contacto.tsx
git commit -m "feat: add infantil Contacto component with PDF downloads"
```

---

## Task 18: Infantil component — `InfantilVersion.tsx`

**Files:**
- Create: `src/components/Infantil/InfantilVersion.tsx`

- [ ] **Step 1: Compose all infantil sections**

```typescript
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Competencias } from './Competencias';
import { Formacion } from './Formacion';
import { Contacto } from './Contacto';

export const InfantilVersion = () => (
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
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/Infantil/InfantilVersion.tsx
git commit -m "feat: add InfantilVersion composed page"
```

---

## Task 19: Wire the switch into `App.tsx`

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace `App.tsx` to use `useVersion` and render both trees conditionally**

```typescript
import { useVersion } from './hooks/useVersion';
import { RHVersion } from './components/RHVersion';
import { InfantilVersion } from './components/Infantil/InfantilVersion';
import { VersionSwitcher } from './components/UI/VersionSwitcher';

function App() {
    const { version, toggleVersion } = useVersion();

    return (
        <>
            {version === 'rh' ? <RHVersion /> : <InfantilVersion />}
            <VersionSwitcher version={version} onToggle={toggleVersion} />
        </>
    );
}

export default App;
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: wire VersionSwitcher and conditional rendering into App"
```

---

## Task 20: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Full build and lint**

Run: `npm run build`
Expected: exits with code 0, no TypeScript errors.

Run: `npm run lint`
Expected: exits with code 0, no ESLint errors.

- [ ] **Step 2: Browser QA with Playwright MCP tools**

Run: `npm run dev` in the background (default port 5173).

1. `mcp__playwright__browser_navigate` to `http://localhost:5173`.
2. `mcp__playwright__browser_snapshot` — confirm the RH version renders (Navbar, Hero, Experience, About, Projects, Skills, Languages, Contact, Footer) and the floating "Ver versión Educación Infantil" button is visible in the bottom-right corner.
3. `mcp__playwright__browser_take_screenshot` — save a screenshot of the RH version for the regression record.
4. `mcp__playwright__browser_click` the floating switcher button.
5. `mcp__playwright__browser_snapshot` — confirm the page now shows the infantil version: Hero with "Regina Salazar / Marcelino" and the "Técnico Puericultista" overline, Experiencia with 4 roles (Jardín de Niños, Instituto de la Mujer, and the grouped Sonora Grill Prime block with the "↑ Ascenso" badge between its two roles), Competencias grid, Formación (Educación + Herramientas + Certificaciones + Idiomas), and the dark Contacto section with the "Descargar CV — PDF" button. The floating button should now read "Ver versión Recursos Humanos".
6. `mcp__playwright__browser_take_screenshot` — save a screenshot of the infantil version.
7. `mcp__playwright__browser_click` the anchor nav links in the Hero ("Experiencia", "Competencias", "Formación", "Contacto") one at a time and confirm each scrolls to the matching section.
8. `mcp__playwright__browser_click` the "Descargar CV — PDF" button in the Contacto section, confirm the dropdown with "CV Visual" and "CV Simple (ATS)" options appears, and `mcp__playwright__browser_console_messages` shows no errors related to PDF generation.
9. Reload the page (`mcp__playwright__browser_navigate` to the same URL) and confirm the infantil version is still shown (localStorage persistence works).
10. Click the switcher again, confirm it returns to the RH version with no visual regressions versus the Step 3 screenshot.
11. Stop the dev server.

Expected: all of the above pass with no console errors and no visual regressions on the RH version.

- [ ] **Step 3: Final commit (only if Step 2 required fixes)**

If Step 2 surfaced any issue that required a code fix, commit it now with a message describing exactly what was wrong and how it was fixed. If everything passed as-is, there is nothing to commit in this task.
