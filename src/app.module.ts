import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cats/controllers/cats.controller';
import { CatsService } from './cats/services/cats.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './cats/middlewares/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatController],
  providers: [AppService, CatsService, LoggerMiddleware],
})
export class AppModule implements NestModule {
  constructor(private middlewares: LoggerMiddleware) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(this.middlewares.use, this.middlewares.checkAdmin)
    .forRoutes('/');
  }
}
