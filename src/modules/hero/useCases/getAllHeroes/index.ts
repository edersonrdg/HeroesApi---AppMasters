import { locale } from '../../../../config/locale';
import { GetAllHeroesController } from './controller';
import { GetAllHeroesUseCase } from './useCase';

export const makeGetAllHeroesController = () => {
  const heroRepository = locale.heroRepository;
  const useCase = new GetAllHeroesUseCase(heroRepository);
  const herosController = new GetAllHeroesController(useCase);
  return herosController;
};
