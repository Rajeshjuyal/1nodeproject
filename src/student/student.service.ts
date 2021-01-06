import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Student } from './student.model';
import { StudentModule } from './student.module';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../utils/auth.service';
import { CredentialsDTO } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<any>,
    private jwtService: JwtService,
    private authService: AuthService,
  ) {}

  public async create(student: Student) {
    var student1 = await this.studentModel.create(student);
    console.log(student1);
    return student1;
  }

  public async findAll() {
    var students = await this.studentModel.find();
    return [...students];
  }

  public async findOne(id: string) {
    var student = await this.studentModel.findById(id);
    return student;
  }

  public async update(id: string, studentdata: Student) {
    var student = this.studentModel.findByIdAndUpdate(id, studentdata);
    return student;
  }

  public async remove(id: string) {
    var student = await this.studentModel.findById(id);
    student.remove();
    return student;
  }
  public async validateUserCredentials(credentials: CredentialsDTO) {
    credentials.email = credentials.email.toLowerCase();
    const student = await this.studentModel.find({
      email: credentials.email,
    });
    if (!student) {
      return {
        response_code: HttpStatus.UNAUTHORIZED,
        response_data: `Studnet with email ${credentials.email} is not registered`,
      };
    } else {
      const paswordmatch = await this.authService.verifyPassword(
        credentials.password,
        student.password,
      );
      const body = {
        token: null,
        _id: null,
      };
      if (paswordmatch) {
        body_id = student._id;
        body.token = await this.authService.generateAccessToken(student._id);
        return { reponsecode: HttpStatus.OK, response_data: body };
      } else {
        return {
          response_code: HttpStatus.UNAUTHORIZED,
          response_data: 'enetr a valid password',
        };
      }
    }
  }
}
