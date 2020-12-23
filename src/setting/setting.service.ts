import { Injectable } from '@nestjs/common';
import { Setting } from './setting.model';

@Injectable()
export class SettingService {
  settings: Setting[] = [];
  create(setting: Setting) {
    var setting1 = new Setting(
      setting.id,
      setting.name,
      setting.logo,
      setting.address,
      setting.contact,
      setting.email,
      setting.about,
      setting.primary,
      setting.secondary,
    );
    this.settings.push(setting1);
    return setting1;
  }

  findAll() {
    return [...this.settings];
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
