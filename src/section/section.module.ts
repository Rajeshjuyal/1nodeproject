import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { SectionSchema } from './sectiom.model';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Section',schema:SectionSchema}])
  ],
  controllers: [SectionController],
  providers: [SectionService]
})
export class SectionModule {}
