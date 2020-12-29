import * as mongoose from 'mongoose';
export const ScoreSchema = new mongoose.Schema({
  id: { type: String, required: true },
  hidd: { type: String, required: true },
  vidd: { type: String, required: true },
  lidd: { type: String, required: true },
});

export interface Score {
  id: string;
  hidd: string;
  vidd: string;
  lidd: string;
}
