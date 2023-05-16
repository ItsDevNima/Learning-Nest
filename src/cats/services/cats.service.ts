import { Injectable } from '@nestjs/common';
import { ICat } from '../interfaces/cats.interface';

@Injectable()
export class CatsService {
    public readonly cats: ICat[] = [];

    create(cat: ICat) {
        this.cats.push(cat);
    }

    getAll(): ICat[] {
        return this.cats;
    }

    getById(id: string): ICat {
        const pishi = this.cats[+id];
        return pishi;
    }
}
