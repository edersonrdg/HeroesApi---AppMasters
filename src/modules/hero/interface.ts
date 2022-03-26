type HeroPowerstats = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

type HeroAppearance = {
  gender: string;
  race: string;
  eyeColor: string;
  hairColor: string;
  height: string[];
  weight: string[];
};

type HeroBiography = {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
};

type HeroWork = {
  occupation: string;
  base: string;
};

type HeroConnections = {
  groupAffiliation: string;
  relatives: string;
};

type HeroImages = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: HeroPowerstats;
  appearance: HeroAppearance;
  biography: HeroBiography;
  work: HeroWork;
  connections: HeroConnections;
  images: HeroImages;
}
