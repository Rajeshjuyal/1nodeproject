import { Injectable, HttpStatus } from '@nestjs/common';
import { Setting2 } from './setting.model';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting } from 'src/setting/setting.model';

@Injectable()
export class Setting2Service {
  settingss: Setting2[] = [];
  constructor(
    @InjectModel('Setting2') private readonly setting2Model: Model<any>,
  ) {}
  public async create(settingdata2: Setting2) {
    var settings2 = await this.setting2Model.create(settingdata2);
    return {
      response_code: HttpStatus.OK,
      response_data: settings2,
    };
  }

  public async findAll() {
    var settings3 = await this.setting2Model.find();
    return {
      response_code: HttpStatus.OK,
      response_data: settings3,
    };
  }

  public async findOne(id: string) {
    var settings4 = await this.setting2Model.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: settings4,
    };
  }

  public async update(id: string, setting2data: Setting2) {
    var settings5 = await this.setting2Model.findByIdAndUpdate(
      id,
      setting2data,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: settings5,
    };
  }

  public async remove(id: string) {
    var settings6 = await this.setting2Model.findByIdAndDelete(id);
    settings6.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: settings6,
    };
  }
}
