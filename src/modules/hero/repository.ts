import { Hero } from './interface';
import { AddHeroInput } from './useCases/addHero/interface';

export interface HeroRepository {
  getAll: () => Promise<Hero[]>;
  addHero: (input: AddHeroInput) => Promise<Hero>;
}
