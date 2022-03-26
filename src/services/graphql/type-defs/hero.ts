import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class HeroPowerstats {
  @Field({ nullable: true })
  intelligence: number;

  @Field({ nullable: true })
  strength: number;

  @Field({ nullable: true })
  speed: number;

  @Field({ nullable: true })
  durability: number;

  @Field({ nullable: true })
  power: number;

  @Field({ nullable: true })
  combat: number;
}

@ObjectType()
class HeroAppearance {
  @Field({ nullable: true })
  gender: string;

  @Field({ nullable: true })
  race: string;

  @Field({ nullable: true })
  eyeColor: string;

  @Field({ nullable: true })
  hairColor: string;

  @Field(type => [String], { nullable: true })
  height: [string];

  @Field(type => [String], { nullable: true })
  weight: [string];
}

@ObjectType()
class HeroBiography {
  @Field({ nullable: true })
  fullName: string;

  @Field({ nullable: true })
  alterEgos: string;

  @Field(type => [String], { nullable: true })
  aliases: [string];

  @Field({ nullable: true })
  placeOfBirth: string;

  @Field({ nullable: true })
  firstAppearance: string;

  @Field({ nullable: true })
  publisher: string;

  @Field({ nullable: true })
  alignment: string;
}

@ObjectType()
class HeroWork {
  @Field({ nullable: true })
  occupation: string;

  @Field({ nullable: true })
  base: string;
}

@ObjectType()
class HeroConnections {
  @Field({ nullable: true })
  groupAffiliation: string;

  @Field({ nullable: true })
  relatives: string;
}

@ObjectType()
class HeroImages {
  @Field({ nullable: true })
  xs: string;

  @Field({ nullable: true })
  sm: string;

  @Field({ nullable: true })
  md: string;

  @Field({ nullable: true })
  lg: string;
}

@ObjectType()
export class Hero {
  @Field({ nullable: false })
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  slug: string;

  @Field({ nullable: true })
  powerstats: HeroPowerstats;

  @Field({ nullable: true })
  appearance: HeroAppearance;

  @Field({ nullable: true })
  biography: HeroBiography;

  @Field({ nullable: true })
  work: HeroWork;

  @Field({ nullable: true })
  connections: HeroConnections;

  @Field({ nullable: true })
  images: HeroImages;
}
