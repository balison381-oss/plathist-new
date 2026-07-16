import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { resend } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("WEBHOOK RECEBIDO:");
    console.log(body);

    if (body.type !== "payment") {
      return NextResponse.json({
        received: true,
      });
    }

    const paymentId = body.data?.id;

    if (!paymentId) {
      return NextResponse.json(
        {
          error: "Pagamento não informado.",
        },
        {
          status: 400,
        }
      );
    }


    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
    });


    const payment = new Payment(client);

    let pagamento;

    try {

      pagamento = await payment.get({
        id: paymentId,
      });

    } catch (error) {

      console.error(
        "Erro ao buscar pagamento:",
        error
      );

      return NextResponse.json({
        received:true,
      });

    }


    console.log("STATUS PAGAMENTO:", pagamento.status);


    if (pagamento.status !== "approved") {

      return NextResponse.json({
        received:true,
        message:"Pagamento ainda não aprovado"
      });

    }


    const userId = pagamento.external_reference;


    if (!userId) {

      return NextResponse.json(
        {
          error:"Usuário não encontrado"
        },
        {
          status:400
        }
      );

    }


    // Ativa usuário

    const { error } = await supabaseAdmin
      .from("profiles")
      .update({
        status:"ativo",
      })
      .eq("id", userId);



    if(error){

      console.error(
        "Erro Supabase:",
        error
      );

      return NextResponse.json(
        {
          error:error.message
        },
        {
          status:500
        }
      );

    }



    console.log(
      "USUÁRIO LIBERADO:",
      userId
    );



    // Busca dados do aluno

    const { data: usuario } = await supabaseAdmin
      .from("profiles")
      .select("nome,email")
      .eq("id",userId)
      .single();



    if(usuario?.email){


      try {


        await resend.emails.send({

          from:
          "Plathist <onboarding@resend.dev>",


          to:
          usuario.email,


          subject:
          "Pagamento aprovado - Plathist 🎉",


          html:`

          <h1>
          Pagamento aprovado! 🎉
          </h1>


          <p>
          Olá ${usuario.nome || ""},
          </p>


          <p>
          Seu pagamento foi confirmado.
          </p>


          <p>
          Seu acesso à plataforma Plathist já está liberado.
          </p>


          <p>
          Entre usando o email e senha criados no cadastro.
          </p>


          <br>


          <a href="https://plathist-new.vercel.app/login">
          Acessar Plathist
          </a>


          <br><br>


          <p>
          Bons estudos 🚀
          </p>

          `

        });


        console.log(
          "EMAIL ENVIADO:",
          usuario.email
        );


      } catch(emailError){

        console.error(
          "Erro enviando email:",
          emailError
        );

      }


    }



    return NextResponse.json({

      success:true

    });



  } catch(error:any){

    console.error(
      "Erro geral webhook:",
      error
    );


    return NextResponse.json(
      {
        error:error.message
      },
      {
        status:500
      }
    );

  }
}