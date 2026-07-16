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

    const pagamento = await payment.get({
      id: paymentId,
    });


    console.log(
      "STATUS PAGAMENTO:",
      pagamento.status
    );


    if (pagamento.status !== "approved") {
      return NextResponse.json({
        received:true,
        message:"Pagamento pendente"
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



    const { error } = await supabaseAdmin
      .from("profiles")
      .update({
        status:"ativo",
      })
      .eq("id", userId);



    if(error){
      console.error(error);

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



    const email =
      pagamento.metadata?.email;



    if(email){


      try {


        await resend.emails.send({

          from:
          "onboarding@resend.dev",


          to:
          email,


          subject:
          "Pagamento aprovado - Plathist 🎉",


          html:`

          <h1>
          Pagamento aprovado! 🎉
          </h1>

          <p>
          Seu acesso à Plathist foi liberado.
          </p>

          <p>
          Você já pode entrar usando o email e senha cadastrados.
          </p>


          <br/>


          <a href="https://plathist-new.vercel.app/login">
          Entrar na Plathist
          </a>


          <br/><br/>


          <p>
          Bons estudos 🚀
          </p>

          `

        });


        console.log(
          "EMAIL ENVIADO:",
          email
        );


      } catch(err){

        console.error(
          "ERRO RESEND:",
          err
        );

      }

    }



    return NextResponse.json({
      success:true
    });



  } catch(error:any){

    console.error(
      "ERRO WEBHOOK:",
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