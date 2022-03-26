import { GetAllHeroesController } from './controller';

export const makeGetAllHeroesController = () => {
  const herosController = new GetAllHeroesController();
  return herosController;
};
