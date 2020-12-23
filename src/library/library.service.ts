import { Injectable } from '@nestjs/common';
import { Library } from './library.model';

@Injectable()
export class LibraryService {
  librarys: Library[] = [];
  create(library: Library) {
    var library1 = new Library(library.id, library.name, library.date);
    this.librarys.push(library1);
    return library1;
  }

  findAll() {
    return [...this.librarys];
  }

  findOne(id: string) {
    return `This action returns a #${id} library`;
  }

  update(id: string, librarydata: Library) {
    return `This action updates a #${id} library`;
  }

  remove(id: string) {
    return `This action removes a #${id} library`;
  }
}
