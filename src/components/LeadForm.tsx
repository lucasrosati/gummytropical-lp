"use client";

import { useState, FormEvent } from "react";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{ email?: string; telefone?: string }>({});

  function validate(): boolean {
    const newErrors: { email?: string; telefone?: string } = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Informe um e-mail válido. Ex: nome@email.com";
    }
    if (!/^\d{11}$/.test(telefone.replace(/\D/g, ""))) {
      newErrors.telefone = "Informe DDD + 9 dígitos. Ex: 81988305738";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, telefone }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-[24px] p-8 lg:p-12 shadow-form text-center"
        style={{
          background: "linear-gradient(322.56deg, #FE008E -10.7%, #FFA200 97.42%)",
        }}
      >
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-2">
          Cadastro realizado!
        </h3>
        <p className="font-body text-white/80 mb-6">
          Você está na lista VIP. Entre no grupo para garantir sua vaga!
        </p>
        <a
          href="https://sndflw.com/i/promogummy"
          rel="noopener noreferrer"
          className="inline-block w-full rounded-[58px] bg-brand-cta px-8 py-5 text-center font-heading font-semibold text-brand-cta-text text-lg transition-transform hover:scale-[1.02]"
        >
          ENTRAR NO GRUPO VIP
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] p-8 lg:p-12 shadow-form"
      style={{
        background: "linear-gradient(322.56deg, #FE008E -10.7%, #FFA200 97.42%)",
      }}
    >
      <h2 className="font-heading text-2xl lg:text-[28px] lg:leading-[36px] font-bold text-white mb-6 lg:mb-8">
        ACESSO ANTECIPADO
      </h2>

      <div className="space-y-4 lg:space-y-5 mb-6 lg:mb-8">
        <input
          id="nome"
          type="text"
          placeholder="Nome:"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full rounded-[14px] bg-brand-field px-5 py-5 lg:py-4 font-heading text-base lg:text-base text-brand-text placeholder:text-[#CBCBCB] outline-none"
        />
        <div>
          <input
            type="text"
            placeholder="E-mail:"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: undefined })); }}
            required
            className={`w-full rounded-[14px] bg-brand-field px-5 py-5 lg:py-4 font-heading text-base lg:text-base text-brand-text placeholder:text-[#CBCBCB] outline-none ${errors.email ? "ring-2 ring-red-400" : ""}`}
          />
          {errors.email && <p className="mt-1 text-sm text-white/90">{errors.email}</p>}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Telefone:"
            value={telefone}
            onChange={(e) => { setTelefone(e.target.value); setErrors((prev) => ({ ...prev, telefone: undefined })); }}
            required
            className={`w-full rounded-[14px] bg-brand-field px-5 py-5 lg:py-4 font-heading text-base lg:text-base text-brand-text placeholder:text-[#CBCBCB] outline-none ${errors.telefone ? "ring-2 ring-red-400" : ""}`}
          />
          {errors.telefone && <p className="mt-1 text-sm text-white/90">{errors.telefone}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-[58px] bg-brand-cta px-8 py-5 lg:py-4 font-heading font-semibold text-brand-cta-text text-base lg:text-lg transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "loading" ? "Enviando..." : "QUERO SER A PRIMEIRA"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-white/90">
          Erro ao enviar. Tente novamente.
        </p>
      )}
    </form>
  );
}
