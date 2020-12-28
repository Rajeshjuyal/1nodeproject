import * as mongoose from 'mongoose';
export const TimetableSchema = new mongoose.Schema({
  day: { type: String, required: true },
  period1: { type: String, required: true },
  period2: { type: String, required: true },
  period3: { type: String, required: true },
  period4: { type: String, required: true },
  period5: { type: String, required: true },
  period6: { type: String, required: true },
});

export interface Timetable {
  day: string;
  period1: string;
  period2: string;
  period3: string;
  period4: string;
  period5: string;
  period6: string;
  period7: string;
}
