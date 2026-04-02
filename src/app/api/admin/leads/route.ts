import { NextRequest, NextResponse } from "next/server";
import { getAllLeads, deleteAllLeads } from "@/lib/db";

function isAuthed(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  return token === process.env.ADMIN_PASSWORD;
}

export async function GET(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const leads = await getAllLeads();

  const format = request.nextUrl.searchParams.get("format");
  if (format === "csv") {
    const header = "id,nome,email,telefone,created_at";
    const rows = leads.map(
      (l) => `${l.id},"${l.nome}","${l.email}","${l.telefone}","${l.created_at}"`
    );
    const csv = [header, ...rows].join("\n");

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=leads.csv",
      },
    });
  }

  return NextResponse.json(leads);
}

export async function DELETE(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  await deleteAllLeads();
  return NextResponse.json({ success: true });
}
