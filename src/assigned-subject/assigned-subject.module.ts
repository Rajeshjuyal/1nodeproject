import { Module } from '@nestjs/common';
import { AssignedSubjectService } from './assigned-subject.service';
import { AssignedSubjectController } from './assigned-subject.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignedSubjectSchema } from './assigned-subject.model';
import { SubjectSchema } from '../subject/subject.model';
import { ClassSchema } from '../class/class model';
import { SectionSchema } from 'src/section/sectiom.model';
import { TeacherSchema } from 'src/teacher/teacher.model';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AssignedSubject', schema: AssignedSubjectSchema },
      { name: 'Subject', schema: SubjectSchema },
      { name: 'Section', schema: SectionSchema},
      {name:'Teacher',schema:TeacherSchema}
     
    ]),
  ],
  controllers: [AssignedSubjectController],
  providers: [AssignedSubjectService],
})
export class AssignedSubjectModule {}
