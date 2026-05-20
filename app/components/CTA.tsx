"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* glow background */}
      <div className="absolute inset-0 radial-bg-cta pointer-events-none" />

      <div
        ref={sectionRef}
        className="relative max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
      >
        {/* decorative ring */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 rounded-full border border-primary/10" />
          <div className="absolute w-96 h-96 rounded-full border border-primary/5" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white leading-tight">
            Começa agora.{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              É de graça.
            </span>
          </h2>
          <p className="font-dm text-text-secondary text-lg">
            Sem cadastro, sem cartão, sem enrolação.
          </p>
        </div>

        <a
          href="#modulos"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-dm font-semibold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40"
        >
          Começar de graça <span className="text-xl">→</span>
        </a>

        <p className="font-dm text-text-muted text-sm">
          Mais de 5 módulos disponíveis · Funciona no celular · 100% em português
        </p>
      </div>
    </section>
  );
}
