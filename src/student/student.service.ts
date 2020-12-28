import { Injectable, Inject } from '@nestjs/common';
import { Student } from './student.model';
import { StudentModule } from './student.module';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {
  students: Student[] = [];
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<any>,
  ) {}

  public async create(student: Student) {
    var student1 = await this.studentModel.create(student);
    console.log(student1);
    return student1;
  }

  public async findAll() {
    var students = await this.studentModel.find();
    return [...students];
  }

  findOne(id: string) {
    return `This action returns a #${id} student`;
  }

  update(id: string, studentdata: Student) {
    return `This action updates a #${id} student`;
  }

  remove(id: string) {
    return `This action removes a #${id} student`;
  }
}
