import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
import { CONTACT } from '../../data/contact';
import { PDF_SKILLS, PDF_COMPETENCIAS } from '../../data/skills';
import { PDF_EXPERIENCE } from '../../data/experience';

// ─── Fuente ────────────────────────────────────────────────────────────────────
Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-lightitalic-webfont.ttf', fontStyle: 'italic', fontWeight: 300 },
    ],
});

// ─── Paleta de Colores ──────────────────────────────────────────────────────────
const C = {
    // Sidebar – Azul marino profesional
    sidebar: '#1a2e4a',
    sidebarAlt: '#223355',
    sidebarLine: '#2d4a73',
    sidebarText: '#cdd8e8',
    sidebarMuted: '#8fa8c8',
    accent: '#4fb3d8',   // Azul claro / turquesa
    accentWarm: '#f0b429',   // Ámbar dorado para logros
    // Cuerpo principal
    white: '#ffffff',
    bgAlt: '#f7f9fc',
    bgSection: '#edf2f8',
    textDark: '#0f1c2e',
    textMain: '#1e3048',
    textSub: '#4a6080',
    textMuted: '#7a92ab',
    border: '#dce6f0',
    // Badges
    badgeBg: '#e8f4fd',
    badgeBorder: '#b3d8f0',
    badgeText: '#1a4a6e',
    // Logros
    achieveBg: '#fffbeb',
    achieveBorder: '#fbbf24',
    achieveText: '#92400e',
};

