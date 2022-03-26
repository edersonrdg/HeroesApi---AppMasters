import { Hero } from '../../../modules/hero/interface';
import { HeroRepository } from '../../../modules/hero/repository';

export class HeroRepositoryMemory implements HeroRepository {
  heros: Hero[] = [];

  async getAll(): Promise<Hero[]> {
    return Promise.resolve(this.heros);
  }
}
