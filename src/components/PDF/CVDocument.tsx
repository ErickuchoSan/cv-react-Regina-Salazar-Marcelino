import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';

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

// REGINA'S COLORS
const C = {
    headerBg: '#f0fdfa',
    primary: '#0d9488',
    accent: '#f43f5e',
    badgeBorder: '#99f6e4',
    badgeBg: '#f0fdfa',
    textMain: '#1e293b',
    textSub: '#475569',
    textMuted: '#64748b',
    white: '#ffffff',
    divider: '#0d9488',
};

const styles = StyleSheet.create({
    page: { flexDirection: 'column', backgroundColor: C.white, fontFamily: 'Roboto', padding: 0 },

    // HEADER
    header: {
        backgroundColor: C.headerBg,
        paddingVertical: 20,
        paddingHorizontal: 28,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 28,
        marginTop: 22,
        borderRadius: 8,
    },
    photo: { width: 72, height: 72, borderRadius: 36, marginRight: 18 },
    headerText: { flex: 1 },
    name: { fontSize: 20, fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 },
    roleText: { fontSize: 10, color: C.textMain, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 },
    contactRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 6 },
    contactItem: { fontSize: 8, color: C.textSub },
    contactLink: { fontSize: 8, color: C.primary, textDecoration: 'none' },
    divChar: { fontSize: 8, color: C.primary },

    // BODY
    body: { paddingTop: 18, paddingHorizontal: 32, paddingBottom: 18 },
    secTitle: { fontSize: 11, fontWeight: 700, color: C.textMain, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 5 },
    secLine: { height: 1.5, backgroundColor: C.divider, marginBottom: 10 },

    // PROFILE SUMMARY
    summary: { fontSize: 9, color: C.textSub, lineHeight: 1.45, marginBottom: 16, textAlign: 'justify' },

    // BADGES
    badgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginBottom: 14 },
    badge: { backgroundColor: C.badgeBg, borderWidth: 1, borderColor: C.badgeBorder, borderRadius: 4, paddingVertical: 4, paddingHorizontal: 8 },
    badgeText: { fontSize: 8, color: C.textMain, fontWeight: 500 },

    // TWO COLUMNS
    twoCol: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 },
    col46: { width: '46%' },

    // EDUCATION & LANG
    eduItem: { marginBottom: 8 },
    eduDeg: { fontSize: 9, fontWeight: 700, color: C.textMain, marginBottom: 1 },
    eduSch: { fontSize: 8, color: C.textSub },
    eduDate: { fontSize: 7.5, color: C.textMuted, marginTop: 1 },
    langRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 },
    langName: { fontSize: 8.5, fontWeight: 500, color: C.textMain },
    langLevel: { fontSize: 8.5, color: C.textSub },

    // EXPERIENCE
    expItem: { marginBottom: 14 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 1 },
    expRole: { fontSize: 10, fontWeight: 700, color: C.textMain },
    expPeriod: { fontSize: 7.5, color: C.textMuted },
    expCompany: { fontSize: 8.5, color: C.primary, fontWeight: 500, marginBottom: 4 },
    expDesc: { fontSize: 8, color: C.textSub, fontStyle: 'italic', marginBottom: 5, lineHeight: 1.3 },
    bulletRow: { flexDirection: 'row', marginBottom: 2.5, paddingLeft: 6 },
    bulletDot: { fontSize: 8, color: C.textSub, marginRight: 5 },
    bulletText: { fontSize: 8, color: C.textSub, lineHeight: 1.3, flex: 1 },
    achievLabel: { fontSize: 8.5, fontWeight: 700, color: C.textMain, marginTop: 5, marginBottom: 3 },
});

const SKILLS = ['Excel (Intermedio)', 'Canva', 'Herramientas IA', 'Microsoft Office', 'Google Workspace', 'Reclutamiento Digital', 'Gestión de Nómina'];
const COMPETENCIAS = ['Liderazgo Colaborativo', 'Comunicación Efectiva', 'Toma de Decisiones', 'Pensamiento Crítico', 'Adaptabilidad', 'Resolución de Conflictos', 'Evaluación y Seguimiento'];

