import { Injectable } from '@nestjs/common';

import { Family } from './family.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';

@Injectable()
export class FamilyService {
  family: Family[] = [];
  constructor(
    @InjectModel('Family') private readonly familyModel: Model<any>,
  ) {}
  public async create(familys: Family) {
    var family1 = await this.familyModel.create(familys);
    console.log(family1);
    return family1;
  }

  public async findAll() {
    var family = await this.familyModel.find();
    return [...family];
  }

  public async findOne(id: string) {
    var family = await this.familyModel.findById(id);
    return family;
  }

  public async update(id: string, familydata: Family) {
    var family = await this.familyModel.findByIdAndUpdate(id, familydata);
    return family;
  }

  public async remove(id: string) {
    var family = await this.familyModel.findByIdAndDelete(id);
    family.remove();
    return family;
  }
}
