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
  const order = params.order;
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

  return formatHeroToReturn(sortedHeroData);
}
