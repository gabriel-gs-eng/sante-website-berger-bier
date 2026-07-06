import { distributionCities, featuredVenues } from "@/data/beers";
import { MapPinIcon } from "./icons";

export default function Distribution() {
  return (
    <section id="onde-encontrar" className="bg-bark-soft px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <p className="font-eyebrow text-sm uppercase tracking-[0.3em] text-amber">
            Onde encontrar
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
            Encontre a Berger Bier nos melhores estabelecimentos
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
          <h3 className="font-display text-lg uppercase text-cream">
            Pontos de venda em destaque
          </h3>
          <ul className="no-scrollbar mt-6 max-h-[420px] space-y-4 overflow-y-auto pr-1">
            {featuredVenues.map((venue) => (
              <li
                key={venue.name}
                className="flex items-center justify-between gap-4 rounded-2xl border border-cream/10 bg-bark p-6"
              >
                <div className="min-w-0">
                  <p className="font-display text-lg uppercase text-amber">
                    {venue.name}
                  </p>
                  <p className="mt-1 text-sm text-cream-dark/80">{venue.city}</p>
                </div>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver rota até ${venue.name} no Google Maps`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-crimson px-4 py-2 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-garnet"
                >
                  <MapPinIcon className="h-4 w-4" />
                  Rotas
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
