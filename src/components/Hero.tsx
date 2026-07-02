"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";

const SLIDES = [
  { src: "/hero/hero-1.svg", alt: "Produção artesanal Berger Bier" },
  { src: "/hero/hero-2.svg", alt: "Barril de cerveja Berger Bier" },
  { src: "/hero/hero-3.svg", alt: "Lúpulo e ingredientes da Berger Bier" },
  { src: "/hero/hero-4.svg", alt: "Rótulos premiados Berger Bier" },
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay]);

  const goTo = (next: number) => {
    setAutoplay(false);
    setIndex(next);
  };

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-bark">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/30 to-bark/50" />

      <Header />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-24 sm:px-8 sm:pt-28">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-amber-light sm:text-base">
          Desde 2007
        </p>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.05] text-cream sm:max-w-2xl sm:text-6xl">
          Cultura cervejeira em cada gole
        </h1>
        <p className="mt-5 max-w-md text-base text-cream-dark/90 sm:max-w-lg sm:text-lg">
          Cerveja artesanal filtrada e premiada, feita de geração em geração pela
          família Berger.
        </p>
      </div>

      {/* Mobile: CTA + dots stacked, full width */}
      <div className="relative z-10 flex flex-col gap-5 px-6 pb-8 sm:hidden">
        <a
          href="#rotulos"
          className="w-fit rounded-full bg-amber px-7 py-3 text-sm font-semibold text-bark transition hover:bg-amber-light"
        >
          Conhecer Rótulos
        </a>
        <SlideDots index={index} onSelect={goTo} />
      </div>

      {/* Desktop: CTA left-bottom, above the dot bar */}
      <div className="relative z-10 hidden flex-col items-start gap-6 px-8 pb-10 sm:flex">
        <a
          href="#rotulos"
          className="rounded-full bg-amber px-8 py-3.5 text-base font-semibold text-bark transition hover:bg-amber-light"
        >
          Conhecer Rótulos
        </a>
        <SlideDots index={index} onSelect={goTo} />
      </div>
    </section>
  );
}

function SlideDots({
  index,
  onSelect,
}: {
  index: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-3" role="tablist" aria-label="Slides do carrossel">
      {SLIDES.map((slide, i) => (
        <button
          key={slide.src}
          role="tab"
          aria-selected={i === index}
          aria-label={`Mostrar imagem ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`h-1.5 rounded-full transition-all ${
            i === index ? "w-8 bg-amber-light" : "w-4 bg-cream/40 hover:bg-cream/60"
          }`}
        />
      ))}
    </div>
  );
}
