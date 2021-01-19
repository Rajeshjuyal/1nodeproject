import * as mongoose from 'mongoose';
export const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  no_of_student: { type: String, required: true },
  teacherid: { type: Number, required: true },
});

export interface Class {
  (name: string, no_of_student: string, teacherid: string);
}
