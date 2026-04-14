import Image from "next/image";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="bg-brand-bg py-8 lg:py-[113px]">
      <div className="mx-auto max-w-[1920px] px-5 lg:px-[176px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-12">
          {/* Left — Headline (max 784px) */}
          <div className="lg:max-w-[784px] lg:flex-shrink-0 text-center lg:text-left">
            <h1 className="font-heading text-[2rem] lg:text-[68px] font-extrabold leading-[1.15] lg:leading-[79px] text-brand-headline">
              O SEU PARAÍSO TROPICAL NO MEIO DA ROTINA
            </h1>
            <p className="mt-6 lg:mt-10 font-body text-sm lg:text-[28.6px] lg:leading-[38px] font-light text-brand-text max-w-[620px] mx-auto lg:mx-0">
              Uma pausa de pura leveza para os seus dias mais agitados. Garanta o novo sabor antes de todo mundo.
            </p>

            {/* Social proof icons */}
            <div className="mt-8 lg:mt-14 flex justify-center lg:justify-start">
              <Image
                src="/images/social-icons.svg"
                alt="Siga nas redes sociais"
                width={507}
                height={142}
                className="w-[250px] lg:w-[507px] h-auto"
              />
            </div>
          </div>

          {/* Right — Form (647px) */}
          <div className="w-full lg:w-[647px] lg:flex-shrink-0">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
