import { pairings } from "@/data/beers";

export default function Pairings() {
  return (
    <section id="harmonizacoes" className="bg-bark px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-eyebrow text-sm uppercase tracking-[0.3em] text-amber">
          Harmonizações
        </p>
        <h2 className="mt-4 font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
          Combinações sugeridas
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pairings.map((pair) => (
            <div
              key={pair.dish}
              className="rounded-2xl border border-cream/10 bg-bark-soft/60 p-6"
            >
              <h3 className="font-display text-base uppercase text-cream">
                {pair.dish}
              </h3>
              <p className="mt-3 text-sm text-amber">{pair.beers.join(" • ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
