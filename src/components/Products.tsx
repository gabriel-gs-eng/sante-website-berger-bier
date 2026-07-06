"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { beers } from "@/data/beers";
import { ChevronIcon } from "./icons";

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
    <section id="rotulos" className="bg-bark px-6 py-20 sm:px-8 sm:py-28">
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
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[calc(50%-8rem)] pb-2 sm:px-0"
        >
          {beers.map((beer) => (
            <article
              key={beer.slug}
              data-card
              className="relative flex h-[420px] w-64 shrink-0 snap-center flex-col justify-between overflow-hidden border border-cream/10 bg-bark-soft text-center sm:w-72"
            >
              <Image
                src="/products/placeholder.png"
                alt=""
                fill
                aria-hidden
                className="object-cover"
              />
              {/* Title block: dims the image to 20% down to the top of the clear strip.
                  Uses explicit rgba (not bg-bark/80) — Tailwind v4 compiles the /80
                  modifier to oklab() with alpha, which older mobile Safari can't parse
                  and drops, leaving the block transparent. */}
              <div className="relative bg-[rgba(21,20,20,0.8)] px-6 pb-5 pt-8">
                <h3 className="font-display text-xl uppercase text-cream">
                  {beer.name}
                </h3>
              </div>
              {/* Description block: dims the image to 20% from the bottom of the clear strip */}
              <div className="relative bg-[rgba(21,20,20,0.8)] px-6 pb-8 pt-5">
                <p className="text-sm leading-relaxed text-cream">
                  {beer.description}
                </p>
              </div>
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
