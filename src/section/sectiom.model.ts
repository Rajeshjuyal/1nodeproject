import * as mongoose from 'mongoose';
export const SectionSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId,  
  ref: 'Class', required: true },
  name: { type: String, required: true },
});
export interface Section {
  class: string;
  name: string;
}
