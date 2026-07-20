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
- `experience.ts` — **no reutiliza la interfaz `ExperienceItem` de RH** (esa trae `duration`, `achievements` separados e `icon: IconType`, que el mockup no usa). Estructura propia con dos formas:
  - Entradas simples (Jardín de Niños "Esperanza", Instituto de la Mujer): `{ company, role, period, bullets: string[] }`.
  - Entrada agrupada (Sonora Grill Prime): `{ company: 'Sonora Grill Prime', periodRange: 'abr 2020 – feb 2026', roles: [{ title, period, bullets, variant: 'muted' }, { title, period, bullets, variant: 'prominent' }] }` — el badge "↑ Ascenso" se renderiza entre `roles[0]` y `roles[1]`, no es parte de los datos.
  - El mockup no separa "logros" del resto de bullets (a diferencia del ATS de RH que sí tiene `achieveBox`); todo va en una sola lista `bullets` por rol.
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

- Agregar a `index.html` el `<link>` de Google Fonts con los pesos exactos que usa el mockup — si se omiten pesos, el navegador simula bold/italic y se pierde la fidelidad tipográfica: `family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500` (junto a las fuentes actuales Inter/Merriweather, que no se tocan).
- Extender `src/index.css` `@theme` con tokens propios prefijados para no chocar con la paleta RH (teal/rose). Revisé el mockup color por color; la lista original del spec estaba incompleta — set completo:
  - `--color-infantil-bg: #FAF7F2` (fondo general)
  - `--color-infantil-card: #FDFAF6` (tarjetas)
  - `--color-infantil-section-alt: #F0EBE1` (fondo sección Competencias)
  - `--color-infantil-text: #2C2416` (texto principal / fondo sección Contacto)
  - `--color-infantil-text-muted: #6B5744` (texto secundario, bullets)
  - `--color-infantil-text-faint: #8A7A6A` (texto del rol "muted" — Asistente de Ludoteca, antes del ascenso)
  - `--color-infantil-label: #9B8B7A` (labels de empresa/fecha secundarios: banner Sonora Grill Prime, "UVEG"/"CETIS", badge "Nativo")
  - `--color-infantil-terracotta: #C4724A` (acento primario: overline, fechas, botón Contacto, border-left del rol destacado)
  - `--color-infantil-terracotta-hover: #B5633C` (hover del botón Contacto)
  - `--color-infantil-sage: #7B9E87` (acento secundario: border-left Jardín/Instituto, ícono check certificaciones)
  - `--color-infantil-sage-dark: #4A7560` (texto de los 4 tags de competencia destacados)
  - `--color-infantil-border: #D4C5B0` (divisores principales, borde de tags/nav)
  - `--color-infantil-border-soft: #E8DFD5` (divisores dentro del bloque Sonora Grill Prime, badge Ascenso)
  - `--color-infantil-button-hover: #EDE7DC` (hover del botón "Descargar CV" sobre fondo oscuro)
  - `--color-infantil-footer: #231E12` (fondo del footer, más oscuro que la sección Contacto)
  - `--font-infantil-serif: 'Cormorant Garamond', serif`
  - `--font-infantil-sans: 'DM Sans', sans-serif`
- Los componentes de `src/components/Infantil/` usan estos tokens vía clases Tailwind (`bg-infantil-bg`, `font-infantil-serif`, etc.), quedando aislados del tema RH. Los anillos decorativos del Hero y el fondo de los 4 tags destacados usan estos mismos colores con alpha (`rgba`) — Tailwind v4 permite esto con la sintaxis `bg-infantil-sage/12` (opacidad) directamente sobre el token, sin necesitar tokens rgba separados.

## 7. PDFs

**Nota:** el mockup de Claude Design implementa el botón "Descargar CV — PDF" con `window.print()` (impresión nativa del navegador) — es el comportamiento por defecto que pone la herramienta de diseño, no un requisito del usuario. Se descarta: se reemplaza por documentos `@react-pdf/renderer` reales, igual que la versión RH (mejor control de layout, resultado más limpio, y una variante ATS-friendly que `window.print()` no puede ofrecer).

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
