
import { Page, Text, View, Document, StyleSheet, Image, Font, Link, Svg, Path } from '@react-pdf/renderer';

// Register Roboto font
Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
    ],
});

// HUMANIST PALETTE (Warm, Professional, Soft)
const COLORS = {
    primary: '#0d9488', // Teal 600
    primaryLight: '#ccfbf1', // Teal 100 (Backgrounds)
    accent: '#f43f5e', // Rose 500
    textMain: '#334155', // Slate 700
    textSecondary: '#64748b', // Slate 500
    textLight: '#94a3b8', // Slate 400
    white: '#ffffff',
    bgHeader: '#f0fdfa', // Teal 50
    divider: '#cbd5e1', // Slate 300
};

// Skills data
const SKILLS_DATA = [
    { name: 'Excel', level: 70 },
    { name: 'Canva', level: 90 },
    { name: 'Herramientas IA', level: 85 },
    { name: 'Microsoft Office', level: 90 },
];

const SOFT_SKILLS_DATA = [
    { name: 'Comunicación efectiva', level: 95 },
    { name: 'Creatividad y estrategia', level: 90 },
    { name: 'Liderazgo colaborativo', level: 95 },
    { name: 'Toma de decisiones', level: 90 },
    { name: 'Pensamiento crítico', level: 90 },
    { name: 'Evaluación y seguimiento', level: 95 },
    { name: 'Responsabilidad', level: 100 },
    { name: 'Adaptabilidad', level: 95 },
    { name: 'Empatía', level: 95 },
];

