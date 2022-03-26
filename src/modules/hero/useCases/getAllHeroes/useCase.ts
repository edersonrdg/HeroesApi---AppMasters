import { IUseCase } from '../../../../interfaces/useCase';
import { Hero } from '../../interface';

export class GetAllHeroesUseCase implements IUseCase<null, Hero[]> {
  async exec(): Promise<Hero[]> {
    const herosdata = { id: 2, name: 'test' };
    return [herosdata];
  }
}
