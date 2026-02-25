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

// COLORS MATCHING THE CANVA SCREENSHOT
const COLORS = {
    sidebarBg: '#136768',   // Dark Teal from the left sidebar
    primary: '#0e7474',      // Teal for right column titles
    textMain: '#334155',     // Dark slate text
    textSecondary: '#64748b',// Gray text
    white: '#ffffff',
    sidebarText: '#86cfcc',  // Light teal for sidebar text
    sidebarTitle: '#21b2a6', // Brighter teal for sidebar titles
    sidebarDivider: '#0f5253', // Darker teal for sidebar dividers
    pillBg: '#0e7474',
    bgLight: '#f0fdfa', // very light teal for background
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
            "Administración de nómina y control de personal (40-50 colaboradores): altas, bajas, asistencias",
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
    // LEFT SIDEBAR
    sidebar: {
        width: '35%',
        backgroundColor: COLORS.sidebarBg,
        padding: 25,
        paddingTop: 35,
        color: COLORS.white,
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImageInner: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: COLORS.sidebarTitle,
    },
    sidebarSection: {
        marginBottom: 20,
    },
    sidebarTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: COLORS.sidebarTitle,
        letterSpacing: 1.5,
        marginBottom: 12,
        textTransform: 'uppercase',
        flexDirection: 'row',
        alignItems: 'center',
    },
    // CONTACT In Sidebar
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    contactText: {
        fontSize: 8,
        color: COLORS.sidebarText,
        marginLeft: 8,
    },
    contactLink: {
        fontSize: 8,
        color: COLORS.sidebarText,
        textDecoration: 'none',
        marginLeft: 8,
    },
    // EDUCATION In Sidebar
    eduItem: {
        marginBottom: 10,
    },
    eduDegree: {
        fontSize: 9,
        fontWeight: 700,
        color: COLORS.white,
        marginBottom: 2,
    },
    eduSchool: {
        fontSize: 7.5,
        color: COLORS.sidebarText,
        marginBottom: 1,
    },
    eduDate: {
        fontSize: 7,
        color: COLORS.sidebarTitle,
    },
    // SKILLS In Sidebar
    skillRow: {
        marginBottom: 8,
    },
    skillName: {
        fontSize: 8,
        color: COLORS.white,
        marginBottom: 3,
    },
    skillLevelText: {
        fontSize: 7,
        color: COLORS.sidebarTitle,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    progressBarBg: {
        height: 3,
        backgroundColor: COLORS.sidebarDivider,
        borderRadius: 1.5,
    },
    progressBarFill: {
        height: 3,
        backgroundColor: COLORS.sidebarTitle,
        borderRadius: 1.5,
    },

    // RIGHT MAIN CONTENT
    mainContent: {
        width: '65%',
        padding: 30,
        paddingTop: 35,
    },
    header: {
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 700,
        color: COLORS.primary,
        marginBottom: 4,
    },
    roleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    roleText: {
        fontSize: 10,
        fontWeight: 700,
        color: COLORS.primary,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
    },
    badge: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
        marginLeft: 10,
    },
    badgeText: {
        color: COLORS.white,
        fontSize: 7,
        fontWeight: 700,
    },
    headerDivider: {
        height: 2,
        backgroundColor: COLORS.primary,
        width: '100%',
        marginTop: 5,
    },
    // MAIN SECTIONS
    mainSectionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 15,
    },
    mainSectionTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: COLORS.primary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginLeft: 8,
    },
    profileSummary: {
        fontSize: 9.5,
        color: COLORS.textMain,
        lineHeight: 1.5,
        textAlign: 'justify',
        marginBottom: 10,
    },
    // EXPERIENCE
    expContainer: {
        backgroundColor: COLORS.bgLight,
        padding: 10,
        borderRadius: 4,
        marginTop: 10,
    },
    expItem: {
        marginBottom: 12,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: COLORS.primary,
    },
    expHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    expRoleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    expRoleDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        left: -13.5,
        top: 4,
    },
    expRole: {
        fontSize: 10.5,
        fontWeight: 700,
        color: COLORS.primary,
    },
    expCompany: {
        fontSize: 9,
        color: COLORS.primary,
        fontWeight: 500,
        marginTop: 2,
        marginBottom: 4,
    },
    expPeriod: {
        fontSize: 7.5,
        color: COLORS.textSecondary,
    },
    expDesc: {
        fontSize: 8.5,
        color: COLORS.textMain,
        marginBottom: 6,
        lineHeight: 1.3,
    },
    bulletRow: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    bulletDot: {
        fontSize: 8.5,
        color: COLORS.textSecondary,
        marginRight: 4,
    },
    bulletText: {
        fontSize: 8,
        color: COLORS.textMain,
        lineHeight: 1.3,
        flex: 1,
    },
    // ACHIEVEMENTS
    achievContainer: {
        backgroundColor: COLORS.bgLight,
        padding: 12,
        borderRadius: 4,
        marginTop: 10,
    },
    achievTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    achievTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: COLORS.primary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginLeft: 6,
    }
});

