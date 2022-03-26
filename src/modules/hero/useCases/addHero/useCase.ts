import { paginate } from '../../../../helpers/paginateArr';
import { IUseCase } from '../../../../interfaces/useCase';
import { heroObjectSorting } from '../../helpers/heroObjectSort';
import { Hero } from '../../interface';
import { HeroRepository } from '../../repository';
import { AddHeroInput } from './interface';

export class CreateHeroUseCase implements IUseCase<AddHeroInput, Hero> {
  constructor(private readonly heroRepository: HeroRepository) {}

  async exec(addHeroData: AddHeroInput): Promise<Hero> {
    const herosdata = await this.heroRepository.addHero(addHeroData);
    return herosdata;
  }
}
