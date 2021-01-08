import * as mongoose from 'mongoose';
import { SchoolSchema } from 'src/school/school.model';
// import { Type } from 'class-transformer';
// import { IsEmail, IsNotEmpty } from 'class-validator';
export const StudentSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: 'true',
  },
  id: { type: String, required: true },
  Registration: { type: String },
  DOB: { type: String, required: true },
  Name: { type: String, required: true },
  Mothername: { type: String, required: true },
  Fathername: { type: String, required: true },
  phoneno: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export interface Student {
  school: string;
  id: string;
  Registration: string;
  DOB: string;
  Name: string;
  Mothername: string;
  Fathername: string;
  phoneno: string;
  email: string;
  password: string;
}
