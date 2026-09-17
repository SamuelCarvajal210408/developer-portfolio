import { Translations } from "../types";

export const es: Translations = {
  nav: {
    projects: "Proyectos",
    skills: "Habilidades & Flujo",
    aiWorkflow: "Velocidad IA",
    contact: "Contacto",
    resume: "CV",
    statusAvailable: "Disponible para Roles Remotos (EST)",
  },
  hero: {
    locationBadge: "Medellín, Colombia • Disponible Remoto (EST)",
    greeting: "Hola, soy",
    name: "Samuel Carvajal",
    roleTitle: "Software Engineer",
    roleSubtitle: "Backend, TypeScript & Sistemas AI-First",
    summary:
      "Diseño arquitecturas backend distribuidas y resilientes, interfaces web ultrarrápidas y microservicios de alto rendimiento. Combino ingeniería de software con herramientas de IA agéntica para entregar sistemas robustos con una velocidad 10x.",
    aiVelocityHighlight:
      "Potenciado por Claude Code y Antigravity, respaldado por tipado estricto, pruebas automatizadas continuas y arquitectura limpia.",
    ctaWork: "Explorar Proyectos",
    ctaCv: "Descargar CV",
    ctaContact: "Contactar",
    githubAria: "Ver perfil de GitHub de Samuel Carvajal",
    linkedinAria: "Conectar con Samuel Carvajal en LinkedIn",
    quickStats: {
      experience: { number: "Producción", label: "Arquitectura Robusta" },
      aiSpeedup: { number: "10x", label: "Velocidad Asistida por IA" },
      coverage: { number: "100%", label: "Tipado Estricto & Tests" },
    },
  },
  projects: {
    sectionTag: "Arquitectura Destacada",
    title: "Diseñado para Escalar & Resistir",
    subtitle:
      "Una selección de sistemas listos para producción: backends asíncronos, portales cliente modernos, despachadores de eventos en cola y microservicios de generación continua.",
    viewCode: "Código Fuente",
    liveDemo: "Vista Previa",
    architectureTitle: "Puntos Clave de Arquitectura",
    items: [
      {
        id: "billing-crm-core",
        slug: "billing-crm-core",
        title: "billing-crm-core",
        tagline: "Motor CRM asíncrono y backend financiero resiliente",
        description:
          "Backend de misión crítica diseñado para facturación multi-inquilino, ciclo de vida de clientes y conciliación financiera. Emplea operaciones de E/S no bloqueantes e integridad transaccional rigurosa.",
        architectureHighlights: [
          "Arquitectura FastAPI asíncrona de alto rendimiento con cero bloqueos de concurrencia",
          "Async SQLAlchemy 2.0 con gestión de pools de conexión, migraciones y garantías ACID",
          "Control de acceso basado en roles (RBAC) autenticado mediante tokens JWT criptográficos",
          "Suite completa de pruebas automatizadas con Pytest que supera el 95% de cobertura en lógica clave",
        ],
        techStack: ["Python", "FastAPI", "SQLAlchemy Async", "PostgreSQL", "Pytest", "Docker"],
        githubUrl: "https://github.com/samuelcarvajal/billing-crm-core",
        category: "backend",
        metrics: {
          label: "Cobertura de Pruebas",
          value: "95%+",
        },
      },
      {
        id: "billing-crm-portal",
        slug: "billing-crm-portal",
        title: "billing-crm-portal",
        tagline: "Portal de clientes y panel de analíticas financieras modernas",
        description:
          "Portal de clientes de alto rendimiento con panel de métricas en tiempo real. Cuenta con hidratación optimizada del lado del servidor, rutas protegidas, telemetría de facturación y visualización interactiva de datos.",
        architectureHighlights: [
          "Arquitectura Next.js 15 App Router con React Server Components para máxima velocidad",
          "Sistema de diseño en Tailwind CSS con interfaz glassmorphic en modo oscuro refinado",
          "Rutas de cliente protegidas, sincronización segura de cookies y protección contra CSRF",
          "Actualizaciones de UI optimistas para latencia percibida instantánea",
        ],
        techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/samuelcarvajal/billing-crm-portal",
        demoUrl: "https://billing-portal-demo.vercel.app",
        category: "frontend",
        metrics: {
          label: "Rendimiento Web",
          value: "99/100",
        },
      },
      {
        id: "webhook-dispatcher-relay",
        slug: "webhook-dispatcher-relay",
        title: "webhook-dispatcher-relay",
        tagline: "Relay de eventos asíncronos con reintentos exponenciales",
        description:
          "Despachador de eventos distribuido de alta disponibilidad, construido para ingerir, firmar criptográficamente y entregar webhooks a endpoints de terceros con tolerancia total a fallos.",
        architectureHighlights: [
          "Orquestación de colas en Redis de alto volumen con colas de mensajes fallidos (DLQ)",
          "Firmas criptográficas HMAC SHA-256 generadas por carga para validación segura del receptor",
          "Workers con reintentos exponenciales con fluctuación (jitter) para evitar caídas en cascada",
          "Telemetría estructurada, trazas distribuidas y registro auditable de entregas",
        ],
        techStack: ["TypeScript", "Node.js", "Redis", "HMAC SHA-256", "Docker", "Jest"],
        githubUrl: "https://github.com/samuelcarvajal/webhook-dispatcher-relay",
        category: "infrastructure",
        metrics: {
          label: "SLA de Entrega",
          value: "99.99%",
        },
      },
      {
        id: "doc-report-generator",
        slug: "doc-report-generator",
        title: "doc-report-generator",
        tagline: "Microservicio en TypeScript para streaming de documentos y reportes",
        description:
          "Microservicio dinámico de generación documental que transforma datos estructurados y plantillas en archivos PDF/A de precisión editorial y estados financieros, transmitidos en streaming directo a almacenamiento S3.",
        architectureHighlights: [
          "Pool de navegadores headless con Puppeteer para renderizado documental fidedigno",
          "Pipelines en streaming que transmiten documentos directos a buckets S3 con bajo consumo de RAM",
          "Validación estricta con JSON Schema para payloads dinámicos entrantes",
          "Aislamiento de tareas en sandboxes efímeros evitando fugas de memoria en el servidor",
        ],
        techStack: ["TypeScript", "Puppeteer", "Node.js", "AWS S3", "Docker", "Vitest"],
        githubUrl: "https://github.com/samuelcarvajal/doc-report-generator",
        category: "microservice",
        metrics: {
          label: "Velocidad de Generación",
          value: "< 450ms",
        },
      },
    ],
  },
  skills: {
    sectionTag: "Habilidades & Metodologías",
    title: "Stack Tecnológico & Flujo AI-First",
    subtitle:
      "Un arsenal de ingeniería moderno que equilibra fundamentos sólidos de sistemas con la aceleración del desarrollo impulsado por inteligencia artificial.",
    categories: {
      languages: {
        title: "Lenguajes",
        subtitle: "Lenguajes tipados, expresivos y eficientes para backend y clientes",
        skills: [
          { name: "Python", level: "Producción", highlight: true },
          { name: "TypeScript", level: "Avanzado", highlight: true },
          { name: "JavaScript", level: "Avanzado", highlight: false },
          { name: "SQL", level: "Relacional & Tuning", highlight: true },
        ],
      },
      frameworks: {
        title: "Frameworks & Bases de Datos",
        subtitle: "Bases sólidas para aplicaciones escalables y resilientes",
        skills: [
          { name: "FastAPI", level: "Core Backend", highlight: true },
          { name: "Next.js 15", level: "App Router", highlight: true },
          { name: "Node.js", level: "Runtime", highlight: false },
          { name: "Redis", level: "Colas & Caché", highlight: true },
          { name: "PostgreSQL", level: "ACID & Esquemas", highlight: true },
        ],
      },
      developerTooling: {
        title: "Herramientas de Desarrollo & DevOps",
        subtitle: "Automatización, contenedores, control de calidad y versionado",
        skills: [
          { name: "Claude Code", level: "Agente IA", highlight: true },
          { name: "Antigravity", level: "IDE Agéntico", highlight: true },
          { name: "Docker", level: "Contenedores", highlight: true },
          { name: "Pytest", level: "QA Automatizado", highlight: false },
          { name: "Git", level: "CI / CD & Flujos", highlight: false },
        ],
      },
    },
    aiWorkflow: {
      badge: "Paradigma de Ingeniería AI-First",
      title: "Cómo combino la velocidad de la IA con el rigor de producción",
      subtitle:
        "Los agentes de IA no reemplazan el rigor de ingeniería: lo multiplican. Esta es la filosofía que impulsa mi velocidad de entrega:",
      description:
        "Al integrar sistemas agénticos avanzados como Claude Code y Google Antigravity como compañeros continuos de pair programming, los ciclos que antes tomaban semanas se completan en días, sin comprometer la calidad del código ni la integridad de la arquitectura.",
      pillars: [
        {
          title: "Scaffolding Agéntico & Desarrollo Guiado por Especificaciones",
          desc: "Diseño de especificaciones, contratos e interfaces rigurosas primero, permitiendo que agentes autónomos generen código base y pruebas unitarias con precisión inmediata.",
        },
        {
          title: "Verificación Continua & Tipado Estricto",
          desc: "Cada módulo asistido por IA pasa por chequeos deterministas en tiempo de compilación (TypeScript strict, linters, MyPy) y suites completas de pytest/jest.",
        },
        {
          title: "Gobernanza Arquitectónica Humana",
          desc: "El criterio humano se concentra en lo fundamental: límites del sistema, consistencia distribuida de datos, modelado de amenazas y seguridad Zero Trust.",
        },
        {
          title: "Bucles de Refinamiento Hiper-Iterativos",
          desc: "Refactorización automatizada, benchmarks comparativos y generación de documentación integrados de forma continua en el flujo diario de Git.",
        },
      ],
    },
  },
  contact: {
    sectionTag: "Contacto",
    title: "Construyamos Algo Excepcional",
    subtitle:
      "Si buscas un arquitecto backend, un ingeniero fullstack en TypeScript o un profesional enfocado en velocidad asistida por IA, mi bandeja de entrada siempre está disponible.",
    description:
      "Disponible para roles de alto impacto en ingeniería de software, diseño de backends distribuidos y consultoría técnica especializada.",
    emailLabel: "Correo Directo",
    emailAddress: "samuel.carvajal.eng@gmail.com",
    copyEmail: "Copiar Correo",
    copied: "¡Copiado al portapapeles!",
    sendEmail: "Enviar Correo Directo",
    linkedinLabel: "Red Profesional LinkedIn",
    linkedinCta: "Conectar en LinkedIn",
    githubLabel: "Repositorios GitHub",
    githubCta: "Explorar Código Fuente",
    locationCard: {
      title: "Ubicación",
      value: "Medellín, Colombia",
      timezone: "UTC-5 (Alineado con zona horaria EST)",
    },
    availabilityCard: {
      title: "Disponibilidad",
      status: "Activamente Disponible",
      note: "Roles remotos a tiempo completo o contratos de ingeniería",
    },
  },
  cvModal: {
    title: "Samuel Carvajal - Ingeniero de Software",
    subtitle: "Resumen de Backend, TypeScript & Metodologías AI-First",
    downloadPdf: "Descargar CV Completo (PDF)",
    close: "Cerrar Vista Previa",
    sections: {
      profile: "Perfil Profesional",
      coreStack: "Stack Tecnológico Principal",
      keyStrengths: "Fortalezas Arquitectónicas",
    },
  },
  footer: {
    tagline: "Construyendo sistemas distribuidos y resilientes con criterio humano y aceleración de IA.",
    builtWith: "Creado con Next.js 15, React 19, Tailwind CSS y Framer Motion.",
    allRightsReserved: "Todos los derechos reservados.",
    systemStatus: "Todos los sistemas operativos",
  },
};
