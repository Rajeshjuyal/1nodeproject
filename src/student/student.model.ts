import * as mongoose from 'mongoose';
export const StudentSchema = new mongoose.Schema({
  id: { type: String, required: true },
  Registration: { type: String, required: true },
  DOB: { type: String, required: true },
  Name: { type: Number, required: true },
  Mothername: { type: Number, required: true },
  Fathername: { type: String, required: true },
  phoneno: { type: String, required: true },
});

export interface Student {
  id: string;
  Registration: string;
  DOB: string;
  Name: string;
  Mothername: string;
  Fathername: string;
  phoneno: string;
}
