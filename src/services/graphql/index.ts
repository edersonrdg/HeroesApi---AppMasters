import { buildSchema } from 'type-graphql'
import { HeroResolver } from './resolvers/hero'

export const buildGplSchema = async () => {
  return await buildSchema({
    resolvers: [HeroResolver],
    emitSchemaFile: true,
    validate: false
  })
}
