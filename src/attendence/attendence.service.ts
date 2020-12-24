import { Injectable } from '@nestjs/common';
import { Attendence } from './attendence.modle';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class AttendenceService {
  attendences: Attendence[] = [];
  constructor(
    @InjectModel('Attendance') private readonly attendanceModel: Model<any>,
  ) {}
  public async create(attendence: Attendence) {
    var attendence1 = await this.attendanceModel.create(attendence);
    console.log(attendence1);
    return attendence1;
  }

  findAll() {
    return [...this.attendences];
  }

  findOne(id: string) {
    return `This action returns a #${id} attendence`;
  }

  update(id: string, attendencedata: Attendence) {
    return `This action updates a #${id} attendence`;
  }

  remove(id: string) {
    return `This action removes a #${id} attendence`;
  }
}