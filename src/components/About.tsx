const DIFFERENTIALS = [
  {
    title: "Cerveja filtrada",
    description: "Processo de filtragem que garante limpidez e consistência em cada lote.",
  },
  {
    title: "Atendimento otimizado",
    description: "Distribuição próxima e ágil, pensada para atender cada ponto de venda.",
  },
  {
    title: "Premiações constantes",
    description: "Rótulos reconhecidos em concursos como BBA, CBC e Copa Capixaba.",
  },
  {
    title: "Barris de alta durabilidade",
    description: "Life shell otimizado nos barris, preservando qualidade e frescor.",
  },
];

export default function About() {
  return (
    <section id="historia" className="bg-bark px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-amber-light">
            Nossa história
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl">
            Uma paixão que atravessa gerações
          </h2>
          <div className="mt-6 space-y-4 text-cream-dark/90 sm:text-lg">
            <p>
              Em 2007, Everdan, um dos sócios fundadores da Berger Bier, comprou seu
              primeiro maquinário para produção de cerveja. Desde então, a paixão só
              aumentou para produzir mais e da melhor forma possível.
            </p>
            <p>
              Também descobrimos que um ascendente da família, Herman Berger, já
              produzia cerveja em 1872, na sua vinda da Alemanha para o Brasil. Passado
              de geração em geração, a cerveja ficou no sangue — hoje a Berger Bier é
              administrada por Everdan e seu filho Guilherme.
            </p>
            <p className="text-cream-dark/70">
              Nosso propósito é fazer crescer o conhecimento e a paixão por cerveja,
              levando a cultura cervejeira a todos os lugares onde a Berger Bier se faz
              presente.
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {DIFFERENTIALS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cream/10 bg-bark-soft/60 p-6"
            >
              <dt className="font-display text-lg font-semibold text-amber-light">
                {item.title}
              </dt>
              <dd className="mt-2 text-sm text-cream-dark/80">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
