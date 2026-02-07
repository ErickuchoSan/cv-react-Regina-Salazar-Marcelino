
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

// Color palette - TEAL theme for Regina
const COLORS = {
    primary: '#0d9488',
    primaryLight: '#14b8a6',
    accent: '#06b6d4',
    dark: '#115e59',
    darkMedium: '#134e4a',
    medium: '#334155',
    light: '#64748b',
    lighter: '#94a3b8',
    white: '#ffffff',
    bgLight: '#f0fdfa',
    bgAccent: '#ccfbf1',
};

// Skills data for Regina
const SKILLS_DATA = [
    { name: 'Comunicación efectiva', level: 95 },
    { name: 'Creatividad y pensamiento estratégico', level: 90 },
    { name: 'Liderazgo colaborativo', level: 95 },
    { name: 'Toma de decisiones informada', level: 90 },
    { name: 'Pensamiento crítico y analítico', level: 90 },
    { name: 'Evaluación y seguimiento', level: 95 },
    { name: 'Responsabilidad', level: 100 },
    { name: 'Adaptabilidad', level: 95 },
    { name: 'Empatía', level: 95 },
];

// Experience data for Regina
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
            "Análisis de métricas y elaboración de reportes semanales para decisiones estratégicas",
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
            "Administración de nómina y control de personal (40-50 colaboradores): altas, bajas, asistencias",
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
            "Aplicación de protocolos de seguridad y primeros auxilios con constancia de protección civil: 4 años sin incidentes",
            "Diseño de actividades lúdicas adaptadas por edad para desarrollo psicomotriz y social"
        ]
    }
];

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        fontFamily: 'Roboto',
    },
    sidebar: {
        width: '35%',
        backgroundColor: COLORS.dark,
        height: '100%',
    },
    sidebarGradient: {
        height: 10,
        backgroundColor: COLORS.primary,
    },
    sidebarContent: {
        padding: 16,
        paddingTop: 18,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 18,
    },
    profileImageWrapper: {
        padding: 3,
        borderRadius: 55,
        backgroundColor: COLORS.primary,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    sidebarSection: {
        marginBottom: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.darkMedium,
        paddingBottom: 5,
    },
    sectionIcon: {
        width: 12,
        height: 12,
        marginRight: 6,
    },
    sidebarTitle: {
        fontSize: 9,
        fontWeight: 700,
        color: COLORS.primaryLight,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
        paddingLeft: 2,
    },
    contactIcon: {
        width: 10,
        marginRight: 8,
    },
    contactText: {
        fontSize: 7,
        color: COLORS.lighter,
    },
    contactLink: {
        fontSize: 7,
        color: COLORS.accent,
        textDecoration: 'none',
    },
    skillItem: {
        marginBottom: 8,
    },
    skillHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    skillName: {
        fontSize: 7,
        color: COLORS.lighter,
    },
    skillPercent: {
        fontSize: 6,
        color: COLORS.primaryLight,
        fontWeight: 700,
    },
    progressBarBg: {
        height: 3,
        backgroundColor: COLORS.darkMedium,
        borderRadius: 2,
    },
    progressBarFill: {
        height: 3,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 2,
    },
    educationItem: {
        marginBottom: 10,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: COLORS.primaryLight,
    },
    degree: {
        fontSize: 8,
        fontWeight: 700,
        color: COLORS.white,
    },
    school: {
        fontSize: 7,
        color: COLORS.lighter,
        marginTop: 1,
    },
    eduDate: {
        fontSize: 6,
        color: COLORS.accent,
        marginTop: 2,
    },
    languageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
        paddingVertical: 3,
        paddingHorizontal: 6,
        backgroundColor: COLORS.darkMedium,
        borderRadius: 3,
    },
    languageName: {
        fontSize: 7,
        color: COLORS.lighter,
    },
    languageLevel: {
        fontSize: 6,
        color: COLORS.accent,
        fontWeight: 700,
    },
    certItem: {
        marginBottom: 4,
        paddingLeft: 8,
    },
    certText: {
        fontSize: 7,
        color: COLORS.lighter,
    },
    main: {
        width: '65%',
    },
    mainGradient: {
        height: 10,
        backgroundColor: COLORS.bgAccent,
    },
    mainContent: {
        padding: 20,
        paddingTop: 22,
    },
    header: {
        marginBottom: 14,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.primary,
    },
    name: {
        fontSize: 20,
        fontWeight: 700,
        color: COLORS.dark,
        letterSpacing: 0.5,
        marginBottom: 3,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    jobTitle: {
        fontSize: 10,
        color: COLORS.primary,
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    expBadge: {
        marginLeft: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
    },
    expBadgeText: {
        fontSize: 6,
        color: COLORS.white,
        fontWeight: 700,
    },
    section: {
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: COLORS.dark,
        textTransform: 'uppercase',
        marginBottom: 6,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.bgAccent,
        paddingBottom: 2,
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 8,
        color: COLORS.medium,
        lineHeight: 1.5,
    },
    summary: {
        fontSize: 8,
        color: COLORS.medium,
        lineHeight: 1.5,
        marginBottom: 14,
        paddingLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: COLORS.bgAccent,
    },
    mainSection: {
        marginBottom: 12,
    },
    mainSectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: COLORS.bgLight,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 3,
        borderLeftWidth: 3,
        borderLeftColor: COLORS.primary,
    },
    mainSectionIcon: {
        width: 12,
        height: 12,
        marginRight: 6,
    },
    mainSectionTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: COLORS.dark,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    experienceItem: {
        marginBottom: 12,
        flexDirection: 'row',
    },
    timelineDot: {
        width: 16,
        alignItems: 'center',
        marginRight: 8,
    },
    dotOuter: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.bgAccent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dotInner: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: COLORS.primary,
    },
    timelineLine: {
        width: 2,
        flex: 1,
        backgroundColor: COLORS.bgAccent,
        marginLeft: 3,
        marginTop: 2,
    },
    expContent: {
        flex: 1,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 3,
    },
    expRole: {
        fontSize: 9,
        fontWeight: 700,
        color: COLORS.dark,
    },
    expCompany: {
        fontSize: 8,
        color: COLORS.primary,
        fontWeight: 500,
    },
    expDateBadge: {
        fontSize: 6,
        color: COLORS.light,
        backgroundColor: COLORS.bgLight,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 6,
    },
    expDesc: {
        fontSize: 7,
        color: COLORS.medium,
        marginBottom: 3,
        lineHeight: 1.3,
    },
    bulletPoint: {
        fontSize: 6,
        color: COLORS.medium,
        marginLeft: 6,
        marginBottom: 1,
        lineHeight: 1.2,
    },
    competenciesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    competencyChip: {
        fontSize: 6,
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 8,
        marginRight: 4,
        marginBottom: 4,
    },
});

