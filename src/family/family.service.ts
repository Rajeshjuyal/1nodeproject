import { Injectable } from '@nestjs/common';

import { Family } from './family.model';

@Injectable()
export class FamilyService {
  familys: Family[] = [];
  create(family: Family) {
    var family1 = {};
    this.familys.push(family1);
    return family1;
  }

  findAll() {
    return [...this.familys];
  }

  findOne(id: string) {
    return `This action returns a #${id} family`;
  }

  update(id: string, familydata: Family) {
    return `This action updates a #${id} family`;
  }

  remove(id: string) {
    return `This action removes a #${id} family`;
  }
}
