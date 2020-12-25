import * as mongoose from 'mongoose';
export const AttendanceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  student: { type: String, required: true },
  location: { type: Number, required: true },
  branch: { type: Number, required: true },
});
export interface Collage {
  id: string;
  name: string;
  location: string;
  branch: string;
}
