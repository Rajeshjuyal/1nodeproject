import { Injectable, Inject } from '@nestjs/common';
import { Timetable } from './timetable.model';
import { TimetableModule } from './timetable.module';
import { Model } from 'mongoose';

@Injectable()
export class TimetableService {
  timetables: Timetable[] = [];
  constructor(
    @Inject(TimetableModule) private readonly teacherModel: Model<any>,
  ) {}
  public async create(timetable: Timetable) {
    var timetable1 = await this.teacherModel.create(timetable);
    console.log(timetable1);
    return timetable1;
  }

  findAll() {
    return [...this.timetables];
  }

  findOne(id: string) {
    return `This action returns a #${id} timetable`;
  }

  update(id: string, timetabledata: Timetable) {
    return `This action updates a #${id} timetable`;
  }

  remove(id: string) {
    return `This action removes a #${id} timetable`;
  }
}
