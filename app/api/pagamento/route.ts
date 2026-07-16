import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST(request: NextRequest) {

  try {

    const token = process.env.MERCADO_PAGO_ACCESS_TOKEN;

    if (!token) {

      return NextResponse.json(
        {
          error: "MERCADO_PAGO_ACCESS_TOKEN não encontrado."
        },
        {
          status: 500
        }
      );

    }



    const {

      userId,

      email

    } = await request.json();



    if (!userId || !email) {

      return NextResponse.json(
        {
          error: "Usuário não identificado."
        },
        {
          status: 400
        }
      );

    }



    const client = new MercadoPagoConfig({

      accessToken: token,

    });



    const preference = new Preference(client);



    const result = await preference.create({

      body: {

        items: [

          {

            id: "plathist-premium",

            title: "Plathist Premium",

            description: "Acesso completo à plataforma",

            quantity: 1,

            currency_id: "BRL",

            unit_price: 1,

          }

        ],



        metadata: {

          user_id: userId,

          email: email,

        },



        back_urls: {

          success: "http://localhost:3000/aluno",

          failure: "http://localhost:3000/pagamento",

          pending: "http://localhost:3000/pagamento",

        }

      },

    });



    console.log({

      userId,

      email,

      preference: result.id

    });



    return NextResponse.json({

      link: result.init_point

    });

  }

  catch (error: any) {

    console.error("ERRO MP:", error);

    return NextResponse.json(

      {

        error: error.message

      },

      {

        status: 500

      }

    );

  }

}