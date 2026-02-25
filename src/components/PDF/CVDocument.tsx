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

// REGINA'S COLORS APPLIED TO ERICK'S LAYOUT
const COLORS = {
    headerBg: '#f0fdfa',     // Light warm teal for header background
    primary: '#0d9488',      // Teal 600 for titles and links
    primaryLight: '#ccfbf1', // Teal 100 for badges background
    accent: '#f43f5e',       // Rose 500 for secondary accents
    textMain: '#334155',     // Dark slate text for body
    textSecondary: '#64748b',// Gray text for dates and descriptions
    badgeBorder: '#99f6e4',  // Teal 200 for badge borders
    white: '#ffffff',
    divider: '#0d9488',      // Primary teal for section dividers
};

// Data (NO PERCENTAGES)
const SKILLS_DATA = [
    { name: 'Excel' },
    { name: 'Canva' },
    { name: 'Herramientas IA' },
    { name: 'Microsoft Office' },
];

const SOFT_SKILLS_DATA = [
    { name: 'Comunicación efectiva' },
    { name: 'Creatividad y estrategia' },
    { name: 'Liderazgo colaborativo' },
    { name: 'Toma de decisiones' },
    { name: 'Pensamiento crítico' },
    { name: 'Evaluación y seguimiento' },
    { name: 'Responsabilidad' },
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
        ],
        achievements: [
            "Reducción del 15% en costos operativos mediante negociación estratégica",
            "Mejora del 25% en retención de personal con planes de capacitación",
            "Optimización de reclutamiento: reducción de 45 a 30 días",
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
    // HEADER TIPO TARJETA CENTRADA
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
        color: COLORS.primary,
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
        color: COLORS.textMain,
    },
    contactDivider: {
        fontSize: 9,
        color: COLORS.primary,
    },
    contactLink: {
        fontSize: 8.5,
        color: COLORS.textMain,
        textDecoration: 'none',
    },
    // BODY
    bodyContainer: {
        paddingTop: 20,
        paddingHorizontal: 35,
        paddingBottom: 20,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: COLORS.textMain,
        textTransform: 'uppercase',
        marginBottom: 6,
        letterSpacing: 0.5,
    },
    sectionDivider: {
        height: 1.5,
        backgroundColor: COLORS.divider,
        marginBottom: 12,
    },
    // SUMMARY
    profileSummary: {
        fontSize: 9.5,
        color: COLORS.textSecondary,
        lineHeight: 1.4,
        marginBottom: 20,
        textAlign: 'justify'
    },
    // BADGES (Skills) sin porcentajes
    badgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 20,
    },
    badge: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.badgeBorder,
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    badgeText: {
        fontSize: 8.5,
        color: COLORS.textMain,
        fontWeight: 500,
    },
    // EXPERIENCE
    expItem: {
        marginBottom: 20,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2,
    },
    expRole: {
        fontSize: 11,
        fontWeight: 700,
        color: COLORS.textMain,
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
        color: COLORS.textSecondary,
        lineHeight: 1.3,
        flex: 1,
    },
    achievementsLabel: {
        fontSize: 9,
        fontWeight: 700,
        color: COLORS.textMain,
        marginTop: 6,
        marginBottom: 4,
    },
    // 2 COLUMNS FOR ED/LANG
    twoColContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20,
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
        color: COLORS.textMain,
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
            {/* ENCABEZADO TIPO TARJETA CENTRADA */}
            <View style={styles.headerContainer}>
                <View style={styles.headerImageContainer}>
                    <Image
                        style={styles.profileImage}
                        src="/assets/images/profile.jpeg"
                    />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>Regina Salazar Marcelino</Text>
                    <Text style={styles.role}>COORDINADORA DE RECURSOS HUMANOS</Text>

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

                        {exp.achievements && (
                            <View>
                                <Text style={styles.achievementsLabel}>Logros Destacados:</Text>
                                {exp.achievements.map((ach, i) => (
                                    <View key={i} style={styles.bulletPointContainer}>
                                        <Text style={styles.bulletPointDot}>•</Text>
                                        <Text style={styles.bulletPointText}>{ach}</Text>
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
