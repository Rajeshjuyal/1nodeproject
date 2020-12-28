import { Injectable, Inject } from '@nestjs/common';
import { Teacher } from './teacher.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TeacherService {
  teachers: Teacher[] = [];
  constructor(
    @InjectModel('Teacher') private readonly teacherModel: Model<any>,
  ) {}
  public async create(teacher: Teacher) {
    var teacher1 = await this.teacherModel.create(teacher);
    console.log(teacher1);
    return teacher1;
  }

  public async findAll() {
    var teachers = await this.teacherModel.find();
    return [...teachers];
  }

  findOne(id: string) {
    return `This action returns a #${id} teacher`;
  }

  update(id: string, teacherdata: Teacher) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: string) {
    return `This action removes a #${id} teacher`;
  }
}
