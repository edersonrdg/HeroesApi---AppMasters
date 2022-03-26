import { IUseCase } from '../../../../interfaces/useCase';

export class GetAllHeroesUseCase implements IUseCase {
  async exec(): Promise<any> {
    const herosdata = { id: 2, name: 'test' };
    return [herosdata];
  }
}
