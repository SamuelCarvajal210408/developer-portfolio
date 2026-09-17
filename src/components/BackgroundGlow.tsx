"use client";

import React from "react";

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Top Center-Right Indigo/Violet Glow */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/3 w-[650px] h-[500px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(139,92,246,0.4) 50%, transparent 70%)"
        }}
      />

      {/* Top Left Subtle Sky/Cyan Glow */}
      <div 
        className="absolute top-48 -left-40 w-[500px] h-[450px] rounded-full opacity-15 blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.7) 0%, rgba(14,165,233,0.3) 50%, transparent 70%)"
        }}
      />

      {/* Mid Right Violet Accent */}
      <div 
        className="absolute top-[40%] -right-32 w-[600px] h-[600px] rounded-full opacity-15 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(99,102,241,0.2) 60%, transparent 75%)"
        }}
      />

      {/* Bottom Subtle Glow */}
      <div 
        className="absolute -bottom-40 left-1/4 w-[700px] h-[500px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(56,189,248,0.25) 50%, transparent 70%)"
        }}
      />

      {/* Subtle fine noise overlay & grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
    </div>
  );
}
