"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Translations } from "../types";
import { dictionaries } from "../locales";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  mounted: boolean;
}

const STORAGE_KEY = "portfolio_language";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === "en" || savedLang === "es") {
        setLanguageState(savedLang);
      } else {
        // Infer from browser preference if no saved choice
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === "es") {
          setLanguageState("es");
        }
      }
    } catch {
      // localStorage may fail in restricted environments, fallback gracefully
    } finally {
      setMounted(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "en" ? "es" : "en";
    setLanguage(nextLang);
  };

  const t = dictionaries[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
