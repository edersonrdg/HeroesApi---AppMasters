import 'reflect-metadata';
import { startApolloServer } from './src/services/apollo-server-express';
import { execSeeds } from './src/services/db/seed';
import app from './src/services/express/app';
import { buildGplSchema } from './src/services/graphql';

const PORT = 8080;

const main = async () => {
  const schema = await buildGplSchema();
  const apolloserver = await startApolloServer(schema);

  app.listen(PORT, () =>
    console.log(
      `server starting on http://localhost:${PORT}${apolloserver.graphqlPath}`,
    ),
  );
};

main()
  .then(() => {
    // Executing hero seed
    execSeeds();
  })
  .catch(error => {
    console.log(error, 'error');
  });
