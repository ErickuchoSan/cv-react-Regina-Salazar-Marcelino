import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
import { CONTACT } from '../../data/contact';
import { PDF_SKILLS, PDF_COMPETENCIAS } from '../../data/skills';
import { PDF_EXPERIENCE } from '../../data/experience';

// Register Roboto font
Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-lightitalic-webfont.ttf', fontStyle: 'italic' },
    ],
});

// Professional Color Palette
const C = {
    primary: '#0d9488',       // Teal 600
    primaryLight: '#ccfbf1',  // Teal 100
    primaryDark: '#115e59',   // Teal 800
    accent: '#0891b2',        // Cyan 600
    headerBg: '#f0fdfa',      // Teal 50
    white: '#ffffff',
    textDark: '#0f172a',      // Slate 900
    textMain: '#1e293b',      // Slate 800
    textSub: '#475569',       // Slate 600
    textMuted: '#64748b',     // Slate 500
    border: '#e2e8f0',        // Slate 200
    badgeBg: '#f0fdfa',
    badgeBorder: '#99f6e4',
    achieveBg: '#fef3c7',     // Amber 100
    achieveText: '#92400e',   // Amber 800
};

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: C.white,
        fontFamily: 'Roboto',
        padding: 0,
    },

    // HEADER - Modern Design
    header: {
        backgroundColor: C.headerBg,
        paddingVertical: 24,
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 24,
        borderRadius: 12,
        borderLeftWidth: 4,
        borderLeftColor: C.primary,
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
        borderWidth: 3,
        borderColor: C.white,
    },
    headerText: { flex: 1 },
    name: {
        fontSize: 22,
        fontWeight: 700,
        color: C.primary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 4,
    },
    roleText: {
        fontSize: 11,
        color: C.textMain,
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 10,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 8,
    },
    contactItem: { fontSize: 9, color: C.textSub },
    contactLink: { fontSize: 9, color: C.primary, textDecoration: 'none', fontWeight: 500 },
    contactDivider: { fontSize: 9, color: C.primary, marginHorizontal: 4 },

    // BODY
    body: { paddingTop: 20, paddingHorizontal: 28, paddingBottom: 20 },

    // SECTION HEADERS
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    sectionIcon: {
        width: 20,
        height: 20,
        borderRadius: 4,
        backgroundColor: C.primary,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionIconText: {
        color: C.white,
        fontSize: 10,
        fontWeight: 700,
    },
    secTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: C.textDark,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    secLine: {
        height: 2,
        backgroundColor: C.primary,
        marginBottom: 12,
        borderRadius: 1,
    },

    // PROFILE SUMMARY
    summary: {
        fontSize: 9.5,
        color: C.textSub,
        lineHeight: 1.5,
        marginBottom: 18,
        textAlign: 'justify',
        paddingHorizontal: 4,
    },

    // BADGES - Modern Pills
    badgeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 16,
    },
    badge: {
        backgroundColor: C.badgeBg,
        borderWidth: 1,
        borderColor: C.badgeBorder,
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    badgeText: {
        fontSize: 8,
        color: C.primaryDark,
        fontWeight: 500,
    },

    // TWO COLUMNS
    twoCol: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        gap: 20,
    },
    col50: { width: '48%' },

    // EDUCATION
    eduItem: { marginBottom: 10 },
    eduDeg: {
        fontSize: 10,
        fontWeight: 700,
        color: C.textMain,
        marginBottom: 2,
    },
    eduSch: {
        fontSize: 9,
        color: C.primary,
        fontWeight: 500,
    },
    eduDate: {
        fontSize: 8,
        color: C.textMuted,
        marginTop: 2,
    },

    // LANGUAGES
    langRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: C.headerBg,
        borderRadius: 4,
    },
    langName: { fontSize: 9, fontWeight: 500, color: C.textMain },
    langLevel: { fontSize: 9, color: C.primary, fontWeight: 500 },

    // CERTIFICATIONS
    certItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    certDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: C.primary,
        marginRight: 8,
    },
    certText: { fontSize: 8.5, color: C.textSub, flex: 1 },

    // EXPERIENCE
    expItem: { marginBottom: 16 },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 3,
    },
    expRole: {
        fontSize: 11,
        fontWeight: 700,
        color: C.textDark,
        flex: 1,
    },
    expPeriod: {
        fontSize: 8,
        color: C.white,
        backgroundColor: C.primary,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 10,
        fontWeight: 500,
    },
    expCompany: {
        fontSize: 9,
        color: C.primary,
        fontWeight: 500,
        marginBottom: 6,
    },
    expDesc: {
        fontSize: 8.5,
        color: C.textSub,
        fontStyle: 'italic',
        marginBottom: 8,
        lineHeight: 1.4,
        paddingLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: C.border,
    },
    bulletRow: {
        flexDirection: 'row',
        marginBottom: 3,
        paddingLeft: 4,
    },
    bulletDot: {
        fontSize: 8,
        color: C.primary,
        marginRight: 6,
        fontWeight: 700,
    },
    bulletText: {
        fontSize: 8.5,
        color: C.textSub,
        lineHeight: 1.35,
        flex: 1,
    },

    // ACHIEVEMENTS - Highlighted
    achieveBox: {
        backgroundColor: C.achieveBg,
        borderRadius: 6,
        padding: 10,
        marginTop: 8,
    },
    achieveLabel: {
        fontSize: 9,
        fontWeight: 700,
        color: C.achieveText,
        marginBottom: 6,
    },
    achieveRow: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    achieveStar: {
        fontSize: 8,
        color: C.achieveText,
        marginRight: 6,
    },
    achieveText: {
        fontSize: 8.5,
        color: C.achieveText,
        flex: 1,
        lineHeight: 1.3,
    },
});