const EXPERIENCE = [
    {
        role: 'Auxiliar en Marketing Digital',
        company: 'Naré',
        period: 'Mayo 2023 – Actualidad',
        desc: 'Gestión integral de marca digital, estrategia de contenidos y análisis de métricas de desempeño.',
        bullets: [
            'Diseño e implementación de estrategias de marketing digital que incrementaron el engagement en 30%',
            'Creación mensual de 20+ piezas para redes sociales con Canva, Photoshop e Illustrator',
            'Gestión de calendarios editoriales con mejora del 25% en alcance orgánico',
            'Research y evaluación de influencers (engagement, demografía, autenticidad)',
            'Seguimiento de KPIs (CTR, crecimiento, conversiones) y ajuste dinámico de estrategias',
        ],
        achievements: null,
    },
    {
        role: 'Coordinadora Administrativa – Área de RRHH',
        company: 'Sonora Kids Group',
        period: 'Ene 2022 – Feb 2026',
        desc: 'Liderazgo de procesos de recursos humanos, administración de personal y coordinación operativa de 23 sucursales.',
        bullets: [
            'Supervisión de 23 sucursales (12 presenciales / 11 remotas) con equipo de 50 colaboradores',
            'Dirección del ciclo completo de reclutamiento y selección (100+ candidatos/año); tiempo de contratación reducido de 45 a 30 días',
            'Diseño e impartición de 15+ programas de capacitación anuales para 200+ colaboradores',
            'Control de nómina, altas, bajas y asistencias para 40–50 colaboradores de manera simultánea',
            'Negociación con proveedores que generó reducción del 15% en costos operativos',
            'Implementación de dashboards en Excel para reportes de RRHH, reduciendo tiempos de análisis en 40%',
        ],
        achievements: [
            'Retención de personal mejorada en 25% mediante planes de capacitación continua',
            'Eficiencia operativa incrementada en 20% en la red de sucursales',
            'Reducción de costos operativos en 15% vía negociación estratégica con proveedores',
        ],
    },
    {
        role: 'Cuidadora Infantil Certificada',
        company: 'Sonora Grill Group',
        period: 'Ene 2018 – Ene 2022',
        desc: 'Atención profesional de menores, comunicación asertiva con padres y aplicación de protocolos de seguridad.',
        bullets: [
            'Atención diaria a grupos de 20–30 niños (1–10 años) con 4 años consecutivos sin incidentes',
            'Índice de satisfacción del 95% en padres mediante comunicación empática y efectiva',
            'Aplicación de protocolos de primeros auxilios y seguridad, minimizando riesgos',
            'Diseño de actividades lúdicas por edad para estimular el desarrollo psicomotriz y social',
        ],
        achievements: null,
    },
];

