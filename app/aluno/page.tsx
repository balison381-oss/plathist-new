"use client";

import Link from "next/link";
import { GraduationCap, CheckCircle, BookOpen, Sparkles } from "lucide-react";

export default function AlunoPage() {

  const classroomLink = process.env.NEXT_PUBLIC_CLASSROOM_LINK;

  return (

    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-slate-950
        via-blue-950
        to-black
        px-6
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#2563eb30,transparent_55%)]
        "
      />


      <div
        className="
          relative
          w-full
          max-w-2xl
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          shadow-2xl
          backdrop-blur-xl
        "
      >


        <div className="flex justify-center">

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-yellow-500
              text-slate-950
              shadow-lg
            "
          >

            <GraduationCap size={40}/>

          </div>

        </div>



        <h1
          className="
            mt-8
            text-center
            text-4xl
            font-black
            text-white
          "
        >
          Bem-vindo à{" "}
          <span className="text-yellow-400">
            Plathist
          </span>
        </h1>



        <p
          className="
            mt-4
            text-center
            text-lg
            text-slate-400
          "
        >
          Seu acesso está liberado.
          <br />
          Você já pode começar seus estudos.
        </p>




        <div
          className="
            mt-8
            grid
            gap-4
            md:grid-cols-2
          "
        >

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-5
            "
          >

            <div className="flex items-center gap-3">

              <CheckCircle
                className="text-green-400"
                size={24}
              />

              <span className="font-bold text-white">
                Conta ativa
              </span>

            </div>

            <p className="mt-3 text-sm text-slate-400">
              Seu pagamento foi confirmado e seu acesso está liberado.
            </p>

          </div>




          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-5
            "
          >

            <div className="flex items-center gap-3">

              <BookOpen
                className="text-yellow-400"
                size={24}
              />

              <span className="font-bold text-white">
                Turma Premium
              </span>

            </div>

            <p className="mt-3 text-sm text-slate-400">
              Acesse suas aulas e materiais pelo Classroom.
            </p>

          </div>


        </div>





        <Link
          href={classroomLink || "#"}
          target="_blank"
          className="
            mt-8
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-yellow-500
            py-4
            font-black
            text-slate-950
            transition
            hover:scale-105
          "
        >

          <Sparkles size={22}/>

          Entrar na sala de estudos

        </Link>




        <p
          className="
            mt-6
            text-center
            text-sm
            text-slate-500
          "
        >
          Plathist Premium • Preparação inteligente
        </p>


      </div>


    </main>

  );
}