import { NestFactory } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { AppModule } from './app.module';

async function bootstrap() {
  const prisma = new PrismaClient()
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
