import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService:JwtService){}
    generateJwt(payload:Object): Observable <string>{
      return this.jwtService.sign{user:payload}

    }  
    hashPassword():{Observable<string>

    }
    comparePassword():{Observable<any>

    }
}
