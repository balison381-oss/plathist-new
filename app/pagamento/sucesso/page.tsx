"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function PagamentoSucessoPage() {
  const [status, setStatus] = useState("verificando");

  useEffect(() => {
    verificarPagamento();

    const intervalo = setInterval(() => {
      verificarPagamento();
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);


  async function verificarPagamento() {
    const {
      data: { user },
    } = await supabase.auth.getUser();


    if (!user) {
      setStatus("erro");
      return;
    }


    const { data } = await supabase
      .from("profiles")
      .select("status")
      .eq("id", user.id)
      .single();


    if (data?.status === "ativo") {
      setStatus("ativo");
    }
  }


  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">

      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">


        {status === "verificando" && (
          <>
            <div className="text-5xl mb-5">
              ⏳
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
              Confirmando pagamento...
            </h1>

            <p className="text-slate-600 mt-4">
              Estamos aguardando a confirmação do Mercado Pago.
            </p>

            <p className="text-sm text-slate-400 mt-4">
              Isso pode levar alguns segundos.
            </p>
          </>
        )}



        {status === "ativo" && (
          <>
            <div className="text-5xl mb-5">
              🎉
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
              Pagamento aprovado!
            </h1>


            <p className="text-slate-600 mt-4">
              Seu acesso à Plathist foi liberado.
            </p>


            <Link
              href="/dashboard"
              className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Entrar na plataforma
            </Link>
          </>
        )}



        {status === "erro" && (
          <>
            <div className="text-5xl mb-5">
              ⚠️
            </div>

            <h1 className="text-2xl font-bold">
              Faça login novamente
            </h1>

            <Link
              href="/login"
              className="block mt-6 bg-blue-600 text-white py-3 rounded-xl"
            >
              Login
            </Link>
          </>
        )}


      </div>

    </main>
  );
}