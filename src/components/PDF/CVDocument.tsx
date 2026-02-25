import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';

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
    headerBg: '#f0fdfa',     // Teal 50 for header
    primary: '#0d9488',      // Teal 600
    primaryLight: '#ccfbf1', // Teal 100 
    accent: '#f43f5e',       // Rose 500
    textMain: '#334155',     // Slate 700
    textSecondary: '#64748b',// Slate 500
    badgeBg: '#ffffff',
    badgeBorder: '#cbd5e1',
    white: '#ffffff',
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
        padding: 0,
    },
    // HEADER
    headerContainer: {
        backgroundColor: COLORS.headerBg,
        paddingVertical: 24,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 25,
        borderRadius: 8,
    },
    headerImageContainer: {
        marginRight: 20,
    },
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
    },
    headerContent: {
        flex: 1,
    },
    name: {
        fontSize: 22,
        fontWeight: 700,
        color: COLORS.primary,
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    role: {
        fontSize: 11,
        color: COLORS.textMain,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 10,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 8,
    },
    contactText: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
    },
    contactDivider: {
        fontSize: 9,
        color: COLORS.primaryLight,
    },
    contactLink: {
        fontSize: 8.5,
        color: COLORS.primary,
        textDecoration: 'none',
    },
    // BODY
    bodyContainer: {
        paddingTop: 15,
        paddingHorizontal: 35,
        paddingBottom: 20,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: '#1e293b',
        textTransform: 'uppercase',
        marginBottom: 6,
        letterSpacing: 0.5,
    },
    sectionDivider: {
        height: 1.5,
        backgroundColor: COLORS.primary,
        marginBottom: 12,
    },
    // SUMMARY
    profileSummary: {
        fontSize: 9.5,
        color: COLORS.textMain,
        lineHeight: 1.4,
        marginBottom: 16,
        textAlign: 'justify'
    },
    // BADGES (Skills)
    badgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 16,
    },
    badge: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primaryLight,
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderLeftWidth: 3,
        borderLeftColor: COLORS.accent,
    },
    badgeText: {
        fontSize: 8.5,
        color: COLORS.textMain,
        fontWeight: 500,
    },
    // EXPERIENCE
    expItem: {
        marginBottom: 14,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2,
    },
    expRole: {
        fontSize: 10.5,
        fontWeight: 700,
        color: '#1e293b',
    },
    expPeriod: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
        fontWeight: 500,
    },
    expCompany: {
        fontSize: 9.5,
        color: COLORS.primary,
        marginBottom: 4,
        fontWeight: 500,
    },
    expDesc: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
        fontStyle: 'italic',
        marginBottom: 6,
        lineHeight: 1.3,
    },
    bulletPointContainer: {
        flexDirection: 'row',
        marginBottom: 3,
        paddingLeft: 8,
    },
    bulletPointDot: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
        marginRight: 6,
    },
    bulletPointText: {
        fontSize: 8.5,
        color: COLORS.textMain,
        lineHeight: 1.3,
        flex: 1,
    },
    // 2 COLUMNS FOR ED/LANG
    twoColContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    colHalf: {
        width: '46%',
    },
    eduItem: {
        marginBottom: 10,
    },
    eduDegree: {
        fontSize: 9.5,
        fontWeight: 700,
        color: '#1e293b',
        marginBottom: 2,
    },
    eduSchool: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
    },
    eduDate: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
        marginTop: 2,
    },
    langRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    langName: {
        fontSize: 8.5,
        fontWeight: 500,
        color: COLORS.textMain,
    },
    langLevel: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
    }
});

