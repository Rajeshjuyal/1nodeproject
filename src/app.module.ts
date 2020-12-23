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
import { FeesModule } from './fees/fees.module';
import { LibraryModule } from './library/library.module';
import { SettingModule } from './setting/setting.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Rajesh123:Rajesh123@cluster0.zelwy.mongodb.net/dummy?retryWrites=true&w=majority',
    ),
    ProductModule,
    TeacherModule,
    SubjectModule,
    ParentModule,
    StudentModule,
    CourseModule,
    CollageModule,
    ScoreModule,
    AttendenceModule,
    TimetableModule,
    FeesModule,
    LibraryModule,
    SettingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
