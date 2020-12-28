import * as mongoose from 'mongoose';
export const ScoreSchema = new mongoose.Schema({
  id: { type: String, required: true },
  hidd: { type: String, required: true },
  vidd: { type: Number, required: true },
  lidd: { type: Number, required: true },
});

export interface Score {
  id: string;
  hidd: string;
  vidd: string;
  lidd: string;
}
