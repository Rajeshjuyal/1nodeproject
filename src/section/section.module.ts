import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { SectionSchema } from './sectiom.model';
import { ClassSchema } from 'src/class/class model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Section', schema: SectionSchema },
      { name: 'Class', schema: ClassSchema },
    ]),
  ],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