// ─── Estilos ────────────────────────────────────────────────────────────────────
const S = StyleSheet.create({
    // ── Página
    page: {
        flexDirection: 'row',
        backgroundColor: C.white,
        fontFamily: 'Roboto',
        padding: 0,
    },

    // ══ SIDEBAR ════════════════════════════════════════════════════════════════
    sidebar: {
        width: 185,
        backgroundColor: C.sidebar,
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 18,
        flexDirection: 'column',
    },

    // Foto
    photoContainer: {
        alignItems: 'center',
        marginBottom: 14,
    },
    photo: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: C.accent,
    },
    initialsBox: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: C.sidebarAlt,
        borderWidth: 3,
        borderColor: C.accent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    initials: {
        fontSize: 26,
        fontWeight: 700,
        color: C.accent,
    },

    // Nombre y puesto (sidebar)
    sidebarName: {
        fontSize: 13,
        fontWeight: 700,
        color: C.white,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 4,
    },
    sidebarRole: {
        fontSize: 8.5,
        color: C.accent,
        textAlign: 'center',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 18,
    },

    // Separador sidebar
    sidebarDivider: {
        height: 1,
        backgroundColor: C.sidebarLine,
        marginBottom: 14,
    },

    // Título de sección sidebar
    sideSecTitle: {
        fontSize: 8.5,
        fontWeight: 700,
        color: C.accent,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 8,
    },

    // ── Contacto sidebar
    contactBlock: {
        marginBottom: 16,
    },
    contactItem: {
        flexDirection: 'row',
        marginBottom: 6,
        alignItems: 'flex-start',
    },
    contactDot: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: C.accent,
        marginRight: 7,
        marginTop: 3,
    },
    contactText: {
        fontSize: 8,
        color: C.sidebarText,
        flex: 1,
        lineHeight: 1.3,
    },
    contactLink: {
        fontSize: 8,
        color: C.accent,
        flex: 1,
        textDecoration: 'none',
        lineHeight: 1.3,
    },

    // ── Competencias sidebar (pills)
    compBlock: {
        marginBottom: 16,
    },
    compPill: {
        backgroundColor: C.sidebarAlt,
        borderLeftWidth: 2,
        borderLeftColor: C.accent,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginBottom: 4,
        borderRadius: 2,
    },
    compText: {
        fontSize: 7.5,
        color: C.sidebarText,
        lineHeight: 1.2,
    },

    // ── Educación sidebar
    eduBlock: {
        marginBottom: 16,
    },
    eduItem: {
        marginBottom: 10,
    },
    eduDeg: {
        fontSize: 8,
        fontWeight: 700,
        color: C.white,
        marginBottom: 2,
        lineHeight: 1.3,
    },
    eduSch: {
        fontSize: 7.5,
        color: C.accent,
        fontWeight: 500,
    },
    eduDate: {
        fontSize: 7,
        color: C.sidebarMuted,
        marginTop: 2,
    },

    // ── Idiomas sidebar
    langBlock: {
        marginBottom: 16,
    },
    langRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    langName: {
        fontSize: 8,
        color: C.sidebarText,
        fontWeight: 500,
    },
    langBadge: {
        backgroundColor: C.accent,
        borderRadius: 8,
        paddingVertical: 1,
        paddingHorizontal: 6,
    },
    langBadgeText: {
        fontSize: 7,
        color: C.sidebar,
        fontWeight: 700,
    },

    // ── Herramientas sidebar
    toolBlock: {
        marginBottom: 16,
    },
    toolItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    toolDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: C.accent,
        marginRight: 7,
    },
    toolText: {
        fontSize: 7.5,
        color: C.sidebarText,
        flex: 1,
        lineHeight: 1.2,
    },

    // ── Certificaciones sidebar
    certBlock: {
        marginBottom: 16,
    },
    certItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 5,
    },
    certDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: C.accentWarm,
        marginRight: 7,
        marginTop: 3,
    },
    certText: {
        fontSize: 7.5,
        color: C.sidebarText,
        flex: 1,
        lineHeight: 1.3,
    },

    // ── Voluntariado sidebar
    volBlock: {
        marginBottom: 8,
    },
    volText: {
        fontSize: 7.5,
        color: C.sidebarText,
        lineHeight: 1.35,
    },
    volOrg: {
        fontSize: 7,
        color: C.sidebarMuted,
        marginTop: 2,
    },

    // ══ CONTENIDO PRINCIPAL ════════════════════════════════════════════════════
    main: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 24,
        flexDirection: 'column',
    },

    // ── Cabecera principal (página 2)
    mainHeader: {
        marginBottom: 20,
        paddingBottom: 12,
        borderBottomWidth: 2,
        borderBottomColor: C.accent,
    },
    mainName: {
        fontSize: 22,
        fontWeight: 700,
        color: C.textDark,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: 3,
    },
    mainRole: {
        fontSize: 10,
        fontWeight: 500,
        color: C.accent,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },

    // ── Sección principal – título
    secHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        marginTop: 14,
    },
    secAccentBar: {
        width: 4,
        height: 16,
        backgroundColor: C.accent,
        borderRadius: 2,
        marginRight: 8,
    },
    secTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: C.textDark,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
    secLine: {
        height: 1,
        backgroundColor: C.border,
        marginBottom: 10,
    },

    // ── Perfil profesional (summary)
    summary: {
        fontSize: 9,
        color: C.textSub,
        lineHeight: 1.6,
        textAlign: 'justify',
    },

    // ── Métricas clave (3 cajitas)
    metricsRow: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 10,
        marginBottom: 4,
    },
    metricBox: {
        flex: 1,
        backgroundColor: C.bgSection,
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 6,
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: C.accent,
    },
    metricValue: {
        fontSize: 16,
        fontWeight: 700,
        color: C.accent,
        marginBottom: 2,
    },
    metricLabel: {
        fontSize: 7,
        color: C.textSub,
        textAlign: 'center',
        lineHeight: 1.3,
    },

    // ── Herramientas digitales (badges compactos)
    badgeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginBottom: 4,
    },
    badge: {
        backgroundColor: C.badgeBg,
        borderWidth: 1,
        borderColor: C.badgeBorder,
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 9,
    },
    badgeText: {
        fontSize: 7.5,
        color: C.badgeText,
        fontWeight: 500,
    },

    // ══ EXPERIENCIA (página 2) ════════════════════════════════════════════════
    expItem: {
        marginBottom: 14,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: C.border,
    },
    expItemLast: {
        marginBottom: 14,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    expRole: {
        fontSize: 10.5,
        fontWeight: 700,
        color: C.textDark,
        flex: 1,
    },
    expPeriodPill: {
        backgroundColor: C.accent,
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 8,
    },
    expPeriod: {
        fontSize: 7.5,
        color: C.white,
        fontWeight: 500,
    },
    expCompany: {
        fontSize: 8.5,
        color: C.textSub,
        fontWeight: 500,
        marginBottom: 6,
    },
    expDesc: {
        fontSize: 8.5,
        color: C.textMain,
        fontWeight: 700,
        marginBottom: 6,
        lineHeight: 1.4,
    },
    bulletRow: {
        flexDirection: 'row',
        marginBottom: 3,
        paddingLeft: 4,
    },
    bulletArrow: {
        fontSize: 8,
        color: C.accent,
        marginRight: 5,
        fontWeight: 700,
    },
    bulletText: {
        fontSize: 8,
        color: C.textSub,
        lineHeight: 1.35,
        flex: 1,
    },

    // ── Logros
    achieveBox: {
        backgroundColor: C.achieveBg,
        borderRadius: 6,
        padding: 8,
        marginTop: 8,
        borderLeftWidth: 3,
        borderLeftColor: C.accentWarm,
    },
    achieveLabel: {
        fontSize: 8,
        fontWeight: 700,
        color: C.achieveText,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 5,
    },
    achieveRow: {
        flexDirection: 'row',
        marginBottom: 3,
        alignItems: 'flex-start',
    },
    achieveStar: {
        fontSize: 7.5,
        color: C.accentWarm,
        marginRight: 5,
        marginTop: 1,
    },
    achieveText: {
        fontSize: 8,
        color: C.achieveText,
        flex: 1,
        lineHeight: 1.3,
    },
});

