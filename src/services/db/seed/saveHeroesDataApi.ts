import { locale } from '../../../config/locale';
import { getHeroesApi } from '../../axios/getheroesApiData';

export const saveApiHerosSeed = async () => {
  const heroes = await getHeroesApi();
  heroes.forEach(hero => {
    locale.heroRepository.heros.push(hero);
  });
  console.log('Seed hero finish');
};
