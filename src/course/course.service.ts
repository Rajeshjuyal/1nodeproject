import { Injectable } from '@nestjs/common';

import { Course } from './course.model';

@Injectable()
export class CourseService {
  courses: Course[] = [];
  create(course: Course) {
    var course1 = new Course(
      course.id,
      course.name,
      course.duration,
      course.students,
    );
    this.courses.push(course1);
    return course1;
  }

  findAll() {
    return [...this.courses];
  }

  findOne(id: string) {
    return `This action returns a #${id} course`;
  }

  update(id: string, coursedata: Course) {
    return `This action updates a #${id} course`;
  }

  remove(id: string) {
    return `This action removes a #${id} course`;
  }
}
