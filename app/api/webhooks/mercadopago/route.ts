import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

  const body = await request.json();

  console.log("WEBHOOK RECEBIDO:");

  console.log(body);

  return NextResponse.json({
    received: true
  });

}