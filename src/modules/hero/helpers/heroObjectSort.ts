import { Hero } from '../interface';
import { IPaginationParams } from '../useCases/getAllHeroes/interface';
import {
  formatHeroDataToSortOrSearch,
  formatHeroToReturn,
} from './formatHeroObjectToSortOrSearch';

export function heroObjectSorting(
  data: Hero[],
  params: IPaginationParams,
): Hero[] {
  const { order, query, filter } = params;
  const heroArrFormatToSort = formatHeroDataToSortOrSearch(data);

  const sortedHeroData = heroArrFormatToSort.sort((a: any, b: any) => {
    if (a[`${order}`] < b[`${order}`]) {
      return -1;
    }
    if (a[`${order}`] > b[`${order}`]) {
      return 1;
    }
    return 0;
  });

  const filteredHeroData = query
    ? sortedHeroData.filter(heroData =>
        filter
          ? heroData[`${filter}`] === query
          : Object.values(heroData).find(value => value === query),
      )
    : sortedHeroData;

  return formatHeroToReturn(filteredHeroData);
}
