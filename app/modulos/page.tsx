import Link from "next/link";
import { modules } from "../data";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Módulos — Acessa IA",
  description: "Os 5 módulos do curso gratuito de IA para jovens brasileiros.",
};

export default function ModulosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <div className="text-center mb-16">
          <span className="inline-block font-dm text-primary-light text-sm font-medium tracking-wider uppercase mb-4">
            O curso
          </span>
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-white mb-4">
            5 módulos pra dominar a IA
          </h1>
          <p className="font-dm text-text-secondary text-lg max-w-xl mx-auto">
            Do básico ao criativo, tudo em português e com exemplos que fazem
            sentido pra sua realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => (
            <Link
              key={mod.slug}
              href={`/modulos/${mod.slug}`}
              className="group relative bg-[#13131A] border border-[#1E1E2E] rounded-2xl p-6 overflow-hidden
                hover:border-primary/40 hover:bg-[#16161F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-syne font-bold text-4xl text-[#1E1E2E] group-hover:text-primary/20 transition-colors duration-300 leading-none select-none">
                    {mod.number}
                  </span>
                  <span className="text-3xl">{mod.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-syne font-bold text-lg text-white leading-snug group-hover:text-primary-light transition-colors duration-200">
                    {mod.title}
                  </h2>
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
      </section>

      <Footer />
    </main>
  );
}
