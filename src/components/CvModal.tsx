"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { X, Download, FileText, CheckCircle, ExternalLink, Printer } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl rounded-2xl glass-card bg-slate-900/95 border border-slate-700/80 p-6 sm:p-8 shadow-2xl z-10 my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-cv-title"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 id="modal-cv-title" className="text-xl font-bold text-white font-heading">
                    {t.cvModal.title}
                  </h3>
                  <p className="text-xs text-indigo-300 font-mono">
                    {t.cvModal.subtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
                aria-label={t.cvModal.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Executive Summary */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1 text-sm text-slate-300 font-normal">
              {/* Profile Block */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-1.5">
                  {t.cvModal.sections.profile}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  {language === "en"
                    ? "Production-tested Software Engineer specializing in high-throughput backend services, TypeScript ecosystems, and agentic AI development workflows (Claude Code, Antigravity). Passionate about distributed systems, resilient queues, and strict automated testing."
                    : "Ingeniero de software orientado a producción, especializado en servicios backend de alto rendimiento, el ecosistema TypeScript y flujos de desarrollo acelerados con IA agéntica (Claude Code, Antigravity). Enfocado en sistemas distribuidos, colas resilientes y pruebas automatizadas rigurosas."}
                </p>
              </div>

              {/* Core Stack Block */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
                  {t.cvModal.sections.coreStack}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Python",
                    "FastAPI",
                    "SQLAlchemy",
                    "TypeScript",
                    "Next.js 15",
                    "React 19",
                    "Redis",
                    "PostgreSQL",
                    "Docker",
                    "Puppeteer",
                    "Claude Code",
                    "Antigravity",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900 border border-slate-700/60 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architectural Strengths */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                  {t.cvModal.sections.keyStrengths}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      {language === "en"
                        ? "Asynchronous Backend Architecture (FastAPI + Async SQLAlchemy, zero blocking I/O)"
                        : "Arquitectura Backend Asíncrona (FastAPI + Async SQLAlchemy, E/S sin bloqueos)"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      {language === "en"
                        ? "Fault-Tolerant Distributed Queues & Relays (Redis, DLQ, Exponential Backoff)"
                        : "Colas y Despachadores Distribuidos Tolerantes a Fallos (Redis, DLQ, Reintentos Exponenciales)"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      {language === "en"
                        ? "10x Engineering Velocity leveraging Frontier AI Pair Programming (Claude Code, Antigravity)"
                        : "Velocidad de Ingeniería 10x apalancando programación agéntica con IA (Claude Code, Antigravity)"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {t.cvModal.close}
              </button>

              <button
                type="button"
                onClick={handlePrintOrDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t.cvModal.downloadPdf}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
