import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema } from './class model';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../utils/auth.service';
import { JwtStrategy } from '../utils/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Class', schema: ClassSchema }]),
    JwtModule.register({
      secret: '1234566789sonali',
      signOptions: {
        expiresIn: '4h',
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],

  controllers: [ClassController],
  providers: [ClassService, AuthService, JwtStrategy],
  exports: [JwtModule, PassportModule],
})
export class ClassModule {}
