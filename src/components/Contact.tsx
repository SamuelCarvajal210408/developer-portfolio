"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send 
} from "lucide-react";
import { Github, Linkedin } from "./icons/BrandIcons";

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-medium">
              {t.contact.sectionTag}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight mb-4"
          >
            {t.contact.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Direct Mailto Card (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-2xl glass-card bg-slate-900/70 p-7 sm:p-9 border border-indigo-500/25 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {t.contact.emailLabel}
                  </h3>
                  <p className="text-xs text-indigo-300 font-mono">
                    Direct Inquiry & Technical Discussions
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {t.contact.description}
              </p>

              {/* Email Display & Actions Box */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2.5 font-mono text-sm sm:text-base text-slate-200 font-semibold truncate">
                  <span className="text-indigo-400">@</span>
                  <span className="truncate">{t.contact.emailAddress}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">{t.contact.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>{t.contact.copyEmail}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${t.contact.emailAddress}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-medium shadow-md shadow-indigo-600/30 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.sendEmail}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Connection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-800/70 relative z-10">
              <a
                href="https://www.linkedin.com/in/samuelcarvajal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between p-3.5 rounded-xl bg-slate-950/40 hover:bg-slate-800/50 border border-slate-800/80 hover:border-sky-500/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover/link:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white font-heading">
                      {t.contact.linkedinLabel}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      /in/samuelcarvajal
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-sky-400 transition-colors" />
              </a>

              <a
                href="https://github.com/SamuelCarvajal21"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between p-3.5 rounded-xl bg-slate-950/40 hover:bg-slate-800/50 border border-slate-800/80 hover:border-indigo-500/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover/link:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white font-heading">
                      {t.contact.githubLabel}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      github.com/SamuelCarvajal21
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-indigo-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Location, Timezone, and Availability */}
          <div className="space-y-4 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl glass-card bg-slate-900/60 p-6 border border-slate-800/70"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white font-heading">
                  {t.contact.locationCard.title}
                </h4>
              </div>
              <div className="text-base font-semibold text-slate-100 mb-1">
                {t.contact.locationCard.value}
              </div>
              <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {t.contact.locationCard.timezone}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl glass-card bg-slate-900/60 p-6 border border-slate-800/70"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse ring-4 ring-emerald-500/20" />
                <h4 className="text-sm font-bold text-white font-heading">
                  {t.contact.availabilityCard.title}
                </h4>
              </div>
              <div className="text-base font-semibold text-emerald-400 mb-1 font-mono">
                {t.contact.availabilityCard.status}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.contact.availabilityCard.note}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
