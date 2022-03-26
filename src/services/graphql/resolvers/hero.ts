import { Query, Resolver } from 'type-graphql';
import { GetAllHeroesController } from '../../../modules/hero/useCases/getAllHeros/controller';
import { adaptResolver } from '../resolverAdapter';

@Resolver()
export class HeroResolver {
  @Query(_returns => String, { nullable: true })
  async listHeroes() {
    const herosController = new GetAllHeroesController();
    return adaptResolver(herosController);
  }
}
