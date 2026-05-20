import { notFound } from "next/navigation";
import Link from "next/link";
import { modules, getModule } from "../../../data";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ContentRenderer from "../../../components/ContentRenderer";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) return {};
  return { title: `Exercício — Módulo ${mod.number} — Acessa IA` };
}

export default async function ExercicioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();

  const modIndex = modules.findIndex((m) => m.slug === slug);
  const nextMod = modIndex < modules.length - 1 ? modules[modIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        {/* breadcrumb */}
        <div className="flex items-center gap-2 font-dm text-sm text-text-muted mb-10 flex-wrap">
          <Link href="/modulos" className="hover:text-primary-light transition-colors">
            Módulos
          </Link>
          <span>›</span>
          <Link
            href={`/modulos/${slug}`}
            className="hover:text-primary-light transition-colors"
          >
            Módulo {mod.number}
          </Link>
          <span>›</span>
          <span className="text-text-secondary">Exercício prático</span>
        </div>

        {/* header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚡</span>
            <span className="font-dm text-primary-light text-sm font-medium tracking-wider uppercase">
              Módulo {mod.number} · Exercício prático
            </span>
          </div>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-3">
            {mod.exercise.title}
          </h1>
          <p className="font-dm text-text-muted text-sm">
            {mod.exercise.subtitle}
          </p>
        </div>

        {/* content */}
        <div className="mb-14">
          <ContentRenderer blocks={mod.exercise.blocks} />
        </div>

        {/* navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#1E1E2E]">
          <Link
            href={`/modulos/${slug}`}
            className="flex items-center gap-2 font-dm text-text-secondary hover:text-white transition-colors text-sm"
          >
            <span>←</span>
            <span>Voltar ao módulo</span>
          </Link>

          {nextMod ? (
            <Link
              href={`/modulos/${nextMod.slug}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-dm font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              Próximo módulo →
            </Link>
          ) : (
            <Link
              href="/modulos"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-dm font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              Ver todos os módulos →
            </Link>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
