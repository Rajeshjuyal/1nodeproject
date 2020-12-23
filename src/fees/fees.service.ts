import { Injectable } from '@nestjs/common';

import { Fees } from './fees.model';

@Injectable()
export class FeesService {
  feess: Fees[] = [];
  create(fees: Fees) {
    var fees1 = new Fees(fees.id, fees.student, fees.parent, fees.amount);
    this.feess.push(fees1);
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
