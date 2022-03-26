import { IUseCase } from '../../../../interfaces/useCase';
import { Hero } from '../../interface';
import { HeroRepository } from '../../repository';
import { InputQuery } from './interface';

export class GetAllHeroesUseCase implements IUseCase<InputQuery, Hero[]> {
  constructor(private readonly heroRepository: HeroRepository) {}

  async exec(data?: InputQuery): Promise<Hero[]> {
    const herosdata = await this.heroRepository.getAll();
    return herosdata;
  }
}
