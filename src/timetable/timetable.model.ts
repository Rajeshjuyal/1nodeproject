 import * as mongoose from 'mongoose';
 export const ScoreSchema = new mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   designation: { type: Number, required: true },
   department: { type: Number, required: true },
   salary: { type: Number, required: true },
   subjects: { type: Number, required: true },
 });


export interface Timetable{
  
     day:string,
    period1:string,
    period2:string,
    period3:string,
    period4:string,
   period5:string,
    period6:string,
    period7:string,
}
