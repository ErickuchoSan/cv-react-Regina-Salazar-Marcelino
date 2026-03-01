import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';
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
    ],
});

// ─── Colores minimalistas ──────────────────────────────────────────────────────
const C = {
    primary: '#1a365d',      // Azul oscuro profesional
    accent: '#2b6cb0',       // Azul medio
    text: '#1a202c',         // Casi negro
    textSub: '#4a5568',      // Gris oscuro
    textMuted: '#718096',    // Gris medio
    border: '#e2e8f0',       // Gris claro
    white: '#ffffff',
    achieveBg: '#fffbeb',
    achieveText: '#92400e',
};

// ─── Estilos ATS-Friendly (una sola columna) ───────────────────────────────────
const S = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: C.white,
        fontFamily: 'Roboto',
        paddingVertical: 40,
        paddingHorizontal: 50,
    },

    // ── Cabecera
    header: {
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: C.primary,
        paddingBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 700,
        color: C.primary,
        marginBottom: 4,
    },
    role: {
        fontSize: 12,
        color: C.accent,
        fontWeight: 500,
        marginBottom: 10,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
    },
    contactItem: {
        fontSize: 9,
        color: C.textSub,
    },
    contactLink: {
        fontSize: 9,
        color: C.accent,
        textDecoration: 'none',
    },

    // ── Secciones
    section: {
        marginBottom: 16,
    },
    secTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: C.primary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: C.border,
        paddingBottom: 4,
    },

    // ── Perfil
    summary: {
        fontSize: 10,
        color: C.textSub,
        lineHeight: 1.6,
        textAlign: 'justify',
    },

    // ── Skills y competencias (inline)
    inlineList: {
        fontSize: 9,
        color: C.text,
        lineHeight: 1.5,
    },

    // ── Experiencia
    expItem: {
        marginBottom: 14,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    expRole: {
        fontSize: 11,
        fontWeight: 700,
        color: C.text,
    },
    expPeriod: {
        fontSize: 9,
        color: C.textMuted,
    },
    expCompany: {
        fontSize: 10,
        color: C.accent,
        fontWeight: 500,
        marginBottom: 4,
    },
    expDesc: {
        fontSize: 9,
        color: C.textSub,
        marginBottom: 6,
        fontStyle: 'italic',
    },
    bulletRow: {
        flexDirection: 'row',
        marginBottom: 2,
        paddingLeft: 8,
    },
    bulletDot: {
        fontSize: 9,
        color: C.textSub,
        marginRight: 6,
    },
    bulletText: {
        fontSize: 9,
        color: C.textSub,
        lineHeight: 1.4,
        flex: 1,
    },

    // ── Logros
    achieveBox: {
        backgroundColor: C.achieveBg,
        padding: 8,
        marginTop: 6,
        borderLeftWidth: 3,
        borderLeftColor: C.achieveText,
    },
    achieveLabel: {
        fontSize: 9,
        fontWeight: 700,
        color: C.achieveText,
        marginBottom: 4,
    },
    achieveText: {
        fontSize: 9,
        color: C.achieveText,
        lineHeight: 1.3,
    },

    // ── Educación
    eduRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    eduDeg: {
        fontSize: 10,
        fontWeight: 500,
        color: C.text,
    },
    eduDate: {
        fontSize: 9,
        color: C.textMuted,
    },
    eduSch: {
        fontSize: 9,
        color: C.textSub,
    },

    // ── Nota al pie
    footer: {
        marginTop: 'auto',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: C.border,
    },
    footerText: {
        fontSize: 8,
        color: C.textMuted,
        textAlign: 'center',
    },
});

