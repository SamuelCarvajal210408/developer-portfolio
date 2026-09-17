import type { Metadata } from "next";
import { Inter, Lexend, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samuels-portfolio.vercel.app"),
  title: "Samuel Carvajal Portfolio",
  description:
    "Portfolio of Samuel Carvajal: Software Engineer specializing in resilient backends, TypeScript ecosystems, and AI-first engineering velocity (Claude Code, Antigravity). Based in Medellín, Colombia (EST Remote).",
  keywords: [
    "Samuel Carvajal",
    "Samuel Carvajal Portfolio",
    "Software Engineer",
    "Backend Engineer",
    "FastAPI",
    "TypeScript",
    "Next.js 15",
    "React 19",
    "Python",
    "AI-First Software",
    "Claude Code",
    "Antigravity",
    "Medellín Colombia",
  ],
  authors: [{ name: "Samuel Carvajal" }],
  creator: "Samuel Carvajal",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    url: "https://samuels-portfolio.vercel.app",
    title: "Samuel Carvajal Portfolio",
    description:
      "Crafting production-grade distributed backends and high-velocity applications using Next.js 15, FastAPI, and agentic AI tooling.",
    siteName: "Samuel Carvajal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Carvajal Portfolio",
    description: "Backend, TypeScript & AI-First Systems Architect.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lexend.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-[#0B0F19] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
