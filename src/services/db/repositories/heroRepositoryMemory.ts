import { Hero } from '../../../modules/hero/interface';
import { HeroRepository } from '../../../modules/hero/repository';
import { AddHeroInput } from '../../../modules/hero/useCases/addHero/interface';

export class HeroRepositoryMemory implements HeroRepository {
  heros: Hero[] = [];

  async getAll(): Promise<Hero[]> {
    return Promise.resolve(this.heros);
  }

  async addHero(heroData: AddHeroInput): Promise<Hero> {
    const lastHeroId = this.heros[this.heros.length - 1].id;
    const heroDataToSave = { ...heroData, ...{ id: lastHeroId + 1 } };

    this.heros.push(heroDataToSave);

    console.log(heroDataToSave);
    return heroDataToSave;
  }
}
