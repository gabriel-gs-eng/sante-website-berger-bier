export type Beer = {
  slug: string;
  name: string;
  abv: string;
  description: string;
  medals: string[];
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
    featured: true,
  },
  {
    slug: "ipa",
    name: "IPA",
    abv: "6,0% ABV",
    description:
      "Perfil aromático intenso, com destaque para lúpulos cítricos e resinosos. Amargor presente e bem equilibrado, final seco e refrescante.",
    medals: [],
  },
  {
    slug: "red-ale",
    name: "Red Ale",
    abv: "5,2% ABV",
    description:
      "Coloração avermelhada, com notas de caramelo, leve tostado e equilíbrio entre o dulçor do malte e o amargor moderado. Corpo médio e final macio.",
    medals: ["Bronze – BBA", "Prata – CBC", "Ouro – CBC"],
  },
  {
    slug: "saison",
    name: "Saison",
    abv: "6,5% ABV",
    description:
      "Origem belga, aromática e complexa. Notas condimentadas, frutadas e leve acidez. Final seco e refrescante, com alta drinkability.",
    medals: ["Prata – BBA"],
  },
  {
    slug: "altbier",
    name: "Altbier",
    abv: "4,7% ABV",
    description:
      "Cerveja alemã de alta fermentação com maturação a frio. Notas de malte tostado, leve caramelo e amargor equilibrado. Perfil limpo e versátil.",
    medals: ["Ouro – Copa Capixaba", "Bronze – CBC", "Prata – CBC", "Bronze – BBA"],
  },
  {
    slug: "german-pilsner",
    name: "German Pilsner",
    abv: "5,0% ABV",
    description:
      "Dourada, seca e refrescante, com amargor mais pronunciado. Lúpulos nobres alemães trazem notas herbais e florais.",
    medals: ["Ouro – Copa Capixaba"],
  },
  {
    slug: "helles-rauch",
    name: "Helles Rauch",
    abv: "4,7% ABV",
    description:
      "Clara, com delicadas notas defumadas lembrando lenha e bacon suave. Defumação equilibrada com o malte, corpo leve e final limpo.",
    medals: ["Ouro – CBC"],
  },
  {
    slug: "dark-lager",
    name: "Dark Lager",
    abv: "4,5% ABV",
    description:
      "Escura, de perfil maltado, com notas de chocolate, café suave e leve tostado. Baixo amargor, corpo médio e excelente drinkability.",
    medals: ["Bronze – Copa Capixaba"],
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

export const featuredVenues = [
  { name: "Espetinho do Joacim", city: "Santa Maria de Jetibá" },
  { name: "Costelitos", city: "Santa Teresa" },
];
