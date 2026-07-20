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
                <View style={S.section} wrap={false}>
                    <Text style={S.secLabel}>Perfil</Text>
                    <Text style={S.summary}>{PROFILE_INFANTIL.summary}</Text>
                </View>

                <View style={S.section}>
                    <View wrap={false}>
                        <Text style={S.secLabel}>Trayectoria</Text>
                        <Text style={S.secTitle}>Experiencia Profesional</Text>
                        <View
                            key={INFANTIL_EXPERIENCE[0].company}
                            style={[S.card, INFANTIL_EXPERIENCE[0].accent === 'sage' ? S.cardSage : S.cardTerracotta]}
                        >
                            <View style={S.cardHeader}>
                                <Text style={S.cardCompany}>{INFANTIL_EXPERIENCE[0].company}</Text>
                                <Text style={S.cardPeriod}>{INFANTIL_EXPERIENCE[0].period}</Text>
                            </View>
                            <Text style={S.cardRole}>{INFANTIL_EXPERIENCE[0].role}</Text>
                            {INFANTIL_EXPERIENCE[0].bullets.map((b, bi) => (
                                <View key={bi} style={S.bulletRow}>
                                    <Text style={S.bulletDot}>•</Text>
                                    <Text style={S.bulletText}>{b}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {INFANTIL_EXPERIENCE.slice(1).map((exp) => (
                        <View key={exp.company} style={[S.card, exp.accent === 'sage' ? S.cardSage : S.cardTerracotta]} wrap={false}>
                            <View style={S.cardHeader}>
                                <Text style={S.cardCompany}>{exp.company}</Text>
                                <Text style={S.cardPeriod}>{exp.period}</Text>
                            </View>
                            <Text style={S.cardRole}>{exp.role}</Text>
                            {exp.bullets.map((b, bi) => (
                                <View key={bi} style={S.bulletRow}>
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
                            {idx > 0 && <Text style={S.ascensoBadge}>Ascenso</Text>}
                            <View style={[S.card, role.variant === 'prominent' ? S.cardTerracotta : S.cardMuted]}>
                                <View style={S.cardHeader}>
                                    <Text style={S.cardRole}>{role.title}</Text>
                                    <Text style={S.cardPeriod}>{role.period}</Text>
                                </View>
                                {role.bullets.map((b, bi) => (
                                    <View key={bi} style={S.bulletRow}>
                                        <Text style={S.bulletDot}>•</Text>
                                        <Text style={S.bulletText}>{b}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View style={S.section} wrap={false}>
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
                    <View style={S.col} wrap={false}>
                        <Text style={S.secLabel}>Formación académica</Text>
                        <Text style={S.secTitle}>Educación</Text>
                        {INFANTIL_EDUCATION.map((edu) => (
                            <View key={edu.school} style={{ marginBottom: 8 }}>
                                <Text style={S.eduSchool}>{edu.school}{edu.inProgress ? ' · En curso' : ''}</Text>
                                <Text style={S.eduDeg}>{edu.degree}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={S.col} wrap={false}>
                        <Text style={S.secLabel}>Recursos</Text>
                        <Text style={S.secTitle}>Herramientas</Text>
                        {INFANTIL_HERRAMIENTAS.map((tool) => (
                            <Text key={tool} style={S.listItem}>• {tool}</Text>
                        ))}
                    </View>
                </View>

                <View style={[S.section, S.twoCol]}>
                    <View style={S.col} wrap={false}>
                        <Text style={S.secLabel}>Reconocimientos</Text>
                        <Text style={S.secTitle}>Certificaciones</Text>
                        {INFANTIL_CERTIFICACIONES.map((cert) => (
                            <Text key={cert} style={S.listItem}>• {cert}</Text>
                        ))}
                    </View>
                    <View style={S.col} wrap={false}>
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
