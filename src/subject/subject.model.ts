import * as mongoose from 'mongoose';
export const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  studentcode: { type: String, required: true },
});

export interface Subject {
  name: string;
  studentcode: string;
}
