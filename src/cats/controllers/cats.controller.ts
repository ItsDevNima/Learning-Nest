import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from '../DTOs/cats.dto';

@Controller('cats')
export class CatController {
  #catsArray: string[] = [];
  @Get('/')
  getCats(): string {
    return 'Salam';
  }

  @Get(':id')
  getCatsById(@Param('id') id: string): string {
    const Cat = this.#catsArray[+id];
    console.log(Cat);
    return Cat;
  }

  @Post('/new')
  addCat(@Body() body: CreateCatDto): void {
    // let catsArray: string[];
    const { name } = body;
    this.#catsArray.push(name);
    console.log(this.#catsArray);
  }

  // @Get('/v2')
  // getCatsV2(@Res() response): string {
  //   return response.send('aleyk');
  // }
}
