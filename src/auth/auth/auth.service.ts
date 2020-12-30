import { Injectable } from '@nestjs/common';
import{JwtService} from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(private readonly jwtService:JwtService){}
  
    generateJwt(user:User):Observable <string>{
      return from(this.jwtService.signAsync({user}));
    }
    hashPassword(password: string):Observable <string>{
      return from <string>(bcrypt.hash(password,12));
    }
    comparePasswords(newPasswords:string,password:string):Observable <any | boolean>{
    return of any<boolean>(bcrypt .compare(newpassword,passwordHash));

    }

  }