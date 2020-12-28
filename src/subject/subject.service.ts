import { Injectable, Inject } from '@nestjs/common';
import { Subject } from './subject.model';

import { Model } from 'mongoose';
import { SubjectModule } from './subject.module';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubjectService {
  subjects: Subject[] = [];
  constructor(
    @InjectModel('Subject') private readonly subjectModel: Model<any>,
  ) {}

  public async create(subject: Subject) {
    var subject1 = await this.subjectModel.create(subject);
    console.log(subject1);
    return subject1;
  }

  public async findAll() {
    var subjects = await this.subjectModel.find();
    return [...subjects];
  }

  findOne(id: string) {
    return `This action returns a #${id} subject`;
  }

  update(id: string, subjectdata: Subject) {
    return `This action updates a #${id} subject`;
  }

  remove(id: string) {
    return `This action removes a #${id} subject`;
  }
}
