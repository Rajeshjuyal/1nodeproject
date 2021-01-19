import * as mongoose from 'mongoose';
export const SectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
export interface Section {
  name: string;
}
