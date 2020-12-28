import { Injectable, Inject } from '@nestjs/common';
import { library } from './library.model';
import { Model } from 'mongoose';
import { LibraryModule } from './library.module';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LibraryService {
  librarys: library[] = [];
  constructor(
    @InjectModel('Library') private readonly libraryModel: Model<any>,
  ) {}

  public async create(library: library) {
    var library1 = await this.libraryModel.create(library);
    console.log(library1);
    return library1;
  }

  public async findAll() {
    var librarys = await this.libraryModel.find();
    return [...librarys];
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
