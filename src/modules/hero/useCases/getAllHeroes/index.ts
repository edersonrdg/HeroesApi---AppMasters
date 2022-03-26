import { HeroRepositoryMemory } from '../../../../services/db/repositories/heroRepositoryMemory';
import { GetAllHeroesController } from './controller';
import { GetAllHeroesUseCase } from './useCase';

export const makeGetAllHeroesController = () => {
  const heroRepository = new HeroRepositoryMemory();
  const useCase = new GetAllHeroesUseCase(heroRepository);
  const herosController = new GetAllHeroesController(useCase);
  return herosController;
};
