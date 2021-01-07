import * as mongoose from 'mongoose';
export const SchoolSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  logo: { type: String, required: true },
  location: { type: String, required: true },
  board: { type: String, required: true },
  totalstudent: { type: String, required: true },
});
export interface School {
  id: string;
  logo: string;
  name: string;
  location: string;
  branch: string;
  totalstudent: string;
}
