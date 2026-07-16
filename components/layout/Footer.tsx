export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-slate-300">
        <h2 className="text-lg font-black tracking-tight">
          Prof<span className="text-yellow-400">Jorge</span>
        </h2>

        <p className="mt-2">
          Plataforma de preparação para concursos públicos e carreiras militares.
        </p>

        <p className="mt-4 text-sm text-slate-400">
          © {new Date().getFullYear()} Prof Jorge. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}