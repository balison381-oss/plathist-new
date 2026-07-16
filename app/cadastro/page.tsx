"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function CadastroPage() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const router = useRouter();



  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();

    setErro(null);



    if (senha !== confirmarSenha) {

      setErro("As senhas não coincidem.");
      return;

    }



    if (senha.length < 6) {

      setErro("A senha deve ter no mínimo 6 caracteres.");
      return;

    }



    setEnviando(true);



    const {
      data,
      error
    } = await supabase.auth.signUp({

      email,

      password: senha,

      options: {

        data: {
          nome,
        },

      },

    });



    setEnviando(false);



    if (error) {

      setErro(error.message);
      return;

    }



    console.log(
      "USUARIO CRIADO:",
      data.user
    );



    if (!data.user) {

      setErro(
        "Erro ao criar usuário."
      );

      return;

    }



    // Confirma se existe sessão antes do pagamento

    const {
      data: sessionData
    } = await supabase.auth.getSession();



    console.log(
      "SESSAO CADASTRO:",
      sessionData.session
    );



    if (!sessionData.session) {

      setErro(
        "Sessão não criada. Verifique a confirmação de email do Supabase."
      );

      return;

    }



    /*
      Fluxo:

      Auth cria usuário
      Trigger cria profiles
      status = aguardando_pagamento

      Usuário vai para pagamento
    */


    router.push("/pagamento");


  }





  return (

    <main
      className="
        min-h-screen
        bg-slate-950
        flex
        items-center
        justify-center
        px-6
        py-12
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#1e3a8a20,transparent_60%)]
        "
      />


      <div
        className="
          relative
          w-full
          max-w-lg
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/80
          p-10
          shadow-2xl
          backdrop-blur-xl
        "
      >


        <div className="text-center">


          <span
            className="
              inline-block
              rounded-full
              border
              border-yellow-500/30
              bg-yellow-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-yellow-400
            "
          >
            PLATHIST
          </span>



          <h1
            className="
              mt-6
              text-4xl
              font-black
              text-white
            "
          >
            Criar sua conta
          </h1>



          <p
            className="
              mt-3
              text-slate-400
            "
          >
            Faça seu cadastro para ter acesso à plataforma.
          </p>


        </div>





        <form
          className="
            mt-10
            space-y-5
          "
          onSubmit={handleSubmit}
        >



          {
            erro && (

              <div
                className="
                  rounded-xl
                  border
                  border-red-500/30
                  bg-red-500/10
                  p-4
                  text-sm
                  text-red-400
                "
              >
                {erro}
              </div>

            )
          }





          <input
            type="text"
            required
            value={nome}
            onChange={(e)=>setNome(e.target.value)}
            placeholder="Nome completo"
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-white
              outline-none
              focus:border-yellow-400
            "
          />





          <input
            type="email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-white
              outline-none
              focus:border-yellow-400
            "
          />





          <input
            type="password"
            required
            value={senha}
            onChange={(e)=>setSenha(e.target.value)}
            placeholder="Senha"
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-white
              outline-none
              focus:border-yellow-400
            "
          />





          <input
            type="password"
            required
            value={confirmarSenha}
            onChange={(e)=>setConfirmarSenha(e.target.value)}
            placeholder="Confirmar senha"
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-white
              outline-none
              focus:border-yellow-400
            "
          />





          <button
            type="submit"
            disabled={enviando}
            className="
              w-full
              rounded-xl
              bg-yellow-500
              py-3
              text-lg
              font-bold
              text-slate-950
              transition
              hover:bg-yellow-400
              disabled:opacity-50
            "
          >

            {
              enviando
              ? "Criando conta..."
              : "Criar Conta"
            }

          </button>




        </form>




        <div
          className="
            mt-8
            text-center
            text-slate-400
          "
        >

          Já possui uma conta?

          <Link
            href="/login"
            className="
              ml-2
              font-semibold
              text-yellow-400
            "
          >
            Entrar
          </Link>


        </div>



      </div>


    </main>

  );
}