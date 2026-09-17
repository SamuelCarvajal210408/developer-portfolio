"use client";

import React, { useState } from "react";
import { BackgroundGlow } from "../components/BackgroundGlow";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { CvModal } from "../components/CvModal";

export default function Home() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-indigo-500/40 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Ambient background glows */}
      <BackgroundGlow />

      {/* Sticky glassmorphic navbar */}
      <Navbar onOpenCv={() => setIsCvModalOpen(true)} />

      {/* Main page content sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero onOpenCv={() => setIsCvModalOpen(true)} />

        {/* Featured Projects Section */}
        <Projects />

        {/* Skills & AI-First Workflow Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
