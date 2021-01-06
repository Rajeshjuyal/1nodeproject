import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.model';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../utils/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../utils/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
    JwtModule.register({
      secret: '1234567891011111',
      signOptions: {
        expiresIn: '4H',
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [AuthService, PassportModule, JwtStrategy],
})
export class StudentModule {}
