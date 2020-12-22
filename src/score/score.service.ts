import { Injectable } from '@nestjs/common';
import { Score } from './score.model';

@Injectable()
export class ScoreService {
  scores: Score[] = [];

  create(score: Score) {
    var score1 = new Score(score.id, score.subject, score.student, score.marks);
    this.scores.push(score1);
    return score1;
  }

  findAll() {
    return [...this.scores];
  }

  findOne(id: string) {
    return `This action returns a #${id} score`;
  }

  update(id: string, scoredata: Score) {
    return `This action updates a #${id} score`;
  }

  remove(id: string) {
    return `This action removes a #${id} score`;
  }
}
