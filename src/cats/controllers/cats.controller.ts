import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from '../DTOs/cats.dto';
import { CatsService } from '../cats.service';
import { ICat } from '../cats.interface';

@Controller('cats')
export class CatController {
  constructor(private catsService: CatsService) {}

  // #catsArray: string[] = [];
  
  @Get('/')
  async getCats(): Promise<ICat[]> {
    return this.catsService.getAll();
  }
  
  @Get(':id')
  async getCatsById(@Param('id') id: string): Promise<ICat> {
    const receivedPishi = this.catsService.getById(id);
    console.log(receivedPishi);
    return receivedPishi;
  }

  @Post('/new')
  addCat(@Body() body: CreateCatDto): void {
    const ID = new Date();
    const data = {...body};
    data['ID'] = ID;

    this.catsService.create(data);
    console.log(this.catsService.cats);
  }

  // @Get('/v2')
  // getCatsV2(@Res() response): string {
  //   return response.send('aleyk');
  // }
}
