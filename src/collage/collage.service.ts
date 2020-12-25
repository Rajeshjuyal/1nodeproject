import { Injectable, Inject } from '@nestjs/common';
import { Collage } from './collage.model';
import { Model } from 'mongoose';

@Injectable()
export class CollageService {
  collages: Collage[] = [];
  constructor(
    @Inject('Collage') private readonly collageModel: Model<any>,
  ) {}
  public async create(collage: Collage){

 var collage1 = await this.collageModel.create(collage);
    console.log(collage1);
    return collage1;
  }

  findAll() {
    return [...this.collages];
  }

  findOne(id: string) {
    return `This action returns a #${id} collage`;
  }

  update(id: string, collagedata: Collage) {
    return `This action updates a #${id} collage`;
  }

  remove(id: string) {
    return `This action removes a #${id} collage`;
  }
}
