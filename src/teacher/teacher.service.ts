import { Injectable } from '@nestjs/common';
import { Teacher } from './teacher.model';

@Injectable()
export class TeacherService {
  teachers: Teacher[] = [];
  create(teacher: Teacher) {
    var teacher1 = new Teacher(
      teacher.id,
      teacher.name,
      teacher.designation,
      teacher.department,
      teacher.salary,
      teacher.subjects,
    );
    this.teachers.push(teacher1);
    return teacher1;
  }

  findAll() {
    return [...this.teachers];
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
