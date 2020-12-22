import { Injectable } from '@nestjs/common';
import { Timetable } from './timetable.model';

@Injectable()
export class TimetableService {
  timetables: Timetable[] = [];
  create(timetable: Timetable) {
    var timetable1 = new Timetable(
      timetable.day,
      timetable.period1,
      timetable.period2,
      timetable.period3,
      timetable.period4,
      timetable.period5,
      timetable.period6,
      timetable.period7,
    );
    this.timetables.push(timetable1);
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
