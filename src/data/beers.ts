export type Beer = {
  slug: string;
  name: string;
  abv: string;
  description: string;
  medals: string[];
  image: string;
  featured?: boolean;
};

export const beers: Beer[] = [
  {
    slug: "pilsen",
    name: "Pilsen",
    abv: "4,6% ABV",
    description:
      "Cerveja clara, leve e extremamente refrescante. Notas suaves de malte, leve floral do lúpulo e final seco. Fácil de beber e muito equilibrada.",
    medals: ["Ouro – BBA", "Prata – BBA"],
    image: "/products/pilsen.png",
    featured: true,
  },
  {
    slug: "ipa",
    name: "IPA",
    abv: "6,0% ABV",
    description:
      "Perfil aromático intenso, com destaque para lúpulos cítricos e resinosos. Amargor presente e bem equilibrado, final seco e refrescante.",
    medals: [],
    image: "/products/ipa.png",
  },
  {
    slug: "red-ale",
    name: "Red Ale",
    abv: "5,2% ABV",
    description:
      "Coloração avermelhada, com notas de caramelo, leve tostado e equilíbrio entre o dulçor do malte e o amargor moderado. Corpo médio e final macio.",
    medals: ["Bronze – BBA", "Prata – CBC", "Ouro – CBC"],
    image: "/products/red-ale.png",
  },
  {
    slug: "saison",
    name: "Saison",
    abv: "6,5% ABV",
    description:
      "Origem belga, aromática e complexa. Notas condimentadas, frutadas e leve acidez. Final seco e refrescante, com alta drinkability.",
    medals: ["Prata – BBA"],
    image: "/products/saison.png",
  },
  {
    slug: "altbier",
    name: "Altbier",
    abv: "4,7% ABV",
    description:
      "Cerveja alemã de alta fermentação com maturação a frio. Notas de malte tostado, leve caramelo e amargor equilibrado. Perfil limpo e versátil.",
    medals: ["Ouro – Copa Capixaba", "Bronze – CBC", "Prata – CBC", "Bronze – BBA"],
    image: "/products/altbier.png",
  },
  {
    slug: "german-pilsner",
    name: "German Pilsner",
    abv: "5,0% ABV",
    description:
      "Dourada, seca e refrescante, com amargor mais pronunciado. Lúpulos nobres alemães trazem notas herbais e florais.",
    medals: ["Ouro – Copa Capixaba"],
    image: "/products/german-pilsner.png",
  },
  {
    slug: "helles-rauch",
    name: "Helles Rauch",
    abv: "4,7% ABV",
    description:
      "Clara, com delicadas notas defumadas lembrando lenha e bacon suave. Defumação equilibrada com o malte, corpo leve e final limpo.",
    medals: ["Ouro – CBC"],
    image: "/products/helles-rauch.png",
  },
  {
    slug: "dark-lager",
    name: "Dark Lager",
    abv: "4,5% ABV",
    description:
      "Escura, de perfil maltado, com notas de chocolate, café suave e leve tostado. Baixo amargor, corpo médio e excelente drinkability.",
    medals: ["Bronze – Copa Capixaba"],
    image: "/products/dark-lager.png",
  },
];

export const pairings = [
  {
    dish: "Carnes grelhadas e assadas",
    beers: ["IPA", "Altbier", "Red Ale", "Helles Rauch"],
  },
  {
    dish: "Batata frita e porções",
    beers: ["Pilsen", "German Pilsner", "Saison"],
  },
  {
    dish: "Baguetes, pães e sanduíches artesanais",
    beers: ["Red Ale", "Dark Lager", "Altbier"],
  },
  {
    dish: "Bolinhos de massa (mandioca, queijo, carne)",
    beers: ["Pilsen", "German Pilsner", "Saison", "Dark Lager"],
  },
  {
    dish: "Carnes defumadas e embutidos",
    beers: ["Helles Rauch", "Altbier"],
  },
];

export const distributionCities = [
  "Santa Maria de Jetibá",
  "Santa Teresa",
  "São Roque do Canaã",
  "Vitória",
  "Colatina",
  "Fundão",
  "Santa Leopoldina",
];

export type FeaturedVenue = {
  name: string;
  city: string;
  mapsUrl: string;
};

