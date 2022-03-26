import { Query, Resolver } from 'type-graphql';
import { makeGetAllHeroesController } from '../../../modules/hero/useCases/getAllHeroes';
import { adaptResolver } from '../resolverAdapter';
import { Hero } from '../type-defs/hero';

@Resolver()
export class HeroResolver {
  @Query(_returns => [Hero], { nullable: true })
  async listHeroes() {
    return adaptResolver(makeGetAllHeroesController());
  }
}
