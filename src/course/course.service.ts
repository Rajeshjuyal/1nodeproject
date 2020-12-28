import { Injectable, Inject } from '@nestjs/common';

import { Course } from './course.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CourseService {
  courses: Course[] = [];
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<any>,
  ) {}
  public async create(course: Course) {
    console.log(' In function');

    var collage1 = await this.courseModel.create(course);
    console.log(collage1);
    return collage1;
  }

  public async findAll() {
    var courses = await this.courseModel.find();
    return [...courses];
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
