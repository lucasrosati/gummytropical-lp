import Image from "next/image";
import Countdown from "./Countdown";

export default function Header() {
  return (
    <header
      className="w-full flex flex-row flex-wrap sm:flex-nowrap items-center justify-start py-4 px-4 sm:px-6 lg:px-8 gap-4 sm:gap-8 shadow-sm relative z-50 overflow-hidden"
      style={{
        background: "linear-gradient(151.91deg, #FEAD0B 32.68%, #F67FB3 109.48%)",
      }}
    >
      <Countdown />
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/images/gummylogo.png"
          alt="Gummy Original"
          width={150}
          height={50}
          className="h-[36px] sm:h-[44px] lg:h-[50px] w-auto shrink-0"
          priority
        />
      </div>
    </header>
  );
}
