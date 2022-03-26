import { Hero } from './interface';

export interface HeroRepository {
  getAll: () => Promise<Hero[]>;
}