// Icon components
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

const ContactSectionIcon = () => (
    <Svg style={styles.sectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primaryLight} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </Svg>
);

const EducationSectionIcon = () => (
    <Svg style={styles.sectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primaryLight} d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </Svg>
);

const SkillsSectionIcon = () => (
    <Svg style={styles.sectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primaryLight} d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </Svg>
);

const BriefcaseIcon = () => (
    <Svg style={styles.mainSectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </Svg>
);

const StarIcon = () => (
    <Svg style={styles.mainSectionIcon} viewBox="0 0 24 24">
        <Path fill={COLORS.primary} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </Svg>
);

// Progress bar component
const ProgressBar = ({ level }: { level: number }) => (
    <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${level}%` }]} />
    </View>
);

// Timeline dot component
const TimelineDot = ({ isLast }: { isLast: boolean }) => (
    <View style={styles.timelineDot}>
        <View style={styles.dotOuter}>
            <View style={styles.dotInner} />
        </View>
        {!isLast && <View style={styles.timelineLine} />}
    </View>
);

export const CVDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* Sidebar */}
            <View style={styles.sidebar}>
                <View style={styles.sidebarGradient} />
                <View style={styles.sidebarContent}>

                    <View style={styles.profileContainer}>
                        <View style={styles.profileImageWrapper}>
                            <Image
                                style={styles.profileImage}
                                src="/assets/images/profile.jpeg"
                            />
                        </View>
                    </View>

                    <View style={styles.sidebarSection}>
                        <View style={styles.sectionHeader}>
                            <ContactSectionIcon />
                            <Text style={styles.sidebarTitle}>Contacto</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <EmailIcon />
                            <Link src="mailto:regina.salazar.ma@gmail.com" style={styles.contactLink}>
                                regina.salazar.ma@gmail.com
                            </Link>
                        </View>
                        <View style={styles.contactRow}>
                            <PhoneIcon />
                            <Text style={styles.contactText}>56 3015 4490</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <LocationIcon />
                            <Text style={styles.contactText}>Magdalena Contreras, CDMX</Text>
                        </View>
                    </View>

                    <View style={styles.sidebarSection}>
                        <View style={styles.sectionHeader}>
                            <EducationSectionIcon />
                            <Text style={styles.sidebarTitle}>Educación</Text>
                        </View>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>Lic. Gestión y Desarrollo Empresarial</Text>
                            <Text style={styles.school}>Universidad Virtual del Estado de Guanajuato</Text>
                            <Text style={styles.eduDate}>En curso • 100% en línea</Text>
                        </View>
                        <View style={styles.educationItem}>
                            <Text style={styles.degree}>Técnico Puericultista</Text>
                            <Text style={styles.school}>CETIS #10</Text>
                            <Text style={styles.eduDate}>2018</Text>
                        </View>
                    </View>

                    <View style={styles.sidebarSection}>
                        <View style={styles.sectionHeader}>
                            <SkillsSectionIcon />
                            <Text style={styles.sidebarTitle}>Habilidades</Text>
                        </View>
                        {SKILLS_DATA.map((skill, i) => (
                            <View key={i} style={styles.skillItem}>
                                <View style={styles.skillHeader}>
                                    <Text style={styles.skillName}>{skill.name}</Text>
                                    <Text style={styles.skillPercent}>{skill.level}%</Text>
                                </View>
                                <ProgressBar level={skill.level} />
                            </View>
                        ))}
                    </View>

                    <View style={styles.sidebarSection}>
                        <Text style={[styles.sidebarTitle, { marginBottom: 8 }]}>Idiomas</Text>
                        <View style={styles.languageRow}>
                            <Text style={styles.languageName}>Español</Text>
                            <Text style={styles.languageLevel}>Nativo</Text>
                        </View>
                    </View>

                    <View style={styles.sidebarSection}>
                        <Text style={[styles.sidebarTitle, { marginBottom: 8 }]}>Constancias</Text>
                        <View style={styles.certItem}>
                            <Text style={styles.certText}>• Técnico Puericultista</Text>
                        </View>
                        <View style={styles.certItem}>
                            <Text style={styles.certText}>• Primeros Auxilios Básicos</Text>
                        </View>
                        <View style={styles.certItem}>
                            <Text style={styles.certText}>• Contenido Digital</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Main Content */}
            <View style={styles.main}>
                <View style={styles.mainGradient} />
                <View style={styles.mainContent}>

                    <View style={styles.header}>
                        <Text style={styles.name}>Regina Salazar Marcelino</Text>
                        <View style={styles.titleRow}>
                            <Text style={styles.jobTitle}>Coordinadora de Recursos Humanos</Text>
                            <View style={styles.expBadge}>
                                <Text style={styles.expBadgeText}>+6 años</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Perfil Profesional</Text>
                        <Text style={styles.text}>
                            Coordinadora de Recursos Humanos con 4+ años de experiencia liderando equipos de hasta 50 personas y
                            supervisando 23 sucursales. Especialista en reclutamiento estratégico y desarrollo de talento con logros
                            comprobados: reducción del 15% en costos operativos, mejora del 25% en retención de personal y
                            optimización del 40% en tiempos de análisis. Experta en gestión de áreas infantiles, manejo avanzado
                            de Excel y herramientas de IA para RRHH.
                        </Text>
                    </View>

                    <View style={styles.mainSection}>
                        <View style={styles.mainSectionHeader}>
                            <BriefcaseIcon />
                            <Text style={styles.mainSectionTitle}>Experiencia Profesional</Text>
                        </View>
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <View key={index} style={styles.experienceItem}>
                                <TimelineDot isLast={index === EXPERIENCE_DATA.length - 1} />
                                <View style={styles.expContent}>
                                    <View style={styles.expHeader}>
                                        <View>
                                            <Text style={styles.expRole}>{exp.role}</Text>
                                            <Text style={styles.expCompany}>{exp.company}</Text>
                                        </View>
                                        <Text style={styles.expDateBadge}>{exp.period}</Text>
                                    </View>
                                    <Text style={styles.expDesc}>{exp.description}</Text>
                                    {exp.functions.map((func, i) => (
                                        <Text key={i} style={styles.bulletPoint}>• {func}</Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={styles.mainSection}>
                        <View style={styles.mainSectionHeader}>
                            <StarIcon />
                            <Text style={styles.mainSectionTitle}>Logros Destacados</Text>
                        </View>
                        <View style={{ marginBottom: 8 }}>
                            {[
                                'Reducción del 15% en costos operativos mediante optimización de procesos y negociación estratégica',
                                'Mejora del 25% en retención de personal tras implementar programa de capacitación continua',
                                'Incremento del 20% en eficiencia operativa con gestión de 23 sucursales simultáneamente',
                                'Reducción del 40% en tiempo de análisis con implementación de dashboards automatizados',
                                'Optimización del proceso de reclutamiento: reducción de 45 a 30 días en tiempo de contratación',
                                '4 años consecutivos sin incidentes de seguridad en área de cuidado infantil',
                            ].map((achievement, i) => (
                                <Text key={i} style={[styles.bulletPoint, { marginBottom: 6, lineHeight: 1.4 }]}>✓ {achievement}</Text>
                            ))}
                        </View>
                    </View>

                    <View style={styles.mainSection}>
                        <View style={styles.mainSectionHeader}>
                            <StarIcon />
                            <Text style={styles.mainSectionTitle}>Competencias Clave</Text>
                        </View>
                        <View style={styles.competenciesContainer}>
                            {[
                                'Liderazgo de Equipos',
                                'Gestión de Proveedores',
                                'Coordinación de Eventos',
                                'Capacitación de Personal',
                                'Resolución de Conflictos',
                                'Comunicación Efectiva',
                                'Organización',
                                'Toma de Decisiones',
                                'Adaptabilidad',
                                'Atención Infantil',
                            ].map((comp, i) => (
                                <Text key={i} style={styles.competencyChip}>{comp}</Text>
                            ))}
                        </View>
                    </View>

                </View>
            </View>

        </Page>
    </Document>
);
