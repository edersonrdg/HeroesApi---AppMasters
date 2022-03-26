import 'reflect-metadata';
import { startApolloServer } from './services/apollo-server-express';
import { execSeeds } from './services/db/seed';
import app from './services/express/app';
import { buildGplSchema } from './services/graphql';

const main = async () => {
  const schema = await buildGplSchema();
  await startApolloServer(schema);

  app.listen(process.env.PORT || 5000);
};

main()
  .then(() => {
    // Executing hero seed
    execSeeds();
  })
  .catch(error => {
    console.log(error, 'error');
  });
