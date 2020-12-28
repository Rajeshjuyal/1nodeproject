import * as mongoose from 'mongoose';
export const AttendanceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  sid: { type: String, required: true },
  tid: { type: Number, required: true },
});

export interface Attendence {
  id: string;
  sid: string;
  tid: string;
}
