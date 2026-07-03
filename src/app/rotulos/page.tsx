import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { beers } from "@/data/beers";

export const metadata: Metadata = {
  title: "Rótulos | Berger Bier",
  description:
    "Conheça todos os rótulos da Berger Bier: estilos, teor alcoólico e premiações.",
};

export default function RotulosPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-bark px-6 pb-24 pt-32 sm:px-8 sm:pt-40">
        <Header />

        <header className="mx-auto max-w-6xl text-center">
          <p className="font-eyebrow text-sm uppercase tracking-[0.3em] text-amber">
            Rótulos
          </p>
          <h1 className="mt-4 font-display text-3xl uppercase leading-none text-cream sm:text-5xl">
            Nossa linha de cervejas
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-cream-dark/80 sm:text-lg">
            Cada rótulo Berger Bier nasce do equilíbrio entre tradição alemã e
            inovação artesanal. Conheça os estilos, o teor alcoólico e as
            premiações de cada cerveja.
          </p>
        </header>

        <div className="mx-auto mt-20 flex max-w-6xl flex-col gap-20 lg:mt-28 lg:gap-28">
          {beers.map((beer, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <article
                key={beer.slug}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
              >
                {/* Product picture — alternates side on desktop */}
                <div
                  className={`relative aspect-[3/4] w-full overflow-hidden border border-cream/10 ${
                    imageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src="/products/placeholder.png"
                    alt={`Cerveja ${beer.name} da Berger Bier`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Title + description — opposite side of the picture */}
                <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                  <p className="font-eyebrow text-sm uppercase tracking-[0.3em] text-amber">
                    {beer.abv}
                  </p>
                  <h2 className="mt-3 font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
                    {beer.name}
                  </h2>
                  <p className="mt-5 max-w-md text-cream-dark/90 sm:text-lg">
                    {beer.description}
                  </p>
                  {beer.medals.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {beer.medals.map((medal) => (
                        <li
                          key={medal}
                          className="border border-amber/50 px-3 py-1 text-xs uppercase tracking-wide text-amber-light"
                        >
                          {medal}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-20 flex justify-center lg:mt-28">
          <Link
            href="/#onde-encontrar"
            className="rounded-full bg-crimson px-8 py-3.5 text-base font-semibold uppercase tracking-wide text-cream transition hover:bg-garnet"
          >
            Onde encontrar
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
