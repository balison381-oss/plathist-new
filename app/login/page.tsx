"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";


export default function LoginPage() {

  const router = useRouter();


  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);



  async function handleLogin(e: React.FormEvent) {

    e.preventDefault();

    setErro("");
    setLoading(true);



    const {
      data,
      error
    } = await supabase.auth.signInWithPassword({

      email,

      password: senha,

    });



    if(error){

      setErro(
        "Email ou senha incorretos."
      );

      setLoading(false);
      return;

    }



    const user = data.user;



    const {
      data: profile,
      error: profileError
    } = await supabase
      .from("profiles")
      .select("*")
      .eq(
        "id",
        user.id
      )
      .single();



    if(profileError){

      setErro(
        "Perfil não encontrado."
      );

      setLoading(false);
      return;

    }



    // Se for administrador

    if (profile.tipo === "admin") {

      router.push("/admin");
      return;

    }



    // Se o aluno já pagou

    if (profile.status === "ativo") {

      router.push("/aluno");
      return;

    }



    // Se ainda não pagou

    router.push("/pagamento");


  }





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
      "
    >


      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#1e40af30,transparent_60%)]
        "
      />



      <div
        className="
          relative
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          shadow-2xl
          backdrop-blur-xl
        "
      >



        <div
          className="
            flex
            justify-center
          "
        >

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-yellow-500
              text-slate-950
            "
          >

            <LogIn size={32}/>

          </div>

        </div>




        <h1
          className="
            mt-6
            text-center
            text-4xl
            font-black
            text-white
          "
        >

          Entrar na 
          <span className="text-yellow-400">
            {" "}Plathist
          </span>

        </h1>




        <p
          className="
            mt-3
            text-center
            text-slate-400
          "
        >

          Acesse sua área de estudos.

        </p>




        <form
          onSubmit={handleLogin}
          className="
            mt-8
            space-y-5
          "
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





          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-slate-300
              "
            >
              Email
            </label>


            <input

              type="email"

              required

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              placeholder="Digite seu email"

              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-4
                py-3
                text-white
                outline-none
                focus:border-yellow-400
              "

            />

          </div>






          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-slate-300
              "
            >
              Senha
            </label>


            <input

              type="password"

              required

              value={senha}

              onChange={(e)=>setSenha(e.target.value)}

              placeholder="Digite sua senha"

              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-4
                py-3
                text-white
                outline-none
                focus:border-yellow-400
              "

            />

          </div>





          <button

            disabled={loading}

            className="
              w-full
              rounded-xl
              bg-yellow-500
              py-3
              font-black
              text-slate-950
              transition
              hover:scale-105
              disabled:opacity-50
            "

          >

            {
              loading
              ? "Entrando..."
              : "Entrar"
            }


          </button>



        </form>






        <p
          className="
            mt-8
            text-center
            text-slate-400
          "
        >

          Ainda não possui conta?


          <Link
            href="/cadastro"
            className="
              ml-2
              font-bold
              text-yellow-400
              hover:text-yellow-300
            "
          >

            Criar conta

          </Link>


        </p>



      </div>


    </main>

  );
}