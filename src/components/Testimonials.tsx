"use client";

import Image from "next/image";
import { useRef } from "react";
import { testimonials, type Testimonial } from "@/data/beers";
import { ChevronIcon, StarIcon } from "./icons";

function BeerMug({ name, role, image, rating, comment }: Testimonial) {
  return (
    <figure
      data-card
      className="relative flex h-[22rem] w-[19rem] shrink-0 snap-center pr-7"
    >
      {/* Handle */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 h-40 w-16 -translate-y-1/2 rounded-r-full border-[14px] border-l-0 border-amber-light/90 shadow-lg shadow-black/40"
      />

      {/* Mug body */}
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-b-[1.75rem] rounded-t-2xl border border-cream/15 bg-gradient-to-b from-amber-light via-amber to-amber-dark shadow-xl shadow-black/40">
        {/* Foam cap */}
        <div className="relative h-14 shrink-0 bg-cream">
          <div className="absolute -bottom-4 left-0 right-0 flex justify-around">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className="h-8 w-8 rounded-full bg-cream"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col items-center px-6 pb-8 pt-2 text-center">
          {/* Avatar */}
          <div className="-mt-12 h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-cream shadow-lg shadow-black/30">
            <Image
              src={image}
              alt={name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>

          <figcaption className="mt-4 font-display text-base uppercase leading-tight text-bark">
            {name}
          </figcaption>
          <p className="mt-1 text-xs uppercase tracking-wide text-bark-soft/80">
            {role}
          </p>

          {/* Rating */}
          <div className="mt-3 flex gap-1" aria-label={`${rating} de 5 estrelas`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${i < rating ? "text-garnet" : "text-bark/25"}`}
              />
            ))}
          </div>

          {/* Comment */}
          <blockquote className="mt-4 flex flex-1 items-center text-sm leading-relaxed text-bark-soft">
            {comment}
          </blockquote>
        </div>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 300) + 20;
    scroller.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="depoimentos" className="bg-bark px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-eyebrow text-sm uppercase tracking-[0.3em] text-amber">
              Depoimentos
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
              Quem prova, aprova
            </h2>
          </div>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              aria-label="Depoimento anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-amber-light hover:text-amber-light"
            >
              <ChevronIcon direction="left" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              aria-label="Próximo depoimento"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-amber-light hover:text-amber-light"
            >
              <ChevronIcon direction="right" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {testimonials.map((item) => (
            <BeerMug key={item.name} {...item} />
          ))}
        </div>

        {/* Mobile: arrow buttons below the carousel since they sit above on desktop */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            aria-label="Depoimento anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-amber-light hover:text-amber-light"
          >
            <ChevronIcon direction="left" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            aria-label="Próximo depoimento"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-amber-light hover:text-amber-light"
          >
            <ChevronIcon direction="right" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
