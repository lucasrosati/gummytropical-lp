"use client";

import { useState, useEffect } from "react";

type Lead = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  created_at: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setError("Senha incorreta.");
      return;
    }
    setAuthed(true);
  }

  useEffect(() => {
    if (!authed) return;
    setLoading(true);
    fetch("/api/admin/leads")
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setLeads)
      .catch(() => setError("Erro ao carregar leads."))
      .finally(() => setLoading(false));
  }, [authed]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-form p-8 w-full max-w-sm"
        >
          <h1 className="font-heading text-2xl font-bold text-brand-headline mb-6">
            Admin
          </h1>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-brand-field px-4 py-3 font-body text-brand-text placeholder:text-[#CBCBCB] outline-none mb-4"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-pill bg-brand-cta py-3 font-heading font-semibold text-brand-cta-text transition-transform hover:scale-[1.02]"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg p-6 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-heading text-2xl lg:text-3xl font-bold text-brand-headline">
            Leads ({leads.length})
          </h1>
          <div className="flex gap-3">
            <button
              onClick={async () => {
                if (!confirm("Tem certeza que deseja apagar todos os leads?")) return;
                const res = await fetch("/api/admin/leads", { method: "DELETE" });
                if (res.ok) setLeads([]);
              }}
              className="rounded-pill bg-red-600 px-6 py-2 font-heading font-semibold text-white text-sm transition-transform hover:scale-[1.02]"
            >
              Limpar leads
            </button>
            <a
              href="/api/admin/leads?format=csv"
              className="rounded-pill bg-brand-cta px-6 py-2 font-heading font-semibold text-brand-cta-text text-sm transition-transform hover:scale-[1.02]"
            >
              Exportar CSV
            </a>
          </div>
        </div>

        {loading && <p className="text-brand-text">Carregando...</p>}

        {!loading && leads.length === 0 && (
          <p className="text-brand-text">Nenhum lead cadastrado.</p>
        )}

        {!loading && leads.length > 0 && (
          <div className="overflow-x-auto rounded-2xl shadow-ambient bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-brand-field">
                  <th className="px-4 py-3 font-heading text-sm font-semibold text-brand-text">
                    #
                  </th>
                  <th className="px-4 py-3 font-heading text-sm font-semibold text-brand-text">
                    Nome
                  </th>
                  <th className="px-4 py-3 font-heading text-sm font-semibold text-brand-text">
                    E-mail
                  </th>
                  <th className="px-4 py-3 font-heading text-sm font-semibold text-brand-text">
                    Telefone
                  </th>
                  <th className="px-4 py-3 font-heading text-sm font-semibold text-brand-text">
                    Data
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-brand-field last:border-0">
                    <td className="px-4 py-3 font-body text-sm text-brand-text">
                      {lead.id}
                    </td>
                    <td className="px-4 py-3 font-body text-sm text-brand-text">
                      {lead.nome}
                    </td>
                    <td className="px-4 py-3 font-body text-sm text-brand-text">
                      {lead.email}
                    </td>
                    <td className="px-4 py-3 font-body text-sm text-brand-text">
                      {lead.telefone}
                    </td>
                    <td className="px-4 py-3 font-body text-sm text-brand-text whitespace-nowrap">
                      {lead.created_at}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
