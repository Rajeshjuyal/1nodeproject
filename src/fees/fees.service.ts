import { Injectable, Inject } from '@nestjs/common';

import { Fees } from './fees.model';
import { Model } from 'mongoose';

@Injectable()
export class FeesService {
  feess: Fees[] = [];
  constructor(
    @Inject(Fees) private readonly feesModule: Model<any>) {}
  public async create(fees: Fees) {
    var fees1 = await this.feesModule.create(Fees);
    console.log(fees1);
    return fees1;
  }

  findAll() {
    return [...this.feess];
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
