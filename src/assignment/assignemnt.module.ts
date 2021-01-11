import { Module } from '@nestjs/common';
import { AssignemntService } from './assignemnt.service';
import { AssignemntController } from './assignemnt.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentSchema } from './assignment.model';
import { TeacherSchema } from '../teacher/teacher.model';

// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from '../utils/auth.service';
// import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Assignment', schema: AssignmentSchema },
      { name: 'Teacher', schema: TeacherSchema },
    ]),
    // JwtModule.register({
    //   secret: '12345678923sonali',
    //   signOptions: {
    //     expiresIn: '4H',
    //   },
    // }),
    // PassportModule.register({
    //   defaultStrategy: 'jwt',
    // }),
  ],
  controllers: [AssignemntController],
  providers: [AssignemntService],
})
export class AssignemntModule {}
