import { locale } from '../../../../config/locale';
import { CreateHeroController } from './controller';
import { CreateHeroUseCase } from './useCase';

export const makeAddHeroController = () => {
  const heroRepository = locale.heroRepository;
  const useCase = new CreateHeroUseCase(heroRepository);
  const creeateHeroController = new CreateHeroController(useCase);
  return creeateHeroController;
};
