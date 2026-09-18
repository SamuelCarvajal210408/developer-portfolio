"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { 
  ArrowDown, 
  Download, 
  MapPin, 
  Sparkles, 
  Terminal, 
  Cpu, 
  CheckCircle2 
} from "lucide-react";
import { Github, Linkedin } from "./icons/BrandIcons";

export function Hero({ onOpenCv }: { onOpenCv: () => void }) {
  const { t } = useLanguage();

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Location & Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel bg-slate-900/80 border border-slate-700/50 mb-6 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ring-4 ring-emerald-500/20" />
          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-xs font-mono text-slate-300 font-medium">
            {t.hero.locationBadge}
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2 mb-4"
        >
          <div className="text-xs sm:text-sm font-mono tracking-widest text-indigo-400 uppercase font-semibold">
            {t.hero.greeting}
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-heading">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </h1>
        </motion.div>

        {/* Role Title with Monospace Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          <span className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-200">
            {t.hero.roleTitle}
          </span>
          <span className="text-slate-500 font-light hidden sm:inline">•</span>
          <span className="text-base sm:text-xl md:text-2xl font-mono text-transparent bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text font-medium">
            {t.hero.roleSubtitle}
          </span>
        </motion.div>

        {/* Summary Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-5"
        >
          {t.hero.summary}
        </motion.p>

        {/* AI Velocity Subheadline Callout Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8 px-4 py-2.5 rounded-xl glass-panel bg-gradient-to-r from-indigo-950/40 via-slate-900/70 to-violet-950/40 border border-indigo-500/25 flex items-center gap-3 text-left shadow-lg"
        >
          <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300">
            <span className="font-semibold text-indigo-300">AI Velocity: </span>
            {t.hero.aiVelocityHighlight}
          </div>
        </motion.div>

        {/* Action Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          {/* CTA: Explore Work */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
          >
            <span>{t.hero.ctaWork}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* CTA: Download CV */}
          <button
            type="button"
            onClick={onOpenCv}
            className="px-5 py-3 rounded-xl glass-card bg-slate-900/80 hover:bg-slate-800/80 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-slate-700/60 hover:border-slate-500/60 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
          >
            <Download className="w-4 h-4 text-indigo-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>{t.hero.ctaCv}</span>
          </button>

          {/* Social Links: GitHub & LinkedIn */}
          <div className="flex items-center gap-2 pl-2">
            <a
              href="https://github.com/SamuelCarvajal210408"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200"
              aria-label={t.hero.githubAria}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuelcarvajal/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-200"
              aria-label={t.hero.linkedinAria}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Quick Highlights Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl pt-4 border-t border-slate-800/60"
        >
          <div className="p-3 rounded-xl glass-panel bg-slate-900/40 text-center">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white flex items-center justify-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-400" />
              {t.hero.quickStats.experience.number}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {t.hero.quickStats.experience.label}
            </div>
          </div>

          <div className="p-3 rounded-xl glass-panel bg-slate-900/40 text-center">
            <div className="text-xl sm:text-2xl font-bold font-mono text-sky-400 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-400" />
              {t.hero.quickStats.aiSpeedup.number}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {t.hero.quickStats.aiSpeedup.label}
            </div>
          </div>

          <div className="p-3 rounded-xl glass-panel bg-slate-900/40 text-center">
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {t.hero.quickStats.coverage.number}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {t.hero.quickStats.coverage.label}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
