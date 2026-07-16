import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST(request: NextRequest) {
  try {
    const token = process.env.MERCADO_PAGO_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "MERCADO_PAGO_ACCESS_TOKEN não encontrado." },
        { status: 500 }
      );
    }

    const { userId, email } = await request.json();

    if (!userId || !email) {
      return NextResponse.json(
        { error: "Usuário não identificado." },
        { status: 400 }
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
          },
        ],

        // Identificador oficial do usuário na Plathist
        external_reference: userId,

        // Informações extras
        metadata: {
          email,
        },

        back_urls: {
          success:
            "https://plathist-dwqdu0jlo-euabs.vercel.app/pagamento/sucesso",
          failure:
            "https://plathist-dwqdu0jlo-euabs.vercel.app/pagamento",
          pending:
            "https://plathist-dwqdu0jlo-euabs.vercel.app/pagamento",
        },

        auto_return: "approved",
      },
    });

    console.log("PREFERÊNCIA CRIADA");
    console.log("USER:", userId);
    console.log("PREFERENCE:", result.id);

    return NextResponse.json({
      link: result.init_point,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}