import { bootstrapApplication } from './app';

async function bootstrap() {
  const app = await bootstrapApplication();
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then()
  .catch((e) => {
    console.log(e);
  });
