import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// The entry file of the application which uses the core function NestFactory to create a Nest application instance
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // prefix global routing with /api
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
