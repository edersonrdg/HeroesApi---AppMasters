import { Arg, Query, Resolver } from 'type-graphql';
import { makeGetAllHeroesController } from '../../../modules/hero/useCases/getAllHeroes';
import { adaptResolver } from '../resolverAdapter';
import { Hero } from '../type-defs/hero';

@Resolver()
export class HeroResolver {
  @Query(_returns => [Hero], { nullable: true })
  async listHeroes(
    @Arg('limit', { defaultValue: 100, nullable: true }) limit: number,
    @Arg('order', { nullable: true }) order: string,
    @Arg('page', { defaultValue: 1, nullable: true }) page: number,
  ) {
    return adaptResolver(makeGetAllHeroesController(), { limit, order, page });
  }

  @Query(_returns => [Hero], { nullable: true })
  async searchHeroes(
    @Arg('filter', { nullable: true }) filter: string,
    @Arg('query', { nullable: true }) query: string,
  ) {
    return adaptResolver(makeGetAllHeroesController(), { filter, query });
  }
}
