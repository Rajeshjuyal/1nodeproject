import * as mongoose from 'mongoose';
export const TeacherSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  designation: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: String, required: true },
  vid: { type: String, required: true },
});

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  department: string;
  salary: string;
  vid: string;
}
