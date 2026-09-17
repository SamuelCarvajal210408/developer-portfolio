<div align="center">

# Samuel Carvajal Portfolio

**Software Engineer • Backend, TypeScript & AI-First Systems**

[![Next.js 15](https://img.shields.io/badge/Next.js-15.2+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12+-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://samuels-portfolio.vercel.app)

<br />

[**Live Demo**](https://samuels-portfolio.vercel.app) • [**Featured Architecture**](#-featured-repositories) • [**Local Development**](#-local-development) • [**Vercel Deployment**](#-vercel-deployment)

</div>

---

## 📌 Overview

A visually stunning, ultra-modern developer portfolio engineered for high performance, accessibility, and clean design. Built with **Next.js 15 (App Router)** and **React 19**, it showcases production-grade backends, modern client interfaces, distributed event queues, and AI-augmented velocity workflows.

### 🌟 Key Highlights

- **Bilingual Architecture (EN / ES)**: Instant client-side localization toggle (English and Español) backed by React Context, typed dictionaries (`src/locales/en.ts` and `src/locales/es.ts`), and `localStorage` persistence with zero hydration mismatch.
- **Premium Dark Slate Aesthetics**: Deep slate palette (`#0B0F19`, `#0F172A`, `#1E293B`) combined with subtle ambient violet and cyan radial gradient glows and textured grid overlays.
- **Glassmorphism Design System**: Modern backdrop-blur cards (`backdrop-blur-md` with 1px subtle borders `rgba(51,65,85,0.4)`), smooth micro-interactions, and elevate-on-hover effects via Framer Motion.
- **AI-First Engineering Velocity**: Dedicated section detailing modern pair programming workflows with Claude Code and Google Antigravity, backed by strict typing, deterministic testing, and human architectural governance.
- **Production-Ready & Optimized**: 100% TypeScript strict mode, zero ESLint warnings, dynamic OpenGraph card generation (`src/app/opengraph-image.tsx`), and dynamic favicon generation (`src/app/icon.tsx`).

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Server Components & Static Site Generation) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5.7+ (Strict Mode) |
| **Styling** | Tailwind CSS 3.4+ & Glassmorphic CSS primitives |
| **Animations** | Framer Motion 12+ (Layout transitions, card hover elevation, spring pill toggles) |
| **Typography** | Inter, Lexend, JetBrains Mono via `next/font/google` |
| **Icons** | Lucide React + custom SVG brand icons |
| **Deployment** | Vercel (Edge Network, Zero-Config CI/CD) |

---

## 🚀 Featured Repositories

The portfolio highlights four production-tested companion architectures:

### 1. [`billing-crm-core`](https://github.com/SamuelCarvajal21/billing-crm-core)
> **Resilient Asynchronous CRM Engine & Financial Processing Backend**
- High-throughput asynchronous FastAPI architecture with zero blocking bottlenecks.
- Async SQLAlchemy 2.0 with connection pooling, migrations, and ACID guarantees.
- Role-Based Access Control (RBAC) with cryptographic JWT token rotation.
- Automated pytest test suite maintaining **95%+ test coverage**.

### 2. [`billing-crm-portal`](https://github.com/SamuelCarvajal21/billing-crm-portal)
> **Modern Client Portal & Metrics Analytics Dashboard**
- Next.js 15 App Router interface with React Server Components for near-instant hydration.
- Custom Tailwind CSS glassmorphic dashboard with real-time billing metrics and data telemetry.
- Protected client routes, secure cookie session synchronization, and CSRF defense.
- Scored **99/100** on performance and Core Web Vitals.

### 3. [`webhook-dispatcher-relay`](https://github.com/SamuelCarvajal21/webhook-dispatcher-relay)
> **Asynchronous Event Relay with Exponential Backoff Retry Workers**
- High-throughput Redis queue orchestration with separate dead-letter queues (DLQ).
- Cryptographic HMAC SHA-256 signatures generated per consumer payload delivery.
- Configurable exponential backoff jitter workers preventing downstream cascading failures.
- **99.99% Delivery SLA** with end-to-end delivery audit logs and distributed traces.

### 4. [`doc-report-generator`](https://github.com/SamuelCarvajal21/doc-report-generator)
> **High-Throughput TypeScript Document Streaming Microservice**
- Headless browser pool management with Puppeteer for deterministic, print-ready document rendering.
- Memory-efficient streaming pipelines piping generated documents directly to AWS S3 buckets.
- Sub-**450ms** average generation speed under concurrent load.
- Strict JSON Schema validation for inbound dynamic report payloads.

---

## 💻 Local Development

### Prerequisites
- Node.js 20+ (Tested on Node.js v24)
- npm 10+

### Setup Steps
```bash
# 1. Clone the repository
git clone https://github.com/SamuelCarvajal21/developer-portfolio.git
cd developer-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks & Build
```bash
# Run ESLint check
npm run lint

# Build production bundle (verifies types, static generation, and metadata)
npm run build

# Preview production build locally
npm run start
```

---

## ☁️ Vercel Deployment

This project is optimized for zero-config deployment on [Vercel](https://vercel.com):

### Option A: One-Click Git Integration (Recommended)
1. Push this repository to GitHub.
2. In your [Vercel Dashboard](https://vercel.com/new), select **Add New > Project** and import `developer-portfolio`.
3. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
4. Click **Deploy**.

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

---

## 📂 Project Architecture

```
developer-portfolio/
├── public/                         # Public assets & static files
├── src/
│   ├── app/
│   │   ├── globals.css             # Glassmorphic utilities & dark slate styling
│   │   ├── icon.tsx                # Dynamic Next.js favicon generator
│   │   ├── layout.tsx              # Root layout, fonts, metadataBase, LanguageProvider
│   │   ├── opengraph-image.tsx     # Dynamic social preview card generator
│   │   └── page.tsx                # Assembled portfolio page
│   ├── components/
│   │   ├── BackgroundGlow.tsx      # Ambient radial gradient glows & grid pattern
│   │   ├── Contact.tsx             # Mailto card, copy-to-clipboard, LinkedIn & GitHub
│   │   ├── CvModal.tsx             # Executive CV preview & printable download modal
│   │   ├── Footer.tsx              # System status indicator, back-to-top & copyright
│   │   ├── Hero.tsx                # Headline, Medellín badge & AI velocity callout
│   │   ├── LanguageToggle.tsx      # Sliding EN | ES switch with Framer Motion pill
│   │   ├── Navbar.tsx              # Sticky glassmorphic navbar with SC logo
│   │   ├── ProjectCard.tsx         # Interactive cards with architecture highlights
│   │   ├── Projects.tsx            # Featured projects showcase grid
│   │   ├── Skills.tsx              # Grouped pills + AI-First Workflow spotlight
│   │   └── icons/
│   │       └── BrandIcons.tsx      # SVG icons for GitHub & LinkedIn
│   ├── context/
│   │   └── LanguageContext.tsx     # Bilingual React Context with localStorage sync
│   ├── locales/
│   │   ├── en.ts                   # English dictionary
│   │   ├── es.ts                   # Spanish dictionary
│   │   └── index.ts                # Dictionaries export
│   └── types/
│       └── index.ts                # TypeScript types for Projects, Skills, Locales
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 📄 License

MIT © [Samuel Carvajal](https://samuels-portfolio.vercel.app)
