"use client";

import Image from "next/image";

export default function Lifestyle() {
  return (
    <section className="bg-brand-bg py-14 lg:py-20">
      <div className="mx-auto max-w-[1548px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-[730/606] rounded-[29px] overflow-hidden">
            <Image
              src="/images/lifestyle.png"
              alt="Mulheres sorrindo na praia com Gummy"
              fill
              className="object-cover"
            />
            {/* Bottom gradient overlay like Figma */}
            <div className="absolute bottom-0 left-0 right-0 h-[193px]" style={{ background: "linear-gradient(180deg, rgba(8,2,2,0) 2.44%, rgba(8,2,2,0.51) 54.19%, rgba(8,2,2,0.77) 106.23%)" }} />
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-2xl lg:text-[68px] lg:leading-[79px] font-light text-brand-text">
              Às vezes tudo que você precisa é de{" "}
              <br className="hidden lg:block" />
              <span
                className="font-extrabold"
                style={{
                  background: "linear-gradient(135deg, #E91E8C 0%, #F5A623 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                uma pausa tropical.
              </span>
            </h2>
            <p className="mt-6 lg:mt-8 font-body text-sm lg:text-[24px] lg:leading-[37px] font-light text-brand-text max-w-[702px]">
              A Gummy Hair Frutas Tropicais nasceu pra isso. Não é só um sabor, é uma micro-escapatória. Duas gominhas por dia que transformam a rotina de cuidados num momento que você genuinamente espera. Porque a aderência começa no prazer.
            </p>
            <button
              onClick={() => {
                const input = document.getElementById("nome") as HTMLInputElement | null;
                if (input) {
                  input.focus();
                  input.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              }}
              className="mt-8 lg:mt-10 inline-block rounded-[56px] px-10 lg:px-16 py-4 lg:py-5 font-heading font-semibold text-brand-cta-text text-base lg:text-[23px] transition-transform hover:scale-[1.02] cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #FE008E 0%, #FFA200 100%)",
              }}
            >
              QUERO SER VIP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
