import { Injectable } from '@nestjs/common';
import { Attendence } from './attendence.modle';
@Injectable()
export class AttendenceService {
  attendences: Attendence[] = [];
  create(attendence: Attendence) {
    var attendence1 = new Attendence(
      attendence.id,
      attendence.student,
      attendence.teacher,
    );
    this.attendences.push(attendence1);
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
