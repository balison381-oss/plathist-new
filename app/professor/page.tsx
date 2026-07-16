import Link from "next/link";

export default function ProfessorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="text-center">

        <h1 className="text-3xl font-bold text-white mb-6">
          Área do Professor
        </h1>

        <Link
          href="/api/auth/google"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Conectar Google Classroom
        </Link>

      </div>

    </main>
  );
}