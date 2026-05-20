export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">⚡</span>
          <span className="font-syne font-bold text-lg text-white">
            Acessa<span className="text-primary-light">IA</span>
          </span>
        </div>

        <p className="font-dm text-text-muted text-sm text-center">
          Feito com{" "}
          <span className="text-primary-light" aria-label="amor">
            💜
          </span>{" "}
          para quem merecia ter acesso antes · Acessa IA
        </p>

        <p className="font-dm text-[#2E2E3E] text-xs">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
