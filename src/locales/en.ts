import { Translations } from "../types";

export const en: Translations = {
  nav: {
    projects: "Projects",
    skills: "Skills & Workflow",
    aiWorkflow: "AI Velocity",
    contact: "Contact",
    resume: "CV",
    statusAvailable: "Available for Remote Roles (EST)",
  },
  hero: {
    locationBadge: "Medellín, Colombia • EST Remote Available",
    greeting: "Hello, I am",
    name: "Samuel Carvajal",
    roleTitle: "Software Engineer",
    roleSubtitle: "Backend, TypeScript & AI-First Systems",
    summary:
      "Architecting resilient distributed backends, ultra-fast web interfaces, and high-throughput microservices. Combining production-grade software craftsmanship with agentic AI tooling to deliver robust systems at 10x engineering velocity.",
    aiVelocityHighlight:
      "Supercharged by Claude Code & Antigravity paired with strict types, deep automated testing, and clean architecture.",
    ctaWork: "Explore Work",
    ctaCv: "Download CV",
    ctaContact: "Get in Touch",
    githubAria: "View Samuel Carvajal's GitHub Profile",
    linkedinAria: "Connect with Samuel Carvajal on LinkedIn",
    quickStats: {
      experience: { number: "Production", label: "Grade Architecture" },
      aiSpeedup: { number: "10x", label: "AI-Augmented Velocity" },
      coverage: { number: "100%", label: "Strict Typing & Tests" },
    },
  },
  projects: {
    sectionTag: "Featured Architecture",
    title: "Engineered for Scale & Reliability",
    subtitle:
      "A selection of production-grade systems spanning async backends, modern client interfaces, queue dispatchers, and automated generation microservices.",
    viewCode: "Source Code",
    liveDemo: "Live Overview",
    architectureTitle: "Core Architectural Highlights",
    items: [
      {
        id: "billing-crm-core",
        slug: "billing-crm-core",
        title: "billing-crm-core",
        tagline: "Resilient asynchronous CRM engine & financial processing backend",
        description:
          "Mission-critical backend designed for multi-tenant billing, customer lifecycle tracking, and financial reconciliation. Employs fully non-blocking asynchronous I/O and strict database transactional integrity.",
        architectureHighlights: [
          "High-throughput asynchronous FastAPI architecture with zero blocking bottlenecks",
          "Async SQLAlchemy 2.0 with connection pooling, migrations, and ACID guarantees",
          "Role-Based Access Control (RBAC) powered by JWT tokens with cryptographic rotation",
          "Comprehensive automated pytest test suite with 95%+ coverage across core logic",
        ],
        techStack: ["Python", "FastAPI", "SQLAlchemy Async", "PostgreSQL", "Pytest", "Docker"],
        githubUrl: "https://github.com/samuelcarvajal/billing-crm-core",
        category: "backend",
        metrics: {
          label: "Test Coverage",
          value: "95%+",
        },
      },
      {
        id: "billing-crm-portal",
        slug: "billing-crm-portal",
        title: "billing-crm-portal",
        tagline: "Modern client portal & metrics analytics dashboard",
        description:
          "High-performance client portal and financial analytics dashboard. Features instant server-side hydration, protected route guards, real-time invoice telemetry, and responsive data visualisations.",
        architectureHighlights: [
          "Next.js 15 App Router architecture with optimized streaming React Server Components",
          "Custom Tailwind CSS design system with fluid dark mode glassmorphism UI",
          "Protected client routes, secure cookie session synchronization, and CSRF defense",
          "Optimistic UI updates for high-perceived responsiveness and low latency",
        ],
        techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/samuelcarvajal/billing-crm-portal",
        demoUrl: "https://billing-portal-demo.vercel.app",
        category: "frontend",
        metrics: {
          label: "Performance Score",
          value: "99/100",
        },
      },
      {
        id: "webhook-dispatcher-relay",
        slug: "webhook-dispatcher-relay",
        title: "webhook-dispatcher-relay",
        tagline: "Asynchronous event relay with exponential backoff retry workers",
        description:
          "Resilient distributed event dispatcher engineered to safely ingest, sign, and deliver high-volume webhook payloads to external third-party endpoints with fault tolerance guarantees.",
        architectureHighlights: [
          "High-throughput Redis queue orchestration with separate dead-letter queues (DLQ)",
          "Cryptographic HMAC SHA-256 signatures generated per consumer payload delivery",
          "Configurable exponential backoff jitter retry workers preventing downstream cascading failures",
          "Comprehensive structured telemetry, distributed traces, and delivery audit logs",
        ],
        techStack: ["TypeScript", "Node.js", "Redis", "HMAC SHA-256", "Docker", "Jest"],
        githubUrl: "https://github.com/samuelcarvajal/webhook-dispatcher-relay",
        category: "infrastructure",
        metrics: {
          label: "Delivery SLA",
          value: "99.99%",
        },
      },
      {
        id: "doc-report-generator",
        slug: "doc-report-generator",
        title: "doc-report-generator",
        tagline: "High-throughput TypeScript document streaming microservice",
        description:
          "Dynamic document generation microservice converting structured data and templates into pixel-perfect PDF/A documents and financial statements streamed directly to S3 cloud storage.",
        architectureHighlights: [
          "Headless browser pool management with Puppeteer for deterministic, print-ready document rendering",
          "Memory-efficient streaming pipelines piping generated documents directly to S3 buckets",
          "Strict JSON Schema validation for inbound dynamic report payloads",
          "Isolated ephemeral worker sandbox execution minimizing memory leaks and host footprint",
        ],
        techStack: ["TypeScript", "Puppeteer", "Node.js", "AWS S3", "Docker", "Vitest"],
        githubUrl: "https://github.com/samuelcarvajal/doc-report-generator",
        category: "microservice",
        metrics: {
          label: "Generation Speed",
          value: "< 450ms",
        },
      },
    ],
  },
  skills: {
    sectionTag: "Skills & Methodologies",
    title: "Technical Stack & AI-First Workflow",
    subtitle:
      "A modern engineering toolkit balanced between rock-solid systems fundamentals and frontier AI-augmented development acceleration.",
    categories: {
      languages: {
        title: "Languages",
        subtitle: "Typed, expressive, and efficient languages for backends and clients",
        skills: [
          { name: "Python", level: "Production", highlight: true },
          { name: "TypeScript", level: "Advanced", highlight: true },
          { name: "JavaScript", level: "Advanced", highlight: false },
          { name: "SQL", level: "Relational & Tuning", highlight: true },
        ],
      },
      frameworks: {
        title: "Frameworks & Databases",
        subtitle: "Robust backbones for scalable and resilient applications",
        skills: [
          { name: "FastAPI", level: "Core Backend", highlight: true },
          { name: "Next.js 15", level: "App Router", highlight: true },
          { name: "Node.js", level: "Runtime", highlight: false },
          { name: "Redis", level: "Queues & Cache", highlight: true },
          { name: "PostgreSQL", level: "ACID & Schemas", highlight: true },
        ],
      },
      developerTooling: {
        title: "Developer Tooling & DevOps",
        subtitle: "Automation, containerization, quality gates, and version control",
        skills: [
          { name: "Claude Code", level: "AI Agent", highlight: true },
          { name: "Antigravity", level: "Agentic IDE", highlight: true },
          { name: "Docker", level: "Containers", highlight: true },
          { name: "Pytest", level: "Automated QA", highlight: false },
          { name: "Git", level: "CI / CD & Workflows", highlight: false },
        ],
      },
    },
    aiWorkflow: {
      badge: "AI-First Engineering Paradigm",
      title: "How I Combine AI Velocity with Production Craftsmanship",
      subtitle:
        "AI agents don't replace engineering rigor—they multiply it. Here is the operational philosophy powering my delivery speed:",
      description:
        "By leveraging frontier agentic systems like Claude Code and Google Antigravity as continuous pair programmers, development cycles that used to take weeks are compressed into days, without sacrificing an ounce of code quality or architectural integrity.",
      pillars: [
        {
          title: "Agentic Scaffolding & Spec-Driven Development",
          desc: "Drafting rigorous specifications, contracts, and interfaces first, allowing autonomous AI agents to scaffold boilerplate and unit tests with instant precision.",
        },
        {
          title: "Continuous Verification & Strict Type Safety",
          desc: "Every AI-generated module passes through deterministic compile-time checks (TypeScript strict mode, MyPy, linters) and extensive pytest/jest suites.",
        },
        {
          title: "Human Architectural Governance",
          desc: "Human oversight remains dedicated to what matters most: system boundaries, distributed data integrity, threat modeling, and zero-trust security.",
        },
        {
          title: "Hyper-Iterative Refinement Loops",
          desc: "Real-time automated code refactoring, benchmark comparisons, and documentation generation embedded directly into the daily git flow.",
        },
      ],
    },
  },
  contact: {
    sectionTag: "Get in Touch",
    title: "Let's Build Something Exceptional",
    subtitle:
      "Whether you're looking for a backend architect, fullstack TypeScript engineer, or AI-first velocity champion, my inbox is always open.",
    description:
      "Available for high-impact software engineering roles, distributed backend design, and contract advisory for forward-thinking teams.",
    emailLabel: "Direct Email",
    emailAddress: "samuel.carvajal.eng@gmail.com",
    copyEmail: "Copy to Clipboard",
    copied: "Copied to clipboard!",
    sendEmail: "Send Direct Email",
    linkedinLabel: "LinkedIn Network",
    linkedinCta: "Connect on LinkedIn",
    githubLabel: "GitHub Repositories",
    githubCta: "Explore Source Code",
    locationCard: {
      title: "Current Base",
      value: "Medellín, Colombia",
      timezone: "UTC-5 (EST Aligned / US Overlap)",
    },
    availabilityCard: {
      title: "Work Availability",
      status: "Actively Available",
      note: "Full-time Remote or High-Impact Engineering Contracts",
    },
  },
  cvModal: {
    title: "Samuel Carvajal - Software Engineer",
    subtitle: "Backend, TypeScript & AI-First Engineering Overview",
    downloadPdf: "Download Full CV (PDF)",
    close: "Close Preview",
    sections: {
      profile: "Engineering Profile",
      coreStack: "Core Technologies",
      keyStrengths: "Key Architectural Strengths",
    },
  },
  footer: {
    tagline: "Building resilient distributed systems with human craftsmanship and AI speed.",
    builtWith: "Built with Next.js 15, React 19, Tailwind CSS & Framer Motion.",
    allRightsReserved: "All rights reserved.",
    systemStatus: "All systems operational",
  },
};
