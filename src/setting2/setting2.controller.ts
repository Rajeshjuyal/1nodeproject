import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Setting2Service } from './setting2.service';
import { Setting } from 'src/setting/setting.model';
import { Setting2 } from './setting.model';

@Controller('setting2')
export class Setting2Controller {
  constructor(private readonly setting2Service: Setting2Service) {}

  @Post()
  create(@Body() settingdata2: Setting2) {
    return this.setting2Service.create(settingdata2);
  }

  @Get()
  findAll() {
    return this.setting2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setting2Service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() setting2data: Setting2) {
    return this.setting2Service.update(id, setting2data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setting2Service.remove(id);
  }
}