export const CVDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* ENCABEZADO TIPO TARJETA OSCURA */}
            <View style={[styles.headerContainer, { borderBottomWidth: 1, borderBottomColor: COLORS.primaryLight, borderRadius: 0, marginHorizontal: 0, marginTop: 0 }]}>
                <View style={styles.headerImageContainer}>
                    <Image
                        style={[styles.profileImage, { borderWidth: 3, borderColor: COLORS.white }]}
                        src="/assets/images/profile.jpeg"
                    />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>Regina Salazar Marcelino</Text>
                    <Text style={styles.role}>Coordinadora de Recursos Humanos</Text>

                    <View style={styles.contactRow}>
                        <Text style={styles.contactText}>Magdalena Contreras, CDMX</Text>
                        <Text style={styles.contactDivider}>|</Text>
                        <Text style={styles.contactText}>+52 56 3015 4490</Text>
                        <Text style={styles.contactDivider}>|</Text>
                        <Link src="mailto:regina.salazar.ma@gmail.com" style={styles.contactLink}>
                            regina.salazar.ma@gmail.com
                        </Link>
                    </View>
                </View>
            </View>

            <View style={styles.bodyContainer}>

                {/* PERFIL PROFESIONAL */}
                <Text style={styles.sectionTitle}>Perfil Profesional</Text>
                <View style={styles.sectionDivider} />
                <Text style={styles.profileSummary}>
                    Coordinadora de Recursos Humanos con 4+ años de experiencia liderando equipos y supervisando operaciones. Especialista en eficiencia operativa, reclutamiento estratégico y desarrollo de talento humano. Enfoque en crear ambientes de trabajo positivos y productivos orientados a resultados.
                </Text>

                {/* HABILIDADES TÉCNICAS */}
                <Text style={styles.sectionTitle}>Herramientas Digitales</Text>
                <View style={styles.sectionDivider} />
                <View style={styles.badgeContainer}>
                    {SKILLS_DATA.map((skill, i) => (
                        <View key={i} style={styles.badge}>
                            <Text style={styles.badgeText}>{skill.name}</Text>
                        </View>
                    ))}
                </View>

                {/* COMPETENCIAS CLAVE */}
                <Text style={styles.sectionTitle}>Competencias Clave</Text>
                <View style={styles.sectionDivider} />
                <View style={styles.badgeContainer}>
                    {SOFT_SKILLS_DATA.map((skill, i) => (
                        <View key={i} style={styles.badge}>
                            <Text style={styles.badgeText}>{skill.name}</Text>
                        </View>
                    ))}
                </View>

                {/* EXPERIENCIA PROFESIONAL */}
                <Text style={styles.sectionTitle}>Experiencia Profesional</Text>
                <View style={styles.sectionDivider} />

                {EXPERIENCE_DATA.map((exp, index) => (
                    <View key={index} style={styles.expItem}>
                        <View style={styles.expHeader}>
                            <Text style={styles.expRole}>{exp.role}</Text>
                            <Text style={styles.expPeriod}>{exp.period}</Text>
                        </View>
                        <Text style={styles.expCompany}>{exp.company}</Text>
                        <Text style={styles.expDesc}>{exp.description}</Text>

                        {exp.functions.map((func, i) => (
                            <View key={i} style={styles.bulletPointContainer}>
                                <Text style={styles.bulletPointDot}>•</Text>
                                <Text style={styles.bulletPointText}>{func}</Text>
                            </View>
                        ))}
                    </View>
                ))}

                {/* EDUCACIÓN E IDIOMAS */}
                <View style={styles.twoColContainer}>
                    <View style={styles.colHalf}>
                        <Text style={styles.sectionTitle}>Educación</Text>
                        <View style={styles.sectionDivider} />

                        <View style={styles.eduItem}>
                            <Text style={styles.eduDegree}>Lic. Gestión y Desarrollo Empresarial</Text>
                            <Text style={styles.eduSchool}>UVEG</Text>
                            <Text style={styles.eduDate}>2024 - En curso (100% en línea)</Text>
                        </View>

                        <View style={styles.eduItem}>
                            <Text style={styles.eduDegree}>Técnico Puericultista</Text>
                            <Text style={styles.eduSchool}>CETIS #10</Text>
                            <Text style={styles.eduDate}>2015 - 2018</Text>
                        </View>
                    </View>

                    <View style={styles.colHalf}>
                        <Text style={styles.sectionTitle}>Idiomas y Constancias</Text>
                        <View style={styles.sectionDivider} />
                        <View style={styles.langRow}>
                            <Text style={styles.langName}>Español</Text>
                            <Text style={styles.langLevel}>Nativo</Text>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <View style={styles.bulletPointContainer}>
                                <Text style={styles.bulletPointDot}>•</Text>
                                <Text style={styles.bulletPointText}>Primeros Auxilios</Text>
                            </View>
                            <View style={styles.bulletPointContainer}>
                                <Text style={styles.bulletPointDot}>•</Text>
                                <Text style={styles.bulletPointText}>Manejo de Contenido Digital</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </Page>
    </Document>
);
