"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1E1E2E]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="font-syne font-bold text-xl text-white tracking-tight">
            Acessa<span className="text-primary-light">IA</span>
          </span>
        </div>

        <a
          href="#modulos"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-dm font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
        >
          Começar agora <span>→</span>
        </a>
      </div>
    </header>
  );
}
