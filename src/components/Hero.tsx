"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { ChevronIcon } from "./icons";

const SLIDES = [
  {
    desktop: "/hero/desktop_carousel_1.png",
    mobile: "/hero/mobile_carousel_1.png",
    alt: "Produção artesanal Berger Bier na cervejaria",
  },
  {
    desktop: "/hero/desktop_carousel_2.png",
    mobile: "/hero/mobile_carousel_2.png",
    alt: "Tanques de fermentação da Berger Bier",
  },
  {
    desktop: "/hero/desktop_carousel_3.png",
    mobile: "/hero/mobile_carousel_3.png",
    alt: "Equipe Berger Bier trabalhando na produção",
  },
  {
    desktop: "/hero/desktop_carousel_4.png",
    mobile: "/hero/mobile_carousel_4.png",
    alt: "Barris e rótulos Berger Bier na cervejaria",
  },
];

const SLIDE_DURATION = 5000;
const SWIPE_THRESHOLD = 40;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

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

  const goNext = () => goTo((index + 1) % SLIDES.length);
  const goPrev = () => goTo((index - 1 + SLIDES.length) % SLIDES.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (deltaX <= -SWIPE_THRESHOLD) goNext();
    else if (deltaX >= SWIPE_THRESHOLD) goPrev();
  };

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-bark">
      <div
        className="absolute inset-0"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.desktop}
            className={`absolute inset-0 ${i === index ? "block" : "hidden"}`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.mobile}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover sm:hidden"
            />
            <Image
              src={slide.desktop}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="hidden object-cover sm:block"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/30 to-bark/50" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bark to-transparent sm:h-56" />

      <Header />

      {/* Mobile: title block sits directly above CTA + dots, bottom-anchored */}
      <div className="relative z-10 flex flex-1 flex-col justify-end gap-5 px-6 pb-8 sm:hidden">
        <div
          className={`transition-opacity duration-300 ${
            index === 0 ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== 0}
        >
          <h1 className="max-w-xl font-display text-[34px] uppercase leading-[0.95] text-cream">
            Cultura cervejeira em cada gole
          </h1>
          <p className="mt-5 max-w-md text-base text-cream-dark/90">
            Cerveja artesanal filtrada e premiada, feita de geração em geração pela
            família Berger.
          </p>
        </div>
        <a
          href="#rotulos"
          className="mx-auto w-fit rounded-full bg-crimson px-7 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-garnet"
        >
          Conhecer Rótulos
        </a>
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Foto anterior"
            className="flex h-11 w-11 shrink-0 items-center justify-center text-cream transition active:scale-95"
          >
            <ChevronIcon direction="left" className="h-5 w-5" />
          </button>
          <SlideDots index={index} onSelect={goTo} />
          <button
            type="button"
            onClick={goNext}
            aria-label="Próxima foto"
            className="flex h-11 w-11 shrink-0 items-center justify-center text-cream transition active:scale-95"
          >
            <ChevronIcon direction="right" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Desktop: title block sits directly above CTA, above the dot bar */}
      <div className="relative z-10 hidden flex-1 flex-col justify-end gap-6 px-8 pb-10 sm:flex">
        <div
          className={`transition-opacity duration-300 ${
            index === 0 ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== 0}
        >
          <h1 className="max-w-2xl font-display text-[58px] uppercase leading-[0.95] text-cream">
            Cultura cervejeira em cada gole
          </h1>
          <p className="mt-5 max-w-lg text-lg text-cream-dark/90">
            Cerveja artesanal filtrada e premiada, feita de geração em geração pela
            família Berger.
          </p>
        </div>
        <a
          href="#rotulos"
          className="w-fit rounded-full bg-crimson px-8 py-3.5 text-base font-semibold uppercase tracking-wide text-cream transition hover:bg-garnet"
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
    <div className="-m-3 flex items-center" role="tablist" aria-label="Slides do carrossel">
      {SLIDES.map((slide, i) => (
        <button
          key={slide.desktop}
          role="tab"
          aria-selected={i === index}
          aria-label={`Mostrar imagem ${i + 1}`}
          onClick={() => onSelect(i)}
          className="group flex h-11 w-11 items-center justify-center"
        >
          <span
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-9 bg-amber-light"
                : "w-5 bg-cream/40 group-hover:bg-cream/60"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
