import { Module } from '@nestjs/common';
import { CatController } from './controllers/cats.controller';
import { CatsService } from './services/cats.service';

@Module({
    imports: [],
    controllers: [CatController],
    providers: [CatsService],
    exports: []
})
export class CatsModule {}
