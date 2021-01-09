import { Module } from '@nestjs/common';
import { AttendenceService } from './attendence.service';
import { AttendenceController } from './attendence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceSchema } from './attendence.modle';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../utils/auth.service';
import { JwtStrategy } from '../utils/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Attendance', schema: AttendanceSchema },
    ]),
    JwtModule.register({
      secret: '12344567810sonali',
      signOptions: {
        expiresIn: '4h',
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [AttendenceController],
  providers: [AttendenceService, AuthService, JwtStrategy],
  exports: [JwtModule, PassportModule],
})
export class AttendenceModule {}
