import { Injectable } from '@nestjs/common';
import { Collage } from './collage.model';

@Injectable()
export class CollageService {
  collages: Collage[] = [];
  create(collage: Collage) {
    var collage1 = new Collage(
      collage.id,
      collage.name,
      collage.location,
      collage.branch,
    );
    this.collages.push(collage1);
    return 'collage1';
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