export const featuredVenues: FeaturedVenue[] = [
  {
    name: "Costelitos",
    city: "R. Graça Aranha, 61 - Centro, Santa Teresa - ES",
    mapsUrl:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQRRgnGDsyCQgCEAAYDRiABDIJCAMQLhgNGIAEMgkIBBAAGA0YgAQyCQgFEAAYDRiABDIJCAYQABgNGIAEMgkIBxAAGA0YgAQyCQgIEAAYDRiABDIJCAkQABgNGIAE0gEINTA1N2owajmoAgawAgHxBTJznsWBcN3X&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KRnwWGfeg7cAMTQMyLfhYpxV&daddr=R.+Gra%C3%A7a+Aranha,+61+-+Eco,+Santa+Teresa+-+ES,+29650-000+-+Centro,+Santa+Teresa+-+ES,+29650-000",
  },
  {
    name: "Burger Beer",
    city: "R. Bernardino Monteiro, 726 - Centenário, Santa Teresa - ES",
    mapsUrl:
      "https://www.google.com/maps?vet=10CAAQoqAOahcKEwiw_6XM_b6VAxUAAAAAHQAAAAAQDw..i&sca_esv=e9aed62c048a52f2&pvq=Cg0vZy8xMXl6cWxkNWw0IhEKC2J1cmdlciBiZWVyEAIYAw&lqi=CgtidXJnZXIgYmVlckjErJjp-r2AgAhaGRAAEAEYABgBIgtidXJnZXIgYmVlcjICcHSSARRoYW1idXJnZXJfcmVzdGF1cmFudJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydE9UMWd4YnpGbFNHUk9XbFZXYVZFeU1EVlNla1l6WkZSSmVXRkdSUkFCugEICgZidXJnZXL6AQQIFxAl&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KYdOPzSrg7cAMbUwSzis7jbT&daddr=R.+Bernardino+Monteiro,+726+-+Centen%C3%A1rio,+Santa+Teresa+-+ES,+29650-000",
  },
  {
    name: "Sabor Italiano",
    city: "R. Cel. Bonfim, 96 - Centro, Santa Teresa - ES",
    mapsUrl:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDIwMTZqMGo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KbVkXfDlg7cAMRZh-0SHhrH7&daddr=em+frente+a+igreja+matriz+-+R.+Cel.+Bonfim,+96+-+Centro,+Santa+Teresa+-+ES,+29650-000",
  },
  {
    name: "Unic",
    city: "R. Cel. Bonfim - Centro, Santa Teresa - ES",
    mapsUrl:
      "https://www.google.com/maps?sca_esv=e9aed62c048a52f2&sxsrf=APpeQnveG0OSQ32zEtm5aArz6NiBcmLPUw:1783372889813&biw=1536&bih=746&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiEHVuaWMgcmVzdGF1cmFudGUyCRAAGIAEGAoYCzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgkQABiABBgKGAsyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAtI4QlQJViRCXABeAGQAQCYAZcBoAHVCqoBBDAuMTC4AQPIAQD4AQGYAgugAoULwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAg4QABjkAhjWBBiwA9gBAcICFxAuGNwGGLgGGNoGGNgCGMgDGLAD2AEBwgIKEAAYgAQYigUYQ8ICBRAuGIAEwgIHEAAYgAQYCsICCxAuGIAEGMcBGK8BwgILEAAYgAQYigUYkQLCAg8QLhiABBgKGAsYxwEYrwGYAwCIBgGQBhK6BgYIARABGAmSBwQxLjEwoAf-S7IHBDAuMTC4B_8KwgcFMC44LjPIBySACAE&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KW2JFz_Yg7cAMbWP77szYNqL&daddr=R.+Cel.+Bonfim+-+centro,+Santa+Teresa+-+ES,+29650-000",
  },
  {
    name: "Red Rock",
    city: "R. Cel. Bonfim, 77 - Centro, Santa Teresa - ES",
    mapsUrl:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBBzg1M2owajSoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KQ-wPv5QgrcAMUW3PNbn6mWZ&daddr=R.+Cel.+Bonfim,+77+-+Centro,+Santa+Teresa+-+ES,+29650-000",
  },
  {
    name: "Point Lanchonete",
    city: "R. Bernardino Monteiro - Dois Pinheiros, Santa Teresa - ES",
    mapsUrl:
      "https://www.google.com/maps?sca_esv=e9aed62c048a52f2&sxsrf=APpeQntYLJ2h-NZ-iaglHY-CkhZIEBOFwA:1783372932803&biw=1536&bih=746&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXBvaW50IGxhbmNob25ldGUgc2FudGEgdGVyZXNhMgUQIRigATIFECEYnwVIzQlQD1iRCXABeAGQAQCYAaUBoAGrDKoBBDAuMTG4AQPIAQD4AQGYAgygAtYMwgIKEAAYRxjWBBiwA8ICBhAAGBYYHsICBRAAGO8FwgIIEAAYgAQYogSYAwCIBgGQBgiSBwQxLjExoAeCL7IHBDAuMTG4B9AMwgcFMi42LjTIBxyACAE&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Kd8D1TwAg7cAMbT0tLYwpb6l&daddr=R.+Bernardino+Monteiro+-+Dois+Pinheiros,+Santa+Teresa+-+ES,+29650-000",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
};

// Depoimentos extraídos do site original (carrossel de depoimentos).
export const testimonials: Testimonial[] = [
  {
    name: "Ronaldo Bourguignon",
    role: "Baixista da Rising Rock",
    image: "/testimonials/tst-image1.jpg",
    rating: 5,
    comment:
      "Ingredientes de alta qualidade, respeito aos seus apreciadores e paixão pelo que se faz!",
  },
  {
    name: "Leandro Netto",
    role: "CEO/Founder na Wolfgard Meadery - Hidroméis",
    image: "/testimonials/tst-image2.jpg",
    rating: 5,
    comment: "Bergerbier, capixaba com alma e qualidade alemã!",
  },
  {
    name: "Fabrício Sant'Anna Maduro",
    role: "Analista de Sistemas",
    image: "/testimonials/tst-image3.jpg",
    rating: 5,
    comment:
      "Cerveja de altíssima qualidade. Cor, aroma e sabor único. Um leque de cervejas perfeito!",
  },
  {
    name: "Andrio",
    role: "Vendedor",
    image: "/testimonials/tst-image4.jpg",
    rating: 4,
    comment:
      "Excelente cerveja, encorpada e única. Não falta em meu estabelecimento!",
  },
];
