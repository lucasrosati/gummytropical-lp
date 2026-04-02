"use client";

import Image from "next/image";

const vipBenefits = [
  {
    title: "Brinde especial no grupo",
    description: "Presente exclusivo, preparado apenas para os membros VIP.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Descontos exclusivos",
    description: "Acesso à pré-venda com prioridade antes do lançamento oficial.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: "Spoilers em primeira mão",
    description: "Bastidores, teasers e conteúdos do Gummy Hair Frutas Tropicais antes de todo mundo.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Vantagens antecipadas",
    description: "Informações, dicas e novidades direto no seu WhatsApp.",
    icon: "svg",
  },
];

export default function FinalCta() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-12 text-center">
        <h2 className="font-heading text-xl lg:text-[41px] lg:leading-[62px] font-normal text-brand-text max-w-[847px] mx-auto">
          Entre para o <span className="font-bold gradient-text">GRUPO VIP</span> e garanta que seja a{" "}
          <span className="font-bold gradient-text">PRIMEIRA</span> a receber tudo isso!
        </h2>

        {/* Benefit cards */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {vipBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[17px] p-5 lg:p-6 text-left"
              style={{ border: "0.72px solid #FF9F40", background: "rgba(255,255,255,0.05)" }}
            >
              {benefit.icon === "svg" ? (
                <Image
                  src="/images/icon-vantagens.svg"
                  alt=""
                  width={52}
                  height={52}
                  className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] mb-4"
                />
              ) : (
                <div
                  className="w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] rounded-[15px] flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, #FE008E 0%, #FFA200 100%)",
                  }}
                >
                  {benefit.icon}
                </div>
              )}
              <h3 className="font-body text-sm lg:text-[17px] lg:leading-[26px] font-bold text-brand-orange-heading mb-2">
                {benefit.title}
              </h3>
              <p className="font-heading text-xs lg:text-[14.6px] lg:leading-[25px] font-normal text-brand-text">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => document.getElementById("nome")?.focus(), 600);
          }}
          className="mt-10 inline-block rounded-[56px] px-12 lg:px-16 py-4 lg:py-5 font-heading font-semibold text-brand-cta-text text-base lg:text-[23px] transition-transform hover:scale-[1.02] cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #FE008E 0%, #FFA200 100%)",
          }}
        >
          QUERO SER VIP
        </button>

        <p className="mt-8 font-body text-sm lg:text-[17.6px] lg:leading-[32px] text-brand-text max-w-[1002px] mx-auto">
          Os acessos VIP são <span className="font-bold">restritos</span> e o grupo será fechado em breve. Garanta sua vaga antes que as inscrições se encerrem.
        </p>
        <p className="mt-3 font-body text-[10px] lg:text-[11.2px] lg:leading-[17px] text-brand-text">
          *Ao clicar, você autoriza o envio de mensagens via WhatsApp com novidades e ofertas exclusivas.
        </p>
      </div>
    </section>
  );
}
