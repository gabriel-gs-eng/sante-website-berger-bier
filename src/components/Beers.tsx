import { beers } from "@/data/beers";

export default function Beers() {
  return (
    <section id="rotulos" className="bg-bark-soft px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-eyebrow text-sm uppercase tracking-[0.3em] text-amber">
            Rótulos
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
            Conheça nossos rótulos
          </h2>
          <p className="mt-4 text-cream-dark/80 sm:text-lg">
            De clássicas lagers a estilos belgas e alemães premiados — cada rótulo
            carrega o cuidado da produção artesanal Berger Bier.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {beers.map((beer) => (
            <article
              key={beer.slug}
              className="flex flex-col border border-cream/10 bg-bark p-6 transition hover:border-amber/40"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl uppercase text-cream">
                  {beer.name}
                </h3>
                {beer.featured && (
                  <span className="rounded-full bg-crimson px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
                    Principal
                  </span>
                )}
              </div>
              <span className="mt-1 text-sm font-medium text-amber">
                {beer.abv}
              </span>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream-dark/80">
                {beer.description}
              </p>
              {beer.medals.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {beer.medals.map((medal) => (
                    <li
                      key={medal}
                      className="rounded-full border border-cream/15 px-2.5 py-1 text-[11px] text-cream-dark/70"
                    >
                      🏅 {medal}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
