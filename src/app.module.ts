import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { SubjectModule } from './subject/subject.module';

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
import { TopicModule } from './topic/topic.module';
import { ChaptersModule } from './chapter/chapters.module';
import { UnitModule } from './unit/unit.module';
import { SyllabusModule } from './syllabus/syllabus.module';
import { TestsModule } from './tests/tests.module';
import { AssignemntModule } from './assignment/assignemnt.module';
import { ClassModule } from './class/class.module';
import { TodayclassModule } from './todayclass/todayclass.module';
import { PerformanceModule } from './performance/performance.module';
import { ReportcardModule } from './reportcard/reportcard.module';
import { ParentModule } from './parent/parent.module';
import { BannerModule } from './banner/banner.module';

// import { ControllerModule } from './controller/controller.module';
import { SchoolModule } from './school/school.module';
import { QuestionModule } from './question/question.module';
import { AssignmentQuestionModule } from './assignment.q/assignment-question.module';
import { AssignedSubjectModule } from './assigned-subject/assigned-subject.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri:
          'mongodb+srv://Rajesh123:Rajesh123@cluster0.zelwy.mongodb.net/dummy?retryWrites==majority',
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }),
    }),
    AttendenceModule,
    TeacherModule,
    SubjectModule,

    StudentModule,
    CourseModule,
    CollageModule,
    ScoreModule,
    TimetableModule,
    FeesModule,
    LibraryModule,
    SettingModule,

    TopicModule,

    ChaptersModule,

    UnitModule,

    SyllabusModule,

    TestsModule,

    AssignemntModule,

    ClassModule,

    TodayclassModule,

    PerformanceModule,

    ReportcardModule,

    ParentModule,

    BannerModule,

    SchoolModule,

    QuestionModule,

    AssignmentQuestionModule,

    AssignedSubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
