# Diseño: Segunda versión del CV (Educación Infantil) + switch entre versiones

**Fecha:** 2026-07-19
**Estado:** Aprobado por el usuario, listo para plan de implementación.

## 1. Objetivo

Agregar una segunda versión completa del CV web de Regina Salazar Marcelino, enfocada en educación infantil/puericultura, que convive en el mismo proyecto que la versión actual de Recursos Humanos (RH). Un botón permite alternar entre ambas versiones sin salir del sitio; cada versión tiene su propio PDF descargable.

## 2. No-goals / restricciones

- La versión RH actual (componentes, datos, PDFs existentes) **no se modifica**.
- No se inventa ni exagera experiencia: el contenido de la versión infantil sale del mockup aprobado (ver §7) y de la memoria de proyecto `project-infantil-cv-content`.
- No se usa router (no hay necesidad — es un toggle de estado local, no navegación por URL).
- El mockup de Claude Design (`Regina Salazar CV.dc.html`) es la fuente de verdad visual: paleta, tipografía y estructura de secciones se replican tal cual, no se fuerza dentro del layout/Navbar de la versión RH.

## 3. Arquitectura del switch

- Nuevo `VersionContext` (React Context) con estado `version: 'rh' | 'infantil'`, default `'rh'`, persistido en `localStorage` (`cv-version`).
- `App.tsx` envuelve el árbol en `VersionProvider` y renderiza condicionalmente `<RHVersion />` o `<InfantilVersion />` según el contexto — dos árboles de componentes separados, no un layout compartido forzado.
- Botón de switch: componente `VersionSwitcher`, posición fija (`fixed`, esquina, `z-50`), visible en ambas versiones independientemente de qué árbol esté montado (se renderiza a nivel de `App.tsx`, fuera de los dos árboles condicionales). Toggle simple entre los dos valores.
- `RHVersion` es un refactor mínimo: mueve el contenido actual de `App.tsx` (Navbar, Hero, Experience, About, Projects, Skills, Languages, Contact, Footer) a un componente propio, sin cambiar su implementación interna.

## 4. Capa de datos

Nuevo directorio `src/data/infantil/`, mismo patrón SSOT que `src/data/*.ts` actual:

- `profile.ts` — perfil, tagline, overline ("Técnico Puericultista"), resumen (7+ años).
- `experience.ts` — 4 entradas (Jardín de Niños "Esperanza", Instituto de la Mujer, Sonora Grill Prime × 2 roles agrupados con marcador de ascenso), siguiendo la forma de `ExperienceItem` ya usada pero con campos propios (no reutiliza `EXPERIENCE_DATA` de RH).
- `skills.ts` — competencias (16 tags) + herramientas (6 ítems).
- `education.ts` — educación (UVEG en curso + CETIS #10), certificaciones (4), idiomas (Español nativo).
- `contact.ts` — reexporta el `CONTACT` real existente (`src/data/contact.ts`); la versión infantil solo cambia el `role`/`description` mostrados, no el correo/teléfono/ubicación.

## 5. Capa de componentes

Nuevo directorio `src/components/Infantil/` con secciones propias que traducen el mockup a componentes React + Tailwind:

- `Hero.tsx` — overline, nombre en Cormorant Garamond, divisor decorativo, tagline itálica, resumen, nav de anclas (Experiencia/Competencias/Formación/Contacto).
- `Experience.tsx` — timeline de 4 tarjetas (border-left color según empresa), con el bloque agrupado de Sonora Grill Prime (banner de empresa + badge "↑ Ascenso" entre los dos roles).
- `Competencias.tsx` — grid de tags (fondo salvia claro para 4 destacadas, resto neutro).
- `Formacion.tsx` — columna de Educación + columna de Herramientas/Certificaciones/Idiomas.
- `Contacto.tsx` — fondo oscuro, datos de contacto reales + botón "Descargar CV — PDF".
- `Footer` simple integrado en `Contacto.tsx` (una línea, como en el mockup) — no se reutiliza el `Footer.tsx` de RH.
- `InfantilVersion.tsx` — compone las secciones anteriores en orden.

Los estilos se implementan con Tailwind (clases utilitarias + `@theme` nuevo, ver §6), no con los `style=""` inline del export de Claude Design — el mockup es la referencia visual, no el código final.

## 6. Theming

- Agregar a `index.html` el `<link>` de Google Fonts para Cormorant Garamond + DM Sans (junto a las fuentes actuales Inter/Merriweather).
- Extender `src/index.css` `@theme` con tokens propios prefijados para no chocar con la paleta RH (teal/rose): `--color-infantil-bg: #FAF7F2`, `--color-infantil-card: #FDFAF6`, `--color-infantil-section-alt: #F0EBE1`, `--color-infantil-text: #2C2416`, `--color-infantil-text-muted: #6B5744`, `--color-infantil-terracotta: #C4724A`, `--color-infantil-sage: #7B9E87`, `--color-infantil-border: #D4C5B0`, `--font-infantil-serif: 'Cormorant Garamond', serif`, `--font-infantil-sans: 'DM Sans', sans-serif`.
- Los componentes de `src/components/Infantil/` usan estos tokens vía clases Tailwind (`bg-infantil-bg`, `font-infantil-serif`, etc.), quedando aislados del tema RH.

## 7. PDFs

Dos documentos nuevos con `@react-pdf/renderer`, paralelos a los existentes:

- `src/components/PDF/InfantilCVDocument.tsx` — versión con diseño (paleta cálida: terracota/salvia sobre crema), análoga a `CVDocument.tsx`.
- `src/components/PDF/InfantilCVDocumentATS.tsx` — versión ATS de una columna, análoga a `CVDocumentATS.tsx`, misma estructura de bloques (Perfil, Competencias, Herramientas, Experiencia, Educación, Certificaciones/Idiomas) pero alimentada por `src/data/infantil/*`.
- Nueva paleta de estilos para PDF en `src/components/PDF/styles/pdfColorsInfantil.ts` (análoga a `pdfColors.ts` / `ATS_COLORS`), derivada de los hex del mockup.
- El botón "Descargar CV — PDF" en `Contacto.tsx` (versión infantil) y el botón de descarga existente en la versión RH usan el `PDFDownloadLink` correspondiente a su propio documento — no hay lógica condicional dentro de un mismo botón, cada árbol de versión trae el suyo.

## 8. Contenido de referencia

El contenido textual completo (perfil, las 4 experiencias con su texto exacto, competencias, herramientas, certificaciones) ya está aprobado y documentado en:
- Mockup fuente: `Regina Salazar CV.dc.html` (Claude Design export, compartido por el usuario).
- Memoria de proyecto: `project-infantil-cv-content` (contenido aprobado), `project-dual-cv-switch` (plan arquitectónico).

Estos son la fuente de verdad para poblar `src/data/infantil/*.ts` — no se debe reinterpretar ni resumir de más.

## 9. Verificación

- `pnpm build` (o `npm run build`) sin errores de TypeScript.
- Verificación manual en navegador: toggle cambia entre versiones sin recarga, persiste tras refresh (localStorage), ambas versiones responsive (mobile/desktop), descarga de PDF correcto según versión activa.
- Confirmar visualmente que la versión RH no cambió (regresión visual).
