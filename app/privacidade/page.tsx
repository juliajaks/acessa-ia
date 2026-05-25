import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Política de Privacidade — Acessa IA",
  description:
    "O Acessa IA não coleta seus dados. Acesse, aprenda e vá embora — sem deixar rastro.",
};

const sections = [
  {
    number: "1.",
    title: "Não coletamos seus dados",
    text: "O Acessa IA não exige cadastro, login ou qualquer informação pessoal para acessar o conteúdo. Você acessa, aprende e vai embora — sem deixar rastro.",
  },
  {
    number: "2.",
    title: "Não usamos seus dados para nada",
    text: "Como não coletamos dados, também não os usamos, não os vendemos e não os compartilhamos com terceiros. Nunca.",
  },
  {
    number: "3.",
    title: "Cookies",
    text: "Podemos utilizar cookies técnicos mínimos para o funcionamento básico da plataforma. Não utilizamos cookies de rastreamento, publicidade ou criação de perfis de usuário.",
  },
  {
    number: "4.",
    title: "Conteúdo de terceiros",
    text: "Algumas aulas podem conter vídeos hospedados no YouTube. Ao assistir esses vídeos, você está sujeito à política de privacidade do YouTube/Google. Recomendamos que você a consulte caso queira mais informações.",
  },
  {
    number: "5.",
    title: "Menores de idade",
    text: "O Acessa IA é feito especialmente para jovens. Por isso, temos cuidado redobrado: não coletamos nenhuma informação de menores de idade, nem direta nem indiretamente.",
  },
];

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        {/* header */}
        <div className="mb-12">
          <span className="inline-block font-dm text-primary-light text-sm font-medium tracking-wider uppercase mb-4">
            Legal
          </span>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
            Política de Privacidade
          </h1>
          <p className="font-dm text-text-muted text-sm">
            Última atualização: maio de 2026
          </p>
        </div>

        {/* intro */}
        <div className="mb-10 space-y-4">
          <p className="font-dm text-text-secondary leading-relaxed text-[1.05rem]">
            O Acessa IA é uma plataforma educacional gratuita. Nossa missão é
            simples: levar o conhecimento sobre inteligência artificial para quem
            mais precisa.
          </p>
          <p className="font-dm text-text-secondary leading-relaxed text-[1.05rem]">
            E nossa política de privacidade é igualmente simples.
          </p>
        </div>

        <div className="border-t border-[#1E1E2E] mb-10" />

        {/* sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.number} className="flex gap-5">
              <span className="font-syne font-bold text-primary/40 text-lg shrink-0 mt-0.5">
                {section.number}
              </span>
              <div className="space-y-2">
                <h2 className="font-syne font-bold text-white text-lg">
                  {section.title}
                </h2>
                <p className="font-dm text-text-secondary leading-relaxed">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1E1E2E] mt-14 pt-10 space-y-6">
          <p className="font-syne font-semibold text-primary-light text-lg leading-relaxed">
            O Acessa IA acredita que educação de qualidade não deveria custar
            nada — nem dinheiro, nem privacidade.
          </p>
          <p className="font-dm text-text-secondary text-sm leading-relaxed">
            Dúvidas sobre esta política? Fala com a gente:{" "}
            <a
              href="mailto:acessaiabrasil@gmail.com"
              className="text-primary-light hover:underline"
            >
              acessaiabrasil@gmail.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
