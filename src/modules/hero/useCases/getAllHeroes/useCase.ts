import { IUseCase } from '../../../../interfaces/useCase';
import { Hero } from '../../interface';
import { HeroRepository } from '../../repository';

export class GetAllHeroesUseCase implements IUseCase<null, Hero[]> {
  constructor(private readonly heroRepository: HeroRepository) {}

  async exec(): Promise<Hero[]> {
    const herosdata = await this.heroRepository.getAll();
    return herosdata;
  }
}
