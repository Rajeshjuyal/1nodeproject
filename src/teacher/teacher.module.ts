import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherSchema } from './teacher.model';
import { UserSchema } from 'src/user/user .model';
import { SectionSchema } from 'src/section/sectiom.model';
import { SchoolSchema } from 'src/school/school.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Teacher', schema: TeacherSchema },
      { name: 'User', schema: UserSchema },
      { name: 'School', schema: SchoolSchema },
    ]),
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
