import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import {PrismaService} from "./prisma.service"

@Module({
  imports: [PostsModule, UsersModule, PrismaService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
