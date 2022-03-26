import { paginate } from '../../../../helpers/paginateArr';
import { IUseCase } from '../../../../interfaces/useCase';
import { heroObjectSorting } from '../../helpers/heroObjectSort';
import { Hero } from '../../interface';
import { HeroRepository } from '../../repository';
import { IPaginationParams } from './interface';

export class GetAllHeroesUseCase
  implements IUseCase<IPaginationParams, Hero[]>
{
  constructor(private readonly heroRepository: HeroRepository) {}

  async exec(paginationParams: IPaginationParams): Promise<Hero[]> {
    const herosdata = await this.heroRepository.getAll();
    const sortHeroesArr = heroObjectSorting(herosdata, paginationParams);
    const heroesPaginated = paginate(sortHeroesArr, paginationParams);
    return heroesPaginated;
  }
}
