import * as mongoose from 'mongoose';
export const BuildSchema = new mongoose.Schema({
  School_name: { type: String, required: true },
  Logo: { type: String, required: true },
  Contact: { type: String, required: true },
  Time: { type: String, required: true },
  Theme_color: { type: String, required: true },
});
export interface Build{
  School_name: string;
  Logo: string;
  contact: string;
  Address: string;
  Theme_color: string;
}
