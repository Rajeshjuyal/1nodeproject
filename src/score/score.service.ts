import { Injectable, Inject } from '@nestjs/common';
import { Score } from './score.model';
import { Model } from 'mongoose';
import { ScoreModule } from './score.module';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ScoreService {
  scoress: Score[] = [];
  constructor(@InjectModel('Score') private readonly scoreModel: Model<any>) {}

  public async create(score: Score) {
    var score1 = await this.scoreModel.create(score);
    console.log(score1);
    return score1;
  }

  public async findAll() {
    var scoress = await this.scoreModel.find();
    return [...scoress];
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
