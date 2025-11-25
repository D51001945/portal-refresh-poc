import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

export async function bootstrapApplication() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  return app;
}