// ─── Helper: Sección con barra lateral y línea ──────────────────────────────────
const SideSecTitle = ({ title }: { title: string }) => (
    <Text style={S.sideSecTitle}>{title}</Text>
);

// ─── Helper: Sección principal con barra de acento ─────────────────────────────
const MainSection = ({ title }: { title: string }) => (
    <>
        <View style={S.secHeader}>
            <View style={S.secAccentBar} />
            <Text style={S.secTitle}>{title}</Text>
        </View>
        <View style={S.secLine} />
    </>
);

// ─── Componente principal ──────────────────────────────────────────────────────
export const CVDocument = () => (
    <Document>

        {/* ═══════════════════ PÁGINA 1 ═══════════════════ */}
        <Page size="A4" style={S.page}>

            {/* ── Sidebar */}
            <View style={S.sidebar}>

                {/* Foto */}
                <View style={S.photoContainer}>
                    <Image style={S.photo} src="/assets/images/profile.jpeg" />
                </View>

                {/* Nombre y puesto */}
                <Text style={S.sidebarName}>{CONTACT.name}</Text>
                <Text style={S.sidebarRole}>{CONTACT.role}</Text>
                <View style={S.sidebarDivider} />

                {/* Contacto */}
                <View style={S.contactBlock}>
                    <SideSecTitle title="Contacto" />

                    <View style={S.contactItem}>
                        <View style={S.contactDot} />
                        <Link src={`mailto:${CONTACT.email}`} style={S.contactLink}>
                            {CONTACT.email}
                        </Link>
                    </View>

                    <View style={S.contactItem}>
                        <View style={S.contactDot} />
                        <Link src={`https://wa.me/${CONTACT.phone}`} style={S.contactLink}>
                            {CONTACT.displayPhone}
                        </Link>
                    </View>

                    <View style={S.contactItem}>
                        <View style={S.contactDot} />
                        <Text style={S.contactText}>{CONTACT.location}</Text>
                    </View>

                    <View style={S.contactItem}>
                        <View style={S.contactDot} />
                        <Text style={S.contactText}>Disponibilidad inmediata</Text>
                    </View>
                </View>

                <View style={S.sidebarDivider} />

                {/* Educación */}
                <View style={S.eduBlock}>
                    <SideSecTitle title="Educación" />
                    <View style={S.eduItem}>
                        <Text style={S.eduDeg}>Lic. en Gestión y Desarrollo Empresarial</Text>
                        <Text style={S.eduSch}>UVEG</Text>
                        <Text style={S.eduDate}>2024 – Actualidad • En línea</Text>
                    </View>
                    <View style={S.eduItem}>
                        <Text style={S.eduDeg}>Técnico Puericultista</Text>
                        <Text style={S.eduSch}>CETIS #10</Text>
                        <Text style={S.eduDate}>2015 – 2018</Text>
                    </View>
                </View>

                <View style={S.sidebarDivider} />

                {/* Idiomas */}
                <View style={S.langBlock}>
                    <SideSecTitle title="Idiomas" />
                    <View style={S.langRow}>
                        <Text style={S.langName}>Español</Text>
                        <View style={S.langBadge}>
                            <Text style={S.langBadgeText}>Nativo</Text>
                        </View>
                    </View>
                </View>

                <View style={S.sidebarDivider} />

                {/* Certificaciones */}
                <View style={S.certBlock}>
                    <SideSecTitle title="Certificaciones" />
                    {['Primeros Auxilios – Protección Civil', 'Manejo de Contenido Digital'].map((c, i) => (
                        <View key={i} style={S.certItem}>
                            <View style={S.certDot} />
                            <Text style={S.certText}>{c}</Text>
                        </View>
                    ))}
                </View>

                <View style={S.sidebarDivider} />

                {/* Voluntariado */}
                <View style={S.volBlock}>
                    <SideSecTitle title="Voluntariado" />
                    <Text style={S.volText}>Fundación Infantil{'\n'}"La Esperanza de los Niños A.C."</Text>
                    <Text style={S.volOrg}>9 meses • Apoyo infantil</Text>
                </View>

            </View>

            {/* ── Cuerpo principal */}
            <View style={S.main}>

                {/* Perfil profesional */}
                <MainSection title="Perfil Profesional" />
                <Text style={S.summary}>
                    Profesional de Recursos Humanos con más de 4 años de experiencia en gestión integral de RRHH: reclutamiento y selección, administración de nómina, capacitación y desarrollo organizacional. He liderado equipos de hasta 50 colaboradores y coordinado operaciones en 23 sucursales. Resultados comprobados: reducción del 25% en rotación de personal, optimización del 33% en tiempos de contratación y ahorro del 15% en costos operativos. Dominio de Excel avanzado, portales de empleo y herramientas digitales. Licenciatura en Gestión Empresarial en curso. Disponibilidad inmediata.
                </Text>

                {/* Métricas clave */}
                <View style={S.metricsRow}>
                    <View style={S.metricBox}>
                        <Text style={S.metricValue}>4+</Text>
                        <Text style={S.metricLabel}>Años de{'\n'}Experiencia</Text>
                    </View>
                    <View style={S.metricBox}>
                        <Text style={S.metricValue}>23</Text>
                        <Text style={S.metricLabel}>Sucursales{'\n'}Gestionadas</Text>
                    </View>
                    <View style={S.metricBox}>
                        <Text style={S.metricValue}>50+</Text>
                        <Text style={S.metricLabel}>Colaboradores{'\n'}a cargo</Text>
                    </View>
                    <View style={S.metricBox}>
                        <Text style={S.metricValue}>−25%</Text>
                        <Text style={S.metricLabel}>Rotación{'\n'}reducida</Text>
                    </View>
                </View>

                {/* ── Comienzo de Experiencia (Página 1) */}
                <MainSection title="Experiencia Profesional" />
                <View style={S.expItemLast} wrap={false}>
                    <View style={S.expHeader}>
                        <Text style={S.expRole}>{PDF_EXPERIENCE[0].role}</Text>
                        <View style={S.expPeriodPill}>
                            <Text style={S.expPeriod}>{PDF_EXPERIENCE[0].period}</Text>
                        </View>
                    </View>
                    <Text style={S.expCompany}>{PDF_EXPERIENCE[0].company}</Text>
                    <Text style={S.expDesc}>{PDF_EXPERIENCE[0].desc}</Text>

                    {PDF_EXPERIENCE[0].bullets.map((b, i) => (
                        <View key={i} style={S.bulletRow}>
                            <Text style={S.bulletArrow}>•</Text>
                            <Text style={S.bulletText}>{b}</Text>
                        </View>
                    ))}

                    {PDF_EXPERIENCE[0].achievements && (
                        <View style={S.achieveBox}>
                            <Text style={S.achieveLabel}>LOGROS DESTACADOS</Text>
                            {PDF_EXPERIENCE[0].achievements.map((a, i) => (
                                <View key={i} style={S.achieveRow}>
                                    <Text style={S.achieveStar}>-</Text>
                                    <Text style={S.achieveText}>{a}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

            </View>
        </Page>

        {/* ═══════════════════ PÁGINA 2 – EXPERIENCIA ═══════════════════ */}
        <Page size="A4" style={S.page}>

            {/* Sidebar decorativo p.2 */}
            <View style={[S.sidebar, { paddingTop: 24 }]}>
                {/* Nombre compacto */}
                <Text style={[S.sidebarName, { fontSize: 11, marginBottom: 2 }]}>{CONTACT.name}</Text>
                <Text style={[S.sidebarRole, { marginBottom: 18 }]}>{CONTACT.role}</Text>
                <View style={S.sidebarDivider} />

                {/* Competencias (lista) */}
                <View style={S.compBlock}>
                    <SideSecTitle title="Áreas de Especialidad" />
                    {PDF_COMPETENCIAS.map((c, i) => (
                        <View key={i} style={S.compPill}>
                            <Text style={S.compText}>{c}</Text>
                        </View>
                    ))}
                </View>

                <View style={S.sidebarDivider} />

                {/* Herramientas (lista) */}
                <View style={S.toolBlock}>
                    <SideSecTitle title="Herramientas" />
                    {PDF_SKILLS.map((s, i) => (
                        <View key={i} style={S.toolItem}>
                            <View style={S.toolDot} />
                            <Text style={S.toolText}>{s}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* ── Cuerpo principal p.2 */}
            <View style={[S.main, { paddingTop: 20 }]}>
                <MainSection title="Experiencia Profesional" />

                {PDF_EXPERIENCE.slice(1).map((exp, idx) => (
                    <View
                        key={idx}
                        style={idx < PDF_EXPERIENCE.slice(1).length - 1 ? S.expItem : S.expItemLast}
                        wrap={false}
                    >
                        {/* Cabecera del puesto */}
                        <View style={S.expHeader}>
                            <Text style={S.expRole}>{exp.role}</Text>
                            <View style={S.expPeriodPill}>
                                <Text style={S.expPeriod}>{exp.period}</Text>
                            </View>
                        </View>
                        <Text style={S.expCompany}>{exp.company}</Text>
                        <Text style={S.expDesc}>{exp.desc}</Text>

                        {/* Bullets de funciones */}
                        {exp.bullets.map((b, i) => (
                            <View key={i} style={S.bulletRow}>
                                <Text style={S.bulletArrow}>•</Text>
                                <Text style={S.bulletText}>{b}</Text>
                            </View>
                        ))}

                        {/* Logros destacados */}
                        {exp.achievements && (
                            <View style={S.achieveBox}>
                                <Text style={S.achieveLabel}>LOGROS DESTACADOS</Text>
                                {exp.achievements.map((a, i) => (
                                    <View key={i} style={S.achieveRow}>
                                        <Text style={S.achieveStar}>-</Text>
                                        <Text style={S.achieveText}>{a}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))}

            </View>
        </Page>

    </Document>
);
