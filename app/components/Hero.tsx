"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "5", label: "módulos" },
  { value: "100%", label: "gratuito" },
  { value: "0", label: "pré-requisitos" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = "running";
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.animationPlayState = "paused";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 overflow-hidden"
    >
      {/* radial glow */}
      <div className="absolute inset-0 radial-bg-hero pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        {/* badge */}
        <div
          data-animate
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary-light text-sm font-dm font-medium px-4 py-2 rounded-full animate-float"
          style={{ animationDelay: "0ms" }}
        >
          <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
          100% gratuito · em português · feito pra você
        </div>

        {/* headline */}
        <h1
          data-animate
          className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
          style={{ animationDelay: "150ms" }}
        >
          A IA que você não sabia{" "}
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            que podia usar
          </span>
        </h1>

        {/* subtitle */}
        <p
          data-animate
          className="font-dm text-text-secondary text-lg sm:text-xl max-w-2xl leading-relaxed"
          style={{ animationDelay: "250ms" }}
        >
          Aprenda inteligência artificial do zero, com exemplos da vida real, no
          seu ritmo — sem precisar saber nada de tecnologia.
        </p>

        {/* CTAs */}
        <div
          data-animate
          className="flex flex-col sm:flex-row gap-4 items-center"
          style={{ animationDelay: "350ms" }}
        >
          <a
            href="#modulos"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-dm font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
          >
            Começar de graça <span>→</span>
          </a>
          <a
            href="#modulos"
            className="inline-flex items-center gap-2 bg-transparent border border-[#1E1E2E] hover:border-primary/50 text-white font-dm font-medium text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-primary/5"
          >
            Ver os módulos
          </a>
        </div>

        {/* stats */}
        <div
          data-animate
          className="flex items-center gap-8 mt-4"
          style={{ animationDelay: "450ms" }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-syne font-bold text-2xl text-white">
                {stat.value}
              </span>
              <span className="font-dm text-text-muted text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
