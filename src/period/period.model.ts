import * as mongoose from 'mongoose';
export const PeriodSchema = new mongoose.Schema({
  name: { type: String, required: true },

  starttime: { type: String, required: true },

  Day: { type: String, required: true },
});
export interface Period{
  name: string;

  starttime: string;

  Day: string;
}
