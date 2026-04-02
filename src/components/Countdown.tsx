"use client";

import { useState, useEffect } from "react";

const TARGET = new Date("2026-04-08T23:59:59-03:00");

function calcTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { dias: 0, horas: 0, min: 0, seg: 0 };
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff % 86400000) / 3600000),
    min: Math.floor((diff % 3600000) / 60000),
    seg: Math.floor((diff % 60000) / 1000),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="flex h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] items-center justify-center rounded-[16px] shadow-countdown"
        style={{
          background: "linear-gradient(135deg, #FE008E 0%, #FFA200 100%)",
        }}
      >
        <span
          key={value}
          className="countdown-digit font-body text-xl lg:text-[28px] font-bold text-white leading-none"
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-body text-[10px] lg:text-xs font-semibold text-brand-cta uppercase tracking-[1.2px]">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex h-[60px] lg:h-[80px] items-center">
      <span className="font-body text-[24px] lg:text-[30px] font-bold text-brand-headline leading-none">
        :
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-brand-countdown py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-12 text-center">
        <h2 className="font-heading text-2xl lg:text-[68px] lg:leading-[48px] font-extrabold text-brand-headline mb-8 lg:mb-12">
          A espera está quase acabando
        </h2>
        <div className="flex items-start justify-center gap-3 lg:gap-5">
          <CountdownUnit value={time.dias} label="Dias" />
          <Separator />
          <CountdownUnit value={time.horas} label="Horas" />
          <Separator />
          <CountdownUnit value={time.min} label="Min" />
          <Separator />
          <CountdownUnit value={time.seg} label="Seg" />
        </div>
        <p className="mt-8 font-body text-sm lg:text-[24px] lg:leading-[32px] font-light text-brand-text max-w-[635px] mx-auto">
          Não perca a chance de ser VIP. O grupo fecha assim que as vagas acabarem.
        </p>
      </div>
    </section>
  );
}
