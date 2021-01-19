import { Module } from '@nestjs/common';
import { Setting2Service } from './setting2.service';
import { Setting2Controller } from './setting2.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Setting2Schema } from './setting.model';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Setting2',schema:Setting2Schema}])
  ],
  controllers: [Setting2Controller],
  providers: [Setting2Service]
})
export class Setting2Module {}
