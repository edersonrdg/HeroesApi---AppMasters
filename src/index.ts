import 'reflect-metadata';
import { startApolloServer } from './services/apollo-server-express';
import { execSeeds } from './services/db/seed';
import app from './services/express/app';
import { buildGplSchema } from './services/graphql';

const PORT = process.env.PORT || 4000;

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
