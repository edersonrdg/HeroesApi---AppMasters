import { IPaginationParams } from '../modules/hero/useCases/getAllHeroes/interface';

export function paginate(array: any[], params: IPaginationParams) {
  const { limit = 100, page = 1 } = params;
  return array.slice((page - 1) * limit, page * limit);
}
