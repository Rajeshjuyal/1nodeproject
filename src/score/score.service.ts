import { Injectable, Inject } from '@nestjs/common';
import { Score } from './score.model';
import { Model } from 'mongoose';
import { ScoreModule } from './score.module';

@Injectable()
export class ScoreService {
  scores: Score[] = [];
  constructor(@Inject(ScoreModule) private readonly scoreModel: Model<any>) {}

  public async create(score: Score) {
    var score1 = await this.scoreModel.create(score);
    console.log(score1);
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
