import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';

import app from '../express/app';

export const startApolloServer = async (schema: GraphQLSchema) => {
  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });

  return server;
};
