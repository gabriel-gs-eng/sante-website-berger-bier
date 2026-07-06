import Image from "next/image";
import { InstagramIcon } from "./icons";

export default function CommunityStrip() {
  return (
    <section className="relative overflow-hidden bg-bark">
      {/* Background image — portrait crop on mobile, wide crop on desktop */}
      <Image
        src="/images/strip-mobile.webp"
        alt=""
        fill
        aria-hidden
        className="object-cover object-center sm:hidden"
        sizes="100vw"
      />
      <Image
        src="/images/strip.webp"
        alt=""
        fill
        aria-hidden
        className="hidden object-cover object-center sm:block"
        sizes="100vw"
      />
      {/* Left-to-right dark overlay for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-bark via-bark/80 to-bark/20"
      />

      <div className="relative mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-center px-6 py-20 sm:min-h-[26rem] sm:px-8">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
            Feito por quem vive a cerveja
          </h2>
          <p className="mt-5 text-cream-dark/90 sm:text-lg">
            Da brassagem ao copo, cada lote nasce das mãos de quem respira a
            cultura cervejeira. Acompanhe os bastidores, lançamentos e eventos da
            Berger Bier.
          </p>

          <a
            href="https://www.instagram.com/cervejariabergerbier/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-crimson px-7 py-3.5 text-base font-semibold uppercase tracking-wide text-cream transition hover:bg-garnet"
          >
            <InstagramIcon className="h-5 w-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
