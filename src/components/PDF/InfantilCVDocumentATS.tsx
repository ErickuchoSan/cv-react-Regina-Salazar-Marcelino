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
    role: { fontSize: 12, color: C.terracotta, fontWeight: 700, marginBottom: 10 },
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
    expCompany: { fontSize: 10, color: C.sage, fontWeight: 700, marginBottom: 4 },
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
    eduDeg: { fontSize: 10, fontWeight: 700, color: C.text },
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

            <View style={S.section} wrap={false}>
                <Text style={S.secTitle}>Perfil Profesional</Text>
                <Text style={S.summary}>{PROFILE_INFANTIL.summary}</Text>
            </View>

            <View style={S.section} wrap={false}>
                <Text style={S.secTitle}>Competencias</Text>
                <Text style={S.inlineList}>{INFANTIL_COMPETENCIAS.map((c) => c.label).join(' • ')}</Text>
            </View>

            <View style={S.section} wrap={false}>
                <Text style={S.secTitle}>Herramientas</Text>
                <Text style={S.inlineList}>{INFANTIL_HERRAMIENTAS.join(' • ')}</Text>
            </View>

            <View style={S.section}>
                <View wrap={false}>
                    <Text style={S.secTitle}>Experiencia Profesional</Text>
                    <View key={INFANTIL_EXPERIENCE[0].company} style={S.expItem}>
                        <View style={S.expHeader}>
                            <Text style={S.expRole}>{INFANTIL_EXPERIENCE[0].role}</Text>
                            <Text style={S.expPeriod}>{INFANTIL_EXPERIENCE[0].period}</Text>
                        </View>
                        <Text style={S.expCompany}>{INFANTIL_EXPERIENCE[0].company}</Text>
                        {INFANTIL_EXPERIENCE[0].bullets.map((b, idx) => (
                            <View key={idx} style={S.bulletRow}>
                                <Text style={S.bulletDot}>•</Text>
                                <Text style={S.bulletText}>{b}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {INFANTIL_EXPERIENCE.slice(1).map((exp) => (
                    <View key={exp.company} style={S.expItem} wrap={false}>
                        <View style={S.expHeader}>
                            <Text style={S.expRole}>{exp.role}</Text>
                            <Text style={S.expPeriod}>{exp.period}</Text>
                        </View>
                        <Text style={S.expCompany}>{exp.company}</Text>
                        {exp.bullets.map((b, idx) => (
                            <View key={idx} style={S.bulletRow}>
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
                        {idx > 0 && <Text style={S.ascensoBadge}>Ascenso</Text>}
                        <View style={S.expItem} wrap={false}>
                            <View style={S.expHeader}>
                                <Text style={S.expRole}>{role.title}</Text>
                                <Text style={S.expPeriod}>{role.period}</Text>
                            </View>
                            {role.bullets.map((b, idx) => (
                                <View key={idx} style={S.bulletRow}>
                                    <Text style={S.bulletDot}>•</Text>
                                    <Text style={S.bulletText}>{b}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>

            <View style={S.section} wrap={false}>
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

            <View style={S.section} wrap={false}>
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
