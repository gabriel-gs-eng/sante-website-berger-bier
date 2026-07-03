export default function About() {
  return (
    <section id="historia" className="bg-bark px-6 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden border border-crimson/60 p-8 sm:p-14">
        {/* Mobile: video as full-section background behind the text, 35% opacity */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.16] lg:hidden"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/history.webm" type="video/webm" />
        </video>

        <div className="relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
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

          {/* Desktop: video column matching the red frame height */}
          <div className="relative hidden overflow-hidden border border-cream/10 lg:block lg:h-full lg:self-stretch">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source src="/videos/history.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
