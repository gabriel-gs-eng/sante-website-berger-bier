import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rótulos | Berger Bier",
  description: "Conheça todos os rótulos da Berger Bier.",
};

export default function RotulosPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-bark px-6 pb-24 pt-32 text-center sm:px-8 sm:pt-40">
        <Header />
        <p className="font-eyebrow text-sm uppercase tracking-[0.3em] text-amber">
          Rótulos
        </p>
        <h1 className="mt-4 font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
          Página em construção
        </h1>
        <p className="mx-auto mt-4 max-w-md text-cream-dark/80">
          Estamos preparando o catálogo completo de rótulos da Berger Bier.
          Volte em breve.
        </p>
        <Link
          href="/#rotulos"
          className="mx-auto mt-8 w-fit rounded-full bg-crimson px-8 py-3.5 text-base font-semibold uppercase tracking-wide text-cream transition hover:bg-garnet"
        >
          Ver rótulos na página inicial
        </Link>
      </main>
      <Footer />
    </>
  );
}
