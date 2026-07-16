"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function PagamentoPage() {

  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState<any>(null);


  useEffect(() => {

    async function verificarUsuario() {

      const {
        data: { user }
      } = await supabase.auth.getUser();

      console.log("USUARIO PAGAMENTO:", user);

      setUsuario(user);

    }

    verificarUsuario();

  }, []);



  async function iniciarPagamento() {

    if (!usuario) {

      setMensagem("Usuário não encontrado.");

      return;

    }

    setLoading(true);

    setMensagem("Criando pagamento...");


    try {

      const response = await fetch("/api/pagamento", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          userId: usuario.id,

          email: usuario.email,

        }),

      });



      const data = await response.json();

      console.log(data);



      if (data.link) {

        window.location.href = data.link;

        return;

      }



      setMensagem(
        data.error ||
        "Erro ao criar pagamento."
      );



    } catch (error) {

      console.error(error);

      setMensagem("Erro de conexão.");

    }



    setLoading(false);

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
      p-6
      text-white
      "
    >

      <div
        className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        text-center
        backdrop-blur-xl
        "
      >


        <div
          className="
          mx-auto
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

          <CheckCircle size={32} />

        </div>



        <h1
          className="
          mt-6
          text-3xl
          font-black
          "
        >
          Libere seu acesso
        </h1>



        <p
          className="
          mt-3
          text-slate-400
          "
        >
          Realize o pagamento via PIX ou cartão.
          Após a confirmação, sua conta será ativada automaticamente.
        </p>




        <div
          className="
          mt-6
          rounded-2xl
          border
          border-white/10
          bg-black/20
          p-5
          "
        >


          <p className="text-sm text-slate-400">

            Plano Plathist Premium

          </p>



          <p className="mt-2 text-xl font-bold">

            Acesso completo à plataforma

          </p>



          <div
            className="
            mt-5
            rounded-xl
            bg-white/5
            p-4
            text-left
            text-sm
            text-slate-300
            "
          >

            <p className="mb-3 font-bold text-white">
              Após realizar o pagamento:
            </p>


            <p>
              ✓ Aguarde a confirmação
            </p>


            <p>
              ✓ Sua conta será liberada automaticamente
            </p>


            <p>
              ✓ Entre novamente com seu login
            </p>


          </div>




          {usuario && (

            <div
              className="
              mt-4
              rounded-xl
              bg-green-500/10
              p-3
              text-sm
              text-green-400
              "
            >

              Conta conectada

              <br />

              <strong>
                {usuario.email}
              </strong>

            </div>

          )}


        </div>





        <button

          onClick={iniciarPagamento}

          disabled={loading || !usuario}

          className="
          mt-6
          w-full
          rounded-2xl
          bg-yellow-500
          py-3
          font-bold
          text-slate-950
          transition
          hover:scale-105
          disabled:opacity-50
          "

        >

          {

            loading

            ? "Criando pagamento..."

            : "Gerar pagamento"

          }


        </button>





        {mensagem && (

          <p
            className="
            mt-5
            text-sm
            text-yellow-400
            "
          >

            {mensagem}

          </p>

        )}



      </div>


    </main>

  );

}