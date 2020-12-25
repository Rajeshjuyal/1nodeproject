import { Injectable, Inject } from '@nestjs/common';

import { Course } from './course.model';
import { Model } from 'mongoose';

@Injectable()
export class CourseService {
  courses: Course[] = [];
  constructor(
    @Inject('Course') private readonly courseModel: Model<any>) {}
  public async create(course: Course) {
    var collage1 = await this.courseModel.create(course);
    console.log(collage1);
    return collage1;
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
