"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { 
  Terminal, 
  Cpu, 
  Sparkles, 
  Wrench, 
  Code, 
  Server, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  FileCode2 
} from "lucide-react";

export function Skills() {
  const { t } = useLanguage();
  const { categories, aiWorkflow } = t.skills;

  const categoryConfigs = [
    {
      data: categories.languages,
      icon: Code,
      color: "from-sky-500/20 to-blue-600/20",
      borderColor: "border-sky-500/30",
      iconColor: "text-sky-400",
    },
    {
      data: categories.frameworks,
      icon: Server,
      color: "from-indigo-500/20 to-violet-600/20",
      borderColor: "border-indigo-500/30",
      iconColor: "text-indigo-400",
    },
    {
      data: categories.developerTooling,
      icon: Wrench,
      color: "from-violet-500/20 to-fuchsia-600/20",
      borderColor: "border-violet-500/30",
      iconColor: "text-violet-400",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel bg-slate-900/80 border border-slate-700/50 mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-medium">
              {t.skills.sectionTag}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight mb-4"
          >
            {t.skills.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            {t.skills.subtitle}
          </motion.p>
        </div>

        {/* Grouped Skills Cards (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryConfigs.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.data.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl glass-card bg-slate-900/60 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${cat.color} border ${cat.borderColor} ${cat.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading tracking-tight">
                        {cat.data.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 font-normal">
                    {cat.data.subtitle}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {cat.data.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group/pill flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        skill.highlight
                          ? "bg-slate-800/90 text-slate-200 border border-indigo-500/40 shadow-sm hover:border-indigo-400 hover:text-white"
                          : "bg-slate-900/80 text-slate-400 border border-slate-700/40 hover:text-slate-200 hover:border-slate-600"
                      }`}
                    >
                      <span className="font-semibold">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-indigo-400/80 font-normal">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI-First Velocity & Philosophy Spotlight Card */}
        <motion.div
          id="ai-workflow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass-card bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-indigo-500/30 p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Subtle Ambient Background Gradient */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #6366F1 0%, #8B5CF6 50%, transparent 80%)" }}
          />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/40 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold">
                {aiWorkflow.badge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight mb-3">
              {aiWorkflow.title}
            </h3>

            <p className="text-sm sm:text-base text-indigo-200/90 font-medium mb-4">
              {aiWorkflow.subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              {aiWorkflow.description}
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiWorkflow.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-indigo-500/30 transition-all flex items-start gap-3"
                >
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1 font-heading">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
