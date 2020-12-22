import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/Product.module';
import { TeacherModule } from './teacher/teacher.module';
import { SubjectModule } from './subject/subject.module';
import { ParentModule } from './parent/parent.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { CollageModule } from './collage/collage.module';
import { ScoreModule } from './score/score.module';
import { AttendenceModule } from './attendence/attendence.module';
import { TimetableModule } from './timetable/timetable.module';
@Module({
  imports: [ProductModule, TeacherModule, SubjectModule, ParentModule, StudentModule, CourseModule, CollageModule, ScoreModule, AttendenceModule, TimetableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
