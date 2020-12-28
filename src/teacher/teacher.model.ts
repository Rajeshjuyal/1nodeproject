import * as mongoose from 'mongoose';
export const TeacherSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  designation: { type: Number, required: true },
  department: { type: Number, required: true },
  salary: { type: Number, required: true },
  vid: { type: Number, required: true },
});

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  department: string;
  salary: string;
  vid: string;
}
