"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { ArrowUp } from "lucide-react";
import { Github, Linkedin } from "./icons/BrandIcons";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/70 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand & Mission */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-white tracking-tight">
              Samuel Carvajal
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-indigo-400">Software Engineer</span>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            {t.footer.tagline}
          </p>
        </div>

        {/* Center System Status & Built With */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.footer.systemStatus}</span>
          </div>
          <p className="text-[11px] text-slate-500 font-mono">
            {t.footer.builtWith}
          </p>
        </div>

        {/* Right Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/SamuelCarvajal210408"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/samuelcarvajal/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg text-slate-400 hover:text-indigo-300 hover:bg-slate-900 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Samuel Carvajal. {t.footer.allRightsReserved}
      </div>
    </footer>
  );
}
