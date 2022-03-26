import 'reflect-metadata'
import app from './src/services/express/app'

const main = async () => {
  app.listen(8080, () => console.log(`server starting on http://localhost:8080`))
}

main().catch((error) => {
  console.log(error, 'error');
});
