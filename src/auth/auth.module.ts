import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.services';
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory:async(configService:ConfigService)=>({
        secret:configService.get('JWT_SECRET'),
        signoption:{expiresIn:'100'}
      })
    }),
  ],
  providers:[AuthService ]
})
export class AuthModule {}
