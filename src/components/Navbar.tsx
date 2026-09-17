"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

export function Navbar({ onOpenCv }: { onOpenCv: () => void }) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo Initials */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
          aria-label="Samuel Carvajal Portfolio Home"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-600 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200 border border-indigo-400/30">
            <span className="text-sm tracking-tight">SC</span>
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-100 tracking-tight flex items-center gap-1.5">
              Samuel Carvajal
              <span className="hidden md:inline-block text-[11px] font-mono text-slate-400 font-normal">
                / eng
              </span>
            </span>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              EST Remote
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 glass-panel bg-slate-900/60 border border-slate-700/40">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors duration-150 rounded-full hover:bg-slate-800/50"
            >
              {link.label}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-slate-700/60 mx-1" />
          <button
            type="button"
            onClick={onOpenCv}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-indigo-300 hover:text-indigo-200 transition-colors rounded-full hover:bg-indigo-950/40 font-mono"
          >
            {t.nav.resume}
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </nav>

        {/* Right Actions: Language Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <LanguageToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-panel text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-indigo-400 hover:bg-indigo-950/30 rounded-md transition-colors font-mono"
              >
                <span>{t.nav.resume} (PDF)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
