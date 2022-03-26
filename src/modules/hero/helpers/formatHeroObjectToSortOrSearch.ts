import { Hero } from '../interface';

export const formatHeroDataToSortOrSearch = (heroData: Hero[]): any[] => {
  const heroArrFormatToSort = heroData.map(hero => {
    return {
      id: hero.id,
      name: hero.name,
      slug: hero?.slug,
      intelligence: hero.powerstats?.intelligence,
      strength: hero.powerstats?.strength,
      speed: hero.powerstats?.speed,
      durability: hero.powerstats?.durability,
      power: hero.powerstats?.power,
      combat: hero.powerstats?.combat,
      gender: hero.appearance?.gender,
      race: hero.appearance?.race,
      eyeColor: hero.appearance?.eyeColor,
      hairColor: hero.appearance?.hairColor,
      height: hero.appearance?.height,
      weight: hero.appearance?.weight,
      fullName: hero.biography?.fullName,
      alterEgos: hero.biography?.alterEgos,
      aliases: hero.biography?.aliases,
      placeOfBirth: hero.biography?.placeOfBirth,
      firstAppearance: hero.biography?.firstAppearance,
      publisher: hero.biography?.publisher,
      alignment: hero.biography?.alignment,
      occupation: hero.work?.occupation,
      base: hero.work?.base,
      groupAffiliation: hero.connections?.groupAffiliation,
      relatives: hero.connections?.relatives,
      xs: hero.images?.xs,
      sm: hero.images?.sm,
      md: hero.images?.md,
      lg: hero.images?.lg,
    };
  });

  return heroArrFormatToSort;
};

export const formatHeroToReturn = (arr: any[]): Hero[] => {
  return arr.map(hero => {
    return {
      id: hero.id,
      name: hero.name,
      slug: hero.slug,
      powerstats: {
        intelligence: hero.intelligence,
        strength: hero.strength,
        speed: hero.speed,
        durability: hero.durability,
        power: hero.power,
        combat: hero.combat,
      },
      appearance: {
        gender: hero.gender,
        race: hero.race,
        eyeColor: hero.eyeColor,
        hairColor: hero.hairColor,
        height: hero.height,
        weight: hero.weight,
      },
      biography: {
        fullName: hero.fullName,
        alterEgos: hero.alterEgos,
        aliases: hero.aliases,
        placeOfBirth: hero.placeOfBirth,
        firstAppearance: hero.firstAppearance,
        publisher: hero.publisher,
        alignment: hero.alignment,
      },
      work: {
        occupation: hero.occupation,
        base: hero.base,
      },
      connections: {
        groupAffiliation: hero.groupAffiliation,
        relatives: hero.relatives,
      },
      images: {
        xs: hero.xs,
        sm: hero.sm,
        md: hero.md,
        lg: hero.lg,
      },
    };
  });
};
