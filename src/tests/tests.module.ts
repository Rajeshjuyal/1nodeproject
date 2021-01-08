import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from './test.model';
import { TeacherSchema } from 'src/teacher/teacher.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Test', schema: TestSchema },
      { name: 'Teacher', schema: TeacherSchema },
    ]),
  ],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
