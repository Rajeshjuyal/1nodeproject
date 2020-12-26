import { Injectable, Inject } from '@nestjs/common';
import { Student } from './student.model';
import { StudentModule } from './student.module';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  students: Student[] = [];
  constructor(@Inject(StudentModule) private readonly scoreModel: Model<any>) {}

  public async create(student: Student) {
    var student1 = await this.scoreModel.create(student);
    console.log(student1);
    return student1;
  }

  findAll() {
    return [...this.students];
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