const EXPERIENCE_DATA = [
    {
        role: "Auxiliar en Marketing Digital",
        company: "Naré",
        period: "Mayo 2023 - Actualidad",
        description: "Ejecución de estrategias de marketing digital, gestión de redes sociales y análisis de métricas.",
        functions: [
            "Desarrollo de estrategias de marketing digital que incrementaron el engagement en 30%",
            "Creación de 20+ piezas de contenido mensual para redes sociales con Canva, Photoshop e Illustrator",
            "Gestión de calendarios editoriales mejorando el alcance orgánico en 25%",
            "Research de influencers: análisis de engagement, demografía y autenticidad",
            "Seguimiento de KPIs (engagement, crecimiento, CTR) y ajuste de estrategias"
        ]
    },
    {
        role: "Coordinadora Administrativa de Áreas Infantiles",
        company: "Sonora Kids Group",
        period: "Ene 2022 - Feb 2026",
        description: "Coordinación integral de 23 sucursales con enfoque en eficiencia operativa y desarrollo de talento.",
        functions: [
            "Supervisión de 23 sucursales (12 presenciales + 11 remotas) con 50 colaboradores, incrementando eficiencia operativa en 20%",
            "Liderazgo de reclutamiento (100+ candidatos anuales), reduciendo tiempo de contratación de 45 a 30 días",
            "Diseño de 15+ capacitaciones anuales (200+ colaboradores), mejorando retención de personal en 25%",
            "Negociación con proveedores que generó reducción del 15% en costos operativos",
            "Implementación de dashboards en Excel que redujeron tiempo de análisis en 40%"
        ]
    },
    {
        role: "Cuidadora Infantil",
        company: "Sonora Grill Group",
        period: "Ene 2018 - Ene 2022",
        description: "Atención profesional de niños con enfoque en seguridad, desarrollo infantil y excelencia en servicio.",
        functions: [
            "Atención de 20-30 niños diarios (1-10 años), garantizando ambiente seguro y educativo",
            "Atención a padres logrando 95% de satisfacción mediante comunicación efectiva",
            "Resolución de conflictos con padres y niños aplicando técnicas de mediación y empatía",
            "Diseño de actividades lúdicas adaptadas por edad para desarrollo psicomotriz y social"
        ]
    }
];

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: COLORS.white,
        fontFamily: 'Roboto',
        padding: 0, // Reset padding for full-width header
    },
    // HEADER (Elegant Top Bar)
    headerContainer: {
        backgroundColor: COLORS.bgHeader,
        padding: 30,
        paddingBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primaryLight,
    },
    headerImageContainer: {
        marginRight: 25,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: COLORS.white,
    },
    headerContent: {
        flex: 1,
    },
    name: {
        fontSize: 22,
        fontWeight: 700,
        color: COLORS.primary,
        marginBottom: 4,
        letterSpacing: 0.5,
    },
    role: {
        fontSize: 11,
        color: COLORS.textMain,
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 8,
    },
    // CONTACT BAR (Inside Header)
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 5,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactIcon: {
        width: 9,
        height: 9,
        marginRight: 4,
    },
    contactText: {
        fontSize: 8,
        color: COLORS.textSecondary,
    },
    contactLink: {
        fontSize: 8,
        color: COLORS.primary,
        textDecoration: 'none',
    },
    // MAIN CONTENT (2 Columns with padding)
    bodyContainer: {
        flexDirection: 'row',
        padding: 30,
        gap: 25,
    },
    leftColumn: {
        width: '65%', // Wider main content
    },
    rightColumn: {
        width: '35%', // Narrower sidebar info
    },
    // SECTIONS
    sectionTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: COLORS.primary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 10,
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primaryLight,
    },
    // SUMMARY
    profileSummary: {
        fontSize: 9,
        color: COLORS.textMain,
        lineHeight: 1.5,
        marginBottom: 20,
        fontStyle: 'italic',
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 4,
        borderLeftWidth: 3,
        borderLeftColor: COLORS.accent,
    },
    // EXPERIENCE ITEMS
    expItem: {
        marginBottom: 15,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2,
    },
    expRole: {
        fontSize: 9.5,
        fontWeight: 700,
        color: COLORS.textMain,
    },
    expCompany: {
        fontSize: 8.5,
        color: COLORS.primary,
        fontWeight: 500,
    },
    expPeriod: {
        fontSize: 7.5,
        color: COLORS.textLight,
        fontStyle: 'italic',
    },
    expDesc: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
        marginBottom: 4,
        lineHeight: 1.3,
    },
    bulletPoint: {
        fontSize: 8,
        color: COLORS.textSecondary,
        marginLeft: 8,
        marginBottom: 2,
        lineHeight: 1.3,
    },
    // SIDEBAR ITEMS
    sideSection: {
        marginBottom: 20,
    },
    skillRow: {
        marginBottom: 6,
    },
    skillHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    skillName: {
        fontSize: 8,
        color: COLORS.textMain,
    },
    skillLevel: {
        fontSize: 7,
        color: COLORS.primary,
        fontWeight: 700,
    },
    progressBarBg: {
        height: 3,
        backgroundColor: COLORS.divider,
        borderRadius: 1.5,
    },
    progressBarFill: {
        height: 3,
        backgroundColor: COLORS.accent, // Rose accent for skills
        borderRadius: 1.5,
    },
    eduItem: {
        marginBottom: 10,
    },
    eduDegree: {
        fontSize: 8.5,
        fontWeight: 700,
        color: COLORS.textMain,
    },
    eduSchool: {
        fontSize: 8,
        color: COLORS.textSecondary,
    },
    eduDate: {
        fontSize: 7.5,
        color: COLORS.primary,
        marginTop: 1,
    },
    certTwist: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    certText: {
        fontSize: 8,
        color: COLORS.textSecondary,
    }
});

// ICONS
const EmailIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.accent} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </Svg>
);
const PhoneIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.accent} d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </Svg>
);
const LocationIcon = () => (
    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.accent} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </Svg>
);

