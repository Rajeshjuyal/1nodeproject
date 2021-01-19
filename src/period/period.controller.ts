import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PeriodService } from './period.service';
import {Period} from '../period/period.model'

@Controller('period')
export class PeriodController {
  constructor(private readonly periodService: PeriodService) {}

  @Post()
  create(@Body() data : Period) {
    return this.periodService.create(data);
  }

  @Get()
  findAll() {
    return this.periodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Period) {
    return this.periodService.update(id,data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.periodService.remove(id);
  }
}
