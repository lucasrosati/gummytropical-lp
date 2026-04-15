"use client";

import { useState, useEffect } from "react";

const DAY_MS = 24 * 60 * 60 * 1000;

function calcTimeLeft() {
  const now = Date.now();
  const startOfDay = new Date(now);
  startOfDay.setHours(0, 0, 0, 0);
  const elapsed = now - startOfDay.getTime();
  const remaining = DAY_MS - elapsed;
  return {
    dias: remaining >= DAY_MS ? 1 : 0,
    horas: Math.floor((remaining % DAY_MS) / 3600000),
    min: Math.floor((remaining % 3600000) / 60000),
    seg: Math.floor((remaining % 60000) / 1000),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-[2px]">
      <div
        className="flex h-[36px] w-[36px] lg:h-[42px] lg:w-[42px] items-center justify-center rounded-[8px] lg:rounded-[10px] shadow-sm bg-white"
      >
        <span
          key={value}
          className="countdown-digit font-body text-sm lg:text-base font-bold text-brand-orange-heading leading-none"
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-body text-[8px] lg:text-[10px] font-medium text-white uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex h-[36px] lg:h-[42px] items-center">
      <span className="font-body text-lg font-bold text-white/90 leading-none">
        :
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(calcTimeLeft);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return <div className="h-[54px] lg:h-[62px]"></div>;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6">
      <p className="font-heading text-xs lg:text-sm font-semibold text-white uppercase tracking-wider shadow-sm drop-shadow-md">
        As vagas encerram em:
      </p>
      <div className="flex items-start justify-center gap-1.5 lg:gap-2">
        <CountdownUnit value={time.dias} label="Dias" />
        <Separator />
        <CountdownUnit value={time.horas} label="Horas" />
        <Separator />
        <CountdownUnit value={time.min} label="Min" />
        <Separator />
        <CountdownUnit value={time.seg} label="Seg" />
      </div>
    </div>
  );
}
