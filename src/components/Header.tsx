import Image from "next/image";
import Countdown from "./Countdown";

export default function Header() {
  return (
    <header
      className="w-full flex flex-col items-center justify-center py-4 gap-3 lg:gap-4 shadow-sm relative z-50"
      style={{
        background: "linear-gradient(151.91deg, #FEAD0B 32.68%, #F67FB3 109.48%)",
      }}
    >
      <Image
        src="/images/gummylogo.png"
        alt="Gummy Original"
        width={120}
        height={40}
        className="h-[24px] lg:h-[32px] w-auto"
        priority
      />
      <Countdown />
    </header>
  );
}
