import { Injectable } from '@nestjs/common';
import { Subject } from './subject.model';

@Injectable()
export class SubjectService {
  subjects: Subject[] = [];
  create(subject: Subject) {
    var subject1 = new Subject(
      subject.id,
      subject.name,
      subject.department,
      subject.code,
    );
    this.subjects.push(subject1);
    return subject1;
  }

  findAll() {
    return [...this.subjects];
  }

  findOne(id: string) {
    return `This action returns a #${id} subject`;
  }

  update(id: string, subjectdata: Subject) {
    return `This action updates a #${id} subject`;
  }

  remove(id: string) {
    return `This action removes a #${id} subject`;
  }
}
