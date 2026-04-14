import Image from "next/image";

const benefits = [
  {
    title: "Cabelo mais forte",
    description:
      "Biotina + zinco atuando na raiz. Queda reduzida a partir do primeiro mês.",
  },
  {
    title: "Unhas resistentes",
    description:
      "Ácido fólico e a vitamina C para as unhas fortes!",
  },
  {
    title: "Aderência real",
    description:
      "A goma mais gostosa não deixa você esquecer a rotina. Consistência é o resultado.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-brand-bg py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="relative rounded-[27px] p-8 lg:p-10"
              style={{ border: "1px solid #FF3E00" }}
            >
              {/* Checkmark centralizado acima do título */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/checkmark.svg"
                  alt=""
                  width={30}
                  height={28}
                  className="w-[20px] lg:w-[30px] h-auto"
                />
              </div>

              <h3 className="font-heading text-xl lg:text-2xl lg:leading-[32px] font-bold gradient-text mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="font-heading text-sm lg:text-base lg:leading-[26px] font-normal text-brand-text text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