// ─── Componente principal ATS ──────────────────────────────────────────────────
export const CVDocumentATS = () => (
    <Document>
        <Page size="A4" style={S.page}>

            {/* ── Cabecera */}
            <View style={S.header}>
                <Text style={S.name}>{CONTACT.name}</Text>
                <Text style={S.role}>{CONTACT.role}</Text>
                <View style={S.contactRow}>
                    <Link src={`mailto:${CONTACT.email}`} style={S.contactLink}>
                        {CONTACT.email}
                    </Link>
                    <Text style={S.contactItem}>|</Text>
                    <Link src={`https://wa.me/${CONTACT.phone}`} style={S.contactLink}>
                        {CONTACT.displayPhone}
                    </Link>
                    <Text style={S.contactItem}>|</Text>
                    <Text style={S.contactItem}>{CONTACT.location}</Text>
                    <Text style={S.contactItem}>|</Text>
                    <Text style={S.contactItem}>Disponibilidad inmediata</Text>
                </View>
            </View>

            {/* ── Perfil Profesional */}
            <View style={S.section}>
                <Text style={S.secTitle}>Perfil Profesional</Text>
                <Text style={S.summary}>
                    Profesional de Recursos Humanos con más de 4 años de experiencia en gestión integral de RRHH: reclutamiento y selección, administración de nómina, capacitación y desarrollo organizacional. He liderado equipos de hasta 50 colaboradores y coordinado operaciones en 23 sucursales. Resultados comprobados: reducción del 25% en rotación de personal, optimización del 33% en tiempos de contratación y ahorro del 15% en costos operativos. Dominio de Excel avanzado, portales de empleo y herramientas digitales. Licenciatura en Gestión Empresarial en curso.
                </Text>
            </View>

            {/* ── Competencias Clave */}
            <View style={S.section}>
                <Text style={S.secTitle}>Competencias Clave</Text>
                <Text style={S.inlineList}>
                    {PDF_COMPETENCIAS.join(' • ')}
                </Text>
            </View>

            {/* ── Herramientas Digitales */}
            <View style={S.section}>
                <Text style={S.secTitle}>Herramientas Digitales</Text>
                <Text style={S.inlineList}>
                    {PDF_SKILLS.join(' • ')}
                </Text>
            </View>

            {/* ── Experiencia Profesional */}
            <View style={S.section}>
                <Text style={S.secTitle}>Experiencia Profesional</Text>

                {PDF_EXPERIENCE.map((exp, idx) => (
                    <View key={idx} style={S.expItem}>
                        <View style={S.expHeader}>
                            <Text style={S.expRole}>{exp.role}</Text>
                            <Text style={S.expPeriod}>{exp.period}</Text>
                        </View>
                        <Text style={S.expCompany}>{exp.company}</Text>
                        <Text style={S.expDesc}>{exp.desc}</Text>

                        {exp.bullets.map((b, i) => (
                            <View key={i} style={S.bulletRow}>
                                <Text style={S.bulletDot}>•</Text>
                                <Text style={S.bulletText}>{b}</Text>
                            </View>
                        ))}

                        {exp.achievements && exp.achievements.length > 0 && (
                            <View style={S.achieveBox}>
                                <Text style={S.achieveLabel}>Logros Destacados:</Text>
                                {exp.achievements.map((a, i) => (
                                    <View key={i} style={S.bulletRow}>
                                        <Text style={S.bulletDot}>•</Text>
                                        <Text style={S.achieveText}>{a}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
            </View>

            {/* ── Educación */}
            <View style={S.section}>
                <Text style={S.secTitle}>Educación</Text>
                <View style={S.eduRow}>
                    <Text style={S.eduDeg}>Lic. en Gestión y Desarrollo Empresarial</Text>
                    <Text style={S.eduDate}>2024 – Actualidad</Text>
                </View>
                <Text style={S.eduSch}>UVEG – En curso (100% en línea)</Text>

                <View style={[S.eduRow, { marginTop: 8 }]}>
                    <Text style={S.eduDeg}>Técnico Puericultista</Text>
                    <Text style={S.eduDate}>2015 – 2018</Text>
                </View>
                <Text style={S.eduSch}>CETIS #10</Text>
            </View>

            {/* ── Idiomas y Certificaciones */}
            <View style={S.section}>
                <Text style={S.secTitle}>Idiomas y Certificaciones</Text>
                <Text style={S.inlineList}>
                    Español (Nativo) • Primeros Auxilios – Protección Civil • Manejo de Contenido Digital
                </Text>
            </View>

        </Page>
    </Document>
);
