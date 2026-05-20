"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { modules } from "../data";

export default function Modules() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll("[data-card]");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card, i) => {
      const el = card as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const gradients = [
    "from-violet-600/20 to-purple-900/10",
    "from-indigo-600/20 to-violet-900/10",
    "from-purple-600/20 to-fuchsia-900/10",
    "from-fuchsia-600/20 to-violet-900/10",
    "from-violet-600/20 to-indigo-900/10",
  ];

  return (
    <section id="modulos" ref={sectionRef} className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block font-dm text-primary-light text-sm font-medium tracking-wider uppercase mb-4">
            O curso
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white mb-4">
            5 módulos para você dominar a IA
          </h2>
          <p className="font-dm text-text-secondary text-lg max-w-xl mx-auto">
            Do básico ao criativo, tudo em português e com exemplos que fazem
            sentido pra sua realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <Link
              key={mod.slug}
              href={`/modulos/${mod.slug}`}
              data-card
              className={`group relative bg-[#13131A] border border-[#1E1E2E] rounded-2xl p-6 cursor-pointer overflow-hidden
                hover:border-primary/40 hover:bg-[#16161F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10
                ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-syne font-bold text-4xl text-[#1E1E2E] group-hover:text-primary/20 transition-colors duration-300 leading-none select-none">
                    {mod.number}
                  </span>
                  <span className="text-3xl">{mod.icon}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-syne font-bold text-lg text-white leading-snug group-hover:text-primary-light transition-colors duration-200">
                    {mod.title}
                  </h3>
                  <p className="font-dm text-text-secondary text-sm leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0">
                  <span className="font-dm text-sm font-medium">Ver módulo</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
