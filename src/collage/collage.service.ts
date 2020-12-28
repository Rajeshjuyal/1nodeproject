import { Injectable, Inject } from '@nestjs/common';
import { Collage } from './collage.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CollageService {
  collages: Collage[] = [];
  constructor(
    @InjectModel('Collage') private readonly collageModel: Model<any>,
  ) {}
  public async create(collage: Collage) {
    var collage1 = await this.collageModel.create(collage);
    console.log(collage1);
    return collage1;
  }

  public async findAll() {
    var collages = await this.collageModel.find();
    return [...collages];
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
