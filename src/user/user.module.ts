import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../utils/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/utils/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: '123456789sonali',
      signOptions: {
        expiresIn: '5h',
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, AuthService],
  exports: [PassportModule, JwtStrategy],
})
export class UserModule {}