export const CVDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* HEADER */}
            <View style={styles.header}>
                <Image style={styles.photo} src="/assets/images/profile.jpeg" />
                <View style={styles.headerText}>
                    <Text style={styles.name}>Regina Salazar Marcelino</Text>
                    <Text style={styles.roleText}>Coordinadora de Recursos Humanos</Text>
                    <View style={styles.contactRow}>
                        <Link src="mailto:regina.salazar.ma@gmail.com" style={styles.contactLink}>regina.salazar.ma@gmail.com</Link>
                        <Text style={styles.divChar}>|</Text>
                        <Link src="https://wa.me/525630154490" style={styles.contactLink}>56 3015 4490</Link>
                        <Text style={styles.divChar}>|</Text>
                        <Text style={styles.contactItem}>Magdalena Contreras, CDMX</Text>
                    </View>
                </View>
            </View>

            <View style={styles.body}>
                {/* PERFIL */}
                <Text style={styles.secTitle}>Perfil Profesional</Text>
                <View style={styles.secLine} />
                <Text style={styles.summary}>
                    Coordinadora de Recursos Humanos con 4+ años de experiencia liderando equipos de hasta 50 personas y gestionando operaciones de 23 sucursales. Especialista en reclutamiento estratégico, administración de nómina, capacitación de personal y optimización de procesos. Orientada a resultados con logros comprobados: reducción del 15% en costos, mejora del 25% en retención y 40% de incremento en eficiencia analítica. Disponible de inmediato para posiciones en RRHH, Administración o Coordinación de Personal.
                </Text>

                {/* HERRAMIENTAS */}
                <Text style={styles.secTitle}>Herramientas Digitales</Text>
                <View style={styles.secLine} />
                <View style={styles.badgeRow}>
                    {SKILLS.map((s, i) => (
                        <View key={i} style={styles.badge}><Text style={styles.badgeText}>{s}</Text></View>
                    ))}
                </View>

                {/* COMPETENCIAS */}
                <Text style={styles.secTitle}>Competencias Clave</Text>
                <View style={styles.secLine} />
                <View style={styles.badgeRow}>
                    {COMPETENCIAS.map((s, i) => (
                        <View key={i} style={styles.badge}><Text style={styles.badgeText}>{s}</Text></View>
                    ))}
                </View>

                {/* EDUCACIÓN E IDIOMAS en 2 columnas */}
                <View style={styles.twoCol}>
                    <View style={styles.col46}>
                        <Text style={styles.secTitle}>Educación</Text>
                        <View style={styles.secLine} />
                        <View style={styles.eduItem}>
                            <Text style={styles.eduDeg}>Lic. en Gestión y Desarrollo Empresarial</Text>
                            <Text style={styles.eduSch}>UVEG – En curso</Text>
                            <Text style={styles.eduDate}>2024 – Actualidad (100% en línea)</Text>
                        </View>
                        <View style={styles.eduItem}>
                            <Text style={styles.eduDeg}>Técnico Puericultista</Text>
                            <Text style={styles.eduSch}>CETIS #10</Text>
                            <Text style={styles.eduDate}>2015 – 2018</Text>
                        </View>
                    </View>
                    <View style={styles.col46}>
                        <Text style={styles.secTitle}>Idiomas y Constancias</Text>
                        <View style={styles.secLine} />
                        <View style={styles.langRow}>
                            <Text style={styles.langName}>Español</Text>
                            <Text style={styles.langLevel}>Nativo</Text>
                        </View>
                        <View style={{ marginTop: 8 }}>
                            {['Primeros Auxilios (Protección Civil)', 'Manejo de Contenido Digital'].map((c, i) => (
                                <View key={i} style={styles.bulletRow}>
                                    <Text style={styles.bulletDot}>•</Text>
                                    <Text style={styles.bulletText}>{c}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* EXPERIENCIA */}
                <Text style={styles.secTitle}>Experiencia Profesional</Text>
                <View style={styles.secLine} />
                {EXPERIENCE.map((exp, idx) => (
                    <View key={idx} style={styles.expItem} wrap={false}>
                        <View style={styles.expHeader}>
                            <Text style={styles.expRole}>{exp.role}</Text>
                            <Text style={styles.expPeriod}>{exp.period}</Text>
                        </View>
                        <Text style={styles.expCompany}>{exp.company}</Text>
                        <Text style={styles.expDesc}>{exp.desc}</Text>
                        {exp.bullets.map((b, i) => (
                            <View key={i} style={styles.bulletRow}>
                                <Text style={styles.bulletDot}>•</Text>
                                <Text style={styles.bulletText}>{b}</Text>
                            </View>
                        ))}
                        {exp.achievements && (
                            <View>
                                <Text style={styles.achievLabel}>Logros Destacados:</Text>
                                {exp.achievements.map((a, i) => (
                                    <View key={i} style={styles.bulletRow}>
                                        <Text style={styles.bulletDot}>•</Text>
                                        <Text style={styles.bulletText}>{a}</Text>
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
