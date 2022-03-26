import { saveApiHerosSeed } from './saveHeroesDataApi';

export const execSeeds = async () => {
  await saveApiHerosSeed();
};
