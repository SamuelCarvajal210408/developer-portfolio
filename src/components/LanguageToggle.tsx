"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="inline-flex items-center gap-1 p-1 rounded-full glass-panel bg-slate-900/80 border border-slate-700/50 shadow-inner"
      role="group"
      aria-label="Language selection"
    >
      <div className="pl-2 pr-1 text-slate-400">
        <Globe className="w-3.5 h-3.5 text-indigo-400" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
          language === "en" ? "text-white" : "text-slate-400 hover:text-slate-200"
        }`}
        aria-pressed={language === "en"}
      >
        {language === "en" && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 shadow-sm shadow-indigo-500/50"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
          />
        )}
        <span className="relative z-10 font-mono tracking-wider">EN</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
          language === "es" ? "text-white" : "text-slate-400 hover:text-slate-200"
        }`}
        aria-pressed={language === "es"}
      >
        {language === "es" && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 shadow-sm shadow-indigo-500/50"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
          />
        )}
        <span className="relative z-10 font-mono tracking-wider">ES</span>
      </button>
    </div>
  );
}
