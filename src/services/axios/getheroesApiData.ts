import axios from 'axios';
import { Hero } from '../../modules/hero/interface';

export const getHeroesApi = async () => {
  const heroData = await axios.get<Hero[]>(
    'https://akabab.github.io/superhero-api/api/all.json',
  );
  return heroData.data;
};
