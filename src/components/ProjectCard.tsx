"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectItem } from "../types";
import { ExternalLink, Check, Layers, ArrowUpRight, Cpu } from "lucide-react";
import { Github } from "./icons/BrandIcons";

interface ProjectCardProps {
  project: ProjectItem;
  viewCodeText: string;
  liveDemoText: string;
  architectureTitle: string;
}

export function ProjectCard({
  project,
  viewCodeText,
  liveDemoText,
  architectureTitle,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl glass-card bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Ambient hover glow inside card */}
      <div 
        className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none" 
      />

      <div>
        {/* Header: Title + Category & Metric Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>
          </div>

          {project.metrics && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono">
              <span className="text-slate-400">{project.metrics.label}:</span>
              <span className="text-emerald-400 font-semibold">{project.metrics.value}</span>
            </div>
          )}
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium text-indigo-300/90 mb-4 font-sans">
          {project.tagline}
        </p>

        {/* Main description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Architecture Highlights */}
        <div className="mb-6 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            {architectureTitle}
          </div>
          <ul className="space-y-2">
            {project.architectureHighlights.map((highlight, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="text-indigo-400 mt-0.5 shrink-0 font-bold">›</span>
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack Badges + Action Links */}
      <div className="pt-4 border-t border-slate-800/70">
        {/* Monospace Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-indigo-500/40 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions Links */}
        <div className="flex items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-800/60 border border-transparent hover:border-slate-700"
          >
            <Github className="w-3.5 h-3.5 text-slate-400" />
            <span>{viewCodeText}</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-indigo-400 hover:text-indigo-300 transition-colors py-1 px-2.5 rounded-lg bg-indigo-950/40 hover:bg-indigo-900/40 border border-indigo-800/40"
            >
              <span>{liveDemoText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
