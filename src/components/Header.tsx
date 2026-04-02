import Image from "next/image";

export default function Header() {
  return (
    <header
      className="w-full h-[60px] lg:h-[102px] flex items-center justify-center"
      style={{
        background: "linear-gradient(151.91deg, #FEAD0B 32.68%, #F67FB3 109.48%)",
      }}
    >
      <Image
        src="/images/gummylogo.png"
        alt="Gummy Original"
        width={120}
        height={40}
        className="h-[28px] lg:h-[40px] w-auto"
        priority
      />
    </header>
  );
}
