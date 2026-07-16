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

        // Liga pagamento ao usuário
        external_reference: userId,

        metadata: {
          email,
        },

        // Permite PIX e cartão
        // Remove apenas boleto
        payment_methods: {
          excluded_payment_types: [
            {
              id: "ticket",
            },
          ],
        },

        back_urls: {
          success:
            "https://plathist-new.vercel.app/pagamento/sucesso",

          failure:
            "https://plathist-new.vercel.app/pagamento",

          pending:
            "https://plathist-new.vercel.app/pagamento",
        },

        auto_return: "approved",
      },
    });

    console.log("===== MERCADO PAGO =====");
    console.log("PREFERÊNCIA CRIADA");
    console.log("USER:", userId);
    console.log("EMAIL:", email);
    console.log("PREFERENCE ID:", result.id);
    console.log("========================");

    return NextResponse.json({
      link: result.init_point,
    });

  } catch (error: any) {
    console.error("ERRO MERCADO PAGO:", error);

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