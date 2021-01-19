import * as mongoose from 'mongoose';
export const TimetableSchema = new mongoose.Schema({

  day: { type: String, required: true },

  
  duration_of_one_period:{type:String,required:true}
});

export interface Timetable {
  day: string;
  
  duration_of_one_period: string;
}
