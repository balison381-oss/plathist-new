import Link from "next/link";

export default function SucessoPagamento() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">

      <div className="max-w-md text-center text-white">

        <h1 className="text-4xl font-bold mb-4">
          🎉 Pagamento aprovado!
        </h1>

        <p className="text-slate-300 mb-6">
          Seu acesso à Plathist foi liberado.
          Entre com o email e senha criados no cadastro.
        </p>

        <Link
          href="/login"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold"
        >
          Entrar na plataforma
        </Link>

      </div>

    </main>
  );
}