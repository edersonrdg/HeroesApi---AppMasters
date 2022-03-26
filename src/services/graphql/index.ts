import { buildSchema, Resolver } from "type-graphql"

@Resolver()
class InitResolver {}

export const buildGplSchema = async () => {
  return await buildSchema({
    resolvers: [InitResolver],
    emitSchemaFile: true,
    validate: false,
  })
}