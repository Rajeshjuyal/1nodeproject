import { Injectable, HttpStatus } from '@nestjs/common';
import { User, CredentialsDTO } from './user .model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/utils/auth.service';

@Injectable()
export class UserService {
  users: User[] = [];
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {}
  private authService: AuthService;
  public async create(data: User) {
    var user1 = await this.userModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: user1,
    };
  }

  public async findAll() {
    var user2 = await this.userModel.find();

    return {
      response_code: HttpStatus.OK,
      response_data: user2,
    };
  }

  public async findOne(id: string) {
    var user3 = await this.userModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: user3,
    };
  }

  public async update(id: string, data: User) {
    var user4 = await this.userModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: user4,
    };
  }

  public async remove(id: string) {
    var user5 = await this.userModel.findByIdAndDelete(id);
    user5.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: user5,
    };
  }
  public async validateUserCredentials(credentials: CredentialsDTO) {
    credentials.email = credentials.email.toLowerCase();
    const user = await this.userModel.findOne({
      email: credentials.email,
    });
    if (!user) {
      return {
        response_code: HttpStatus.UNAUTHORIZED,
        response_data: `User with email ${credentials.email} is not registered`,
      };
    } else {
      const passwordMatch = await this.authService.verifyPassword(
        credentials.password,
        user.password,
      );
      const body = {
        token: null,
        _id: null,
      };
      if (passwordMatch) {
        body._id = user._id;
        body.token = await this.authService.generateAccessToken(user._id);
        return {
          response_code: HttpStatus.OK,
          response_data: body,
        };
      } else {
        return {
          response_code: HttpStatus.UNAUTHORIZED,
          response_data: 'enter a valid password',
        };
      }
    }
  }
}
