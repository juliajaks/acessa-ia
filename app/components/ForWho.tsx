"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    emoji: "🎒",
    title: "Estudante de escola pública",
    description:
      "Não importa a série ou a cidade. Se você estuda, a IA pode ser sua maior aliada nos estudos.",
  },
  {
    emoji: "💼",
    title: "Procurando o primeiro emprego",
    description:
      "Usar IA no currículo e nas entrevistas é um diferencial real no mercado de trabalho de hoje.",
  },
  {
    emoji: "📱",
    title: "Só tem o celular",
    description:
      "Tudo aqui funciona no smartphone. Sem precisar de computador, sem precisar de internet rápida.",
  },
  {
    emoji: "🤔",
    title: "Nunca usou IA na vida",
    description:
      "Perfeito. Começamos do absoluto zero. Nenhuma pergunta é boba por aqui.",
  },
];

export default function ForWho() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll("[data-card]");
    if (!items) return;

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

    items.forEach((item, i) => {
      const el = item as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 relative">
      {/* subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block font-dm text-primary-light text-sm font-medium tracking-wider uppercase mb-4">
            Para quem é
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Esse curso é feito pra você
          </h2>
          <p className="font-dm text-text-secondary text-lg max-w-xl mx-auto">
            Se você se encaixa em algum desses perfis, já tem tudo que precisa
            para começar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              data-card
              className="group bg-[#13131A] border border-[#1E1E2E] rounded-2xl p-6 flex flex-col gap-4
                hover:border-primary/40 hover:bg-[#16161F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="text-4xl">{card.emoji}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-syne font-bold text-white text-lg leading-snug group-hover:text-primary-light transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="font-dm text-text-secondary text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
