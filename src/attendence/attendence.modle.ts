import * as mongoose from 'mongoose';
export const AttendanceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  student: { type: String, required: true },
  teacher: { type: Number, required: true },
});

export interface Attendence {
  id: string;
  student: string;
  teacher: string;
}
