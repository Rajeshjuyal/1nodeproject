import { Injectable, Inject } from '@nestjs/common';
import { Setting } from './setting.model';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SettingService {
  settings: Setting[] = [];
  constructor(
    @InjectModel('Setting') private readonly scoreModel: Model<any>,
  ) {}

  public async create(setting: Setting) {
    var setting1 = await this.scoreModel.create(setting);
    console.log(setting1);
    return setting1;
  }

  public async findAll() {
    var settings = await this.scoreModel.find();

    return [...settings];
  }

  findOne(id: string) {
    return `This action returns a #${id} setting`;
  }

  update(id: string, settingdata: Setting) {
    return `this action updates a #${id} setting`;
  }

  remove(id: string) {
    return `This action removes a #${id} setting`;
  }
}
