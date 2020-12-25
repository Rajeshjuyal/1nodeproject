import { Injectable, Inject } from '@nestjs/common';
import { library } from './library.model';
import { Model } from 'mongoose';
import { LibraryModule } from './library.module';

@Injectable()
export class LibraryService {
  librarys: library[] = [];
  constructor(
    @Inject(LibraryModule) private readonly libraryModel: Model<any>,
  ) {}

  public async create(library: library) {
    var library1 = await this.libraryModel.create(library);
    console.log(library1);
    return library1;
  }

  findAll() {
    return [...this.librarys];
  }

  findOne(id: string) {
    return `This action returns a #${id} library`;
  }

  update(id: string, librarydata: library) {
    return `This action updates a #${id} library`;
  }

  remove(id: string) {
    return `This action removes a #${id} library`;
  }
}
