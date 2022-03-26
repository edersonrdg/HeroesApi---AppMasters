import 'reflect-metadata'
import app from './src/services/express/app'

const PORT = 8080

const main = async () => {
  app.listen(PORT, () => console.log(`server starting on http://localhost:${PORT}`))
}

main().catch((error) => {
  console.log(error, 'error');
});
