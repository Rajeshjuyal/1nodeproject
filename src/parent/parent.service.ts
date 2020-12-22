import { Injectable } from '@nestjs/common';
import { Parent } from './parent.model';

@Injectable()
export class ParentService {
  parents: Parent[] = [];
  create(parent: Parent) {
    var parent1 = new Parent(
      parent.id,
      parent.name,
      parent.photo,
      parent.username,
      parent.email,
      parent.password,
      parent.phone,
    );
    this.parents.push(parent);
    return parent1;
  }

  findAll() {
    return [...this.parents];
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
