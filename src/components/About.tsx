import Image from "next/image";

export default function About() {
  return (
    <section id="historia" className="bg-bark px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl border border-crimson/60 p-8 sm:p-14">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <div>
            <h2 className="font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
              Sobre a
            </h2>
            <p className="font-display text-4xl uppercase leading-none text-amber sm:text-5xl">
              Berger Bier
            </p>
            <div className="mt-6 space-y-4 text-cream-dark/90 sm:text-lg">
              <p>
                Desde 2020, a Berger Bier leva a cultura cervejeira aos melhores
                momentos das pessoas. Nossas raízes vêm de 1872, quando Herman
                Berger produzia cerveja na Alemanha, um legado transformado em
                cervejas premiadas e equilibradas.
              </p>
              <p>
                Nos diferenciamos pelo{" "}
                <span className="font-semibold text-amber">
                  atendimento de qualidade, inovação constante e filtragem
                  impecável.
                </span>{" "}
                Nossa missão é expandir o conhecimento e a paixão pela cerveja,
                garantindo que cada gole represente excelência e momento
                compartilhado.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden border border-cream/10 lg:aspect-auto lg:h-full lg:self-stretch">
            <Image
              src="/images/history-pour.png"
              alt="Cerveja Berger Bier sendo servida em copo com o rótulo da marca"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
