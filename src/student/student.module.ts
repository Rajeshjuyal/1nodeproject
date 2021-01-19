import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.model';

import { SchoolSchema } from 'src/school/school.model';
import { ClassSchema } from 'src/class/class model';
import { SectioSchema } from 'src/section/sectiom.model';
import { UserSchema } from '../user/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Student', schema: StudentSchema },
      { name: 'Section', schema: SectioSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
