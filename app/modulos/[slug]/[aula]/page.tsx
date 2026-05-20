import { notFound } from "next/navigation";
import Link from "next/link";
import { modules, getModule, getAula } from "../../../data";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ContentRenderer from "../../../components/ContentRenderer";

export function generateStaticParams() {
  return modules.flatMap((mod) =>
    mod.aulas.map((aula) => ({ slug: mod.slug, aula: aula.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; aula: string }>;
}) {
  const { slug, aula: aulaSlug } = await params;
  const result = getAula(slug, aulaSlug);
  if (!result) return {};
  return {
    title: `${result.aula.title} — Acessa IA`,
  };
}

export default async function AulaPage({
  params,
}: {
  params: Promise<{ slug: string; aula: string }>;
}) {
  const { slug, aula: aulaSlug } = await params;
  const result = getAula(slug, aulaSlug);
  if (!result) notFound();
  const { mod, aula } = result;

  const aulaIndex = mod.aulas.findIndex((a) => a.slug === aulaSlug);
  const prevAula = aulaIndex > 0 ? mod.aulas[aulaIndex - 1] : null;
  const nextAula = aulaIndex < mod.aulas.length - 1 ? mod.aulas[aulaIndex + 1] : null;
  const isLastAula = aulaIndex === mod.aulas.length - 1;

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
          <span className="text-text-secondary">Aula {aula.number}</span>
        </div>

        {/* aula header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-dm text-primary-light text-sm font-medium tracking-wider uppercase">
              Módulo {mod.number} · Aula {aula.number}
            </span>
          </div>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white leading-tight">
            {aula.title}
          </h1>
        </div>

        {/* intro */}
        <div className="mb-10">
          <h2 className="font-syne font-semibold text-sm text-primary-light uppercase tracking-wider mb-5">
            Introdução
          </h2>
          <ContentRenderer blocks={aula.intro} />
        </div>

        <div className="border-t border-[#1E1E2E] my-10" />

        {/* body */}
        <div className="mb-10">
          <h2 className="font-syne font-semibold text-sm text-primary-light uppercase tracking-wider mb-5">
            Desenvolvimento
          </h2>
          <ContentRenderer blocks={aula.body} />
        </div>

        {/* closing */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl px-6 py-5 mt-10 mb-14">
          <p className="font-syne font-semibold text-primary-light text-lg leading-relaxed">
            {aula.closing}
          </p>
        </div>

        {/* navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#1E1E2E]">
          {prevAula ? (
            <Link
              href={`/modulos/${slug}/${prevAula.slug}`}
              className="flex items-center gap-2 font-dm text-text-secondary hover:text-white transition-colors text-sm"
            >
              <span>←</span>
              <span>Aula {prevAula.number}</span>
            </Link>
          ) : (
            <Link
              href={`/modulos/${slug}`}
              className="flex items-center gap-2 font-dm text-text-secondary hover:text-white transition-colors text-sm"
            >
              <span>←</span>
              <span>Voltar ao módulo</span>
            </Link>
          )}

          {isLastAula ? (
            <Link
              href={`/modulos/${slug}/exercicio`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-dm font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              Exercício prático →
            </Link>
          ) : nextAula ? (
            <Link
              href={`/modulos/${slug}/${nextAula.slug}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-dm font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              Próxima aula →
            </Link>
          ) : null}
        </div>
      </article>

      <Footer />
    </main>
  );
}
