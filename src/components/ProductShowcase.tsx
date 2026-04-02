import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="bg-brand-bg overflow-hidden px-5 lg:px-[186px]">
      {/* Mobile — single image with NOVO badge */}
      <div className="lg:hidden w-full relative">
        <Image
          src="/images/product-showcase-mobile.png"
          alt="Fórmula Gummy Hair agora com um sabor especial"
          width={750}
          height={1334}
          className="w-full h-auto rounded-[44px]"
        />
        {/* Badge NOVO mobile */}
        <div className="absolute right-6 bottom-[38%] z-10 rotate-[6.73deg]">
          <Image
            src="/images/badge-novo.svg"
            alt="NOVO"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Desktop — original layout */}
      <div className="hidden lg:block w-full lg:h-[824px] relative rounded-[44px] overflow-hidden">
        <div className="flex flex-row h-full">
          {/* Left — gradient with text */}
          <div
            className="relative flex-1 p-16 pl-[172px] flex flex-col justify-center"
            style={{
              background: "linear-gradient(135deg, #FE008E 0%, #FFA200 100%)",
            }}
          >
            <h2 className="font-heading text-[85px] leading-[99px] font-light text-white max-w-[760px]">
              Fórmula Gummy Hair agora com um{" "}
              <span className="font-bold">sabor especial</span>!
            </h2>
            <p className="mt-8 font-heading text-[34.6px] leading-[46px] font-normal text-white max-w-[649px]">
              Os mesmos ativos que você confia. A mesma goma que você ama, mas agora com um sabor que transborda!
            </p>

            {/* Badge NOVO */}
            <div className="absolute right-[-66px] top-1/2 -translate-y-1/2 z-10 rotate-[6.73deg]">
              <Image
                src="/images/badge-novo.svg"
                alt="NOVO"
                width={132}
                height={132}
              />
            </div>
          </div>

          {/* Right — product photo */}
          <div className="relative flex-1">
            <Image
              src="/images/product-bottle.png"
              alt="Gummy Hair Frutas Tropicais"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
