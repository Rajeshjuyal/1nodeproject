import * as mongoose from 'mongoose';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';
export const TeacherSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: 'true',
  },
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  designation: { type: String, required: false },
  joiningdate: { type: String, required: false },
  gender: { type: String, required: false },
  jobrole: { type: String, required: false },
  salary: { type: String, required: false },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

export interface Teacher {
  school: string;
  id: string;
  name: string;
  designation: string;
  department: string;
  salary: string;
  email: string;
  role: string;
}
export class CredentialsDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
