import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { config } from 'rxjs';
import (JwtModule) from '@nestjs/jwt';
import (ConfigService, ConfigModule) from '@nestjs/config';

@Module({
  imports:{
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      usefactory;async(configService:ConfigService)=>
      secret:config.Service.get('JWT_SECRET'),
      signoptions:{expiresIn:12}

      


    })
  },
  providers: [AuthService]
})
export class AuthModule {}
