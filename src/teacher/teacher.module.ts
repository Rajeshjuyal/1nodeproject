import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherSchema } from './teacher.model';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../utils/jwt.strategy';
import { AuthService } from '../utils/auth.service';
import { SchoolSchema } from '../school/school.model';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Teacher', schema: TeacherSchema },
      { name: 'School', schema: SchoolSchema },
    ]),
    JwtModule.register({
      secret: '123456sonali1234',
      signOptions: {
        expiresIn: '4h',
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [TeacherController],
  providers: [TeacherService, JwtStrategy, AuthService],
  exports: [PassportModule, JwtStrategy],
})
export class TeacherModule {}
