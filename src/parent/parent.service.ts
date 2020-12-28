import { Injectable, Inject } from '@nestjs/common';
import { Parent } from './parent.model';
import { ParentModule } from './parent.module';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ParentService {
  parents: Parent[] = [];
  constructor(
    @InjectModel('Parent') private readonly parentModel: Model<any>,
  ) {}

  public async create(parent: Parent) {
    var parent1 = await this.parentModel.create(parent);
    console.log(parent1);
    return parent1;
  }

  public async findAll() {
    var parents = await this.parentModel.find();
    return [...parents];
  }

  findOne(id: string) {
    return `This action returns a #${id} parent`;
  }

  update(id: string, parentdata: Parent) {
    return `This action updates a #${id} parent`;
  }

  remove(id: string) {
    return `This action removes a #${id} parent`;
  }
}
