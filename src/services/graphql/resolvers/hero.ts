import { Query, Resolver } from 'type-graphql';
import { makeGetAllHeroesController } from '../../../modules/hero/useCases/getAllHeroes';
import { adaptResolver } from '../resolverAdapter';

@Resolver()
export class HeroResolver {
  @Query(_returns => String, { nullable: true })
  async listHeroes() {
    return adaptResolver(makeGetAllHeroesController());
  }
}
