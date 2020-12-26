import * as mongoose from 'mongoose';
export const ScoreSchema = new mongoose.Schema({
  id: { type: String, required: true },
  subject: { type: String, required: true },
  student: { type: Number, required: true },
  marks: { type: Number, required: true },
});

export interface Score {
  id: string;
  subject: string;
  student: string;
  marks: string;
}
