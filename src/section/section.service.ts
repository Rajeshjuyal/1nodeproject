import { Injectable, HttpStatus } from '@nestjs/common';
import { Period } from 'src/period/period.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section } from './sectiom.model';

@Injectable()
export class SectionService {
  section: Section[] = [];
  constructor(
    @InjectModel('Section') private readonly sectionModel: Model<any>,
  ) {}
  public async create(data: Period) {
    var periods7 = await this.sectionModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: periods7,
    };
  }

  public async findAll() {
    var periods8 = await this.sectionModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: periods8,
    };
  }

  public async findOne(id: string) {
    var period9 = await this.sectionModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: period9,
    };
  }

  public async update(id: string, data: Period) {
    var period11 = await this.sectionModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: period11,
    };
  }

  public async remove(id: string) {
    var period12 = await this.sectionModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: period12,
    };
  }
}
