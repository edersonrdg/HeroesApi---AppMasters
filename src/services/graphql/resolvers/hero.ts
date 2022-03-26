import { Query, Resolver } from "type-graphql";

@Resolver()
export class HeroResolver {
  @Query((_returns) => String, { nullable: true })
  async heroes() {
    return 'hero resolver query';
  }
}
