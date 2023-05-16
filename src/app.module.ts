import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cats/controllers/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatsService],
})
export class AppModule {}
