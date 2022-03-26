import { GetAllHeroesController } from './controller';
import { GetAllHeroesUseCase } from './useCase';

export const makeGetAllHeroesController = () => {
  const useCase = new GetAllHeroesUseCase();
  const herosController = new GetAllHeroesController(useCase);
  return herosController;
};
