import { Field, InputType } from 'type-graphql';

@InputType()
class AddHeroPowerstats {
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

@InputType()
class AddHeroAppearance {
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

@InputType()
class AddHeroBiography {
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

@InputType()
class AddHeroWork {
  @Field({ nullable: true })
  occupation: string;

  @Field({ nullable: true })
  base: string;
}

@InputType()
class AddHeroConnections {
  @Field({ nullable: true })
  groupAffiliation: string;

  @Field({ nullable: true })
  relatives: string;
}

@InputType()
class AddHeroImages {
  @Field({ nullable: true })
  xs: string;

  @Field({ nullable: true })
  sm: string;

  @Field({ nullable: true })
  md: string;

  @Field({ nullable: true })
  lg: string;
}

@InputType()
export class AddHero {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  slug: string;

  @Field({ nullable: true })
  powerstats: AddHeroPowerstats;

  @Field({ nullable: true })
  appearance: AddHeroAppearance;

  @Field({ nullable: true })
  biography: AddHeroBiography;

  @Field({ nullable: true })
  work: AddHeroWork;

  @Field({ nullable: true })
  connections: AddHeroConnections;

  @Field({ nullable: true })
  images: AddHeroImages;
}
