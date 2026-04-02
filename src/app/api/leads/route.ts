import { NextResponse } from "next/server";
import { insertLead } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { nome, email, telefone } = body;

  if (!nome?.trim() || !email?.trim() || !telefone?.trim()) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 400 }
    );
  }

  try {
    await insertLead(nome.trim(), email.trim(), telefone.trim());
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
