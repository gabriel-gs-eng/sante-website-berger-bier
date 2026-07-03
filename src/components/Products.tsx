"use client";

import Link from "next/link";
import { useRef } from "react";
import { beers } from "@/data/beers";
import { BeerGlassIcon, ChevronIcon } from "./icons";

export default function Products() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 280) + 20;
    scroller.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-bark px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-eyebrow text-sm uppercase tracking-[0.3em] text-amber">
              Produtos
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
              Nossa linha de cervejas
            </h2>
          </div>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              aria-label="Produto anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-amber-light hover:text-amber-light"
            >
              <ChevronIcon direction="left" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              aria-label="Próximo produto"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-amber-light hover:text-amber-light"
            >
              <ChevronIcon direction="right" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {beers.map((beer) => (
            <article
              key={beer.slug}
              data-card
              className="flex w-64 shrink-0 snap-center flex-col items-center border border-cream/10 bg-bark-soft/60 px-6 py-8 text-center sm:w-72"
            >
              <h3 className="font-display text-xl uppercase text-cream">{beer.name}</h3>
              <BeerGlassIcon className="mt-5 h-12 w-12 text-amber" />
              <p className="mt-5 text-sm leading-relaxed text-cream-dark/80">
                {beer.description}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile: arrow buttons below the carousel since they sit above on desktop */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            aria-label="Produto anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-amber-light hover:text-amber-light"
          >
            <ChevronIcon direction="left" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            aria-label="Próximo produto"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-amber-light hover:text-amber-light"
          >
            <ChevronIcon direction="right" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/rotulos"
            className="rounded-full bg-crimson px-8 py-3.5 text-base font-semibold uppercase tracking-wide text-cream transition hover:bg-garnet"
          >
            Ver rótulos
          </Link>
        </div>
      </div>
    </section>
  );
}