// Sidebar Icons (Teal color)
const UserIcon = () => <Svg width="12" height="12" viewBox="0 0 24 24"><Path fill={COLORS.sidebarTitle} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></Svg>;
const EmailIcon = () => <Svg width="10" height="10" viewBox="0 0 24 24"><Path fill={COLORS.sidebarTitle} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></Svg>;
const PhoneIcon = () => <Svg width="10" height="10" viewBox="0 0 24 24"><Path fill={COLORS.sidebarTitle} d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></Svg>;
const LocationIcon = () => <Svg width="10" height="10" viewBox="0 0 24 24"><Path fill={COLORS.sidebarTitle} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></Svg>;
const EduIcon = () => <Svg width="12" height="12" viewBox="0 0 24 24"><Path fill={COLORS.sidebarTitle} d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" /></Svg>;
const ToolsIcon = () => <Svg width="12" height="12" viewBox="0 0 24 24"><Path fill={COLORS.sidebarTitle} d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" /></Svg>;
const BriefcaseIcon = () => <Svg width="14" height="14" viewBox="0 0 24 24"><Path fill={COLORS.primary} d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></Svg>;
const StarIcon = () => <Svg width="14" height="14" viewBox="0 0 24 24"><Path fill={COLORS.primary} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></Svg>;

