import { notFound } from "next/navigation";
import Link from "next/link";
import { modules, getModule } from "../../data";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) return {};
  return {
    title: `Módulo ${mod.number}: ${mod.title} — Acessa IA`,
    description: mod.description,
  };
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();

  const modIndex = modules.findIndex((m) => m.slug === slug);
  const prev = modIndex > 0 ? modules[modIndex - 1] : null;
  const next = modIndex < modules.length - 1 ? modules[modIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        {/* breadcrumb */}
        <div className="flex items-center gap-2 font-dm text-sm text-text-muted mb-10">
          <Link href="/modulos" className="hover:text-primary-light transition-colors">
            Módulos
          </Link>
          <span>›</span>
          <span className="text-text-secondary">Módulo {mod.number}</span>
        </div>

        {/* header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{mod.icon}</span>
            <span className="font-dm text-primary-light text-sm font-medium tracking-wider uppercase">
              Módulo {mod.number}
            </span>
          </div>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-4">
            {mod.title}
          </h1>
          <p className="font-dm text-text-secondary text-lg leading-relaxed max-w-2xl">
            {mod.description}
          </p>
        </div>

        {/* aulas */}
        <div className="mb-14">
          <h2 className="font-syne font-bold text-xl text-white mb-6">
            Aulas deste módulo
          </h2>
          <div className="flex flex-col gap-4">
            {mod.aulas.map((aula) => (
              <Link
                key={aula.slug}
                href={`/modulos/${slug}/${aula.slug}`}
                className="group flex items-center gap-5 bg-[#13131A] border border-[#1E1E2E] rounded-2xl p-5
                  hover:border-primary/40 hover:bg-[#16161F] transition-all duration-200"
              >
                <span className="font-syne font-bold text-2xl text-[#2A2A3A] group-hover:text-primary/30 transition-colors w-8 shrink-0">
                  {aula.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-syne font-semibold text-white group-hover:text-primary-light transition-colors leading-snug">
                    {aula.title}
                  </h3>
                </div>
                <span className="text-text-muted group-hover:text-primary-light transition-colors shrink-0">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* exercise preview */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">⚡</span>
            <h2 className="font-syne font-bold text-white text-lg">
              Exercício prático
            </h2>
          </div>
          <p className="font-dm text-text-secondary mb-4">
            {mod.exercise.title}
          </p>
          <Link
            href={`/modulos/${slug}/exercicio`}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-dm font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
          >
            Ver exercício →
          </Link>
        </div>

        {/* nav between modules */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#1E1E2E]">
          {prev ? (
            <Link
              href={`/modulos/${prev.slug}`}
              className="flex items-center gap-2 font-dm text-text-secondary hover:text-white transition-colors text-sm"
            >
              <span>←</span>
              <span>Módulo {prev.number}</span>
            </Link>
          ) : (
            <Link
              href="/modulos"
              className="flex items-center gap-2 font-dm text-text-secondary hover:text-white transition-colors text-sm"
            >
              <span>←</span>
              <span>Todos os módulos</span>
            </Link>
          )}
          {next && (
            <Link
              href={`/modulos/${next.slug}`}
              className="flex items-center gap-2 font-dm text-text-secondary hover:text-white transition-colors text-sm"
            >
              <span>Módulo {next.number}</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
