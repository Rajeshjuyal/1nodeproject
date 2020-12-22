import { Injectable } from '@nestjs/common';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  students: Student[] = [];
  create(student: Student) {
    var student1 = new Student(
      student.id,
      student.name,
      student.photo,
      student.username,
      student.email,
      student.password,
      student.phone,
    );
    this.students.push(student1);
    return 'student1';
  }

  findAll() {
    return `students`;
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
