import Link from "next/link";

export default function PagamentoSucesso() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center shadow-xl">

        <div className="text-5xl mb-5">
          🎉
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Pagamento aprovado!
        </h1>

        <p className="text-slate-600 mb-6">
          Seu acesso à Plathist foi liberado com sucesso.
        </p>

        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <p className="text-blue-700 font-medium">
            Agora você já pode entrar na plataforma usando o login criado no cadastro.
          </p>
        </div>


        <Link
          href="/login"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Entrar na plataforma
        </Link>


      </div>
    </main>
  );
}