export const CVDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* LEFT SIDEBAR (Dark Teal) */}
            <View style={styles.sidebar}>
                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImageInner} src="/assets/images/profile.jpeg" />
                </View>

                {/* CONTACT */}
                <View style={styles.sidebarSection}>
                    <View style={styles.sidebarTitle}>
                        <UserIcon />
                        <Text style={{ marginLeft: 6 }}>CONTACTO</Text>
                    </View>
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

                {/* EDUCATION */}
                <View style={styles.sidebarSection}>
                    <View style={styles.sidebarTitle}>
                        <EduIcon />
                        <Text style={{ marginLeft: 6 }}>EDUCACIÓN</Text>
                    </View>
                    <View style={styles.eduItem}>
                        <Text style={styles.eduDegree}>Lic. Gestión y Desarrollo Empresarial</Text>
                        <Text style={styles.eduSchool}>Universidad Virtual del Estado de Guanajuato</Text>
                        <Text style={styles.eduDate}>En curso • 100% en línea</Text>
                    </View>
                    <View style={styles.eduItem}>
                        <Text style={styles.eduDegree}>Técnico Puericultista</Text>
                        <Text style={styles.eduSchool}>CETIS #10</Text>
                        <Text style={styles.eduDate}>2018</Text>
                    </View>
                </View>

                {/* TOOLS */}
                <View style={styles.sidebarSection}>
                    <View style={styles.sidebarTitle}>
                        <ToolsIcon />
                        <Text style={{ marginLeft: 6 }}>HERRAMIENTAS DIGITALES</Text>
                    </View>
                    {SKILLS_DATA.map((skill, i) => (
                        <View key={i} style={styles.skillRow}>
                            <Text style={styles.skillName}>{skill.name}</Text>
                            <Text style={styles.skillLevelText}>{skill.level}%</Text>
                            <View style={styles.progressBarBg}>
                                <View style={[styles.progressBarFill, { width: `${skill.level}%` }]} />
                            </View>
                        </View>
                    ))}
                </View>

                {/* SOFT SKILLS */}
                <View style={styles.sidebarSection}>
                    <View style={styles.sidebarTitle}>
                        <ToolsIcon />
                        <Text style={{ marginLeft: 6 }}>HABILIDADES BLANDAS</Text>
                    </View>
                    {SOFT_SKILLS_DATA.map((skill, i) => (
                        <View key={i} style={styles.skillRow}>
                            <Text style={styles.skillName}>{skill.name}</Text>
                            <Text style={styles.skillLevelText}>{skill.level}%</Text>
                            <View style={styles.progressBarBg}>
                                <View style={[styles.progressBarFill, { width: `${skill.level}%` }]} />
                            </View>
                        </View>
                    ))}
                </View>

            </View>

            {/* RIGHT MAIN CONTENT */}
            <View style={styles.mainContent}>

                {/* HEADER ROW */}
                <View style={styles.header}>
                    <Text style={styles.name}>Regina Salazar Marcelino</Text>
                    <View style={styles.roleRow}>
                        <Text style={styles.roleText}>COORDINADORA DE RECURSOS HUMANOS</Text>
                        <View style={styles.badge}><Text style={styles.badgeText}>+4 años</Text></View>
                    </View>
                    <View style={styles.headerDivider} />
                </View>

                {/* PERFIL */}
                <Text style={styles.mainSectionTitle}>PERFIL PROFESIONAL</Text>
                <Text style={styles.profileSummary}>
                    Coordinadora de Recursos Humanos con 4+ años de experiencia liderando equipos de hasta 50 personas y supervisando 23 sucursales. Especialista en reclutamiento estratégico y desarrollo de talento con logros comprobados: reducción del 15% en costos operativos, mejora del 25% en retención de personal y optimización del 40% en tiempos de análisis. Experta en gestión de áreas infantiles, manejo avanzado de Excel y herramientas de IA para RRHH.
                </Text>

                {/* EXPERIENCE CONTAINER */}
                <View style={styles.expContainer}>
                    <View style={styles.mainSectionTitleRow}>
                        <BriefcaseIcon />
                        <Text style={styles.mainSectionTitle}>EXPERIENCIA PROFESIONAL</Text>
                    </View>

                    {EXPERIENCE_DATA.map((exp, index) => (
                        <View key={index} style={styles.expItem}>
                            <View style={styles.expRoleDot} />
                            <View style={styles.expHeaderRow}>
                                <View style={styles.expRoleWrapper}>
                                    <Text style={styles.expRole}>{exp.role}</Text>
                                </View>
                                <Text style={styles.expPeriod}>{exp.period}</Text>
                            </View>
                            <Text style={styles.expCompany}>{exp.company}</Text>
                            <Text style={styles.expDesc}>{exp.description}</Text>

                            {exp.functions.map((func, i) => (
                                <View key={i} style={styles.bulletRow}>
                                    <Text style={styles.bulletDot}>•</Text>
                                    <Text style={styles.bulletText}>{func}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

                {/* HIGHLIGHTS / LOGROS */}
                <View style={styles.achievContainer}>
                    <View style={styles.achievTitleRow}>
                        <StarIcon />
                        <Text style={styles.achievTitle}>LOGROS DESTACADOS</Text>
                    </View>
                    <View style={styles.bulletRow}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>Reducción del 15% en costos operativos mediante optimización de procesos y negociación estratégica</Text>
                    </View>
                    <View style={styles.bulletRow}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>Mejora del 25% en retención de personal tras implementar programa de capacitación continua</Text>
                    </View>
                    <View style={styles.bulletRow}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>Incremento del 20% en eficiencia operativa con gestión de 23 sucursales simultáneamente</Text>
                    </View>
                    <View style={styles.bulletRow}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>Reducción del 40% en tiempo de análisis con implementación de dashboards automatizados</Text>
                    </View>
                    <View style={styles.bulletRow}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>Optimización del proceso de reclutamiento: reducción de 45 a 30 días en tiempo de contratación</Text>
                    </View>
                </View>

            </View>

        </Page>
    </Document>
);