const ProgressBar = ({ level }: { level: number }) => (
    <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${level}%` }]} />
    </View>
);

export const CVDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* 1. Header Section (Full Width, Warm Msg) */}
            <View style={styles.headerContainer}>
                <View style={styles.headerImageContainer}>
                    <Image
                        style={styles.profileImage}
                        src="/assets/images/profile.jpeg"
                    />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>Regina Salazar Marcelino</Text>
                    <Text style={styles.role}>Coordinadora de Recursos Humanos</Text>

                    <View style={styles.contactRow}>
                        <View style={styles.contactItem}>
                            <EmailIcon />
                            <Link src="mailto:regina.salazar.ma@gmail.com" style={styles.contactLink}>
                                regina.salazar.ma@gmail.com
                            </Link>
                        </View>
                        <View style={styles.contactItem}>
                            <PhoneIcon />
                            <Text style={styles.contactText}>56 3015 4490</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <LocationIcon />
                            <Text style={styles.contactText}>Magdalena Contreras, CDMX</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* 2. Body Layout */}
            <View style={styles.bodyContainer}>

                {/* LEFT CONTENT COLUMN */}
                <View style={styles.leftColumn}>
                    {/* Profile Summary */}
                    <Text style={styles.profileSummary}>
                        Coordinadora de Recursos Humanos con 4+ años de experiencia liderando equipos y supervisando operaciones.
                        Especialista en eficiencia operativa, reclutamiento estratégico y desarrollo de talento humano.
                        Enfoque en crear ambientes de trabajo positivos y productivos.
                    </Text>

                    {/* Experience Section */}
                    <Text style={styles.sectionTitle}>Experiencia Profesional</Text>
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <View key={index} style={styles.expItem}>
                            <View style={styles.expHeader}>
                                <View>
                                    <Text style={styles.expRole}>{exp.role}</Text>
                                    <Text style={styles.expCompany}>{exp.company}</Text>
                                </View>
                                <Text style={styles.expPeriod}>{exp.period}</Text>
                            </View>
                            <Text style={styles.expDesc}>{exp.description}</Text>
                            {exp.functions.slice(0, 4).map((func, i) => (
                                <Text key={i} style={styles.bulletPoint}>• {func}</Text>
                            ))}
                        </View>
                    ))}

                    {/* Key Achievements (Optional, condensed) */}
                    <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Logros Clave</Text>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.bulletPoint}>• Reducción del 15% en costos operativos mediante negociación estratégica.</Text>
                        <Text style={styles.bulletPoint}>• Mejora del 25% en retención de personal con planes de capacitación.</Text>
                        <Text style={styles.bulletPoint}>• Optimización de reclutamiento: reducción de 45 a 30 días.</Text>
                    </View>
                </View>

                {/* RIGHT SIDEBAR COLUMN */}
                <View style={styles.rightColumn}>

                    {/* Education */}
                    <View style={styles.sideSection}>
                        <Text style={styles.sectionTitle}>Educación</Text>
                        <View style={styles.eduItem}>
                            <Text style={styles.eduDegree}>Lic. Gestión y Desarrollo Empresarial</Text>
                            <Text style={styles.eduSchool}>UVEG (En curso)</Text>
                            <Text style={styles.eduDate}>100% en línea</Text>
                        </View>
                        <View style={styles.eduItem}>
                            <Text style={styles.eduDegree}>Técnico Puericultista</Text>
                            <Text style={styles.eduSchool}>CETIS #10</Text>
                            <Text style={styles.eduDate}>2018</Text>
                        </View>
                    </View>

                    {/* Habilidades Blandas */}
                    <View style={styles.sideSection}>
                        <Text style={styles.sectionTitle}>Habilidades Blandas</Text>
                        {SOFT_SKILLS_DATA.slice(0, 6).map((skill, i) => (
                            <View key={i} style={styles.skillRow}>
                                <View style={styles.skillHeader}>
                                    <Text style={styles.skillName}>{skill.name}</Text>
                                </View>
                                <ProgressBar level={skill.level} />
                            </View>
                        ))}
                    </View>

                    {/* Herramientas Digitales */}
                    <View style={styles.sideSection}>
                        <Text style={styles.sectionTitle}>Herramientas</Text>
                        {SKILLS_DATA.map((skill, i) => (
                            <View key={i} style={styles.skillRow}>
                                <View style={styles.skillHeader}>
                                    <Text style={styles.skillName}>{skill.name}</Text>
                                </View>
                                <ProgressBar level={skill.level} />
                            </View>
                        ))}
                    </View>

                    {/* Idiomas */}
                    <View style={styles.sideSection}>
                        <Text style={styles.sectionTitle}>Idiomas</Text>
                        <View style={styles.skillRow}>
                            <Text style={styles.skillName}>Español (Nativo)</Text>
                        </View>
                    </View>

                    {/* Certs */}
                    <View style={styles.sideSection}>
                        <Text style={styles.sectionTitle}>Constancias</Text>
                        <Text style={styles.bulletPoint}>• Primeros Auxilios</Text>
                        <Text style={styles.bulletPoint}>• Contenido Digital</Text>
                    </View>

                </View>
            </View>
        </Page>
    </Document>
);
