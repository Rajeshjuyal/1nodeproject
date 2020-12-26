import * as mongoose from 'mongoose';
export const SubjectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  department: { type: Number, required: true },
  code: { type: String, required: true },
});

export interface Subject {
  id: string;
  name: string;
  department: string;
  code: string;
}
