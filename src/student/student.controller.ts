import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student,CredentialsDTO } from './student.model';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() studentdata: Student) {
    return this.studentService.create(studentdata);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() studentdata: Student) {
    return this.studentService.update(id, studentdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
  @Post('/login')
  public validateUser(@Body() credentials: CredentialsDTO) {
    return this.studentService.validateUserCredentials(credentials);
  }
}
