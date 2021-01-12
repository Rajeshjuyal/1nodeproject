import * as mongoose from 'mongoose';
export const AttendanceSchema = new mongoose.Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  id: { type: String, required: true },
  date: { type: String, required: true },
  teacherid: { type: String, required: true },
  studentid: { type: String, required: true },
  periodno: { type: String, required: true },
  subjectid: { type: String, required: true },
  Present: { type: String, Boolean: true },
});

export interface Attendence {
  attendence: string;
  id: string;
  date: string;
  teacherid: string;
  studentid: string;
  periodno: string;
  subjectid: string;
  Boolean: true;
}
