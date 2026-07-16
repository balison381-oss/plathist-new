import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { supabaseAdmin } from "@/lib/supabase-admin";

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
      console.error("Erro ao buscar pagamento no Mercado Pago:", error);

      return NextResponse.json({
        received: true,
        message: "Pagamento não encontrado.",
      });
    }

    console.log("PAGAMENTO:");
    console.log(pagamento);

    if (pagamento.status !== "approved") {
      return NextResponse.json({
        received: true,
        message: "Pagamento ainda não aprovado.",
      });
    }

    const userId = pagamento.external_reference;

    if (!userId) {
      console.error("Sem external_reference no pagamento");

      return NextResponse.json(
        {
          error: "Usuário não encontrado no pagamento.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabaseAdmin
      .from("profiles")
      .update({
        status: "ativo",
      })
      .eq("id", userId);

    if (error) {
      console.error("Erro Supabase:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    console.log("USUÁRIO LIBERADO:", userId);

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {
    console.error("Erro geral webhook:", error);

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