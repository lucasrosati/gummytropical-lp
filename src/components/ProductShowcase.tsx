import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="bg-brand-bg overflow-hidden px-5 lg:px-[186px]">
      <div className="w-full lg:h-[824px] relative rounded-[44px] overflow-hidden">
        {/* Background: gradient left, product image right */}
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left — gradient with text */}
          <div
            className="relative flex-1 p-8 lg:p-16 lg:pl-[172px] flex flex-col justify-center"
            style={{
              background: "linear-gradient(135deg, #FE008E 0%, #FFA200 100%)",
            }}
          >
            <h2 className="font-heading text-2xl lg:text-[85px] lg:leading-[99px] font-light text-white max-w-[760px]">
              Fórmula Gummy Hair agora com um{" "}
              <span className="font-bold">sabor especial!</span>
            </h2>
            <p className="mt-5 lg:mt-8 font-heading text-sm lg:text-[34.6px] lg:leading-[46px] font-normal text-white max-w-[649px]">
              Os mesmos ativos que você confia. A mesma goma que você ama, mas agora com um sabor que transborda!
            </p>

            {/* Badge NOVO — positioned at the right edge of the gradient */}
            <div className="hidden lg:block absolute right-[-66px] top-1/2 -translate-y-1/2 z-10 rotate-[6.73deg]">
              <Image
                src="/images/badge-novo.svg"
                alt="NOVO"
                width={132}
                height={132}
              />
            </div>
          </div>

          {/* Right — product photo */}
          <div className="relative flex-1 min-h-[400px] lg:min-h-0">
            <Image
              src="/images/product-bottle.png"
              alt="Gummy Hair Frutas Tropicais"
              fill
              className="object-cover"
            />
            {/* Badge NOVO mobile */}
            <div className="lg:hidden absolute top-6 left-6 z-10 rotate-[6.73deg]">
              <Image
                src="/images/badge-novo.svg"
                alt="NOVO"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
