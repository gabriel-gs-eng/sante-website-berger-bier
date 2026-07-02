import { distributionCities, featuredVenues } from "@/data/beers";

export default function Distribution() {
  return (
    <section id="onde-encontrar" className="bg-bark-soft px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-amber-light">
            Onde encontrar
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl">
            Levamos a Berger Bier até você
          </h2>
          <p className="mt-4 text-cream-dark/80 sm:text-lg">
            Distribuímos em toda a região através de distribuidores parceiros e
            marcamos presença nos principais eventos e festas da cidade.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {distributionCities.map((city) => (
              <li
                key={city}
                className="rounded-full border border-cream/15 px-4 py-2 text-sm text-cream-dark/90"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-cream">
            Pontos de venda em destaque
          </h3>
          <div className="mt-6 space-y-4">
            {featuredVenues.map((venue) => (
              <div
                key={venue.name}
                className="rounded-2xl border border-cream/10 bg-bark p-6"
              >
                <p className="font-display text-lg font-semibold text-amber-light">
                  {venue.name}
                </p>
                <p className="mt-1 text-sm text-cream-dark/80">{venue.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
