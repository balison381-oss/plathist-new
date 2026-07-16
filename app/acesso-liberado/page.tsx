import Link from "next/link";

export default function AcessoLiberadoPage() {
  const classroomLink = process.env.NEXT_PUBLIC_CLASSROOM_LINK;

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-4">

      <div className="max-w-md w-full rounded-2xl bg-slate-900 p-8 text-center border border-slate-800">

        <h1 className="text-3xl font-bold text-white mb-4">
          Pagamento confirmado 🎉
        </h1>

        <p className="text-slate-300 mb-8">
          Seu acesso à Plathist foi liberado.
          Clique abaixo para entrar na sala de estudos.
        </p>

        <Link
          href={classroomLink || "#"}
          target="_blank"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          Entrar na sala Classroom
        </Link>

      </div>

    </main>
  );
}