import { Injectable, Inject } from '@nestjs/common';

import { Fees } from './fees.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FeesService {
  feess: Fees[] = [];
  constructor(@InjectModel('Fees') private readonly feesModel: Model<any>) {}
  public async create(fees: Fees) {
    console.log('In function');

    var fees1 = await this.feesModel.create(fees);
    console.log(fees1);
    return fees1;
  }

  public async findAll() {
    var feess = await this.feesModel.find();
    return [...feess];
  }

  findOne(id: string) {
    return `This action returns a #${id} fee`;
  }

  update(id: string, feedata: Fees) {
    return `This action updates a #${id} fee`;
  }

  remove(id: string) {
    return `This action removes a #${id} fee`;
  }
}
