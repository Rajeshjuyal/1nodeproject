import { Module } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { TimetableController } from './timetable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TimetableSchema } from './timetable.model';
import { SchoolSchema } from 'src/school/school.model';
import { SectionSchema } from 'src/section/sectiom.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Timetable', schema: TimetableSchema },
      { name: 'School', schema: SchoolSchema },
      { name: 'Section', schema: SectionSchema },
    ]),
  ],

  controllers: [TimetableController],
  providers: [TimetableService],
})
export class TimetableModule {}
