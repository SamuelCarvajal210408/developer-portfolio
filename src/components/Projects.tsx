"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import { Code2 } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel bg-slate-900/80 border border-slate-700/50 mb-4"
          >
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-medium">
              {t.projects.sectionTag}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight mb-4"
          >
            {t.projects.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        {/* Projects Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.projects.items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              viewCodeText={t.projects.viewCode}
              liveDemoText={t.projects.liveDemo}
              architectureTitle={t.projects.architectureTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