export const CVDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* HEADER */}
            <View style={styles.header}>
                <Image style={styles.photo} src="/assets/images/profile.jpeg" />
                <View style={styles.headerText}>
                    <Text style={styles.name}>{CONTACT.name}</Text>
                    <Text style={styles.roleText}>{CONTACT.role}</Text>
                    <View style={styles.contactRow}>
                        <Link src={`mailto:${CONTACT.email}`} style={styles.contactLink}>
                            ✉ {CONTACT.email}
                        </Link>
                        <Text style={styles.contactDivider}>•</Text>
                        <Link src={`https://wa.me/${CONTACT.phone}`} style={styles.contactLink}>
                            📱 {CONTACT.displayPhone}
                        </Link>
                        <Text style={styles.contactDivider}>•</Text>
                        <Text style={styles.contactItem}>📍 {CONTACT.location}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.body}>
                {/* PERFIL PROFESIONAL */}
                <Text style={styles.secTitle}>Perfil Profesional</Text>
                <View style={styles.secLine} />
                <Text style={styles.summary}>
                    Coordinadora de Recursos Humanos con 4+ años de experiencia liderando equipos de hasta 50 personas y gestionando operaciones en 23 sucursales. Especialista en reclutamiento estratégico, administración de nómina, capacitación de personal y optimización de procesos. Orientada a resultados con logros comprobados: reducción del 15% en costos operativos, mejora del 25% en retención de personal y 40% de incremento en eficiencia analítica. Disponible de inmediato para posiciones en RRHH, Administración o Coordinación de Personal.
                </Text>

                {/* HERRAMIENTAS DIGITALES */}
                <Text style={styles.secTitle}>Herramientas Digitales</Text>
                <View style={styles.secLine} />
                <View style={styles.badgeRow}>
                    {PDF_SKILLS.map((s, i) => (
                        <View key={i} style={styles.badge}>
                            <Text style={styles.badgeText}>{s}</Text>
                        </View>
                    ))}
                </View>

                {/* COMPETENCIAS CLAVE */}
                <Text style={styles.secTitle}>Competencias Clave</Text>
                <View style={styles.secLine} />
                <View style={styles.badgeRow}>
                    {PDF_COMPETENCIAS.map((s, i) => (
                        <View key={i} style={styles.badge}>
                            <Text style={styles.badgeText}>{s}</Text>
                        </View>
                    ))}
                </View>

                {/* EDUCACIÓN E IDIOMAS - 2 Columnas */}
                <View style={styles.twoCol}>
                    <View style={styles.col50}>
                        <Text style={styles.secTitle}>Educación</Text>
                        <View style={styles.secLine} />
                        <View style={styles.eduItem}>
                            <Text style={styles.eduDeg}>Lic. en Gestión y Desarrollo Empresarial</Text>
                            <Text style={styles.eduSch}>UVEG – En curso</Text>
                            <Text style={styles.eduDate}>2024 – Actualidad • 100% en línea</Text>
                        </View>
                        <View style={styles.eduItem}>
                            <Text style={styles.eduDeg}>Técnico Puericultista</Text>
                            <Text style={styles.eduSch}>CETIS #10</Text>
                            <Text style={styles.eduDate}>2015 – 2018</Text>
                        </View>
                    </View>
                    <View style={styles.col50}>
                        <Text style={styles.secTitle}>Idiomas y Certificaciones</Text>
                        <View style={styles.secLine} />
                        <View style={styles.langRow}>
                            <Text style={styles.langName}>Español</Text>
                            <Text style={styles.langLevel}>Nativo</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            {['Primeros Auxilios – Protección Civil', 'Manejo de Contenido Digital'].map((c, i) => (
                                <View key={i} style={styles.certItem}>
                                    <View style={styles.certDot} />
                                    <Text style={styles.certText}>{c}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* EXPERIENCIA PROFESIONAL */}
                <Text style={styles.secTitle}>Experiencia Profesional</Text>
                <View style={styles.secLine} />
                {PDF_EXPERIENCE.map((exp, idx) => (
                    <View key={idx} style={styles.expItem} wrap={false}>
                        <View style={styles.expHeader}>
                            <Text style={styles.expRole}>{exp.role}</Text>
                            <Text style={styles.expPeriod}>{exp.period}</Text>
                        </View>
                        <Text style={styles.expCompany}>{exp.company}</Text>
                        <Text style={styles.expDesc}>{exp.desc}</Text>
                        {exp.bullets.map((b, i) => (
                            <View key={i} style={styles.bulletRow}>
                                <Text style={styles.bulletDot}>▸</Text>
                                <Text style={styles.bulletText}>{b}</Text>
                            </View>
                        ))}
                        {exp.achievements && (
                            <View style={styles.achieveBox}>
                                <Text style={styles.achieveLabel}>🏆 Logros Destacados</Text>
                                {exp.achievements.map((a, i) => (
                                    <View key={i} style={styles.achieveRow}>
                                        <Text style={styles.achieveStar}>★</Text>
                                        <Text style={styles.achieveText}>{a}</Text>
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
